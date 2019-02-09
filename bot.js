const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Invitations Code Started By Friends Team`);
    client.user.setStatus("dnd")
});

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("543624805379866639")// ايدي السيرفر
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("543624805379866645");// ايدي الروم
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.get("543624805379866639")// ايدي السيرفر
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`**ارحب يا __<@${member.id}>__ في سيرفر __${member.guild.name}__\nتم دعوته من قبل  ${Invite.inviter}\nالرابط اللي دخل منه : https://discord.gg/${Invite.code}**`)
 }
            dat[Inv] = Invite.uses;
        })
    })
})

client.on('message', message => {
    if (message.content.startsWith("invite")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**انت جبت  ${invites.find(invite => invite.inviter.id === null ? "0" : message.author.id).uses} **`))
     
    }
});

client.login(process.env.BOT_TOKEN);
