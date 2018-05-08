const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
  
    let member = message.mentions.members.first() ? message.mentions.members.first().user : message.author;
    let avatarURL = member.avatarURL;
    var embed = new discord.RichEmbed() 
    .setAuthor(`${member.tag}`)
    .setTitle("Link Direto")
    .setURL(avatarURL)
    .setImage(avatarURL)
    .setColor(jsont.cor);
     message.channel.send(embed);
}

module.exports.help = {
        name: "avatar"
}