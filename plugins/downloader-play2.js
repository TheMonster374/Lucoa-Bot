import yts from 'yt-search';
import ytdl from 'ytdl-core';
import fetch from 'node-fetch';

let handler = async (m.reply, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `*Formato incorrecto*\ningresa el nombre de la canción\nEjemplo:\n${usedPrefix + command} Mi corazón encantado`;

  let ytse = await yts(args.join(" "));
  let vid = ytse.all.find(v => v.type === "video");
  let play = `
• Título: ${vid.title}
• Duración: ${convertDuration(vid.timestamp)}
• Vistas: ${numberWithCommas(vid.views)}
• Subido: ${vid.ago}
• Link: ${vid.url}
`.trim();
  conn.sendMessage(m.chat, {
    text: play,
    contextInfo: {
      externalAdReply: {
        title: 'Descarga de Canciones',
        thumbnailUrl: 'https://i.ibb.co/2jycYt8/images-1-6.jpg',
        sourceUrl: 'http://youtube.com/@Kriz_Chaan',
        mediaType: 1,
      }
    }
  }, { quoted: m });

  try {
    let infoo = await ytdl.getInfo('https://youtu.be/' + vid.videoId);
    let ress = ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' });
    let thumbnail = vid.thumbnail;
    conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
      forwardingScore: 200,
      isForwarded: false,
      externalAdReply: {
        showAdAttribution: true,
        title: vid.title,
        body: null,
        mediaType: 2,
        sourceUrl: 'https://youtube.com/@KrizDavid_Fdz',
        thumbnail: await (await fetch(thumbnail)).buffer(),
      }
    } });
  } catch (error) {
  
  }
};
handler.help = ["play"].map(v => v + " <búsqueda>");
handler.tags = ["descargador"];
handler.command = /^play2?$/i;
export default handler;

function convertDuration(duration) {
  if (!duration || duration.toLowerCase() === 'nan') return 'Desconocida';
  let seconds = duration.split(':').reverse().map((value, index) => parseInt(value) * Math.pow(60, index)).reduce((a, b) => a + b, 0);
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  return ${hours > 0 ? hours + ' horas ' : ''}${minutes > 0 ? minutes + ' minutos ' : ''}${secs > 0 ? secs + ' segundos' : ''};
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function timeSince(date) {
  let seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return interval + " años";
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return interval + " meses";
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return interval + " días";
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return interval + " horas";
  interval = Math.floor(seconds / 60);
  if (interval > 1) return interval + " minutos";
  return Math.floor(seconds) + " segundos";
}*/
