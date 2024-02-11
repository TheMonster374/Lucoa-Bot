import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[🐶]ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜꜱᴏ ᴅᴇʟ ᴄᴏᴍᴀɴᴅᴏ: ${usedPrefix + command} jotchua*`;
    const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `ʀᴇꜱᴜʟᴛᴀᴅᴏ ᴅᴇ: ${text}`, m);
};
handler.help = ['imagen <query>'];
handler.tags = ['img'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;
