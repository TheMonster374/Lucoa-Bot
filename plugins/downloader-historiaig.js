const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `[📚] 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑢𝑛 𝑢𝑠𝑢𝑎𝑟𝑖𝑜\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:*\n*${usedPrefix + command} Luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('[❗] 𝑈𝑠𝑢𝑎𝑟𝑖𝑜 𝑖𝑛𝑣𝑎𝑙𝑖𝑑𝑜 𝑜 𝑠𝑖𝑛 ℎ𝑖𝑠𝑡𝑜𝑟𝑖𝑎𝑠');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('[❗] 𝑈𝑠𝑢𝑎𝑟𝑖𝑜 𝑖𝑛𝑣𝑎𝑙𝑖𝑑𝑜 𝑜 𝑠𝑖𝑛 ℎ𝑖𝑠𝑡𝑜𝑟𝑖𝑎𝑠');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('[❗] 𝑈𝑠𝑢𝑎𝑟𝑖𝑜 𝑖𝑛𝑣𝑎𝑙𝑖𝑑𝑜 𝑜 𝑠𝑖𝑛 ℎ𝑖𝑠𝑡𝑜𝑟𝑖𝑎𝑠');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
