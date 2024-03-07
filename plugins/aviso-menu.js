/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}

  
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
  
let menu = `⚜ 𝐼𝑁𝐹𝑂 𝐷𝐸𝐿 𝑀𝐸𝑁𝑈 ⚜\n\n𝐸𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑚𝑒𝑛𝑢 𝑐𝑎𝑚𝑏𝑖𝑜 𝑎ℎ𝑜𝑟𝑎 𝑒𝑠\n --> .comandos 
`.trim()
await conn.sendFile(m.chat, catalogo, 'gata.mp4', menu, fkontak)
}
handler.customPrefix = /menu|menubot|menu|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.exp = 15
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
