const firebase = require('firebase')
require('dotenv/config')

const app = firebase.initializeApp({
  apiKey: process.env.APIKEY || "",
  authDomain: process.env.AUTHDOMAIN || "",
  databaseURL: process.env.DBURL || "",
  projectId: process.env.PROJECTID || "",
  storageBucket: process.env.SB || "",
  messagingSenderId: process.env.MSID || "",
  appId: process.env.APPID || ""
})

module.exports = app