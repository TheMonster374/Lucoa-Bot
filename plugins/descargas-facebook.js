
import fg from 'api-dylux';
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
if (!args[0]) throw `✳️ ha habido un error corrobore que haya puesto todo bien\n\n📌 ejemplo :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`

  try {
    let result = await fg.fbdl(args[0]);
    let tex = `
┌─⊷ *FBDL*
▢ *${mssg.title}:* ${result.title}
└───────────`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
  } catch (error) {
    m.reply(ha habido un error)
  }
};
handler.help = ['facebook'].map(v => v + ' <url>');
handler.tags = ['dl'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;
