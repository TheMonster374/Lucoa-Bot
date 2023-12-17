const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」*\n
*IDENTIFICACION DEL GRUPO:* 
${groupMetadata.id}

*NOMBRE:* 
${groupMetadata.subject}

*DESCRIPCION:* 
${groupMetadata.desc?.toString() || 'SIN DESCRIPCION'}

*TOTAL DE PARTICIPANTES:*
${participants.length} Participantes

*CREADOR DEL GRUPO:* 
@${owner.split('@')[0]}

*ADMINS DEL GRUPO:*
${listAdmin}

*OPCIONES AUTOMATICAS:*
WELCOME: ${welcome ? '✅' : '❌'}
DETECT: ${detect ? '✅' : '❌'} 
DETECT 2: ${detect2 ? '✅' : '❌'} 
ANTILINK: ${antiLink ? '✅' : '❌'} 
ANTILINK 𝟸: ${antiLink2 ? '✅' : '❌'} 
MODO HORNY: ${modohorny ? '✅' : '❌'} 
AUTOSTICKER: ${autosticker ? '✅' : '❌'} 
AUDIOS: ${audios ? '✅' : '❌'} 
ANTIVIEWONCE: ${antiviewonce ? '✅' : '❌'} 
ANTIDELETE: ${antidelete ? '✅' : '❌'} 
ANTITOXIC: ${antiToxic ? '✅' : '❌'} 
ANTITRABAS: ${antiTraba ? '✅' : '❌'} 
MODOADMIN: ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
