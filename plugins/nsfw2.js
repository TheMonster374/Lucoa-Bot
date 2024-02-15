import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw '*𝑬𝒍 𝒏𝒔𝒇𝒘 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒉𝒂𝒃𝒊𝒍𝒊𝒕𝒂𝒅𝒐, 𝒖𝒔𝒆 #𝒆𝒏𝒂𝒃𝒍𝒆 𝒏𝒔𝒇𝒘 𝒑𝒂𝒓𝒂 𝒂𝒄𝒕𝒊𝒗𝒂𝒓𝒍𝒐*';

  if (command == 'ahegao') {
    const res = (await axios.get(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/ahegao.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'tentaculos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/tentacles.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'manga') {
    const res = (await axios.get(`https://raw.githubusercontent.com/KazukoGans/database/main/nsfw/manga.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};
handler.help = ['ahegao', 'manga', 'tentaculos'];
handler.command = ['ahegao', 'manga', 'tentaculos'];
handler.tags = ['nsfw'];
export default handler;
