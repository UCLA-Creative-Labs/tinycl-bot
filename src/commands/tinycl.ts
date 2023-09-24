/* Example modal popup command */
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders";
import { CommandInteraction, SlashCommandBuilder, TextInputStyle } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("tinycl")
    .setDescription("Add a new link to TinyCL!")
;

export async function execute(interaction: CommandInteraction) {
    const modal = new ModalBuilder()
        .setTitle('Create a TinyCL link')
        .setCustomId('createLink')
    ;

    const nameField = new TextInputBuilder()
        .setCustomId('displayName')
        .setRequired(true)
        .setLabel('Display Name (for Contentful)')
        .setStyle(TextInputStyle.Short)
    ;

    const urlField = new TextInputBuilder()
        .setCustomId('url')
        .setRequired(true)
        .setLabel('Your URL (ex. "https://www.google.com")')
        .setStyle(TextInputStyle.Short)
    ;

    const slugField = new TextInputBuilder()
        .setCustomId('redirectPath')
        .setRequired(true)
        .setLabel('Desired Slug (label after "tinycl.com/")')
        .setStyle(TextInputStyle.Short)
    ;

    const actionRow0 = new ActionRowBuilder<TextInputBuilder>()
        .addComponents(nameField)
    ;

    const actionRow1 = new ActionRowBuilder<TextInputBuilder>()
        .addComponents(urlField)
    ;

    const actionRow2 = new ActionRowBuilder<TextInputBuilder>()
        .addComponents(slugField)
    ;

    modal.addComponents([actionRow0, actionRow1, actionRow2]);

    await interaction.showModal(modal);
}