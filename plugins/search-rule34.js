import { googleImage, pinterest } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `❎ En este grupo no esta permitido el contenido *+18*`, m, )

if (!text) return conn.reply(m.chat, `[📚] 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒋𝒖𝒏𝒕𝒐 𝒂𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐\n\n[💡] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: ${usedPrefix + command} *gawr gura.*`, m, )
const res = await (await googleImage('rule34 ' + text)).getRandom()
await conn.sendFile(m.chat, res, 'error.jpg', `*Resultado de ∙* ${text ? text.capitalize() : false}`, estilo)
}
handler.help = ['rule34']
handler.tags = ['search', 'nsfw']
handler.command = ['rule34', 'r34']
export default handler
