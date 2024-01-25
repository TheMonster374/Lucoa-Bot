import axios from 'axios'
let handler = async (m, {conn, args}) => {

if (!args[0]) return conn.reply(m.chat, `*Escribe la URL de un video de Instagram que deseas descargar.*`, m, )
let url = `https://vihangayt.me/download/instagram?url=${encodeURIComponent(args[0])}`
    let additionalText = '';
    if (command === 'ig') {
      additionalText = 'aqui tienes tu video';
    } else if (command === 'instagram') {
      additionalText = 'aqui tienes tu video';
    }
  
try {
const response = await axios.get(url)
if (!response.data.status) {
throw new Error(`Error al obtener datos`)
}
const data = response.data.data
if (data && data.data && data.data.length > 0) {
const videoURL = data.data[0].url

await conn.sendFile(m.chat, videoURL, 'instagram_reel.mp4 ${additionalText}' ., '', )
} else {
await conn.reply(m.chat, 'No puedo encontrar el vídeo de Instagram.', m, )
}
} catch (error) {
console.error(error)
conn.reply(m.chat, '*☓ Ocurrió un error inesperado*', m, )
}
}
handler.help = ['instagram'].map(v => v + ' <url ig>')
handler.tags = ['downloader'];
handler.command = /^(instagramdl|instagram|igdl|ig)$/i;
handler.limit = 2
export default handler
