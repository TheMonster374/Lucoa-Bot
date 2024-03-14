const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*_[🔓] Chat Desbaneado, ahora respondere a todos los comandos_*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^(unbanchat|desbanearchat)$/i;
handler.rowner = true;
export default handler;
