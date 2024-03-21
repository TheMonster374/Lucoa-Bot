export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *DEJASTE DE ESTAR INACTIVO (AFK)${user.afkReason ? ' DESPUES DE ESTAR INACTIVO (AFK) POR EL MOTIVO: ' + user.afkReason : ''}*
  
  *TIEMPO DE INACTIVIDAD (AFK): ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*_NO LO ETIQUETES_*

*_EL USUARIO QUE USTED ETIQUETO ESTA INACTIVO (AFK)_*      
*${reason ? 'MOTIVO DE INACTIVIDAD (AFK): ' + reason : 'MOTIVO DE INACTIVIDAD (AFK): _𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝙿𝙴𝙲𝙸𝙵𝙸𝙲𝙾 𝚄𝙽 𝙼𝙾𝚃𝙸𝚅𝙾_'}*
*TIEMPO TRANSCURRIDO DE INACTIVIDAD (AFK): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
