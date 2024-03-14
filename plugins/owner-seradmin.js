
const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*_Hola creador, ahora es admin_*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❌] Ocurrio un error inesperado y no logre darle admin*');
  }
};
handler.help = ['seradmin'];
handler.tags = ['owner'];
handler.command = /^(autoadmin|seradmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
