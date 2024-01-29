const xpperlimit = 150;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^rentar/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  const prem = Math.floor(Math.random() * 3600000)
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].limit >= xpperlimit * count) {
    global.db.data.users[m.sender].limit -= xpperlimit * count;
    global.db.data.users[m.sender].premium += count;
    conn.reply(m.chat, `
┌─「 *𝐑𝐄𝐍𝐓𝐀𝐑 𝐁𝐎𝐓* 」
‣ *Compra nominal* : + ${count} hora de bot en tu grupo (pasar link) 
‣ *Gastado* : -${xpperlimit * count} 💎
└──────────────`, m);
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficiente *diamantes💎* para comprar *${count}* hora bot en tu grupo`, m);
};
handler.help = ['rentar', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['rentar', 'rentarbot'];

handler.disabled = false;

export default handler;
