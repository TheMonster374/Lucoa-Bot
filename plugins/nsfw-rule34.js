import { googleImage, pinterest } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `❎ En este grupo no esta permitido el contenido *+18*`, m, )

if (!text) return conn.reply(m.chat, `*Ingresa un texto junto al comando.*`, m, )
await conn.reply(m.chat, `*Espera @${m.sender.split`@`[0]}, én lo que envio tu rule pajero 🐶*`,)
const res = await (await googleImage('rule34 ' + text)).getRandom()
await conn.sendFile(m.chat, res, 'error.jpg', `*––––––『 NSFW RULE34 』––––––*\n\n*Resultado de ∙* ${text ? text.capitalize() : false}\n\n𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐁𝐨𝐭🐶`, )
}
handler.help = ['rule34 <texto>']
handler.tags = ['nsfw', 'img']
handler.command = ['rule34']
export default handler
