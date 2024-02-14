import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '𝑷𝒓𝒐𝒑𝒐𝒓𝒄𝒊𝒐𝒏𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 \n\n*[🐶] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:* _${usedPrefix + command} Hola Bard2, ¿cómo estás?_';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/bard?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result) {
      m.reply(`
> Bard AI

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

handler.help = ['bard2'];
handler.tags = ['ia'];
handler.command = /^bard2$/i;

export default handler;
