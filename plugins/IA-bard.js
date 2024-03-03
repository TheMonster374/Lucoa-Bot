import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '[📚] 𝑒𝑛𝑣𝑖𝑎 𝑢𝑛 𝑡𝑒𝑥𝑡𝑜 𝑐𝑜𝑛 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 \n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* \n.bard Hola Bard, ¿cómo estás?';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/bard?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result) {
      m.reply(`
> 𝑩 𝑨 𝑹 𝑫  𝑨𝑰

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

handler.help = ['bard'];
handler.tags = ['ia'];
handler.command = /^bard$/i;

export default handler;
