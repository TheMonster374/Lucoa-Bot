import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '[📚] 𝑃𝑟𝑜𝑝𝑜𝑟𝑐𝑖𝑜𝑛𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜 𝑝𝑎𝑟𝑎 ℎ𝑎𝑏𝑙𝑎𝑟 𝑐𝑜𝑛 𝑐ℎ𝑎𝑡𝑔𝑝𝑡.\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* \n.chatgpt haz una historia donde jotchua sea millonario ';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/chatgpt-4?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result) {
      m.reply(`
> 𝑪 𝑯 𝑨 𝑻 𝑮𝑷𝑻 

${data.result}`);
    } else {
      throw `
> Sin respuesta

No se pudo obtener una respuesta de la API.`;
    }
  } catch (error) {
    throw `
> Sin respuesta

Ocurrió un error: ${error}`;
  }
};

handler.help = ['chatgpt'];
handler.tags = ['ia'];
handler.command = /^chatgpt$/i;

export default handler;
