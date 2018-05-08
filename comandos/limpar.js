const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")
const errors = require("../utils/errors.js");

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(!args[0]) return;
  message.channel.bulkDelete(args[0]).then(() => {
    (msg => msg.delete(5000));
  });
}

module.exports.help = {
        name: "limpar"
}