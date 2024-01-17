const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*el chat fue baneado con exito*\n\n*el bot no respondera a ningun comando hasta desbanear el chat*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
