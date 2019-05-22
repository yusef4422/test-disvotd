const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = `+`;
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`BOT STARTED`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Louis.`,"http://twitch.tv/vAmmvr_");
   client.user.setStatus("idle");
});
client.on('message', message => {

    let args = message.content.split(' ').slice(1).join(' ');

  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }


  if (message.content.startsWith('+bc')) {
          if (!args[0]) {
message.channel.send("**+bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }

});
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`🌹 welcome to server🌹
👑User neme :  ${member}👑
:checkered_flag: you User number : ${member.guild.memberCount}:checkered_flag:  `)
}).catch(console.error)
});
client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt) 
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`PrimeBot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} // Julian
}); // Codes - Toxic Codes
 const bannedwords = [
    "كل زق",
    "كس امك",
    "كسمك",
    "انيكامك",
    "بلعن امك",
    "علا زبي"
    "الله يلعنك"
    "نصابين"
    "نصاب"
  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});
client.login(process.env.BOT_TOKEN);
