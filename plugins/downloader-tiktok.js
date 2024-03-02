import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) return conn.reply(m.chat, `[📚] 𝑬𝒔𝒄𝒓𝒊𝒃𝒆 𝒍𝒂 𝒖𝒓𝒍 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓\n\n[💡] 𝒆𝒋𝒆𝒎𝒑𝒍𝒐: ${usedPrefix + command} https://www.tiktok.com/@catsparadise.1/video/7246312711640894746?is_from_webapp=1&sender_device=pc&web_id=7333552077824722438 .*`, m, estilo)
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `𝑽𝒆𝒓𝒊𝒇𝒊𝒄𝒂 𝒒𝒖𝒆 𝒍𝒂 𝑼𝑹𝑳 𝒔𝒆𝒂 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌`, m, estilo)
try {
let p = await fg.tiktok(args[0]) 
await conn.sendFile(m.chat, p.play, 'tiktok.mp4', '', m)
} catch {  	
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw global.error
await conn.sendFile(m.chat, url, 'fb.mp4', 'Aqui tienes tu video', m)
} catch {
conn.reply(m.chat, '[⚠️] 𝑬𝑹𝑹𝑶𝑹 [⚠️]\n\n*𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐.', m)
}}}
handler.help = ['tiktok'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
export default handler
