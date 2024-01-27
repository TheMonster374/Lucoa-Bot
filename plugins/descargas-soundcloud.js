import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) throw `*Ingresa el nombre de la cancion a buscar*`;
  try {
    const res = await fetch(`https://api-v2.soundcloud.com/search/tracks?q=${text}&client_id=iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX`);
    const json2 = await res.json();
    let permalinkUrl;
    if (json2.collection.length > 0) {
      const randomIndex = Math.floor(Math.random() * json2.collection.length);
      const randomObject = json2.collection[randomIndex];
      permalinkUrl = randomObject.permalink_url;
    } else {
      permalinkUrl = await json2.collection[0].permalink_url;
    }
    const res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${permalinkUrl}`);
    const json = await res2.json();
    const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text();
    const soundcloudt = `𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃\n┬\n├ *TITULO:* ${json.title}\n┴\n┬\n├ *URL DIRECTO:* ${shortUrl}\n┴\n┬\n├ *-ᴇɴᴠɪᴀɴᴅᴏ ᴍᴜꜱɪᴄᴀ...\n├‣ _﹫ᴊᴏᴛᴄʜᴜᴀ-ʙᴏᴛ_\n┴`;
    await conn.sendFile(m.chat, json.thumb, '', soundcloudt, m);
    await conn.sendMessage(m.chat, {audio: {url: json.link}, fileName: `${json.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch {
    throw '*No se logro encontrar la cancion, intentalo denuevo mas tarde*';
  }
};
handler.command = /^(soundcloud|cover)$/i;
export default handler;
