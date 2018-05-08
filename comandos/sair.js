const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
  if (message.member.voiceChannel){
    const channel = message.member.voiceChannel;
    channel.leave();
    var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** Saindo do canal do canal **${channel.name}**`)
    .setColor(jsont.cor)
  message.channel.send(embed)
  }
}

module.exports.help = {
        name: "sair"
}