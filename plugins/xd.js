import yts from 'yt-search';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import axios from 'axios';


let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*• Uso correcto*\n*Ejemplo:*\n${usedPrefix + command} Die For You`;
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
var info = `⋆⃟⋆⃟❄ *Nombre* : *${data.result.title}*\n`
info += `⋆⃟⋆⃟❄ *Tamaño* : *${data.result.size}*`
info += `⋆⃟⋆⃟❄ *Duracion* : *${data.result.duration}*`
info += `⋆⃟⋆⃟❄ *Link*: *${data.result.link}`
conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, info }).then(() => {
							conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
handler.help = ["play3"].map(v => v + " <búsqueda>")
handler.tags = ["downloader"]
handler.command = /^A?$/i
export default handler
	
