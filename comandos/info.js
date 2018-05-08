const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}


module.exports.run = async (bot, message, args) => {
        var embed = new discord.RichEmbed()
        .setTitle(jsont.tituloi)
        .addField("•Dono:", jsont.dono, true )
        .addField("•Versão:", jsont.versao, true )
        .addField("•Ping:", "" + bot.ping + "", true)
        .addField("•Prefixo", `${jsont.prefix}`, true)
        .setThumbnail(bot.user.avatarURL)
        .setColor(jsont.cor)
        message.channel.send(embed);
}

module.exports.help = {
    name: "info"
}