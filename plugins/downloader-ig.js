import axios from 'axios'
let handler = async (m, {conn, args}) => {

if (!args[0]) return conn.reply(m.chat, `*🚩 Escribe la URL de un video de Instagram que deseas descargar.*`, m, desc)
let url = `https://vihangayt.me/download/instagram?url=${encodeURIComponent(args[0])}`
  
try {
const response = await axios.get(url)
if (!response.data.status) {
throw new Error(`Error al obtener datos`)
}
const data = response.data.data
if (data && data.data && data.data.length > 0) {
const videoURL = data.data[0].url

await conn.sendFile(m.chat, videoURL, 'instagram_reel.mp4', '', estilo)
} else {
await conn.reply(m.chat, 'No puedo encontrar el vídeo de Instagram.', m, desc)
}
} catch (error) {
console.error(error)
conn.reply(m.chat, '*☓ Ocurrió un error inesperado*', m, desc)
}
}
handler.help = ['instagram'].map(v => v + ' <url ig>')
handler.tags = ['downloader'];
handler.command = /^(instagramdl|instagram|igdl|ig)$/i;
export default handler
