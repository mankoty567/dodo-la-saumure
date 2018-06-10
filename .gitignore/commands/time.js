const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  message.delete()
  if(args[1].toLowerCase() === "day" || args[1].toLowerCase() === "jour"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant en journée! ☀️```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Horaire.*\n/, "Horaire : Journée ☀️\n")})
  }
  else if(args[1].toLowerCase() === "sunset" || args[1].toLowerCase() === "soir"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant en soirée! 🌇```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Horaire.*\n/, "Horaire : Soirée 🌇\n")})
  }
  else if(args[1].toLowerCase() === "night" || args[1].toLowerCase() === "nuit"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant pendant la nuit! 🌙```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Horaire.*\n/, "Horaire : Nuit 🌙\n")})
  }
  else if(args[1].toLowerCase() === "sunrise" || args[1].toLowerCase() === "day"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant en matinée! 🌄```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Horaire.*\n/, "Horaire : Matinée 🌄\n")})
  }
  else {
    message.author.send("Je suis désolé, mais l'heure que tu as spécifié ne fonctionne pas! Tu peux utilisez :\n:black_small_square: .time day/jour : Journée ☀️\n:black_small_square: .time sunset/soir : Soirée 🌇\n:black_small_square: .time night/nuit : Nuit 🌙\n:black_small_square: .time sunrise/matin : Matinée 🌄")
  }
}

module.exports.help = {
    name: "time"
}
