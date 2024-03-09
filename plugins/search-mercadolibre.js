//creditos a starlights Team y a Daniel

import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) throw m.reply(`*_ingresa un texto de lo que quieres buscar_*\n*ejemplo:*\n\n${usedPrefix + command} Sniper`);
    let res = await mercado(text);
    let cap = `「 *M E R C A D O - L I B R E* 」\n\n`;
    const limit = 15;
    for (let i = 0; i < limit && i < res.length; i++) {
      let link = res[i].link.length > 30 ? res[i].link.substring(0, 30) + '...' : res[i].link;
      cap += `*• Nombre:* ${res[i].title}\n*• Estado:* ${res[i].state}\n*• Link:* ${res[i].link}\n`;
      cap += '\n' + '-------------------------' + '\n';
    }
    m.reply(cap)
  } catch (error) {
   
  }
};
handler.help = ['mercadolibre'];
handler.tags = ['search'];
handler.command = ['mercadolibre'];
export default handler;

async function mercado(query) {
  try {
    const url = `https://listado.mercadolibre.com.pe/${query}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const results = $('.ui-search-layout__item').map((i, element) => {
      const title = $(element).find('.ui-search-item__title').text();
      const state = $(element).find('.ui-search-item__group__element').last().text().trim();
      const link = $(element).find('a').attr('href');
      return {
        title,
        state,
        link
      };
    }).get();
    
    return results;
  } catch (error) {
   
  }
}
