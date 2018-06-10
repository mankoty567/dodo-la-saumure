const Discord = require("discord.js");
const randomShit = require("./data/randomShit.json")

module.exports.run = async (bot, message, args) => {
  message.delete()

  function Perso() {
    var type = randomShit.type[Math.floor(Math.random() * randomShit.type.length)];

    if(type == "Semi-Humain" || type == "Autre") {
      var animal = randomShit.animaux[Math.floor(Math.random() * randomShit.animaux.length)];
    } else {
      var animal = "/";
    }
    var sexe = randomShit.sexe[Math.floor(Math.random() * randomShit.sexe.length)];
    if(sexe == "Féminin" || sexe == "Hermaphrodite (apparence féminine)" || sexe == "Trap") {
      var prenom = randomShit.prenomFille[Math.floor(Math.random() * randomShit.prenomFille.length)];
    } else {
      var prenom = randomShit.prenomGarcon[Math.floor(Math.random() * randomShit.prenomGarcon.length)];
    }

    var caractere = randomShit.caractere[Math.floor(Math.random() * randomShit.caractere.length)];

    var sortie = [prenom, "__**" + prenom + "**__\n__Sexe :__ " + sexe + "\n__Type :__ " + type + "\n__Animal :__ " + animal];
    return sortie;
  }

  var perso1 = Perso()
  var perso2 = Perso()
  message.channel.send(`!start "${randomShit.lieu[Math.floor(Math.random() * randomShit.lieu.length)]} + " " + perso1[0] + " " + perso2[0]`)
  message.channel.send("!weather " + randomShit.meteo[Math.floor(Math.random() * randomShit.meteo.length)])
  message.channel.send("!time " + randomShit.temps[Math.floor(Math.random() * randomShit.temps.length)])
  message.channel.send("!season " + randomShit.saison[Math.floor(Math.random() * randomShit.saison.length)])
  message.channel.send(perso1[1] + "\n\n" + perso2[1])
}

module.exports.help = {
    name: "randomshit"
}
