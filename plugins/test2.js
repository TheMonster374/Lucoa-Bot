const handler = async (m, {conn}) => {
  conn.sendFile(m.chat, `https://api.waifu.im/fav`, 'error.webp', '', m, {asSticker: true});
};
handler.tags = [''];
handler.command = ['test2'];
handler.help = ['dado'];
export default handler;
