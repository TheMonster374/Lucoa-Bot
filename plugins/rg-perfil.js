import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://telegra.ph/file/06cc652844ea19e8aed1c.jpg';
  const user = global.db.data.users[m.sender];
const {money, joincount} = global.db.data.users[m.sender];
const {exp, limit, level, role} = global.db.data.users[m.sender];
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `✧ *Nombre:* ${username} ${registered ? '(' + name + ') ': ''}
✧ *Numero:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
✧ *diamantes*:  ${user.limit} 💎
✧ *Pesos*: ${user.exp} 🪙
✧ *​Nivel​*: ${user.level} 🔰
*Bio :* ${bio?.status || '-'}\n*Bio Uptade:* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}
✧ *Numero de serie:* 
${sn}`;
conn.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: { forwardingScore: 9999, externalAdReply: { showAdAttribution: true, title: packname, body: desc, sourceUrl: null, mediaType: 1, thumbnail: imgPerfil }}}, { quoted: m })
  }
};
handler.help = ['perfil', 'perfil @user'];
handler.tags = ['rg'];
handler.command = /^perfil|profile?$/i;
export default handler;
