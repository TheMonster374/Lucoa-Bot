const handler = async (m, {conn, text}) => {
  if (!text) throw '*_ingresa un texto_*';
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '`aqui tienes tu comentario`', m);
};
handler.help = ['ytcomment <texto>'];
handler.tags = ['efectos'];
handler.command = /^(ytcomment|comentario)$/i;
export default handler;
