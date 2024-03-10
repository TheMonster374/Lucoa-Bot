import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `*[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙾 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n◉ ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile(m.chat, url, "gimage.jpg", `HelloKitty `.trim(), m)

    let stiker = await sticker(null, url, `${name2} le dio una bofetada a ${name}`, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾*`;
  };
};

handler.help = ["hellokitty"];
handler.tags = ["img"];
handler.command = /^(test)$/i;
export default handler;
global.pack = [
  "https://telegra.ph/file/f7caab6d527f9f05ee62c.jpg",
  "https://telegra.ph/file/04f5e603c1f9e0e3d96dd.jpg",
  "https://telegra.ph/file/7edec9dbf21fb338e1adb.jpg",
  "https://telegra.ph/file/3086bd60dbdd808dc4789.jpg",
  "https://telegra.ph/file/d80db2847746fdf8bbe16.jpg",  
  "https://telegra.ph/file/15add9093b5e6d1361938.jpg",
  "https://telegra.ph/file/b663a5a8b290c654367a6.jpg",
  "https://telegra.ph/file/b22caad8cc369e8023190.jpg",
  "https://telegra.ph/file/efafc0ff36449c86606a6.jpg",
  "https://telegra.ph/file/187ce0e01813b1b719015.jpg",
];
