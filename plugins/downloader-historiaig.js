const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*Ingresa el nombre de un usuario*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Illenium*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('*[❗] 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑰𝒏𝒗𝒂𝒍𝒊𝒅𝒐 𝒐 𝑺𝒊𝒏 𝑯𝒊𝒔𝒕𝒐𝒓𝒊𝒂𝒔*');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('*[❗] 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑰𝒏𝒗𝒂𝒍𝒊𝒅𝒐 𝒐 𝑺𝒊𝒏 𝑯𝒊𝒔𝒕𝒐𝒓𝒊𝒂𝒔*');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('*[❗] 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑰𝒏𝒗𝒂𝒍𝒊𝒅𝒐 𝒐 𝑺𝒊𝒏 𝑯𝒊𝒔𝒕𝒐𝒓𝒊𝒂𝒔*');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
