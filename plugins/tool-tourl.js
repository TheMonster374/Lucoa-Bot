import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*_responde al video o imagen que quieres que sea convertido en enlace_*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`🔗 enlace: ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['tools'];
handler.command = /^(upload|tourl)$/i;
export default handler;
