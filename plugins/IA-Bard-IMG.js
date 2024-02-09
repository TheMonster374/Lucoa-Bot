import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

conn.sendPresenceUpdate('composing', m.chat)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else return conn.reply(m.chat, `*ᴍᴀɴᴅᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴄᴏɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ʏ ᴇʟ ᴛᴇxᴛᴏ ᴀ ʙᴜꜱᴄᴀʀ*\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ, !bardimg ᴅᴀᴍᴇ ɪɴꜰᴏʀᴍᴀᴄɪᴏɴ ꜱᴏʙʀᴇ ʟᴏ Qᴜᴇ ᴀᴘᴀʀᴇᴄᴇ ᴇɴ ʟᴀ ɪᴍᴀɢᴇɴ`, m, estilo, )

}
handler.help = ['bardimg']
handler.tags = ['ia']
handler.command = /^(bardimg|bardimage)$/i


export default handler
