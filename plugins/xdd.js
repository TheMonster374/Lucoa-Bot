import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {

  let res = await fetch(`https://api.cafirexos.com/api/nsfw/nsfwass`);
  if (!res.ok) throw await res.text();

  let json = await res.json();
  if (!json.url) throw 'Error!';

  conn.sendFile(m.chat, json.url, '', global.wm, m);
};

handler.command = /^(xdd)$/i
handler.tags = ['nsfw']
handler.help = ['xdd']

export default handler
