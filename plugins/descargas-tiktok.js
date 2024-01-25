import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) return conn.reply(m.chat, `*Escribe la URL de un video de TikTok que deseas descargar.*`, m, )
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `Verifica que la *URL* sea de TikTok`, m, )
try {
let p = await fg.tiktok(args[0]) 
await conn.sendFile(m.chat, p.play, 'tiktok.mp4', '', )
} catch {  	
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw global.error
await conn.sendFile(m.chat, url, 'fb.mp4', '', )
} catch {
conn.reply(m.chat, '*Ocurrió un error inesperado*', m, )
}}}
handler.help = ['tiktok'].map(v => v + ' <url tt>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.limit = 2 
export default handler
