// Various crucial imports to ensure discord.js runs smoothly with all of it's dependencies
import { Client, Events, GatewayIntentBits, REST, Routes, TextChannel } from 'discord.js';
import { config } from "dotenv";
config();


// Constants used in the bot to store various IDs and Tokens
const TOKEN = process.env.DISCORD_BOT_TOKEN!;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
const GUILD_ID = process.env.DISCORD_GUILD_ID!;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID!;
const CHANNEL_ID2 = process.env.DISCORD_CHANNEL_ID2!;
let game = 0;
let turn = 0;
let win = 0;
let piece = "";
let s1 = "⬜"
let s2 = "⬜"
let s3 = "⬜"
let s4 = "⬜"
let s5 = "⬜"
let s6 = "⬜"
let s7 = "⬜"
let s8 = "⬜"
let s9 = "⬜"
let board = `${s1}${s2}${s3}\n${s4}${s5}${s6}\n${s7}${s8}${s9}`;

function renderBoard() {
  return `${s1}${s2}${s3}\n${s4}${s5}${s6}\n${s7}${s8}${s9}`;
}


//This block describes what the bot will be listening for, aka: The server, server messages, and message content
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


// Shuts down the bot when CTRL+C is pressed
process.on('SIGINT', async () => {
  console.log("SIGINT received (CTRL+C)");
  await informShutdown();
  process.exit(0);
});


// When the client is initially run a message is sent to the terminal, and the function 'informLaunch' is called
client.on(Events.ClientReady, async (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
  await informLaunch();
});


// The function 'informLaunch' fetches the channel ID, checks if it's a text channel, 
// and sends a message to that channel informing that the bot is up and running
async function informLaunch() {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);

    if (channel && channel instanceof TextChannel) {
      await channel.send("TicTacToe is up and running!");
      console.log("Launch message sent.");
    } else {
      console.error("Channel is not a text channel or doesn't exist.");
    }
  } catch (err) {
    console.error("Error fetching/sending to channel:", err);
  }
}


// The function 'informShutdown' is exactly like 'informLaunc', but instead sends a message when the bot has been shut down
async function informShutdown() {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);

    if (channel && channel instanceof TextChannel) {
      await channel.send("TicTacToe has stopped responding!");
      console.log("Launch message sent.");
    } else {
      console.error("Channel is not a text channel or doesn't exist.");
    }
  } catch (err) {
    console.error("Error fetching/sending to channel:", err);
  }
}


// Swaps the piece between every turn
async function alternateTurns() {

    if (turn % 2 == 0) {
      piece = "❌"
} else {

  piece = "⭕"
}
}

