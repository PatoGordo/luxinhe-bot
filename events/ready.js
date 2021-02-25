const discord = require('discord.js')
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const config = require('../config.json')
const CronJob = require("cron").CronJob

module.exports = (client,message) => {
  console.log("Bot Started")
  client.user.setActivity(`Olá eu sou a ${config.bot_name} eu respondo pelo prefixo "${config.prefix}", tente usar "${config.prefix}random".`)

  const job = new CronJob(
  "0 0 10 * * *",
  () => {
    //0 0 10 * * *

    var options = {
    	url: `https://results.dogpile.com/serp?qc=images&q=bomdia+shitpost&page=${Math.floor(Math.random(0) * 5)}&sc=LhW0iLupDXfW10`,			
      method: 'GET',
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Chrome'
      }
    }

    request(options, (err, res, resBody) => {
      if (err) {
        return
      }

      $ = cheerio.load(resBody)
      var links = $(".image a.link")

      var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

      if (!urls.length) {
        return
      }

      axios.get("https://luxinhe-bot.herokuapp.com/getbomdia").then((doc) => {
        function getRandomNumber(min, max) {
          let step1 = max - min + 1
          let step2 = Math.random() * step1
          let result = Math.floor(step2) + min
          return result
        }

        let index = getRandomNumber(0, doc.data.result.length - 1)

        var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

        axios.get('https://luxinhe-bot.herokuapp.com/getchannel')
				.then((resp) => {
          resp.data.result.map(channel_id => {
            const messageEmbed = new discord.MessageEmbed()
              .setColor(randomColor)
              .setAuthor(config.bot_name, client.user.displayAvatarURL())
              .setTitle(doc.data.result[index].message)
              .setImage(urls[Math.floor(Math.random() * urls.length)])
							.setFooter('Não me responsabilizo por qualquer meme ruim!')
            try {
							client.channels.cache.get(channel_id.channel_id).send(messageEmbed)
							.then(message => {
								message.react('⬆️')
								message.react('⬇️')
							})
							// If channel exists: send message
						} catch (err) {
							// Else: print error and 1 second after clear console
							console.log('Error: '+err)
							setTimeout(() => {
								console.clear()
							}, 1000)
						}
          })
        })
				// If api not works print error on console
				.catch(err => console.log(err))
      })
    })
  },
  null,
  true,
  "America/Sao_Paulo"
  )
}
