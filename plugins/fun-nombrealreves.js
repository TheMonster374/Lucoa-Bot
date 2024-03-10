let handler = async (m, { text }) => {
  if (!text) {
    throw 'ingresa un nombre para que sea convertido al reves\n\n*ejemplo:* .nombrealreves ALS';
  }

  const reversedName = text.split('').reverse().join('');

  await m.reply(`*[⚜]* tu nombre al reves es: ${reversedName}`);
};

handler.command = ['nombrealreves'];
handler.help = ['nombrealreves'];
handler.tags = ['fun'];
export default handler;
