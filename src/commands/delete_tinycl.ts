/* Example modal popup command */
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders";
import { CommandInteraction, SlashCommandBuilder, TextInputStyle } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("delete_tinycl")
    .setDescription("Remove an existing link on TinyCL!")
;

export async function execute(interaction: CommandInteraction) {
    const modal = new ModalBuilder()
        .setTitle('Delete a TinyCL link')
        .setCustomId('deleteLink')
    ;

    const nameField = new TextInputBuilder()
        .setCustomId('redirectPath')
        .setRequired(true)
        .setLabel('Slug (text after "https://tinycl.com/")')
        .setStyle(TextInputStyle.Short)
    ;

    const actionRow0 = new ActionRowBuilder<TextInputBuilder>()
        .addComponents(nameField)
    ;

    modal.addComponents([actionRow0]);

    await interaction.showModal(modal);
}