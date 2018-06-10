const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  message.delete();
  var random = Math.floor(Math.random() * (args.length - 1)) + 1;
  message.channel.send("```Le choix a été fait... Cela serra... " + args[random] + " !```")
}

module.exports.help = {
    name: "choix"
}
