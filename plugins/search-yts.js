import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '𝑸𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒒𝒖𝒆 𝒃𝒖𝒔𝒒𝒖𝒆 𝒆𝒏 𝒀𝒐𝒖𝑻𝒖𝒃𝒆?';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 𝑳𝒊𝒏𝒌 : ${v.url}

↳ 🕒 𝑫𝒖𝒓𝒂𝒄𝒊ó𝒏 : ${v.timestamp}

↳ 📥 𝑺𝒖𝒃𝒊𝒅𝒐 : ${v.ago}

↳ 👁 𝑽𝒊𝒔𝒕𝒂𝒔 : ${v.views}`;
    }
  }).filter((v) => v).join('\n\n------------------------------\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
