import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';

const handler = async (m, { conn }) => {
  const name = conn.getName(m.sender);
  const usertag = '@' + m.sender.split('@s.whatsapp.net')[0];
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const { min, xp, max } = xpRange(user.level, global.multiplier);
    const message = `
┌─「 *LEVEL* 」─
┊─•✧ *Nombre* : _${name}_
┊─•✧*Nivel:* ${user.level}
┊─•✧*XP*: ${max - user.exp}
└──────────────

*Para ascender de nivel necesitas obtener ${max - user.exp} puntos de experiencia más. Sigue interactuando con el Bot!.*`.trim();
    return conn.sendMessage(m.chat, {text: message, mentions: [m.sender]}, {quoted: m});
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const levelUpMessage = `¡Felicidades, ${name}! subiste a nivel: ${user.level}`;
    const levelUpDetails = `
**
┌─「 *LEVEL* 」─
┊─•✧*Nivel anterior:* ${before}
┊─•✧*Nuevo actual:* ${user.level}
└──────────────

`.trim();
    try {
      const levelUpImage = await levelup(levelUpMessage, user.level);
      conn.sendFile(m.chat, levelUpImage, 'levelup.jpg', levelUpDetails, m);
    } catch (e) {
      conn.sendMessage(m.chat, {text: levelUpDetails, mentions: [m.sender]}, {quoted: m});
    }
  }
};
handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command = ['nivel', 'lvl', 'levelup', 'level'];
export default handler;
