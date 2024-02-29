import {createHash} from 'crypto';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let name = await conn.getName(who)
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`*Tu Numero de serie es:*  ${sn}
`.trim());
};
const fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: packname, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('/Menu1.png'), sendEphemeral: true }}}
   conn.sendMessage(m.chat, {image: imagen1, caption: sn.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
handler.help = ['myns'];
handler.tags = ['rg'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
