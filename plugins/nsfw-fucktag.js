import fetch from "node-fetch";

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
`.trim();  conn.sendMessage(fuck, url, '', '', m, false, { mimetype: 'image/jpeg' },  { mentions: conn.parseMention(fuck) }); 


        /*// Envía la imagen obtenida de la API
        conn.sendFile(m.chat, url, '', '*MIREN A LA MUY PUTA*', m, false, { mimetype: 'image/jpeg' }); // Ajusta el mimetype según el tipo de archivo que obtienes de la API
*/
    } catch (e) {
      throw e;
    }
};

handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;
export default handler;

/*import fetch from "node-fetch";

const handler = async (m, { conn, command, text }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    try {
        if (!text) throw `*Por favor, menciona el usuario al que quieres enviar el mensaje.*`;

        // Obtiene el usuario mencionado en el texto del comando
        let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    let mentionedUser = await conn.getName(m.sender) // Obtenemos el nombre del usuario que envió el mensaje original
    if (!mentionedUser) throw 'No se pudo obtener el nombre del usuario.'
 

        // URL de la API según el comando
        let apiUrl = 'https://nekos.pro/api';
        if (command == 'fuck') {
            apiUrl = 'https://nekos.pro/api/fucking';
        } 

        // Obtiene la imagen de la API
        let jkis = await (await fetch(apiUrl)).json();
        let { url } = jkis;

       // Envía el texto mencionando al usuario con la imagen
        conn.reply(m.chat, `
🤤👅🥵 *🤤👅🥵 *TE HAS COGIDO A ${user}*🥵👅🤤
*¡${user}!* TE HAN VIOLADO 😈
🤤🥵 *¡QUE PERRA ERES* 🥵🤤`, null, { mentions: [m.sender] });

        // Envía la imagen obtenida de la API
        conn.sendFile(m.chat, url, '', '*MIREN A LA MUY PUTA*', m, false, { mimetype: 'image/jpeg' }); // Ajusta el mimetype según el tipo de archivo que obtienes de la API

    } catch {
        throw `*Ocurrió un error inesperado*`;
    }
};

handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;
export default handler;*/
