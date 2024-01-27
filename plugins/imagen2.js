import { googleImage } from '@bochilteam/scraper'

var handler = async (m, { conn, text, usedPrefix, command }) => {

const prohibited = ['caca', 'polla', 'porno', 'porn', 'puta', 'puto', 'culo', 'putita', 'putito', 'pussy', 'pene', 'coño', 'asesinato', 'furry', 'furro', 'furra']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '🚩 *No dare resultado a tu solicitud*', m, , )

if (!text) return conn.reply(m.chat, ` *debera ingresar un texto*\n\nEjemplo, !${command} WhatsApp Bot`, m, , )

const res = await googleImage(text)
let image = res.getRandom()
let link = image

conn.sendFile(m.chat, link, 'error.jpg', `🚩 *Resultado de:* ${text}`, m)

}
handler.help = ['gimage', 'imagen']
handler.tags = ['imagenes']
handler.command = /^(gimage2|image2|imagen2)$/i


export default handler
