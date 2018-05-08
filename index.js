//TAIGA

const discord = require('discord.js')
const tjson = ("./taiga.json")
const config = require("./taiga.json");
const fs = require("fs");
const prefix = config.prefix


var jsont = lerjson(tjson);

const bot = new discord.Client({disableEveryone: true});
bot.commands = new discord.Collection();

bot.on('ready', () => {
  console.log(`A taiga e linda (^-^)  ${bot.users.size} Usuarios, ${bot.guilds.size} Servidores`);
  console.log(`Prefixo = ${config.prefix}`);
  console.log(jsont.log);
  bot.user.setPresence({ status: 'online', game: { name: 'Toradora!', type: 'watching' } });
});

fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
      console.log("nenhum comando");
      return;
    }

    console.log(`Carregando ${jsfiles.length} comandos`)

    jsfiles.forEach((f, i ) => {
        let props = require(`./comandos/${f}`);
        console.log(`${i + 1}: ${f} carregado!`)
        bot.commands.set(props.help.name, props);
    });
});

bot.info = require("./taiga.json");

function lerjson(ajson){
	var cont = fs.readFileSync(ajson);
	return JSON.parse(cont);
}

function gravarjson(dados, ajson){
    fs.writeFileSync(ajson, JSON.stringify(dados));
}

function resetBot(channel) {
  let rembed = new discord.RichEmbed()
  .setDescription(`**${jsont.dono}** Reiniciando...`)
  .setColor(jsont.cor)
  channel.send(rembed)
  .then(msg => bot.destroy())
  .then(() => bot.login(jsont.token));
  fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
      console.log("nenhum comando");
      return;
    }

    console.log(`Carregando ${jsfiles.length} comandos`)

    jsfiles.forEach((f, i ) => {
        let props = require(`./comandos/${f}`);
        console.log(`${i + 1}: ${f} carregado!`)
        bot.commands.set(props.help.name, props);
    });
});
}

function loadCmds () {
    fs.readdir("./comandos/", (err, files) => {
      if(err) console.error(err);

      let jsfiles = files.filter(f => f.split(".").pop() === "js");
      if(jsfiles.length <= 0) {
        console.log("nenhum comando");
        return;
      }

      console.log(`Carregando ${jsfiles.length} comandos`)

      jsfiles.forEach((f, i ) => {
          delete require.cache[require.resolve(`./comandos/${f}`)];
          let props = require(`./comandos/${f}`);
          console.log(`${i + 1}: ${f} carregado!`)
          bot.commands.set(props.help.name, props);
      });
  });
}

bot.on("guildCreate", guild => {
  console.log(`Entrei no servidor : ${guild.name} (id: ${guild.id}). tem ${guild.memberCount} membros!`);
  bot.user.setActivity(`Em ${bot.guilds.size} servidores!`);
});

bot.on("guildDelete", guild => {
  console.log(`Eu fui removida do servidor : ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Em ${bot.guilds.size} servidores!`);
});

loadCmds();

bot.on("message" , message => {
  if (message.content === "<@435256210414108672> prefix") {
    var embed = new discord.RichEmbed()
      .setDescription(`Prefixo atual: **${config.prefix}**`)
      .setColor(jsont.cor);
    message.channel.send(embed);
  }

    if (message.author.id !== jsont.owner) return;
    if (message.content === `${config.prefix}reiniciar`) {
      resetBot(message.channel);
      loadCmds()
      
  }

  if (message.author.id !== jsont.owner) return;
  if (message.content === `${config.prefix}rcmds`){
    var embed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** Todos os comandos foram recarregados`)
    .setColor(jsont.cor)
    message.channel.send(embed);
    loadCmds()
  }

})

bot.on("message", async message => {
    if(message.author.bot) return;
    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);
  
    if(!command.startsWith(prefix)) return;

    if (command === "teste") {
      message.channel.send("oii")
    }

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

});
    


bot.login(jsont.token);