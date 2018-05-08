const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);
var fortunes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`** **\`${fortunes[Math.floor(Math.random() * fortunes.length)]}${fortunes[Math.floor(Math.random() * fortunes.length)]}\`**`)
    .setColor(jsont.cor)
    message.channel.send(embed)
}

module.exports.help = {
        name: "sorte"
}

