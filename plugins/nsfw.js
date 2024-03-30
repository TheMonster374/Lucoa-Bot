import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `el nsfw esta desactivado`;
    

  if (!args[0]) throw `seleciona un tag:\nblowjob\nneko\ntrap\nwaifu`;

  let res = await fetch(`https://api.waifu.pics/nsfw/${text}`);
  if (!res.ok) throw await res.text();

  let json = await res.json();
  if (!json.url) throw 'Error!';

  conn.sendFile(m.chat, json.url, '', `${text}`, m);
};

handler.command = /^(nsfw)$/i
handler.tags = ['nsfw']
handler.help = ['nsfw']

export default handler
