import fetch from 'node-fetch'
import axios from 'axios'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Etiqueta o menciona a alguien\n\n📌 Ejemplo : ${usedPrefix + command} @tag` 
    
    let user = global.db.data.users[who]
    let name = conn.getName(who) 
   let name2 = conn.getName(m.sender) 

  let rki = await fetch(`/HostMedia/nsfw/pussy.json`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let { url } = jkis
   let stiker = await sticker(null, url, `(${name2}) mató a`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   m.react('🗡️') 
   
}

handler.help = ['kill @tag']
handler.tags = ['rnime']
handler.command = /^(ahegao|matar)$/i

export default handler
