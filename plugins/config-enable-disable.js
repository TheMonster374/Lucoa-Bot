const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
const optionsFull = `
 *Comando:* ${usedPrefix + command} ❖⊱⊰𝑾𝒆𝒍𝒄𝒐𝒎𝒆⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝑷𝒖𝒃𝒍𝒊𝒄𝒐⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒏𝒔𝒇𝒘⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌2⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒅𝒆𝒕𝒆𝒄𝒕⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒅𝒆𝒕𝒆𝒄𝒕2⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒕⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒖𝒅𝒊𝒐𝒔⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒑𝒄𝒐𝒏𝒍𝒚⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒈𝒄𝒐𝒏𝒍𝒚⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒗𝒊𝒆𝒘𝒐𝒏𝒄𝒆⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒄𝒂𝒍𝒍⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒕𝒐𝒙𝒊𝒄⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒕𝒓𝒂𝒃𝒂⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒂𝒓𝒂𝒃𝒆𝒔⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒂𝒓𝒂𝒃𝒆𝒔2⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒎𝒐𝒅𝒐𝒂𝒅𝒎𝒊𝒏⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒔𝒊𝒎𝒔𝒊𝒎𝒊⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒅𝒆𝒍𝒆𝒕𝒆⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒖𝒅𝒊𝒐𝒔_𝒃𝒐𝒕⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒎𝒐𝒅𝒐𝒊𝒂⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒔𝒑𝒂𝒎⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒎𝒐𝒅𝒆𝒋𝒂𝒅𝒊𝒃𝒐𝒕⊱⊰❖
--------------------------------
▢ *Comando:* ${usedPrefix + command} ❖⊱⊰𝒂𝒏𝒕𝒊𝒑𝒓𝒊𝒗𝒂𝒅𝒐⊱⊰❖
`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'publico':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.nsfw = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `_*FUNCIONES DEL BOT*_\n\n*La opción* _${type}_ *fue* ${isEnable ? '_activada_' : '_desactivada_'} *exitosamente para este* ${isAll ? '_bot._' : isUser ? '' : '_chat._'}`}, {quoted: m});
  //conn.sendMessage(m.chat, {text: `▢ *Opción:* ${type}\n\n▢ *Estado:* ${isEnable ? 'Activado' : 'Desactivado'}\n\n▢ *Para* ${isAll ? 'este bot' : isUser ? '' : 'este chat'}`}, {quoted: m});
};
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
