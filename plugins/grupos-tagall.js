const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*Mensaje:* ${pesan}`;
  let teks = `*Etiquetando grupo*\n\n ${oi}\n\n *Personas:*\n`;
  for (const mem of participants) {
    teks += `┣ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝑰𝑵𝑰*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
