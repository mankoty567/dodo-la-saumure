const Discord = require("discord.js");
//Ajouter toutes les autres const que la commande need ici

module.exports.run = async (bot, message, args) => {
  message.delete()

  sansAccent = (function() { //fonction qui retire une grosse partie des accents
      var trad_re = /[¹²³áàâãäåaaaÀÁÂÃÄÅAAAÆccç©CCÇÐÐèéê?ëeeeeeÈÊË?EEEEE€gGiìíîïìiiiÌÍÎÏ?ÌIIIlLnnñNNÑòóôõöoooøÒÓÔÕÖOOOØŒr®Ršs?ßŠS?ùúûüuuuuÙÚÛÜUUUUýÿÝŸžzzŽZZ .,:;'-/()!*`]/g;
      //tout les caractères à traduire dans une variable de forme /<content>/ pour définir un genre de tableau
      var trad = {
  "¹":"1","²":"2","³":"3","á":"a","à":"a","â":"a","ã":"a","ä":"a","å":"a","a":"a","a":"a","a":"a","À":"a","Á":"a","Â":"a","Ã":"a","Ä":"a","Å":"a","A":"a","A":"a",
  "A":"a","Æ":"a","c":"c","c":"c","ç":"c","©":"c","C":"c","C":"c","Ç":"c","Ð":"d","Ð":"d","è":"e","é":"e","ê":"e","ë":"e","e":"e","e":"e","e":"e","e":"e",
  "e":"e","È":"e","Ê":"e","Ë":"e","E":"e","E":"e","E":"e","E":"e","E":"e","€":"e","g":"g","G":"g","i":"i","ì":"i","í":"i","î":"i","ï":"i","ì":"i","i":"i",
  "i":"i","i":"i","Ì":"i","Í":"i","Î":"i","Ï":"i","Ì":"i","I":"i","I":"i","I":"i","l":"l","L":"l","n":"n","n":"n","ñ":"n","N":"n","N":"n","Ñ":"n","ò":"o",
  "ó":"o","ô":"o","õ":"o","ö":"o","o":"o","o":"o","o":"o","ø":"o","Ò":"o","Ó":"o","Ô":"o","Õ":"o","Ö":"o","O":"o","O":"o","O":"o","Ø":"o","Œ":"o","r":"r","®":"r",
  "R":"r","š":"s","s":"s","?":"s","ß":"s","Š":"s","S":"s","?":"","ù":"u","ú":"u","û":"u","ü":"u","u":"u","u":"u","u":"u","u":"u","Ù":"u","Ú":"u","Û":"u","Ü":"u",
  "U":"u","U":"u","U":"u","U":"u","ý":"y","ÿ":"y","Ý":"y","Ÿ":"y","ž":"z","z":"z","z":"z","Ž":"z","Z":"z","Z":"z"," ":"",".":"",",":"",":":"",";":"","'":"","-":"","/":"",
  "(":"",")":"","!":"","*":"","`":""
  };//objet qui contient toutes les traductions
      return function(s) {
          return(s.replace(trad_re, function(match){return trad[match];}) );
      }//change la chaîne en chaîne sans accent
    })();

  args[1] = sansAccent(args[1]);
  if(args[1].toLowerCase() === "summer" || args[1].toLowerCase() === "ete"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant en été! ☀️```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Saison.*\n/, "Saison : Eté ☀️\n")})
  }
  else if(args[1].toLowerCase() === "autumn" || args[1].toLowerCase() === "automne"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant en automne! 🍂```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Saison.*\n/, "Saison : Automne 🍂\n")})
  }
  else if(args[1].toLowerCase() === "winter" || args[1].toLowerCase() === "hiver"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant en hiver! ❄️```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Saison.*\n/, "Saison : Hiver ❄️\n")})
  }
  else if(args[1].toLowerCase() === "spring" || args[1].toLowerCase() === "printemps" || args[1].toLowerCase() === "printemp"){
    message.channel.send("```Markdown\nL'aventure se passe maintenant au printemps! 🌺```")
    message.channel.edit({"topic" : message.channel.topic.replace(/Saison.*\n/, "Saison : Printemps 🌺\n")})
  }
  else {
    message.author.send("Je suis désolé, mais la saison que tu as spécifié ne fonctionne pas! Tu peux utilisez :\n:black_small_square: .season summer/été : Eté ☀️\n:black_small_square: .season autumn/automne : Automne 🍂\n:black_small_square: .season winter/hiver : Hiver ❄️\n:black_small_square: .season spring/printemps : Printemps 🌺")
  }
}

module.exports.help = {
    name: "season"
}
