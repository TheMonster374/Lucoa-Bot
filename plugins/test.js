import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `*_etiqueta a alguien_*\n\n*ejemplo:*\n ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile(m.chat, url, "gimage.mp4", `${name2} violo a ${name}`.trim(), m)
  } catch {
    throw `*ocurrio un error*`;
  };
};

handler.help = ["hellokitty"];
handler.tags = ["img"];
handler.command = /^(test)$/i;
export default handler;
global.pack = [
  "https://telegra.ph/file/39471b36b4a0b4f832dce.mp4",
];
