import {webp2png} from '../lib/webp2mp4.js';
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) return m.reply(etiqueta el sticker) 
if (!/webp/.test(mime)) return m.reply(xd) 
let media = await conn.downloadAndSaveMediaMessage(m.quoted)
let ran = await getRandom('sk.png')
exec(ffmpeg -i ${media} ${ran}, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
fs.unlinkSync(ran)})}

handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg', 'img', 'jpg']
export default handler
