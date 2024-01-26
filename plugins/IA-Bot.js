import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*𝐁𝐨𝐭 - 𝐈𝐀*_\n\n*Proporciona un texto.*\n\n*Ejemplo:* _${usedPrefix + command} Hola Bot, ¿cómo estás?_`;
  let buttons = [
                    { buttonId: '!owner', buttonText: { displayText: 'xd' }, type: 1 },
                    { buttonId: '!infobot', buttonText: { displayText: 'xd' }, type: 1 }
                ]
                let buttonMessage = {
                    image: imgmenu,
                    caption: text.trim(),
                    mentions: [m.sender],
                    footer: `*${greeting}*`,
                    buttons: buttons,
                    headerType: 4,
                    contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 'VIDEO',
                    mediaUrl: 'https://pornhub.com',
                    title: 'Jotchua',
                    body: 'ALS',
                    thumbnail: catalogo,
                    sourceUrl: global.md
                    }}
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })

  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

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

handler.command = /^bot$/i;

export default handler;
