
const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[❗] 𝑻𝒐𝒎𝒆 𝑪𝒓𝒆𝒂𝒅𝒐𝒓, 𝒖𝒔𝒕𝒆𝒅 𝒚𝒂 𝒆𝒔 𝒂𝒅𝒎𝒊𝒏*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗], 𝒏𝒐 𝒍𝒐𝒈𝒓𝒆 𝒅𝒂𝒓𝒍𝒆 𝒂𝒅𝒎𝒊𝒏 😖*');
  }
};
handler.help = ['seradmin'];
handler.tags = ['owner'];
handler.command = /^(autoadmin|seradmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
