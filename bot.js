const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";


client.on('message', message => {
    if(message.content === "-bot") { // الامر والبريفكس
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});

       client.on('message' , message => {
        var prefix = "-" // البريفكس حقك
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "contact")) { //Snow Codes
        if (!message.channel.guild) return message.reply("This Command Only For Servers");
        let args = message.content.split(" ").slice(1).join(" ");
        client.users.get("534314527643140101").send( //Snow Codes
            "\n" + "**" + "__● السيرفر__ :" + "**" +
            "\n" + "" + "» " + message.guild.name + "" +
            "\n" + "**" + " __● المرسل__ : " + "**" +
            "\n" + "" + "» " + message.author.tag + "" +
            "\n" + "**" + " __● الرسالة__ : " + "**" +
            "\n" + "" + args + "") //Snow Codes

        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription(':mailbox_with_mail: Succes The Message Has Been Sent To The Owners')
             .setThumbnail(message.author.avatarURL)
             .setFooter("برودكاست بوت")//Snow Codes


        message.channel.send(embed); //Snow Codes


        }

        }); //Snow Codes

            client.on('message', message => {
                var prefix = "-" //البريفكس حقك
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;

              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);

              let args = message.content.split(" ").slice(1);

              if (command == "ban") {
                           if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');

              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("** ` BAN_MEMBERS ` انت ليس لديك خاصية **");
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** ` BAN_MEMBERS ` البوت لا يملك خاصية**");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**منشن الضحية**");
              if(!reason) return message.reply ("**اكتب السبب**");
              if (!message.guild.member(user)
              .bannable) return message.reply("**لا يمكنني عمل باند ل شخص رتبته أعلى من رتبتي**");

              message.guild.member(user).ban(7, user);

              const banembed = new Discord.RichEmbed()
              .setAuthor(`BANNED!`, user.displayAvatarURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**الضحية:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : banembed
              })
            }
            });

            client.on('message', message => {
                var prefix = "-" //البريفكس حقك
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;

              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);

              let args = message.content.split(" ").slice(1);

              if (command == "kick") {
                           if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');

              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("** ` KICK_MEMBERS ` انت ليس عندك خاصية **");
              if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("** ` KICK_MEMBERS ` البوت لا يملك خاصية **");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**منشن الضحية**");
              if(!reason) return message.reply ("**اكتب سبب الكيك**");
              if (!message.guild.member(user)
              .kickable) return message.reply("**لا يمكنني عمل كيك ل شخص رتبته اعلى من رتبتي**");

              message.guild.member(user).kick();

              const kickembed = new Discord.RichEmbed()
              .setAuthor(`KICKED!`, user.displayAvatarURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**الضحية:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : kickembed
              })
            }
            });

client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("MANAGE_GUILD")) {
                return message.channel.send("ليس لديك الصلآحية الكآفية . 💔");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("RANDOM")
                    .setTitle("Server Info ♥ ✨")
                    .setDescription(`Members 👤 : ${message.guild.memberCount}\nOwner 👑 : ${message.guild.owner.user.username}\nServer ID 🆔 : ${message.guild.id}\nRoles 🔒 : ${message.guild.roles.size}\nRegion 🌍 : ${message.guild.region.toUpperCase()}`);

                    message.channel.sendEmbed(server);

    }
});


client.on('message', message => {
    if(message.content.startsWith(prefix+'support')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`suport server **[here](https://discord.gg/cAt2t7X)**`)
    .setColor('RANDOM');

        message.author.send(embed)
}
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
         message.channel.send("شيك على الخاص :walking::skin-tone-2: .." , "تم ")





 message.author.sendMessage(`
**
==================================
- سرعه اتصال ممتازه :comet:
-سهل الاستخدام:full_moon_with_face:
- صيانه كل يوم:hammer:
-مجاني بل كامل:money_with_wings:
-البوت عربي:grin:
===================================
                    **__الاوامر__**
- لـ ارسال رسالة لجميع اعضاء السيرفر -bc
- لـ عرض معلومات السيرفر -server
- لـ عرص معلومات البوت  -bot
- لـ اعطاء العضو كيك -kick
- لـ اعطاء العضو باند  -ban
- لـ عرض سيرفر البوت اذا كان عندك اي مشاكل -support
- لـ ارسال رسالة لصاحب البوت -contact

مصصم البوت:hammer_pick: : <@534314527643140101>
**
`);

    }
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help | -invite`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('message', message => {
    if(message.content.startsWith(prefix+'invite')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Bot")
    .setDescription(`Click Here** [here](https://discordapp.com/api/oauth2/authorize?client_id=555777200100605963&permissions=8&scope=bot)**`)
    .setColor('RANDOM');

        message.author.send(embed)
}
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["534314527643140101"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`** ولكم يا صاحب البوت منور السيرفر**` + `✅`)
} else {
   message.reply('**انت لست صاحب البوت**' + '❌');
}
}
});

client.login(process.env.BOT_TOKEN);
