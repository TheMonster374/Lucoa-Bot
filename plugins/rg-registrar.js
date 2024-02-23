import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `Ya estas registrado\n\n¿Quieres volver a registrate??\n\n 📌Usa este comando para eliminar tu registro del bot\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `uso incorrecto\n\n*ejemplo de uso de comando: ${usedPrefix + command} nombre.edad*\n*Ejemplo: ${usedPrefix + command} Ale.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙴𝙱𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*';
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰*';
  if (name.length >= 30) throw 'El nombre es demasiado largo';
  age = parseInt(age);
  if (age > 100) throw '*[❗] estas muy viejo para usar el bot*';
  if (age < 5) throw '*[❗] estas muy chiquito para usar el bot*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const str = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 INFORMACION 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *Nombre:* ${name}
┃ *Edad:* ${age} años
┃ *Numero de serie:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃tu numero de serie 
servira por si quieres
borrar tu registro
┗┅ ━━━━━━━━━━━━ ┅ ━`;
conn.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: { forwardingScore: 9999, externalAdReply: { showAdAttribution: true, title: packname, body: desc, sourceUrl: null, mediaType: 1, thumbnail: imagen7 }}}, { quoted: m })
/*  await conn.sendFile(m.chat, pp, 'mystic.jpg', str);
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;*/
};
handler.help = ['registrar'];
handler.tags = ['rg'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
