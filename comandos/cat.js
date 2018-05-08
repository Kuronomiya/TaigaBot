const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json");
const superagent = require("superagent")
var fortunes = [
    "Olha o gatenho",
    "Olha so que legal",
    "Gatenho",
    "Bunito",
    "olha esses raios de luz",
    "Fofura 100/10"
  ];

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    const body = await superagent
    .get(`https://cataas.com/cat`)

    let catembed = new discord.RichEmbed()
    .setTitle(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
    .setImage(`https://cataas.com/cat`)
    .setColor(jsont.cor)
    message.channel.send(catembed);
    console.log(`Comando "cat" usado`)
}


module.exports.help = {
        name: "cat"
}