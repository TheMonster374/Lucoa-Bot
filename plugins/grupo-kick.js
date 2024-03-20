const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const kicktext = `*_etiqueta a alguien o responde a su mensaje para eliminarlo_*\n*ejemplo:* *${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.help = ['kick']
handler.tags = ['grupo']
handler.command = /^(kick|echar|hechar|sacar)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
