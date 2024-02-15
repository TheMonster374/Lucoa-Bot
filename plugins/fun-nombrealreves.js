let handler = async (m, { text }) => {
  if (!text) {
    throw '𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒕𝒖 𝒏𝒐𝒎𝒃𝒓𝒆 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒔𝒆𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒅𝒐 𝒂𝒍 𝒓𝒆𝒗𝒆𝒔';
  }

  const reversedName = text.split('').reverse().join('');

  await m.reply(`*[🐶]* 𝑻𝒖 𝒏𝒐𝒎𝒃𝒓𝒆  𝒂𝒍 𝒓𝒆𝒗𝒆𝒔: ${reversedName}`);
};

handler.command = ['nombrealreves'];
handler.help = ['nombrealreves'];
handler.tags = ['fun'];
export default handler;
