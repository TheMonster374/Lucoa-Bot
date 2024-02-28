import { webp2png } from '../lib/webp2mp4.js'
var handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `responde a un sticker con: *${usedPrefix + command}*`
    const q = m.quoted ? m.quoted : m
    let name = await conn.getName(m.sender) 
    let mime = q.mediaType || ''
    if (!/sticker/.test(mime)) throw `responde a un sticker con: *${usedPrefix + command}*`
    let media = await q.download()
    let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
    await conn.sendFile(m.chat, out, 'out.png', 'Request By ' + name, m)
}
handler.help = ['toimg (responer a sticker)']
handler.tags = ['sticker']
handler.command = ['toimg']

export default handler
