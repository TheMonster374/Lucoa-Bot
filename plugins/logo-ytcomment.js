const handler = async (m, {conn, text}) => {
  if (!text) throw '𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐';
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '𝑨𝒒𝒖𝒊 𝒆𝒔𝒕𝒂  𝒕𝒖 𝒄𝒐𝒎𝒆𝒏𝒕𝒂𝒓𝒊𝒐', m);
};
handler.help = ['ytcomment <texto>'];
handler.tags = ['logos'];
handler.command = /^(ytcomment|comentario)$/i;
export default handler;
