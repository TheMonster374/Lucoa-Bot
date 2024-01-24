import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `_*𝐌𝐞𝐝𝐢𝐚𝐅𝐢𝐫𝐞*_\n\n*Ingrese un enlace de MediaFire.*\n\n*Ejemplo:* _${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE_`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `_*𝐌𝐞𝐝𝐢𝐚𝐅𝐢𝐫𝐞*_\n
 *Nombre:* ${resEX.filename}
 *Tamaño:* ${resEX.filesizeH}
 *Extensión:* ${resEX.ext}\n\n
*Se está enviando el archivo. espere...*`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `_*𝐌𝐞𝐝𝐢𝐚𝐅𝐢𝐫𝐞*_\n
 *Nombre:* ${name}
 *Tamaño:* ${size}
 *Extensión:* ${mime}\n\n
*Se está enviando el archivo. espere...*`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('_*𝐌𝐞𝐝𝐢𝐚𝐅𝐢𝐫𝐞*_\n\n*Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*');
    }
  }
};
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
handler.limit = 1
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
