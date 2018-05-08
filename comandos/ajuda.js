const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json")

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}

module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return;
    let bembed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** eu enviarei ajuda no seu privado`)
    .setColor(jsont.cor)
    message.channel.send(bembed);

    await bembed
    let user = message.author
    let embed = new discord.RichEmbed()
    .setTitle(`Oii eu sou a ${jsont.nome}`)
    .setDescription(`sou um bot em desenvolvimento criada pelo **${jsont.dono}** então ainda não tenho muitos comandos mas aqui tem a lista`)
    .setThumbnail(bot.user.avatarURL)
    .setColor(jsont.cor)
    user.send(embed)

    let aembed = new discord.RichEmbed()
    .setTitle("Comandos")
    .addField("#ping", "mostra o seu ping")
    .addField("#avatar", "mostra seu avatar mode de uso: **``#avatar``** ou **``#avatar @pessoa``**")
    .setColor(jsont.cor)

    user.send(aembed)
}

module.exports.help = {
        name: "ajuda"
}