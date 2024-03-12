import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*_responde a un sticker al cual deseas ponerle un nombre_*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*_responde a un sticker al cual deseas ponerle un nombre_*'
let img = await m.quoted.download()
if (!img) throw '*_responde a un sticker al cual deseas ponerle un nombre_*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `Whatsapp Bot Multi device by als`, mediaType: 2, sourceUrl: md, thumbnail: imagen1}}}, { quoted: m })
else throw '*[❌] Ocurrio un error inesperado*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
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
