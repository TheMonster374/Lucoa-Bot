import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*_uso incorrecto_* \n\n*ejemplo:*  ${usedPrefix + command} Minecraft*`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙴𝙽𝙳𝙾 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾\n𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `*resultado de* ${text}`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;




/*import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `[💡] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐 𝒅𝒆 𝒖𝒔𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: ${usedPrefix + command} jotchua`;
    const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
if (image) conn.sendFile(m.chat, image, 'imagen.jpg', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `Whatsapp Bot Multi Device`, mediaType: 2, sourceUrl: md, thumbnail: imagen2}}}, { quoted: m })};
handler.help = ['imagen <texto>'];
handler.tags = ['search'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;


  /*  conn.sendFile(m.chat, link, 'error.jpg', `𝑹𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐 𝒅𝒆: ${text}`, m);*/
