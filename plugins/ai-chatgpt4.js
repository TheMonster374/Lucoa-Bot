import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw '𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒑𝒓𝒐𝒑𝒐𝒓𝒄𝒊𝒐𝒏𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒆𝒏𝒗𝒊𝒂𝒓 𝒂 𝑪𝒉𝒂𝒕𝑮𝑷𝑻4./n/n[ 🐶 ] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: ${command} haz una historia donde jotchua sea millonario ';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/chatgpt-4?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result) {
      m.reply(`
> 'ChatGPT 4'

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

handler.help = ['chatgpt4'];
handler.tags = ['ia'];
handler.command = /^chatgpt4$/i;

export default handler;
