import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://nekos.pro/api/ai`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `Waifu`, `Jotchua-Mini`);
    conn.sendFile(m.chat, stiker, null, {quoted: m});
  } catch {
    throw `*ocurrio un error inesperado*`;
  };
};
handler.tags = [''];
handler.command = ['test2'];
handler.help = ['dado'];
export default handler;
