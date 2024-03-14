import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://nekos.pro/api/vtuber')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'vtuber.png', '', m)
}

handler.help = ['vtuber']
handler.tags = ['nsfw']
handler.command = ['vtuber']

export default handler
