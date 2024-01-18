import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*Responde al video o nota de voz que deseas convertir en audio/mp3*`;
  const media = await q.download();
  if (!media) throw '*Ocurrio un error al descargar su video*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*Ocurrio un error al convertir su nota de voz a audio/mp3*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
