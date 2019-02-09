
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity('آترك رسالتك عبر الخآص', { type: 'LISTENING' })

});
client.login(process.env.BOT_TOKEN);
