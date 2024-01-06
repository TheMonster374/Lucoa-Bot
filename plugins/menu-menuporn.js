 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
      — *_𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭_* —

𝗛ola, ${taguser}* Espero que tengas un lindo dia o noche 🐕


      「 𝐌𝐄𝐍𝐔 +𝟏𝟖 」
      
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pack_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pack2
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pack3_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}videoxxx_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}xxxvideo_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}videolesbixxx_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}tetas_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}booty_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}ecchi_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}furro_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}imagenlesbians_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}panties_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pene_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}porno_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}randomxxx_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}pechos_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}yaoi_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}yaoi2_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}yuri_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}yuri2_ 
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}trapito_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hentai_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwloli_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfworgy_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwfoot_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwass_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwbdsm_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwcum_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwero_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwfemdom_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}nsfwglass_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hentaipdf *<texto>*_
│❥꫶ꪆꦿꦼ͜͡🐶͘͜  _${usedPrefix}hentaisearch *<texto>*_`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, '*_𝐄𝐋 𝐌𝐄𝐍𝐔 𝐓𝐈𝐄𝐍𝐄 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐘 𝐍𝐎 𝐄𝐒 𝐏𝐎𝐒𝐈𝐁𝐋𝐄 𝐄𝐍𝐕𝐈𝐀𝐑𝐋𝐎, 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐋𝐎 𝐀𝐋 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓_*', m);
  }
};
handler.command = /^(menuporn|porn|MenuPorn)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
