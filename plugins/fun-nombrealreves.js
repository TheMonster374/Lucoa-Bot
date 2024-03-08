let handler = async (m, { text }) => {
  if (!text) {
    throw '[📚] 𝑖𝑛𝑔𝑟𝑒𝑠𝑎 𝑢𝑛 𝑛𝑜𝑚𝑏𝑟𝑒 𝑝𝑎𝑟𝑎 𝑞𝑢𝑒 𝑠𝑒𝑎 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑑𝑜 𝑎𝑙 𝑟𝑒𝑣𝑒𝑠\n\n*[💡] 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:* .nombrealreves ALS';
  }

  const reversedName = text.split('').reverse().join('');

  await m.reply(`*[⚜]* 𝑇𝑢 𝑛𝑜𝑚𝑏𝑟𝑒 𝑎𝑙 𝑟𝑒𝑣𝑒𝑠 𝑒𝑠: ${reversedName}`);
};

handler.command = ['nombrealreves'];
handler.help = ['nombrealreves'];
handler.tags = ['fun'];
export default handler;