// Checks if any player has won
async function winCon() {
  if ((s1 === "⭕" && s2 === "⭕" && s3 === "⭕") ||
    (s1 === "❌" && s2 === "❌" && s3 === "❌")) {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID2);
      if (channel && channel instanceof TextChannel) {
        await channel.send(piece +" Wins!");
        console.log("Victory message sent.");
        game = 0;
        win = 1;

      } 
    } catch (err) {
      console.error("Error fetching/sending to channel:", err);
    }
  }
  if ((s4 === "⭕" && s5 === "⭕" && s6 === "⭕") ||
    (s4 === "❌" && s5 === "❌" && s6 === "❌")) {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID2);
      if (channel && channel instanceof TextChannel) {
        await channel.send(piece +" Wins!");
        console.log("Victory message sent.");
        game = 0;
        win = 1;
      } 
    } catch (err) {
      console.error("Error fetching/sending to channel:", err);
    }
  }
  if ((s7=== "⭕" && s8 === "⭕" && s9 === "⭕") ||
    (s7 === "❌" && s8 === "❌" && s9 === "❌")) {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID2);
      if (channel && channel instanceof TextChannel) {
        await channel.send(piece +" Wins!");
        console.log("Victory message sent.");
        game = 0;
        win = 1;
      } 
    } 
    catch (err) {
      console.error("Error fetching/sending to channel:", err);
    }
  }
    if ((s1 === "⭕" && s4 === "⭕" && s7 === "⭕") ||
    (s1 === "❌" && s4 === "❌" && s7 === "❌")) {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID2);
      if (channel && channel instanceof TextChannel) {
        await channel.send(piece +" Wins!");
        console.log("Victory message sent.");
        game = 0;
        win = 1;
      } 
    } catch (err) {
      console.error("Error fetching/sending to channel:", err);
    }
  }
  if ((s4 === "⭕" && s5 === "⭕" && s6 === "⭕") ||
    (s4 === "❌" && s5 === "❌" && s6 === "❌")) {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID2);
      if (channel && channel instanceof TextChannel) {
        await channel.send(piece +" Wins!");
        console.log("Victory message sent.");
        game = 0;
        win = 1;
      } 
    } catch (err) {
      console.error("Error fetching/sending to channel:", err);
    }
  }
  if ((s7=== "⭕" && s8 === "⭕" && s9 === "⭕") ||
    (s7 === "❌" && s8 === "❌" && s9 === "❌")) {
    try {
      const channel = await client.channels.fetch(CHANNEL_ID2);
      if (channel && channel instanceof TextChannel) {
        await channel.send(piece +" Wins!");
        console.log("Victory message sent.");
        game = 0;
        win = 1;
      } 
    } catch (err) {
      console.error("Error fetching/sending to channel:", err);
    }
  }
  if ((s3 === "⭕" && s5 === "⭕" && s7=== "⭕") ||
  (s3 === "❌" && s5 === "❌" && s7 === "❌")) {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID2);
    if (channel && channel instanceof TextChannel) {
      await channel.send(piece +" Wins!");
      console.log("Victory message sent.");
      game = 0;
      win = 1;
    } 
  } catch (err) {
    console.error("Error fetching/sending to channel:", err);
  }
}
if ((s1=== "⭕" && s5 === "⭕" && s9 === "⭕") ||
  (s1 === "❌" && s5 === "❌" && s9 === "❌")) {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID2);
    if (channel && channel instanceof TextChannel) {
      await channel.send(piece +" Wins!");
      console.log("Victory message sent.");
      game = 0;
      win = 1;
    } 
  } catch (err) {
    console.error("Error fetching/sending to channel:", err);
  }
}
if ((s1!= "⬜" && s2 != "⬜" && s3 != "⬜") && (s4 != "⬜" && s5 != "⬜" && s6 !="⬜") && (s7 != "⬜" && s8 != "⬜" && s9 !="⬜") && win != 1) {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID2);
    if (channel && channel instanceof TextChannel) {
      await channel.send("It's a draw!");
      console.log("Draw message sent.");
      game = 0;
    } 
  } catch (err) {
    console.error("Error fetching/sending to channel:", err);
  }
}
}



// This block decides which commands are capable of being called and describes them
const commands = [
  {
    name: 'tictactoe',
    description: 'Replies with a tictactoe board',
  },
  {
    name: 't1',
    description: 'Places a marker on the top left square',
  },
  {
    name: 't2',
    description: 'Places a marker on the top middle square',
  },
  {
    name: 't3',
    description: 'Places a marker on the top right square',
  },
  {
    name: 'm1',
    description: 'Places a marker on the top left square',
  },
  {
    name: 'm2',
    description: 'Places a marker on the top middle square',
  },
  {
    name: 'm3',
    description: 'Places a marker on the top right square',
  },
  {
    name: 'b1',
    description: 'Places a marker on the bottom left square',
  },
  {
    name: 'b2',
    description: 'Places a marker on the bottom middle square',
  },
  {
    name: 'b3',
    description: 'Places a marker on the bottom right square',
  },
  {
    name: 'reset',
    description: 'Resets the board',
  },
  {
    name: 'commands',
    description: 'Lists all the commands',
  }
];


// This block ensure functionality of interactions(/) It checks if what is written is one of the commands, 
// and based off of what is written replies with a prewritten response. 
client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;

    console.log(`Received interaction: ${interaction.commandName}`);

    if (interaction.commandName === 'tictactoe') {
      game = 1;
      await interaction.reply(renderBoard());
      await interaction.reply("t1 (top1) m1 (middle1) b1 (bottom1)");
      console.log("Responded with board");
    }
  } catch (err) {
    console.error("Error handling interaction:", err);
  }
});


