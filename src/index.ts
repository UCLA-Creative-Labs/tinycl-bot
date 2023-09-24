import { Client } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands";
import { config } from "./config";
import { deleteEntryByField } from "./contentful/deleteEntry";
import { createEntry } from "./contentful/createEntry";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"]
});

/* Start-up handler */
client.once("ready", (client) => {
    console.log(`${client.user.tag} is ready!`);
});

/* Deploy commands when new guild adds the bot */
client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

/* Slash command handler */
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

/* Modal handler */
client.on("interactionCreate", async interaction => {
    if (!interaction.isModalSubmit()) return;
    
    // Handle specific modal by ID
    if (interaction.customId === "createLink") {
        // Get data fields entered by user
        const fields = ['displayName', 'url', 'redirectPath'];

        const fieldValues = fields.map(field => [field, { 'en-US': interaction.fields.getTextInputValue(field) }]);
        const fieldObjects = Object.fromEntries(fieldValues);

        const slug = interaction.fields.getTextInputValue('redirectPath')

        const data = {
            fields: {
                ...fieldObjects
            }
        }

        await createEntry({ 
            contentTypeId: 'link', 
            data: data
        });

        await interaction.reply({ content: `Successfully created a TinyCL at https://tinycl.com/${slug}. Please wait a minute to see changes.`});
    }
    if (interaction.customId === "deleteLink") {
        const redirectPath = interaction.fields.getTextInputValue('redirectPath');

        deleteEntryByField({
            contentType: 'link', 
            fields: {
                'redirectPath': redirectPath
            }
        })
        .then(() => interaction.reply({ content: `Deleted the TinyCL at https://tinycl.com/${redirectPath}. Please wait a minute to see changes.`}))
        .catch(() => interaction.reply({ content: `Failed: no TinyCL exists at https://tinycl.com/${redirectPath}` }));
    }
    
})

client.login(config.DISCORD_TOKEN);