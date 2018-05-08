const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")
const client = require('nekos.life');
const superagent = require("superagent")
const neko = new client();
const snekfetch = require("snekfetch")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    const snekfetch = require('snekfetch')
    snekfetch.get('https://nekos.life/api/neko')
    .then(r => message.channel.send({
        embed: {
            color: 6684774,
            author: {
                name: "Nekos!!!"
            },
            image: {
                url: r.body.neko
            }
        }
    }).catch(e => console.warn('Errored: ' + e)));
}


module.exports.help = {
        name: "neko"
}