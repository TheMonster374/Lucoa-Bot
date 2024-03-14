import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.im/maid`);
    let jkis = await apislap.json();
    let { url } = jkis;
    conn.sendFile(m.chat,  , {quoted: m});
  } catch {
    throw `*ocurrio un error inesperado*`;
  };
};
handler.tags = [''];
handler.command = ['test2'];
handler.help = ['dado'];
export default handler;
