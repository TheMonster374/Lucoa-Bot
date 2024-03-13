import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*_uso incorrecto_* \n\n*ejemplo:*  ${usedPrefix + command} Minecraft*`;
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `*resultado de* ${text}`, fkontak);
};
handler.help = ['imagen'];
handler.tags = ['serch', 'tools'];
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
