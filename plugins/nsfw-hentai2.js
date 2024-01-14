import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `❎ En este grupo no esta permitido el contenido *+18*`, m,)
await conn.reply(m.chat, `*↻ Espera @${m.sender.split`@`[0]}, soy lento. . .*`,)
try {
let res = await (await googleImage('Imagen ' + 'hentai')).getRandom()
await conn.sendFile(m.chat, res, 'error.jpg', `*––––––『 NSFW HENTAI2 』––––––*\n\n*Resultado de ∙* Hentai\n\nJotchua-Bot`, )
} catch (err) {
}}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = ['hentai2']
export default handler
