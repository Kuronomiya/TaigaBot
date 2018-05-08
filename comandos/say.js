const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  var embed = new discord.RichEmbed()
  .setDescription(sayMessage)
  .setColor(jsont.cor)
message.channel.send(embed);
console.log(`comando "say" usado. Mensagem: ${sayMessage}`)
}

module.exports.help = {
        name: "say"
}