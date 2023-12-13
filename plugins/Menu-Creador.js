/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
   「 𝐎𝐖𝐍𝐄𝐑 𝐘 𝐌𝐎𝐃𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 」
   
> *<funcion>*
=> *<funcion>*
$ *<funcion>*
_${usedPrefix}setprefix *<prefijo>*_
_${usedPrefix}resetprefix_
_${usedPrefix}autoadmin_
_${usedPrefix}grouplist_
_${usedPrefix}chetar_
_${usedPrefix}leavegc_
_${usedPrefix}cajafuerte_
_${usedPrefix}blocklist_
_${usedPrefix}addowner *<@tag / numero>*_
_${usedPrefix}delowner *<@tag / numero>*_
_${usedPrefix}block *<@tag / numero>*_
_${usedPrefix}unblock *<@tag / numero>*_
_${usedPrefix}enable *restrict*_
_${usedPrefix}disable *restrict*_
_${usedPrefix}enable *autoread*_
_${usedPrefix}disable *autoread*_
_${usedPrefix}enable *public*_
_${usedPrefix}disable *public*_
_${usedPrefix}enable *pconly*_
_${usedPrefix}disable *pconly*_
_${usedPrefix}enable *gconly*_
_${usedPrefix}disable *gconly*_
_${usedPrefix}enable *anticall*_
_${usedPrefix}disable *anticall*_
_${usedPrefix}enable *antiprivado*_
_${usedPrefix}disable *antiprivado*_
_${usedPrefix}enable *modejadibot*_
_${usedPrefix}disable *modejadibot*_
_${usedPrefix}enable *audios_bot*_
_${usedPrefix}disable *audios_bot*_
_${usedPrefix}enable *antispam*_
_${usedPrefix}disable *antispam*_
_${usedPrefix}msg *<texto>*_
_${usedPrefix}banchat_
_${usedPrefix}unbanchat_
_${usedPrefix}resetuser *<@tag>*_
_${usedPrefix}banuser *<@tag>*_
_${usedPrefix}unbanuser *<@tag>*_
_${usedPrefix}dardiamantes *<@tag> <cantidad>*_
_${usedPrefix}añadirxp *<@tag> <cantidad>*_
_${usedPrefix}banuser *<@tag>*_
_${usedPrefix}bc *<texto>*_
_${usedPrefix}bcchats *<texto>*_
_${usedPrefix}bcgc *<texto>*_
_${usedPrefix}bcgc2 *<audio>*_
_${usedPrefix}bcgc2 *<video>*_
_${usedPrefix}bcgc2 *<imagen>*_
_${usedPrefix}bcbot *<texto>*_
_${usedPrefix}cleartpm_
_${usedPrefix}restart_
_${usedPrefix}update_
_${usedPrefix}banlist_
_${usedPrefix}addprem *<@tag> <tiempo>*_
_${usedPrefix}addprem2 *<@tag> <tiempo>*_
_${usedPrefix}addprem3 *<@tag> <tiempo>*_
_${usedPrefix}addprem4 *<@tag> <tiempo>*_
_${usedPrefix}delprem *<@tag>*_
_${usedPrefix}listcmd_
_${usedPrefix}setppbot *<responder a imagen>*_
_${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
_${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
_${usedPrefix}saveimage
_${usedPrefix}viewimage
_${usedPrefix}dsowner_`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|?|menuCreador$/i;
export default handler;
