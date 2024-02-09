import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*responde a una imagen o video el cual sera convertido a enlace*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*Enlace a su archivo:* ${link}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['tools'];
handler.command = /^(upload|tourl)$/i;
export default handler;
