import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒑𝒐𝒏𝒆𝒓𝒍𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒑𝒐𝒏𝒆𝒓𝒍𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
let img = await m.quoted.download()
if (!img) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒑𝒐𝒏𝒆𝒓𝒍𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `Whatsapp Bot Multi device By als`, mediaType: 2, sourceUrl: md, thumbnail: imagen1}}}, { quoted: m })
else throw '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇* ⊱❗️⊱╮\n\n𝙀𝙍𝙍𝙊𝙍 𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊́ 𝙈𝘼𝙇, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼𝙇 𝙄𝙉𝙏𝙀𝙉𝙏𝘼 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler


/*import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒑𝒐𝒏𝒆𝒓𝒍𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒑𝒐𝒏𝒆𝒓𝒍𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
let img = await m.quoted.download()
if (!img) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒂𝒍 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒑𝒐𝒏𝒆𝒓𝒍𝒆 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `Whatsapp Bot Multi Device`, mediaType: 2, sourceUrl: group, thumbnail: imagen1}}}, { quoted: m })
else throw '⚠️ 𝑰𝒏𝒕𝒆𝒏𝒕𝒂 𝒅𝒆𝒏𝒖𝒆𝒗𝒐'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler
*/ 
