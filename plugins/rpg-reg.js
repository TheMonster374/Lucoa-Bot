import {createHash} from 'crypto';
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../master/handler.js'); 
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `Ya estas registrado\n\n¿quieres volver a registrarte?\n\n use este comando para eliminar su registro\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*formato incorrecto*\n\n*uso del comando: ${usedPrefix + command} nombre.edad*\n*ejemplo: ${usedPrefix + command} ALS.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*debes poner un nombre*';
  if (!age) throw '*la edad no puede estar vacia*';
  if (name.length >= 30) throw 'el nombre es demasiado largo';
  age = parseInt(age);
  if (age > 100) throw '*como sigues vivo con esa edad? 👴🏻*';
  if (age < 5) throw '*un bebé que sabe usar WhatsApp? 😲*';
  let user = global.db.data.users[m.sender]
let codigosIdiomas = ['es', 'en']
let nombresIdiomas = {'es': 'Español', 'en': 'English' }
if (user.registered === true) return m.reply(lenguaje.smsReg()) 
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *NOMBRE:* ${name}
┃ *EDAD:* ${age} años
┃ *NUMERO DE SERIE:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃¡TU NUMERO DE SERIE 
┃TE SERVIRA SI DESEAS 
┃ELIMINAR TU REGISTRO DEL BOT!
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
