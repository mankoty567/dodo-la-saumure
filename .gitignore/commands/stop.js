const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  function sendLog(message) {
    var SpecificChannel = bot.channels.get("372837090729394186");
    SpecificChannel.send(message);
  }
  
  message.channel.send("```Fin de l'aventure, pensez à bien nettoyer la semence derrière vous!```")
  message.channel.edit({"name": "channel_libre", "topic" : "Channel libre"})
  var date = new Date().toLocaleTimeString();
  sendLog(":stop_button: [" + date + "] Aventure terminée dans **" + message.channel.name + "** par *" + message.author.username + "*")
  message.delete()
}

module.exports.help = {
    name: "stop"
}
