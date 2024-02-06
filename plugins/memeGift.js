import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
    const str = `
HOLA


`.trim();
    let pp = 'https://telegra.ph/file/f47d11d87a8737521c523.mp4'
    let pp2 = 'https://telegra.ph/file/d8bb7bbbdf37f881d9dbe.mp4'
    let pp3 = 'https://telegra.ph/file/a0f562dbc0afd26b9e4e2.mp4'
    let pp4 = 'https://telegra.ph/file/25c6e374e2090e5e56ba3.mp4'
    let pp5 = 'https://telegra.ph/file/f059cb792da2882dfe3a2.mp4'
    let pp6 = 'https://telegra.ph/file/7819bfe96e675672063c5.mp4'
    let pp7 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp8 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp9 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp10 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp11 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp12 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp13 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp14 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    let pp15 = 'https://telegra.ph/file/5907bc67d5846c5f4b52b.mp4'
    conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })
 
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(meme|Meme|MEME|Momazo|momazo)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
