import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://api.waifu.pics/nsfw/neko')
   if (!res.ok) return
   let json = await res.json()
   if (!json.url) return
   await conn.sendFile(m.chat, json.url, 'xneko.png', '*RANDOM NEKO*', m)
}

handler.help = ['xneko']
handler.tags = ['nsfw']
handler.command = ['xneko']

export default handler
