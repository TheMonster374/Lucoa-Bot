import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
if (!text) {
 conn.reply(m.chat, `Hola *@${m.sender.split`@`[0]}* Quieres charlar un rato? \nResponde con *${usedPrefix + command}* (tu mensaje) \n\n*_📌 Ejemplo :_* *${usedPrefix + command}* Hola bot`, m, { mentions: [m.sender] })
 throw false
 }
    const API_URL = 'https://api.simsimi.net', '/v2/', ${encodeURIComponent(text)}`;
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
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|alexa|cortana)$/i

export default handler
