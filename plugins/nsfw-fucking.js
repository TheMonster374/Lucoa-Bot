import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://nekos.pro/api/fucking')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'fucking.png', '', m)
}

handler.help = ['fucking']
handler.tags = ['nsfw']
handler.command = ['fucking']

export default handler
