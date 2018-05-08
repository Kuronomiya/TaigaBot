const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")
var fortunes = [
    "https://i.imgur.com/KYFJQLY.gif",
    "https://i.imgur.com/OXixXxm.gif",
    "https://i.imgur.com/LQT87mc.gif",
    "https://i.imgur.com/4LNI3Nh.gif",
    "https://i.imgur.com/pPz7p2s.gif",
    "https://i.imgur.com/Se5ugxw.jpg",
  ];

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    let motivo = args.join(" ").slice(0) || message.author || message.mentions.users.first()
    if (!message.mentions.users.first())  message.author
    if (message.guild.id !== "424358398738432000") return;
    let fembed = new discord.RichEmbed()
    .setDescription(`${message.author} esta fodendo com ${motivo}`)
    .setImage(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
    .setColor(jsont.cor)
    message.channel.send(fembed)
}

module.exports.help = {
        name: "fuck"
}