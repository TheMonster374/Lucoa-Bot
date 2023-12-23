const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*responde al sticker o imagen al cual desea agregar un comando o texto*';
  if (!m.quoted.fileSha256) throw '*Solo puedes asignar comandos o textos a stickers e imagenes*';
  if (!text) throw `*error de uso, texto faltante*\n\n*uso correcto del comando:*\n*${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*ejemplo de uso correcto del comando:*\n*${usedPrefix + command} <#menu> <responder a sticker o imagen>*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*el owner solo puede realizar la modificacion*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`*El Texto asignado al sticker/imagen fue agregado a la base de datos correctamente*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
