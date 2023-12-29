const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
const optionsFull = `
_*FUNCIONES DEL BOT*_\n👑:solo creadores\n🐶:solo admins\n
 *Opción:* WELCOME
 *Comando:* ${usedPrefix + command} welcome
 *Descripción:* Activa o desactiva la bienvenida en el grupo.
 
--------------------------------

▢ *Opción:* MODO PUBLICO 👑
▢ *Comando:* ${usedPrefix + command} public

--------------------------------

▢ *Opción:* MODO HORNY 🐶
▢ *Comando:* ${usedPrefix + command} modohorny

--------------------------------

▢ *Opción:* ANTILINK 🐶
▢ *Comando:* ${usedPrefix + command} antilink
▢ *Nota:* Se necesita tener activa la función restrict.

--------------------------------

▢ *Opción:* ANTILINK 2 🐶
▢ *Comando:* ${usedPrefix + command} antilink2
▢ *Nota:* Se necesita tener activa la función restrict.

--------------------------------

▢ *Opción:* DETECT 🐶
▢ *Comando:* ${usedPrefix + command} detect
▢ *Descripción:* Activa o desacriva las notificaciones de cambios en el grupo.

--------------------------------

▢ *Opción:* DETECT 2 🐶
▢ *Comando:* ${usedPrefix + command} detect2
▢ *Descripción:* Detecta modificaciones en el grupo y mantiene una mejor gestion.

--------------------------------

▢ *Opción:* RESTRICT 👑
▢ *Comando:* ${usedPrefix + command} restrict
▢ *Descripción:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.

--------------------------------

▢ *Opción:* AUTOREAD 👑
▢ *Comando:* ${usedPrefix + command} autoread
▢ *Descripción:* Marca como leido los mensajes y los estados automáticamente.

--------------------------------

▢ *Opción:* AUDIOS 🐶
▢ *Comando:* ${usedPrefix + command} audios
▢ *Descripción:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.

--------------------------------

▢ *Opción:*  AUTOSTICKER 🐶
▢ *Comando:* ${usedPrefix + command} autosticker 
▢ *Descripción:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 

--------------------------------

▢ *Opción:* PCONLY 👑
▢ *Comando:* ${usedPrefix + command} pconly
▢ *Descripción:* El Bot solo responderá a los comandos si es un chat privado.

--------------------------------

▢ *Opción:* GCONLY 👑
▢ *Comando:* ${usedPrefix + command} gconly
▢ *Descripción:* El Bot solo respondera a los comandos si es un grupo. 

--------------------------------

▢ *Opción:* ANTIVIEWONCE 🐶
▢ *Comando:* ${usedPrefix + command} antiviewonce
▢ *Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 

--------------------------------

▢ *Opción:* ANTILLAMADAS 👑
▢ *Comando:* ${usedPrefix + command} anticall
▢ *Descripción:* El Bot bloquerá a las personas que llamen al Bot. 

--------------------------------

▢ *Opción:* ANTITOXIC 🐶
▢ *Comando:* ${usedPrefix + command} antitoxic
▢ *Nota:* Se necesita tener activa la función restrict.

--------------------------------

▢ *Opción:* ANTITRABAS 🐶
▢ *Comando:* ${usedPrefix + command} antitraba
▢ *Nota:* Se necesita tener activa la función restrict.

--------------------------------

▢ *Opción:* ANTIARABES 🐶
▢ *Comando:* ${usedPrefix + command} antiarabes
▢ *Nota:* Se necesita tener activo el welcome y el restrict.

--------------------------------

▢ *Opción:* ANTIARABES 2 🐶
▢ *Comando:* ${usedPrefix + command} antiarabes2
▢ *Nota:* Se necesita tener activa la función restrict.

--------------------------------

▢ *Opción:* MODOADMIN 🐶
▢ *Comando:* ${usedPrefix + command} modoadmin

--------------------------------

▢ *Opción:* SIMSIMI 🐶
▢ *Comando:* ${usedPrefix + command} simsimi
▢ *Descripción:* El bot empezará a responder a los mensajes usando la IA de SimSimi.

--------------------------------

▢ *Opción:* ANTIDELETE 🐶
▢ *Comando:* ${usedPrefix + command} antidelete

--------------------------------

▢ *Opción:* AUDIOS_BOT 👑
▢ *Comando:* ${usedPrefix + command} audios_bot
▢ *Descripción:* Se desactivan los audios del Bot del menuaudios para todos los chats privados.

--------------------------------

▢ *Opción:* MODOIA 👑
▢ *Comando:* ${usedPrefix + command} modoia
▢ *Descripción:* Se activa el modo "Inteligencia Artificial" con ChatGPT en todos los chats privados..

--------------------------------

▢ *Opción:* ANTISPAM 👑
▢ *Comando:* ${usedPrefix + command} antispam
▢ *Descripción:* El Bot detecta cuando un usuario hace spam de comando y lo banea por 5 segundos y lo advierte.

--------------------------------

▢ *Opción:* MODEJADIBOT 👑
▢ *Comando:* ${usedPrefix + command} modejadibot
▢ *Descripción:* Activa o desactiva el uso del comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 

--------------------------------

▢ *Opción:* 💬 | ANTIPRIVADO 👑
▢ *Comando:* ${usedPrefix + command} antiprivado
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
    case 'public':
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
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
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
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
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
