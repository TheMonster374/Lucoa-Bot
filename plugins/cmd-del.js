const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*SOLO SE PUEDEN ASIGNAR TEXTOS O COMANDOS ASIGNADOS A STICKERS O IMAGENES, PARA OBTENER EL CODIGO ASIGNADO USE EL COMANDO ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*solo el creador puede realizar la eliminacion*';
  delete sticker[hash];
  m.reply(`*El texto a el sticker/imagen fue eliminado de la base de datos correctamente*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
