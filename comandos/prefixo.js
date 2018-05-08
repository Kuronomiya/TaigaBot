const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_SERVER")) return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new discord.RichEmbed()
  .setColor(jsont.cor)
  .setTitle("Novo Prefixo!")
  .setDescription(`Novo prefixo : ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
        name: "prefixo"
}