import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '*ɪɴɢʀᴇꜱᴇ ᴇʟ ᴛᴇxᴛᴏ Qᴜᴇ ᴅᴇꜱᴇᴇ ʙᴜꜱᴄᴀʀ* \n\n[🐶] ᴇᴊᴇᴍᴘʟᴏ: imagen perro', m);
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `*ʀᴇꜱᴜʟᴛᴀᴅᴏ ᴅᴇ :_${text}_*`
for (let g of res) {
teks += `_*${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
//m.reply(teks)
})
} 
handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>');
handler.tags = ['search'];
handler.command = /^googlef?$/i;
export default handler;

