import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
   let res = await fetch('https://nekos.best/api/v2/kitsune')
   if (!res.ok) return 
   let json = await res.json()
   if (!json.url) return 
   await conn.sendFile(m.chat, json.url, 'test.png', '*test*', m)
}

handler.help = ['neko']
handler.tags = ['img']
handler.command = ['xdd']

export default handler
