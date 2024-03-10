import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    if (command == 'swaifu') {
    try {
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/nsfw/waifu`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, ``, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `*ocurrio un error inesperado*`;
  };
};

    if (command == 'sneko') {
    try {
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/nsfw/waifu`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, ``, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `*ocurrio un error inesperado*`;
  };
};
}    
handler.command = ['sneko', 'swaifu'];
export default handler;
