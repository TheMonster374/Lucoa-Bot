import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 𝐄𝐒𝐓𝐀𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎𝐒 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎, 𝐒𝐈 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍 𝐘 𝐃𝐄𝐒𝐄𝐀 𝐔𝐒𝐀𝐑𝐋𝐎𝐒 𝐔𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 #enable modohorny*';

  if (command == 'miku') {
    const res = (await axios.get(`https://raw.githubusercontent.com/AleXD0009/Jotchua-Bot/master/src/JSON/anime-miku.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};
handler.help = ['miku'];
handler.command = ['miku'];
export default handler;
