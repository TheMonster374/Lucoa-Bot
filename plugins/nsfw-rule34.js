import { googleImage, pinterest } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `❎ En este grupo no esta permitido el contenido *+18*`, m, )

if (!text) return conn.reply(m.chat, `*ɪɴɢʀᴇꜱᴀ ᴜɴ ᴛᴇxᴛᴏ ᴊᴜɴᴛᴏ ᴀʟ ᴄᴏᴍᴀɴᴅᴏ\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix + command} gawr gura.*`, m, )
const res = await (await googleImage('rule34 ' + text)).getRandom()
await conn.sendFile(m.chat, res, 'error.jpg', `*ʀᴜʟᴇ34*\n\n*Resultado de ∙* ${text ? text.capitalize() : false}\n\nᴊᴏᴛᴄʜᴜᴀ - ʙᴏᴛ - ᴍɪɴɪ`, )
}
handler.help = ['rule34 <texto>']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
export default handler
