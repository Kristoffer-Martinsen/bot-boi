import {SlashCommandBuilder, EmbedBuilder} from "discord.js";


export const data = new SlashCommandBuilder()
  .setName('make-poll')
  .setDescription('This makes a poll')
  .addStringOption( option =>
    option.setName('poll-title').setDescription('title for the poll')
    .setMaxLength(50).setRequired(true)
  )
  .addStringOption( option =>
    option.setName('option1').setDescription('Option 1 out of 5')
    .setMaxLength(50).setRequired(true)
  )
  .addStringOption( option =>
    option.setName('option2').setDescription('Option 2 out of 5')
    .setMaxLength(50).setRequired(true)
  )
  .addStringOption( option =>
    option.setName('option3').setDescription('Option 3 out of 5')
    .setMaxLength(50)
  )
  .addStringOption( option =>
    option.setName('option4').setDescription('Option 4 out of 5')
    .setMaxLength(50)
  )
  .addStringOption( option =>
    option.setName('option5').setDescription('Option 5 out of 5')
    .setMaxLength(50)
  )

export async function execute(interaction) {
  await interaction.deferReply({ephemeral: true})
  const { user, guild, channel } = await interaction;
  const options = await interaction.options.data;

  const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣",];

  const embed = new EmbedBuilder().setTitle(`${options[0].value}`).setColor('Green');
  
  for (let i = 1; i < options.length; i++) {
    let emoji = emojis[i - 1];
    let option = options[i];
    embed.addFields(
      {
        name: `${emoji} ${option.value}`,
        value: ' '
      }
    )
  }

  const message = await channel.send({embeds: [embed]});

  for (let i = 1; i < options.length; i++) {
    let emoji = emojis[i-1];
    await message.react(emoji);
  }

  await interaction.editReply({content: 'sent poll successfully'});
}