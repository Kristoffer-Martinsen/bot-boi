import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as helloworld from './commands/helloWorld.js';

config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => (
  console.log("Hello Word!" + client.user.tag)
));

client.login(process.env.BOT_TOKEN);


client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'helloworld') {
    await helloworld.execute(interaction);
  }
});