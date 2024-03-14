import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://any-anime.p.rapidapi.com/v1/anime/gif/1')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'test.gif', '*test*', m)
}

handler.help = ['neko']
handler.tags = ['img']
handler.command = ['xdd']

export default handler
