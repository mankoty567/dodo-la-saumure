const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  message.delete()
  message.author.send("Hey! Voici l'aide du bot **Dodo la Saumure**. Tu peux utiliser les commandes suivantes \n:black_small_square: .start [Lieu] [Personnage1] [Personnage2] : Lance un RP dans le channel\n:black_small_square: .stop : Finit le RP dans le channel\n:black_small_square: .choix [Choix1] [Choix2] : Choisit aléatoirement parmit les choix\n\nVous pouvez aussi, une fois en RP, changer des paramètres:\n:black_small_square: .moove [Nom] : Renome le channel (Changement de zone)\n:black_small_square: La commande .time :\n   :small_orange_diamond: .time day/jour : Journée ☀️\n   :small_orange_diamond: .time sunset/soir : Soirée 🌇\n   :small_orange_diamond: .time night/nuit : Nuit 🌙\n   :small_orange_diamond: .time sunrise/matin : Matinée 🌄");
  message.author.send(":black_small_square: La commande .weather :\n   :small_orange_diamond: .weather sun/soleil : Temps ensoleillé ☀️\n   :small_orange_diamond: .weather cloud/nuageux : Temps nuageux ☁️\n   :small_orange_diamond: .weather rain/pluie : Temps pluvieux 🌧️\n   :small_orange_diamond: .weather storm/orage : Temps orageux ⛈️\n:black_small_square: La commande .season :\n   :small_orange_diamond: .season summer/été : Eté ☀️\n   :small_orange_diamond: .season autumn/automne : Automne 🍂\n   :small_orange_diamond: .season winter/hiver : Hiver ❄️\n   :small_orange_diamond: .season spring/printemps : Printemps 🌺");//:small_orange_diamond:
}

module.exports.help = {
    name: "help"
}
