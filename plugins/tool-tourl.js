import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '[📚] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒐 𝒗𝒊𝒅𝒆𝒐 𝒒𝒖𝒆 𝒔𝒆𝒓𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒅𝒐 𝒆𝒏 𝒆𝒏𝒍𝒂𝒄𝒆';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`🔗 𝑬𝒏𝒍𝒂𝒄𝒆 𝒂 𝒔𝒖 𝒂𝒓𝒄𝒉𝒊𝒗𝒐: ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['tools'];
handler.command = /^(upload|tourl)$/i;
export default handler;
