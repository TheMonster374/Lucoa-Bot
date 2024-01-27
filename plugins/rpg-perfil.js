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
✧ *diamantes*:  ${user.limit}
✧ *PESOS*: ${user.exp}
✧ *​Nivel​*: ${user.level}
✧ *Premium:* ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
✧ *Numero de serie:* 
${sn}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
export default handler;
