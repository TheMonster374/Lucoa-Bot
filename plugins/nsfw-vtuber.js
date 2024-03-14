import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://nekos.pro/api/fucking')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'neko.png', '', m)
}

handler.help = ['neko']
handler.tags = ['img']
handler.command = ['xd']

export default handler
