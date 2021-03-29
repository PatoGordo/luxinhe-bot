const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')
const CronJob = require("cron").CronJob

module.exports = (client,message) => {
  console.log("Bot Started")
  client.user.setActivity(`Olá eu sou a ${config.bot_name} eu respondo pelo prefixo "${config.prefix}", tente usar "${config.prefix}help".`)

  const job = new CronJob(
  "0 0 10 * * *",
  () => {
    //0 0 10 * * *

    var files = []
    var channels = []
  
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

      firebase.firestore().collection("channels").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const messageEmbed = new discord.MessageEmbed()
            .setColor(randomColor)
            .setAuthor(config.bot_name, client.user.displayAvatarURL())
            .setTitle(files[index].message)
            .setImage(files[index].url)
            .setFooter('Não me responsabilizo por qualquer meme ruim!')
          try {
            client.channels.cache.get(doc.data().channel_id).send(messageEmbed)
            .then(message => {
              message.react('⬆️')
              message.react('⬇️')
            })
          } catch (err) {
            console.log('Error: '+err)
          }
        })
      })
    })
  },
  null,
  true,
  "America/Sao_Paulo"
  )
}