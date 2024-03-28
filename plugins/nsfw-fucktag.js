import fetch from 'node-fetch'
export default handler

let handler = async (m, { conn, command, text }) => {
if (!text) throw `@taguea a un usuario`


  let res = await fetch(`https://nekos.pro/api/fucking`);

  let json = await res.json();
  if (!json.url) throw 'Error!';

  let fuck = `
🤤👅🥵 *🤤👅🥵 *TE HAS COGIDO A ${text}*🥵👅🤤
*¡${text}!* TE HAN VIOLADO 😈
🤤🥵 *¡QUE PERRA ERES* 🥵🤤
`.trim();
  conn.sendFile(m.chat, json.url, '', fuck, m, false, { mimetype: 'image/jpeg' }, { mentions: conn.parseMention(fuck) });

handler.help = ['fuck'].map((v) => v + ' <@usuario>');
handler.tags = ['nsfw'];
handler.command = /^(fuck)$/i;
handler.register = true;
export default handler
