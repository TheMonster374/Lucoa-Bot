const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[🔓] 𝑪𝒉𝒂𝒕 𝑫𝒆𝒔𝒃𝒂𝒏𝒆𝒂𝒅𝒐*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^(unbanchat|desbanearchat)$/i;
handler.rowner = true;
export default handler;
