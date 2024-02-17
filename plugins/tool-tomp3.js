import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `[🐶] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒆𝒏 𝒎𝒑3/𝑨𝒖𝒅𝒊𝒐`;
  const media = await q.download();
  if (!media) throw '*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗] \n\n 𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒂𝒍 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒕𝒖  𝒗𝒊𝒅𝒆𝒐, 𝒗𝒖𝒆𝒍𝒗𝒆 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]\n\n 𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒂𝒍 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓 𝒕𝒖  𝒏𝒐𝒕𝒂 𝒅𝒆 𝒗𝒐𝒛, 𝒂 𝒎𝒑3/𝒂𝒖𝒅𝒊𝒐  𝒗𝒖𝒆𝒍𝒗𝒆 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.help = ['tomp3'];
handler.tags = ['tools'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
