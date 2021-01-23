const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  let possibilities = [
    "gay",
    "lesbica",
    "trans",
    "hetero",
    "cavalo",
    "ancap",
    "comunista",
    "capitalista",
    "helicoptero de combate",
    "jogador de free fire",
    "jogador de lol",
    "femboy",
    "tomboy",
    "sonegador de imposto",
    "pagador de imposto",
    "usuário de drogas",
    "vendedor de drogas",
    "fabricante de drogas",
    "bahiano",
    "sulista",
    "comedor de casada",
    "virgem",
    "alienigena",
    "casado",
    "solteiro",
    "maquina de lavar roupa arno 50L",
    "flash player"
  ]

  var randomPossibilite = possibilities[Math.floor(Math.random() * possibilities.length)]
  let avatar = message.author.displayAvatarURL({format: "png"})

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setTitle('**"Se assumiu"**')
    .setAuthor(message.author.tag, avatar)
    .setDescription(`**${message.author.username}** "se assumiu" **${randomPossibilite}**`)
  message.channel.send(messageEmbed)
}