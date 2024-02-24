const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[ 🔒 ] 𝑪𝒉𝒂𝒕 𝑩𝒂𝒏𝒆𝒂𝒅𝒐*\n\n*𝑬𝒍  𝑩𝒐𝒕 𝑵𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓𝒂 𝒂 𝒏𝒊𝒏𝒈𝒖𝒏 𝒄𝒐𝒎𝒂𝒏𝒅𝒐*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^(banchat|banearbot)$/i;
handler.rowner = true;
export default handler;
