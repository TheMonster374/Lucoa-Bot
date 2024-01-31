const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*chat desbaneado con exito*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.admin = true;
export default handler;
