const discord = require('discord.js')
const axios = require('axios')
//const config = require('../config.json')

module.exports.run = async(client,message,args)=>{
  axios.get("http://luxinhe-bot.herokuapp.com/getdata").then((res) => {
    function getRandomNumber(min, max) {
      let step1 = max - min + 1
      let step2 = Math.random() * step1
      let result = Math.floor(step2) + min
      return result
    }

    let index = getRandomNumber(0, res.data.result.length - 1)

    var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

    const messageEmbed = new discord.MessageEmbed()
      .setColor(randomColor)
      .setAuthor(`Autor: ${res.data.result[index].author}`)
      .setTitle(`Nome da imagem: ${res.data.result[index].name}`)
      .setImage(res.data.result[index].url)
    message.channel.send(messageEmbed)
  })
}
