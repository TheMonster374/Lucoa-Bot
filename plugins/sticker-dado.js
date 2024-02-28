const handler = async (m, {conn}) => {
  conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`, 'error.webp', '', m, {asSticker: true});
};
handler.command = ['dado', 'dados', 'dadu'];
export default handler;
