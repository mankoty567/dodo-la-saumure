const botconfig = require("./commands/data/botconfig.json");
const Discord = require("discord.js");
const randomShit = require("./commands/data/randomShit.json")
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {

  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Le fichier de commande est vide.")
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} chargée!`);
    bot.commands.set(props.help.name, props);
  });
});



bot.on("ready", async () => {
  var date = new Date().toLocaleTimeString();
  console.log(`[${date}] Discord connecté.\n${bot.user.username} est lancé!`);
  bot.user.setGame(`tenir la caméra (${botconfig.version})`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let args = message.content.split(" ");
  let cmd = args[0];

  let commandfile = bot.commands.get(args[0].slice(prefix.length).toLowerCase());
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(botconfig.token); //EOF
