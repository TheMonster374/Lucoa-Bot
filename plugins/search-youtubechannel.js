//Youtube : https://youtube.com/@samuel_gf
//creditos a nakanoteam
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw m.reply(`*🚩 Ingrese el nombre del canal de Youtube*\n\n*Ejemplo:*\n${usedPrefix + command} @samuel_24_`)
let res = await canales(text)
let inf = `•> *Nombre:* ${res.title}
•> *Subs:* ${res.subscribers || '*0 subs*'}
•> *Desc:* ${res.description || 'Sin desc'}
•> *Link:* ${res.link}`
conn.sendFile(m.chat, res.thumbnail, '', inf, m)
} catch (error) {
}}
handler.command = ['canal', 'channel', 'youtuber']
export default handler
