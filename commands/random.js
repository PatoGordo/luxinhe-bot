const discord = require('discord.js')
const config = require('../config.json')
const firebase = require('../services/firebase.js')

module.exports.run = async(client,message,args)=>{
  var files = []
  
  firebase.firestore().collection("images").get().then((querySnapshot) => {
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
      .setAuthor(`Autor: ${files[index].author_name}`)
      .setTitle(`Nome da imagem: ${files[index].file_name}`)
      .setImage(files[index].image)
    message.channel.send(messageEmbed)
  })
}