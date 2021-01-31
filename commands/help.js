const discord = require('discord.js')
const config = require('../config.json')
let prefix = config.prefix

module.exports.run = async(client,message,args)=>{

  var randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')

  const messageEmbed = new discord.MessageEmbed()
    .setColor(randomColor)
    .setAuthor(config.bot_name, client.user.displayAvatarURL())
    .setDescription(`O bot usa o prefixo **"${prefix}"**\nEste bot foi feito para o servidor da luxinhe, mas se quiser adicionar ele ao seu servidor use o link de convite no fim da pagina \n\n**Lista de comandos** `)
    .addFields(
      {
        name: `**${prefix}random**`,
        value: "O bot vai mandar uma imagem aleatoria da galeria de imagens do bot da luxinhe.",
      },
      {
        name: `**${prefix}adicionar-canal**`,
        value: "O bot vai adicionar o canal a lista de canais a receber bom dia.",
      },
      {
        name: `**${prefix}remover-canal**`,
        value: "O bot vai remover o canal da lista de canais a receber bom dia.",
      },
			{
        name: `**${prefix}sugerir**`,
        value: `Mandar sugestão para o bot, ex: "${prefix}sugerir adicão de um comando de carinho"`,
      },
      {
        name: `**${prefix}bomdia**`,
        value: "O bot vai mandar uma mensagem de bom dia aleatoria, com uma imagem de bom dia aleatória, no chat.",
      },
      {
        name: `**${prefix}abraçar || abracar**`,
        value: `O bot vai mandar um gif de abraço marcando quem abraçou e quem foi abraçado, ex: "**${prefix}abracar @alguém**"`,
      },
      {
        name: `**${prefix}beijar**`,
        value: `O bot vai mandar um gif de beijo marcando quem beijou e quem foi beijado, ex: "**${prefix}beijar @alguém**"`,
      },
      {
        name: `**${prefix}se-assumir**`,
        value: `O bot vai mandar um motivo aleatório que você se assumiu.`,
      },
      {
        name: `**${prefix}envergonhado**`,
        value: `O bot vai mandar um gif de vergonha marcando quem te envergonhou, ex: "**${prefix}envergonhado @alguém**"`,
      },
      {
        name: `**${prefix}ping**`,
        value: `O bot vai mostrar o ping da API e do BOT`,
      },
      {
        name: `Link para adiconar imagens ao bot`,
        value: "https://luxinhe-bot.ga/",
      },
      {
        name: `Twitter da luxinhe`,
        value: "https://twitter.com/luxinhecute",
      },
      {
        name: `Twitter do criador do bost`,
        value: "https://twitter.com/patogordoo",
      },
      {
        name: `Código fonte`,
        value: "https://github.com/PatoGordo/luxinhe-bot",
      },
      {
        name: `Link de convite do bot`,
        value: "https://discord.com/api/oauth2/authorize?client_id=795791132197781564&permissions=523328&scope=bot",
      }
    )
  message.channel.send(messageEmbed)
}
