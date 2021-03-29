const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')

module.exports.run = async(client,message,args)=>{
  var files = []
  
  firebase.firestore().collection("bom_dia_messages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      files.push(doc.data())
    })
    function getRandomNumber(min, max) {
      let step1 = max - min + 1
      let step2 = Math.random() * step1
      let result = Math.floor(step2) + min
      return result
    }
    let index = getRandomNumber(0, files.length - 1)

    var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

    const messageEmbed = new discord.MessageEmbed()
      .setColor(randomColor)
      .setAuthor(config.bot_name, client.user.displayAvatarURL())
      .setDescription('[Clique aqui](https://luxinhe-bot.ga/novo-bomdia) para adicionar novas mensagens de bom dia pro bot.')
      .setTitle(files[index].message)
      .setImage(files[index].url)
      .setFooter('Não me responsabilizo por qualquer meme ruim!')
    message.channel.send(messageEmbed)
    .then(message => {
      message.react('⬆️')
      message.react('⬇️')
    })
  })
}