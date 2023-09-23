import { Client } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands";
import { config } from "./config";

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
    if (interaction.customId === "exampleModal") {
        // Get data fields entered by user
        const exampleField = interaction.fields.getTextInputValue('exampleField');
        await interaction.reply({ content: `You entered ${exampleField} in the Modal!`});
    }
})

client.login(config.DISCORD_TOKEN);