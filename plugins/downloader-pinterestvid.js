import FormData from "form-data"
import axios from "axios"
let handler = async(m, {conn, text, args}) => {
if (!args[0]) throw "Y la url del vídeo de pinterest?" 
if (!args[0].startsWith("https://pin.it/")) throw "Ingresa una URL de un vídeo de pinterest"
let res = await pinterest(args[0])
conn.sendMessage(m.chat, {video: {url: res.data.video}, mimetype: "video/mp4", caption: "Aquí está tu vídeo de pinterest"}, {quoted: m})
}
handler.tags = ["downloader"]
handler.help = handler.command = ["pinterestdl", "dlpinterest"]
export default handler
async function pinterest(url) {
  try {
    const form = new FormData();
    form.append('action', 'pinterest_action');
    form.append('pinterest', 'is_private_video=&pinterest_video_url='+url);
    const { data } = await axios.post("https://pintodown.com/wp-admin/admin-ajax.php", form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
}
