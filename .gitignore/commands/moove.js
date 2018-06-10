const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  function sendLog(message) {
    var SpecificChannel = bot.channels.get("372837090729394186");
    SpecificChannel.send(message);
  }

  message.delete()
  message.channel.send("```Markdown\nChangement de zone! Le channel passe de **" + message.channel.name + "** à **" + args[1] + "**```")
  var date = new Date().toLocaleTimeString();
  sendLog(`:pencil2: [${date}] Channel  renomé de **${message.channel.name}** à **${args[1]}** par *${message.author.username}*`)
  message.channel.edit({"name" : args[1]})
}

module.exports.help = {
    name: "moove"
}
