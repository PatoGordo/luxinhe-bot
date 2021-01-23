const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  let gifs = [
    "https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif",
    "https://i.pinimg.com/originals/29/65/3a/29653ad6e372605c4c43c3c015f9e499.gif",
    "https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif",
    "https://media1.tenor.com/images/2f23c53755a5c3494a7f54bbcf04d1cc/tenor.gif?itemid=13970544",
    "https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif",
    "https://media4.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
    "https://i.pinimg.com/originals/4c/c2/29/4cc229267cbd4090596fc450a95d65a4.gif",
    "https://i.pinimg.com/originals/f1/5c/77/f15c774e5c58a9f210c7f7647da796f1.gif",
    "https://media1.tenor.com/images/fa4ec9dd7ba5b3559700edf7b1ac2522/tenor.gif?itemid=9124289",
    "https://i.pinimg.com/originals/40/37/e6/4037e6ae03275bd33b3e5df50acda41a.gif",
    "https://pa1.narvii.com/6228/a12c63dc40db04738ed515a2ceba380c1ebb9908_hq.gif",
    "https://data.whicdn.com/images/30382303/original.gif",
    "https://s12.favim.com/gif_previews/6/626/6265/62657/6265741.gif"
  ]

  var randomGif = gifs[Math.floor(Math.random() * gifs.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  let avatar = message.author.displayAvatarURL({format: "png"})
  if (!user){
    return message.reply(`Quer um beijo 😞`)
  }

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setTitle("Beijou 😳")
    .setAuthor(message.author.tag, avatar)
    .setImage(randomGif)
    .setDescription(`${message.author.username} **beijou** ${user.username} 😳`)
  message.channel.send(messageEmbed)
}