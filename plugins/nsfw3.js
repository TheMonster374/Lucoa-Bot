import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
let hentai = JSON.parse(fs.readFileSync('src/JSON/hentaxi.json'))
let res =  hentai[Math.floor(Math.random() * hentai.length)]
conn.reply(m.chat, res, '❏  *H E N T A I*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'hentai', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw', 'premium']
handler.command = ['hentai']

export default handler
