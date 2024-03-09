import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if (!chat.isBanned && m.text.match(/(:v)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    const vn = './storage/img/test.webp';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {sticker: {url: vn}, fileName: 'sticker.webp', mimetype: 'image/webp', ptt: true}, {quoted: m});
  }
  
 
  return !0;
};
export default handler;
