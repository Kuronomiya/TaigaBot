const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("BAN_MEMBERS")) return;
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  let user = message.mentions.users.first()
  if(!wUser) return;
  if(wUser.hasPermission("BAN_MEMBERS")) {let embed = new discord.RichEmbed()
  .setDescription(`Você não pode usar esse comando com alguém com o poder superior ou igual a o seu`)
  .setColor(jsont.cor)
  message.channel.send(embed)
  return;
}
  
  let reason = args.join(" ").slice(1);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new discord.RichEmbed()
  .setDescription(`**${message.author.tag}** usuario **${user.tag}** foi advertido`)
  .setColor(jsont.cor)

  message.channel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, jsont.mute);
    if(!muterole) var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** você deve criar o cargo **${jsont.mute}**`)
    .setColor(jsont.cor)
    message.channel.send(embed)

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`${wUser.tag} foi temporariomente mutado`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`${wUser.tag} foi desmutado`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 5){
    message.guild.member(wUser).ban(reason);
    var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** o usuario **${wUser}** foi banido`)
    .setColor(jsont.cor)
    message.channel.send(embed)
  }

}

module.exports.help = {
  name: "warn"
}
