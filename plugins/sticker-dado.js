const handler = async (m, {conn}) => {
  conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`, 'error.webp', '', m, {asSticker: true});
};
handler.tags = ['sticker'];
handler.command = ['dado', 'dados', 'dadu'];
handler.help = ['dado'];
export default handler;
