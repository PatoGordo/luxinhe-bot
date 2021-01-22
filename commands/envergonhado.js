const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  let gifs = [
    "https://i.pinimg.com/originals/a8/6f/09/a86f09dcfa83c009ff8e4d616224e6d7.gif",
    "https://media4.giphy.com/media/UrPxdGW62TDtS/200.gif",
    "https://media.tenor.com/images/be0a79135be983a4b665686e7526d822/tenor.gif",
    "https://media1.tenor.com/images/0cca08a1809076586c912020062f2d6c/tenor.gif?itemid=15974488",
    "https://i.pinimg.com/originals/f8/eb/a7/f8eba73981eea6dd48e3630d867e6a59.gif",
    "https://media.tenor.com/images/109550a70bb82a6300079716fdfeaed2/tenor.gif",
    "https://i.pinimg.com/originals/71/de/78/71de7826ad02a908a1c3e572f50e6901.gif",
    "https://thumbs.gfycat.com/CandidSmugHornet-small.gif",
    "https://cdn42.picsart.com/179012249001202.gif?to=min&r=1024",
    "https://i.pinimg.com/originals/fb/cb/db/fbcbdbff72bde829a29347bf162e870c.gif",
    "https://i.gifer.com/AIUC.gif",
    "https://cdn.lowgif.com/full/1eba3151cfac3814-shy-anime-gif-3-gif-images-download.gif",
    "https://i.pinimg.com/originals/39/f8/86/39f88657121d5ed8d5aa1e53659575d1.gif"
  ]

  var randomGif = gifs[Math.floor(Math.random() * gifs.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  let avatar = message.author.displayAvatarURL({format: "png"})
  if (!user){
    var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    const messageEmbed = new discord.MessageEmbed()
      .setColor(randomColor)
      .setTitle("Vergonhinha 😳")
      .setAuthor(message.author.tag, avatar)
      .setImage(randomGif)
      .setDescription(`${message.author.username} esta envergonhado😳`)
    return message.reply(messageEmbed)
  }

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setTitle("Vergonhinha 😳")
    .setAuthor(message.author.tag, avatar)
    .setImage(randomGif)
    .setDescription(`${user.username} **😳envergonhou😳** ${message.author.username}`)
  message.channel.send(messageEmbed)
}