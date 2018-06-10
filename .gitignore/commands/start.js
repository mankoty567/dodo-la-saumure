const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  function sendLog(message) {
    var SpecificChannel = bot.channels.get("372837090729394186");
    SpecificChannel.send(message);
  }
  
  message.delete()
  message.channel.edit({"name": args[1], "topic" : "Aventure en cours!\nPesonnages : " + args[2] + ", " + args[3] + "\nMétéo : Ensoleillé ☀️\nHoraire : Journée ☀️\nSaison : Eté ☀️\n"})
  message.channel.send("```Markdown\nNouvelle aventure dans **" + args[1] + "**\nPesonnages : " + args[2] + ", " + args[3] + "```")
    .then(message => message.pin());
  var date = new Date().toLocaleTimeString();
  sendLog(`:arrow_forward: [${date}] Aventure démaré dans **${message.channel.name}** par *${message.author.username}* (${args[2]},${args[3]})`)
}

module.exports.help = {
    name: "start"
}
