const discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  let gifs = [
    "https://i.pinimg.com/originals/06/dd/8f/06dd8f976b7353d69aec173b44927ef4.gif",
    "https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
    "https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif",
    "https://data.whicdn.com/images/51275173/original.gif",
    "https://acegif.com/wp-content/uploads/anime-hug.gif",
    "https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
    "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
    "https://media2.giphy.com/media/od5H3PmEG5EVq/200.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RH7cm1UmJCwRYlt5-AKcrKbd4k12pXVYvHi5qim03aFGQwIb0CD6t-phsgEEJwXNVug7u9yRxZGRsS7ENw4sejiKjW-GcLXZhA&usqp=CAU&ec=45761792",
    "https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif",
    "https://33.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_noip2vH2eE1uvqkceo1_500.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7cHfqRcsyvWQKNBZexMg1KNT-95KzsD5OOqo5umirk7RGplesASM-G-6wW4CGZxtjqHaxm0IQtg6qV4JEe4mQtpKrAA1qCUwiQ&usqp=CAU&ec=45761792"
  ]

  var randomGif = gifs[Math.floor(Math.random() * gifs.length)]
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
  if (!user){
    return message.reply(`Quer um abraço 😞`)
  }

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setAuthor(config.bot_name)
    .setImage(randomGif)
    .setTitle(`${message.author.username} **abraçou** ${user.username} 🥰`)
  message.channel.send(messageEmbed)
}