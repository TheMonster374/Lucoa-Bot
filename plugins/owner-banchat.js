const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*_[🔒] Chat baneado_*\n\n*el bot no respondera a ningun comando*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^(banchat|banearbot)$/i;
handler.rowner = true;
export default handler;
