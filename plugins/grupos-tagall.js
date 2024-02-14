const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝑴𝒆𝒏𝒔𝒂𝒋𝒆:* ${pesan}`;
  let teks = `*⺀𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨𝑵𝑫𝑶 𝑮𝑹𝑼𝑷𝑶𝙾⺀*\n\n ${oi}\n\n *𝑷𝑬𝑹𝑺𝑶𝑵𝑨𝑺:*\n`;
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
