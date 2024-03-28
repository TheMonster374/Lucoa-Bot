import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {


  if (!args[0]) throw `@taguea a un usuario`;

  let res = await fetch(`https://nekos.pro/api/fucking`);

  let json = await res.json();
  if (!json.url) throw 'Error!';

  let fuck = `
🤤👅🥵 *🤤👅🥵 *TE HAS COGIDO A ${text}*🥵👅🤤
*¡${text}!* TE HAN VIOLADO 😈
🤤🥵 *¡QUE PERRA ERES* 🥵🤤
`.trim();
  conn.sendFile(m.chat, json.url, '', fuck, m, false, { mimetype: 'image/jpeg' }, { mentions: conn.parseMention(fuck) });

    } catch (e) {
      throw e;
    }
};

handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;

export default handler
/*import fetch from "node-fetch";

const handler = async (m, { conn, command, text }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    try {
        if (!text) throw `*Por favor, menciona el usuario al que quieres enviar el mensaje.*`;

        // URL de la API según el comando
        let apiUrl = 'https://nekos.pro/api';
        if (command == 'fuck') {
            apiUrl = 'https://nekos.pro/api/fucking';
        } 

        // Obtiene la imagen de la API
        let jkis = await (await fetch(apiUrl)).json();
        let { url } = jkis;

let fuck = `
🤤👅🥵 *🤤👅🥵 *TE HAS COGIDO A ${text}*🥵👅🤤
*¡${text}!* TE HAN VIOLADO 😈
🤤🥵 *¡QUE PERRA ERES* 🥵🤤
`.trim(); // Envía la imagen obtenida de la API
        conn.sendFile(m.chat, url, '', fuck, m, false, { mimetype: 'image/jpeg' }, { mentions: conn.parseMention(fuck) }); // Ajusta el mimetype según el tipo de archivo que obtienes de la API

    } catch (e) {
      throw e;
    }
};

handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;
export default handler;

*/
