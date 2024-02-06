 const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw(`escribe algo!\n ejemplo: ${usedPrefix + command} que es la omnipotencia`)    
  try {
    let [ prompt, logic ] = text.split('|')
    m.reply(`cargando espere`)
    let res = await fetch(`https://api.betabotz.eu.org/api/search/c-ai?prompt=${prompt}?&char=${logic}&apikey=${lann}`)
    let json = await res.json()
    m.reply(json.message)
  } catch (error) {
    console.error(error)
    m.reply('ocurrio un error en la api.')
  }
}

handler.command = ['c-ai','character-ai']
handler.tags = ['tools']

module.exports = handler
