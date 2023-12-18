/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*RESPONDA A UN VIDEO QUE DESEE CONVERTIR EN GIF CON AUDIO*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*EL TIPO DE ARCHIVO ${mime} NO ES CORRECTO, RESPONDA A UN VIDEO QUE DESEE CONVERTIR EN GIF CON AUDIO*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ, ᴀʟ ᴀʙʀɪʀʟᴏ sᴇ ʀᴇᴘʀᴏᴅᴜᴄᴇ ᴄᴏɴ ᴀᴜᴅɪᴏ*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
