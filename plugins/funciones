import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default


conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }

m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100, detectLinks: false, thumbnail: global.thumb, ...options })

m.react = (text, key, options) => conn.sendMessage(m.chat, { react: {text, key: m.key }})

export default handler


