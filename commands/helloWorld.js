import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("helloworld")
    .setDescription("This is a test command");

export async function execute(interaction) {
  await interaction.reply('Hello World');
}