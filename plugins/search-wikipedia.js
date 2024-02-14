import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗️] 𝑬𝑹𝑹𝑶𝑹 [❗️] 𝑼𝒔𝒐 𝑰𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐!!*\n*𝑼𝒔𝒐 𝑪𝒐𝒓𝒓𝒆𝒄𝒕𝒐:*\n*${usedPrefix + command} 𝙿𝚊𝚕𝚊𝚋𝚛𝚊 𝚌𝚕𝚊𝚟𝚎 𝚊 𝚋𝚞𝚜𝚌𝚊𝚛*\n\n*[🐶] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:*\n*${usedPrefix + command} Estrellas*`;
  wikipedia(`${text}`).then((res) => {
    m.reply(`*𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑬𝑵𝑪𝑶𝑵𝑻𝑹𝑨𝑫𝑨:*\n\n` + res.result.isi);
  }).catch(() => {
    m.reply('*[❗️] 𝑬𝑹𝑹𝑶𝑹 [❗️] \n\n𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏*');
  });
};
handler.help = ['wikipedia'].map((v) => v + ' <apa>');
handler.tags = ['search'];
handler.command = /^(wiki|wikipedia)$/i;
export default handler;
