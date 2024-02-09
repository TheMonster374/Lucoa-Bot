/creditos @AzamiJs

import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `ɪɴɢʀᴇꜱᴀ ᴜɴᴀ ᴘᴇᴛɪᴄɪᴏɴ*\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ, !bard como hacer una pagina porno`, m, desc, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*[❗] ᴇʀʀᴏʀ [❗] \n\nᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ*`, m, desc, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']


export default handler
