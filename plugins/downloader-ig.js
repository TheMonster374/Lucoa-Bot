import axios from 'axios'
let handler = async (m, {conn, args}) => {

if (!args[0]) return conn.reply(m.chat, `*ᴇꜱᴄʀɪʙᴇ ʟᴀ ᴜʀʟ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴅᴇ ɪɴꜱᴛᴀɢʀᴀᴍ Qᴜᴇ ᴅᴇꜱᴇᴀꜱ ᴅᴇꜱᴄᴀʀɢᴀʀ*.\n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: .ig https://www.instagram.com/reel/C1tIP73A_U3/?utm_source=ig_web_copy_link*`, m, desc)
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
await conn.reply(m.chat, 'ɴᴏ ᴘᴜᴇᴅᴏ ᴇɴᴄᴏɴᴛʀᴀʀ ᴇʟ ᴠɪᴅᴇᴏ ᴅᴇ ɪɴꜱᴛᴀɢʀᴀᴍ.', m, desc)
}
} catch (error) {
console.error(error)
conn.reply(m.chat, '*[❗] *ᴇʀʀᴏʀ* [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.*', m, desc)
}
}
handler.help = ['instagram'].map(v => v + ' <url ig>')
handler.tags = ['downloader'];
handler.command = /^(instagramdl|instagram|igdl|ig)$/i;
export default handler
