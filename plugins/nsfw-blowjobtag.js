import fetch from "node-fetch";
let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, 
const handler = async (m, { conn, command }) => {
    try {
        let text = ''; // Aquí puedes definir el texto que quieras enviar junto con la imagen o GIF
        let apiUrl = `https://api.waifu.pics/nsfw/${command}`;
        let jkis = await (await fetch(apiUrl)).json();
        let { url } = jkis;

        // Envío del texto mencionando al usuario con la imagen o GIF
        conn.reply(m.chat, `
🤤👅🥵 *TE HAN HECHO UNA MMDA*🥵👅🤤

*LA PERRA DE* *${text}* ⁩ *TE HA HECHO LA MMDA DE TU VIDA, QUE PERRA, COMO GOZABA LA MALDITA SORRA!*

🤤🥵 *¡TREMENDA MMDA!* 🥵🤤`, null, { mentions: [m.sender] });

        // Envío de la imagen o GIF
        conn.sendFile(m.chat, url, '', '', m, false, { mimetype: 'image/gif' }); // Puedes ajustar el mimetype según el tipo de archivo que estés recibiendo de la API

    } catch {
        throw `*Ocurrió un error inesperado*`;
    }
};

handler.help = [blowjob].map((v) => v + ' <@user>');
handler.tags = ['fun'];
handler.command = /^(blowjob|strap)$/i;
handler.register = true;
export default handler;
