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
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return;
      let bReason = args.join(" ").slice(1);
      if(!message.member.hasPermission("BAN_MEMBERS")) return;
      if(bUser.hasPermission("BAN_MEMBERS")) {
      let embed = new discord.RichEmbed()
      .setDescription(`Você não pode usar esse comando com alguém com o poder superior ou igual a o seu`)
      .setColor(jsont.cor)
      message.channel.send(embed);
    return;
  }
      let banEmbed = new discord.RichEmbed()
      .setColor(jsont.cor)
      .setDescription(`**${message.author.tag}** usuario **${bUser}** banido`)
  
      message.guild.member(bUser).ban(bReason);
      message.channel.send(banEmbed);

      let dembed = new discord.RichEmbed()
      .setTitle(`Banido do servidor ${guild.name}`)
      .addField("Motivo:", `${bReason}`)
      .setColor(jsont.cor)
      bUser.send(dembed);
  }
}

module.exports.help = {
        name: "ban"
}