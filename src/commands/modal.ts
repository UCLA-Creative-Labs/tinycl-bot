/* Example modal popup command */
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders";
import { CommandInteraction, SlashCommandBuilder, TextInputStyle } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Example modal popup")
;

export async function execute(interaction: CommandInteraction) {
    const modal = new ModalBuilder()
        .setTitle('Example modal')
        .setCustomId('exampleModal')
    ;

    const exampleField = new TextInputBuilder()
        .setCustomId('exampleField')
        .setRequired(true)
        .setLabel('Input for the example field')
        .setStyle(TextInputStyle.Short)
    ;

    const exampleActionRow = new ActionRowBuilder<TextInputBuilder>()
        .addComponents(exampleField)
    ;

    modal.addComponents(exampleActionRow);

    await interaction.showModal(modal);
}