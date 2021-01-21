const config = require('../config.json')

module.exports = (client,message) => {
  console.log("Bot Started")
  client.user.setActivity(`I answer by the prefix "${config.prefix}",  try using "${config.prefix}ping".`)
}
