import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://api.waifu.pics/nsfw/waifu')
   if (!res.ok) return
   let json = await res.json()
   if (!json.url) return
   await conn.sendFile(m.chat, json.url, 'xwaifu.png', '*RANDOM WAIFU*', m)
}

handler.help = ['xwaifu']
handler.tags = ['nsfw']
handler.command = ['xwaifu2']

export default handler
