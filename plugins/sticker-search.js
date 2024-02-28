import fetch from "node-fetch";
import {googleImage} from "@bochilteam/scraper";
let handler = async (m, {text, conn}) => {
  if (!text) throw `*[❗] Ingresa el nombre del paquete que deseas buscar*`;
  try {
    const res2 = await googleImage(text);
    let sfoto = res2.getRandom();
    let json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    let jsons = await json.json();
    let res = jsons.result.map(
      (v, index) => `🔍 • Resultado: ${1 + index}\n*📦 • Nombre:* ${v.title}\n*🗂️ • Autor:* ${v.author}\n*📎 • Url:* ${v.url}`
    ).join`\n\n───\n\n`;
    await conn.sendFile(m.chat, sfoto, "error.jpg", res, m);
  } catch {
    await m.reply("*[❗] ha habido un error*");
  }
};
handler.tags = ["sticker", "search"];
handler.command = ["stickersearch", "searchsticker", "stickerssearch", "searchstickers"];
handler.help = ["stickersearch"];
export default handler;
