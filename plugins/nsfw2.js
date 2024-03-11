import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
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

    if (command == 'nsfwloli') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

    if (command == 'nsfwcum') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwcum.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

    if (command == 'nsfwbdsm') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};
handler.help = ['ahegao', 'manga', 'tentaculos'];
handler.command = ['ahegao', 'manga', 'tentaculos', 'nsfwloli', 'nsfwcum', 'nsfwbdsm'];
handler.tags = ['nsfw'];
export default handler;
