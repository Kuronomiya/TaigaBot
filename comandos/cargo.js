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
    if (!message.member.hasPermission("MANAGE_ROLES")) return;
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return;
    let role = args.join(" ").slice(1);
    if (!role) return;
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return;
  
    if (rMember.roles.has(gRole.id)) return;
    await (rMember.addRole(gRole.id));
  
    try {
    } catch (e) {
      console.log(e.stack);
      message.channel.send(`**${message.author.tag}** concendeu o cargo ${gRole.name} a o usuario ${rMember.tag}`)
    }
  }


module.exports.help = {
        name: "cargo"
}