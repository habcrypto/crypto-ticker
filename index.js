const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const channelIdBtc = '1085519695546941450';
const channelIdGq = '1085849091923259412';
const channelIdCspr = '1085850606276710421';


const updateChannelNameBtc = async () => {
  try {
    const responseBtc = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const dataBtc = responseBtc.data["bitcoin"]["usd"];
    const btcPrice = dataBtc;
    const channelBtc = await client.channels.fetch(channelIdBtc);
    await channelBtc.setName(`BTC💰 ${btcPrice}$`);
    console.log(`Updated channel name to btc💰 ${btcPrice}$`);

  } catch (error) {
    console.error(error);
  }
};

const updateChannelNameGq = async () => {
  try {
    const responseGq = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=outer-ring&vs_currencies=usd');
    const dataGq = responseGq.data["outer-ring"]["usd"];
    const gqPrice = dataGq;
    const channelGq = await client.channels.fetch(channelIdGq);
    await channelGq.setName(`GQ🚀 ${gqPrice}$`);
    console.log(`Updated channel name to gq🚀 ${gqPrice}$`);

  } catch (error) {
    console.error(error);
  }
};

const updateChannelNameCspr = async () => {
  try {
    const responseCspr = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=casper-network&vs_currencies=usd');
    const dataCspr = responseCspr.data["casper-network"]["usd"];
    const csprPrice = dataCspr;
    const channelGq = await client.channels.fetch(channelIdCspr);
    await channelGq.setName(`CSPR👻 ${csprPrice}$`);
    console.log(`Updated channel name to Casper 👻 ${csprPrice}$`);

  } catch (error) {
    console.error(error);
  }
};

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  setInterval(updateChannelNameBtc, 50000);
  setInterval(updateChannelNameGq, 60000);
  setInterval(updateChannelNameCspr, 70000);
  console.log('Started interval for updating channel name');
});

client.login(process.env.DISCORD_TOKEN);
