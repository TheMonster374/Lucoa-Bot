import ytdl from 'ytdl-core';
import fs from 'fs';

const handler = async (m, {conn, args, isPrems, isOwner, command}) => {
  const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
  };
  if (args.length === 0) {
    m.reply(`𝒊𝒏𝒔𝒆𝒓𝒕𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 + 𝒆𝒍 𝒆𝒏𝒍𝒂𝒄𝒆 / 𝑳𝒊𝒏𝒌 𝒅𝒆 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒅𝒆 𝒚𝒐𝒖𝒕𝒖𝒃𝒆`);
    return;
  }
  try {
    const urlYt = args[0];
    if (!urlYt.startsWith('http')) {
      m.reply(`𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐 𝒅𝒆 𝒚𝒐𝒖𝒕𝒖𝒃𝒆 🤓👆`);
      return;
    }
    const infoYt = await ytdl.getInfo(urlYt);
    const titleYt = infoYt.videoDetails.title;
    const randomName = getRandom('.mp4');
    const stream = ytdl(urlYt, {filter: (info) => info.itag == 22 || info.itag == 18}).pipe(fs.createWriteStream(`./tmp/${randomName}`));
    m.reply(global.wait);
    // console.log("Descargando ->", urlYt);
    await new Promise((resolve, reject) => {
      stream.on('error', reject);
      stream.on('finish', resolve);
    });
    const stats = fs.statSync(`./tmp/${randomName}`);
    const fileSizeInBytes = stats.size;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    // console.log("Tamaño del video: " + fileSizeInMegabytes);
    if (fileSizeInMegabytes <= 999) {
      if (command == 'ytshort') {
        conn.sendMessage( m.chat, {video: fs.readFileSync(`./tmp/${randomName}`), fileName: `${titleYt}.mp4`, mimetype: 'video/mp4'}, {quoted: m});
      } else {
        conn.sendMessage( m.chat, {document: fs.readFileSync(`./tmp/${randomName}`), fileName: `${titleYt}.mp4`, mimetype: 'video/mp4'}, {quoted: m});
      }
    } else {
      m.reply(`*𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐 𝒆𝒔 𝒔𝒖𝒑𝒆𝒓𝒊𝒐𝒓 𝒂 𝟿𝟿𝟿 𝑴𝑩*`);
    }
    fs.unlinkSync(`./tmp/${randomName}`);
  } catch (e) {
    m.reply(e.toString());
  }
};
handler.help = ['videodoc'];
handler.tags = ['downloader'];
handler.command = ['videodoc', 'documentvid', 'videodocumento', 'ytshort'];
export default handler;
