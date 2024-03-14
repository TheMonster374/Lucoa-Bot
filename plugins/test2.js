const handler = async (m, {conn}) => {
  conn.sendFile(m.chat, `https://nekos.pro/api/nsfw-neko`, 'error.webp', '', m, {asSticker: true});
};
handler.tags = [''];
handler.command = ['test'];
handler.help = ['dado'];
export default handler;
