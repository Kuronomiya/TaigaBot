const discord = require('discord.js');
const fs = module.require("fs");
const tjson = ("./taiga.json");
const yt = require("ytdl-core");

var jsont = lerjson(tjson);

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}

module.exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if (args === "") return;
    else {
        if (message.content.includes("http://") || message.content.includes("https://")) {
            if (message.content.includes("youtube") || message.content.includes("youtu.be")) {

                let tembed = new discord.RichEmbed()
                .setDescription(`**${message.author.tag}** Conectado`)
                .setColor(jsont.cor)
                message.channel.send(tembed)
                voiceChannel.join()
                .then(connection => {
                    const args = message.content.split(" ").slice(1);
                    let stream = yt(args.join(" "));
                    yt.getInfo(args.join(" "), function(err, info) {
                        const title = info.title
                        let fembed = new discord.RichEmbed()
                        .setDescription(`Musica pedida: **\`${title}\`** `)
                        .setColor(jsont.cor)
                        message.channel.send(fembed)
                    })
                    const dispatcher = connection.playStream(stream, {audioonly: true});
                })
            } 
            }
        } 
    }

    

module.exports.help = {
        name: "tocar"
} 