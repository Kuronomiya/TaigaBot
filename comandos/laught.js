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
    request.get("https://weebs.cf/random/laugh").then(body => {
    let pembed = new discord.RichEmbed()
    .setDescription(`${message.author} esta rindo`)
    .setImage(body.text)
    .setColor(jsont.cor)
    message.channel.send(pembed)
});
}


module.exports.help = {
        name: "rir"
}