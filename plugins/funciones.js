conn.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }

m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100, detectLinks: false, thumbnail: global.thumb, ...options })

m.react = (text, key, options) => conn.sendMessage(m.chat, { react: {text, key: m.key }})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
