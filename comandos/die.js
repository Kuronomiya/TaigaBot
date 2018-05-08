const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== jsont.owner) return;
    var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** Desligando`)
    .setColor(jsont.cor)
    console.log(`Comando : "die" usado`)
    await message.channel.send(embed)
    process.exit();
}

module.exports.help = {
        name: "die"
}