const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json");
const request = require("snekfetch");

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    request.get("https://weebs.cf/random/hug").then(body => {
    let hembed = new discord.RichEmbed()
    .setDescription(`${message.author} esta abrançando ${user}`)
    .setImage(body.text)
    .setColor(jsont.cor)
    message.channel.send(hembed)
});
}


module.exports.help = {
        name: "hug"
}