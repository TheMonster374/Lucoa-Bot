import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let res = await fetch(`https://api.cafirexos.com/api/nsfw/nsfwass`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw '❎ Error'
conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random ${command}`, m)
}
handler.command = ['ass']

export default handler
