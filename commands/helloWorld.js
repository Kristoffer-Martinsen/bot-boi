import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("helloworld")
    .setDescription("This is a test command")
    .addStringOption(
        option => option
            .setName('input')
            .setDescription('The input to echo back'));

export async function execute(interaction) {
  await interaction.reply(interaction.options.getString('input'));
}