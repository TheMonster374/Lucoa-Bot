import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊ó𝒏 𝒇𝒂𝒍𝒕𝒂𝒏𝒕𝒆, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒎á𝒔 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆/𝒕𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏𝒂 𝒄𝒂𝒏𝒄𝒊ó𝒏\n\n[🐶] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:\n*${usedPrefix + command} Nimstarr - Heart Racing*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `𝑷𝒖𝒆𝒅𝒆𝒔 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂𝒔 𝒅𝒆 𝒍𝒂 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 𝒇𝒐𝒓𝒎𝒂:
${usedPrefix}audio <numero>
${usedPrefix}video <numero> 

*Ejemplos:*
*${usedPrefix}audio 5*
*${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
↳   𝑳𝒊𝒏𝒌 : ${v.url}
↳  𝑫𝒖𝒓𝒂𝒄𝒊ó𝒏 : ${v.timestamp}
↳  𝑺𝒖𝒃𝒊𝒅𝒐 : ${v.ago}
↳  𝑽𝒊𝒔𝒕𝒂𝒔 : ${v.views}`;
    }).join('\n\n────────────────────────────\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*${JT.smsError}, 𝒊𝒏𝒕𝒆𝒏𝒕𝒂 𝒄𝒐𝒏 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒐𝒕𝒓𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏*');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