//TOP ROW
client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;
    console.log(`Received interaction: ${interaction.commandName}`);
    if (game == 1 || interaction.commandName === 'commands'){
    if (interaction.commandName === 't1'|| interaction.commandName === 't2'|| interaction.commandName === 't3') {
      let spotTaken = false;

      if (interaction.commandName === 't1') {
        if (s1 === "⬜") {
          await alternateTurns();
          s1 = piece;
        } else spotTaken = true;
      }

      else if (interaction.commandName === 't2') {
        if (s2 === "⬜") {
          await alternateTurns();
          s2 = piece;
        } else spotTaken = true;
      }

      else if (interaction.commandName === 't3') {
        if (s3 === "⬜") {
          await alternateTurns();
          s3 = piece;
        } else spotTaken = true;
      }
      if (spotTaken) {
        await interaction.reply("Spot Taken!");
      } else {
        turn++;
        await winCon();
        await interaction.reply(renderBoard());
        console.log("Responded with board");
      }
    } 
     }else {
      await interaction.reply("Start a game first!");
    }

  } catch (err) {
    console.error("Error handling interaction:", err);
  }
});



//MIDDLE ROW
client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;
    console.log(`Received interaction: ${interaction.commandName}`);
    if (game == 1 || interaction.commandName === 'commands'){
    if (interaction.commandName === 'm1'|| interaction.commandName === 'm2'|| interaction.commandName === 'm3') {
      let spotTaken = false;

      if (interaction.commandName === 'm1') {
        if (s4 === "⬜") {
          await alternateTurns();
          s4 = piece;
        } else spotTaken = true;
      }

      else if (interaction.commandName === 'm2') {
        if (s5 === "⬜") {
          await alternateTurns();
          s5 = piece;
        } else spotTaken = true;
      }

      else if (interaction.commandName === 'm3') {
        if (s6 === "⬜") {
          await alternateTurns();
          s6 = piece;
        } else spotTaken = true;
      }
      if (spotTaken) {
        await interaction.reply("Spot Taken!");
      } else {
        turn++;
        await winCon();
        await interaction.reply(renderBoard());
        console.log("Responded with board");
      }
    } 
     }else {
      await interaction.reply("Start a game first!");
    }

  } catch (err) {
    console.error("Error handling interaction:", err);
  }
});



//BOTTOM ROW
client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;
    console.log(`Received interaction: ${interaction.commandName}`);
    if (game == 1 || interaction.commandName === 'commands'){
    if (interaction.commandName === 'b1'|| interaction.commandName === 'b2'|| interaction.commandName === 'b3') {
      let spotTaken = false;

      if (interaction.commandName === 'b1') {
        if (s7 === "⬜") {
          await alternateTurns();
          s7 = piece;
        } else spotTaken = true;
      }

      else if (interaction.commandName === 'b2') {
        if (s8 === "⬜") {
          await alternateTurns();
          s8 = piece;
        } else spotTaken = true;
      }

      else if (interaction.commandName === 'b3') {
        if (s9 === "⬜") {
          await alternateTurns();
          s9 = piece;
        } else spotTaken = true;
      }
      if (spotTaken) {
        await interaction.reply("Spot Taken!");
      } else {
        turn++;
        await winCon();
        await interaction.reply(renderBoard());
        console.log("Responded with board");
      }
    } 
    }else {
      await interaction.reply("Start a game first!");
    } 

  } catch (err) {
    console.error("Error handling interaction:", err);
  }
});

// resets the game
client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;
    console.log(`Received interaction: ${interaction.commandName}`);
    if (interaction.commandName === 'reset') {
      s1 = s2 = s3 = s4 = s5 = s6 = s7 = s8 = s9 = "⬜";
      turn = 0;
      piece = "";
      game = 1;
      win = 0;
      await interaction.reply(renderBoard());
    }
  } catch (err) {
    console.error("Error handling interaction:", err);
  }
});

client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;
    console.log(`Received interaction: ${interaction.commandName}`);
    if (interaction.commandName === 'commands') {
      await interaction.reply("/t1: Top Left \n/t2: Top Middle \n/t3: Top Right \n/m1: Middle Left \n/m2: Middle Middle \n/m3: Middle Right \n/b1: Bottom Left \n/b2: Bottom Middle \n/b3: Bottom Right \n/reset: Resets a current game \n/tictactoe: Starts a game \n/commands: Lists out the commands");
    }
  } catch (err) {
    console.error("Error handling interaction:", err);
  }
});


// This block initially creates a "rest" client, and this is in order to communicate with discords API for command registration. 
// Further into the block the various commands are registered to the server via the server ID. At the bottom, the bot client connects to discord.
const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Refreshing GUILD slash commands...');
    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    );
    console.log('Slash commands registered instantly for this guild!');
  } catch (error) {
    console.error('Error registering commands:', error);
  }
  await client.login(TOKEN);
})();

