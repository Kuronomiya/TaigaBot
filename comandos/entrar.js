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
    channel.join();
    var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** Entrando no canal **${channel.name}**`)
    .setColor(jsont.cor)
    message.channel.send(embed)
  }
  else if (!message.member.voiceChannel){
    var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** você precisa estar em um canal de voz primeiro!`)
    .setColor(jsont.cor)
    message.channel.send(embed)}
}

module.exports.help = {
        name: "entrar"
}