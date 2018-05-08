const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
{
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return;
    let kReason = args.join(" ").slice(1);
    if(!message.member.hasPermission("KICK_MEMBERS")) return;
    if(kUser.hasPermission("KICK_MEMBERS")) {
    let embed = new discord.RichEmbed()
    .setDescription(`Você não pode usar esse comando com alguém com o poder superior ou igual a o seu`)
    .setColor(jsont.cor)
    message.channel.send(embed);
  return;
}
    let kickEmbed = new discord.RichEmbed()
    .setColor(jsont.cor)
    .setDescription(`**${message.author.tag}** usuario **${kUser}** kickado`)

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
}

let dembed = new discord.RichEmbed()
      .setTitle(`Kickado do servidor`)
      .addField("Motivo:", `${kReason}`)
      .setColor(jsont.cor)
      kUser.send(dembed);
  
}

module.exports.help = {
        name: "kick"
}