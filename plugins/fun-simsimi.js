import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*𝐁𝐨𝐭 - 𝐈𝐀*_\n\n*Proporciona un texto.*\n\n*Ejemplo:* _${usedPrefix + command} Hola Bot, ¿cómo estás?_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://api.simsimi.net', '/v2/',?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();      https://api.simsimi.net', '/v2/',

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*𝐁𝐨𝐭 - 𝐈𝐀*_\n\n*No se pudo obtener una respuesta válida.*';
    }
  } catch (error) {
    throw `_*𝐁𝐨𝐭 - 𝐈𝐀*_\n\n*Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*`;
  }
};

handler.command = /^simi$/i;

export default handler;
