const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  message.delete()
  if(args[1].toLowerCase() === "sun" || args[1].toLowerCase() === "soleil") {
    message.channel.send("```Markdown\nLe temps est maintenant ensoleillé! ☀️```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Météo.*\n/, "Météo : Ensoleillé ☀️\n")})
  }
  else if(args[1].toLowerCase() === "cloud" || args[1].toLowerCase() === "nuage" || args[1].toLowerCase() === "nuageux") {
    message.channel.send("```Markdown\nLe temps est maintenant nuageux! ☁️```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Météo.*\n/, "Météo : Nuageux ☁️\n")})
  }
  else if(args[1].toLowerCase() === "rain" || args[1].toLowerCase() === "pluie") {
    message.channel.send("```Markdown\nLe temps est maintenant pluvieux! 🌧️```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Météo.*\n/, "Météo : Pluvieux 🌧️\n")})
  }
  else if(args[1].toLowerCase() === "storm" || args[1].toLowerCase() === "orage") {
    message.channel.send("```Markdown\nLe temps est maintenant orageux! ⚡```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Météo.*\n/, "Météo : Orageux ⛈️\n")})
  }
  else {
    message.author.send("Je suis désolé, mais le temps que tu as spécifié ne fonctionne pas! Tu peux utilisez :\n:black_small_square: .weather sun/soleil : Temps ensoleillé ☀️\n:black_small_square: .weather cloud/nuageux : Temps nuageux ☁️\n:black_small_square: .weather rain/pluie : Temps pluvieux 🌧️\n:black_small_square: .weather storm/orage : Temps orageux ⛈️")
  }
}

module.exports.help = {
    name: "weather"
}
