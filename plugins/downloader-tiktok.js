import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) return conn.reply(m.chat, `ingresa un link de tiktok\n\n*ejemplo:* ${usedPrefix + command} https://www.tiktok.com/@catsparadise.1/video/7246312711640894746?is_from_webapp=1&sender_device=pc&web_id=7333552077824722438 .*`, m, estilo)
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `_Verifica que la url sea de tiktok_`, m)
try {
let p = await fg.tiktok(args[0]) 
await conn.sendFile(m.chat, p.play, 'tiktok.mp4', '', m)
} catch {  	
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw global.error
await conn.sendFile(m.chat, url, 'fb.mp4', '', m)
} catch {
conn.reply(m.chat, '*[❌] Ocurrio un error inesperado*', m)
}}}
handler.help = ['tiktok'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
export default handler
