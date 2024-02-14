import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*[🐶] 𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒖𝒓𝒍 𝒑𝒂𝒓𝒂 𝒂𝒄𝒐𝒓𝒕𝒂𝒓*';
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `*[❗] 𝑬𝑹𝑹𝑶𝑹 [❗], 𝑪𝒐𝒎𝒑𝒓𝒖𝒆𝒃𝒆 𝒒𝒖𝒆 𝒆𝒍 𝒕𝒆𝒙𝒕𝒐 𝒊𝒏𝒈𝒓𝒆𝒔𝒂𝒅𝒐 𝒔𝒆𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐*`;
  const done = `*𝑳𝑰𝑵𝑲 𝑨𝑪𝑶𝑹𝑻𝑨𝑫𝑶 𝑪𝑶𝑹𝑹𝑬𝑪𝑻𝑨𝑴𝑬𝑵𝑻𝑬 🐶*\n\n*𝑳𝑰𝑵𝑲 𝑨𝑵𝑻𝑬𝑹𝑰𝑶𝑹:*\n${text}\n*𝑳𝑰𝑵𝑲 𝑨𝑪𝑶𝑹𝑻𝑨𝑫𝑶:*\n${shortUrl1}`.trim();
  m.reply(done);
};
handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|short|acortar|corto)$/i;
handler.fail = null;
export default handler;
