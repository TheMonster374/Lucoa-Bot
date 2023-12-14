const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*mensaje de despedida configurado para este grupo correctamente*');
  } else throw `*ingrese el mensaje de despedida que desee agregar, use:*\n*- @user (mención)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
