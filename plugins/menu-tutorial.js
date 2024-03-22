/*let handler = async (m, { usedPrefix, conn, command, text }) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`*/
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const totalusr = Object.keys(global.db.data.users).length;
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
┌───⊷ _𝔹𝕀𝔼ℕ𝕍𝔼ℕ𝕀𝔻𝕆_ ⊶
▢ ¡Hola! *${taguser}* bienvenido al grupo 
▢ Yo soy *Inabakumori*, un bot divertido de WhatsApp
└──────────────
%readmore
┌───⊷ *Pero.. ¿Que es un bot? 🤖* ⊶
▢  Es un robot que responde a ciertos comandos 
▢  y tiene múltiples funciones, como *descargar música/videos de cualquier plataforma*
▢  *tiene diferentes IAs y herramientas de moderación ee grupos*
▢  *¡y muchas mas cosas divertidas!*
└──────────────
%readmore
┌───⊷ *¿Como lo uso?*⊶
▢  Para usar el bot, primero te tienes que registrar 
▢  en su base de datos, tranquilo no es nada difícil,
▢  tienes que escribir el siguiente comando:
❏ *${usedPrefix}reg [TuNombre].[TuEdad]
▢
▢  ¡Y listo, ya puedes usar los diferentes comandos del bot!
└──────────────
%readmore
┌───⊷_*Mas tutoriales (pronto)*_
❏ *${usedPrefix}tutorpg*
❏ *${usedPrefix}tutoias*
❏ *${usedPrefix}tutosubbots*
❏ *${usedPrefix}tutodescargas*
❏ *${usedPrefix}tutogrupos (solo admins)*
❏ *${usedPrefix}tutoenable (solo admins)*
❏ *${usedPrefix}tutonsfw
❏ *${usedPrefix}tutojuegos
❏ *${usedPrefix}tutofun*
❏ *${usedPrefix}tutotools*
└──────────────
)
`.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❌] ocurrio un error inesperado al enviar el menu*', m);
      }
};
handler.help = ['tutorial'];
handler.command =/^(tutorial|tuto|new|nuevo)/i ;
handler.tags = ['begin'];
handler.group = true;
handler.fail = null;
handler.register = false;
export default handler 
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
