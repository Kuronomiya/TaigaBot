const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json");
const superagent = require("superagent")
var fortunes = [
    "Olha o doguinho",
    "Olha so que legal",
    "Catioro",
    "Bunito",
    "Olha esses raios de luz"
  ];

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`)

    let dogembed = new discord.RichEmbed()
    .setTitle(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
    .setImage(body.url)
    .setColor(jsont.cor)
    message.channel.send(dogembed);
    console.log(`Comando "dog" usado`)
}


module.exports.help = {
        name: "dog"
}