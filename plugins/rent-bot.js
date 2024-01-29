const limit = 200;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / limit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].limit >= limit * count) {
    global.db.data.users[m.sender].limit -= limit * count;
    global.db.data.users[m.sender].exp += count;
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : + ${count} hora de bot en tu grupo (pasar link)
‣ *Gastado* : -${xpperlimit * count} 💎
└──────────────`, m);
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficiente *Diamantes💎* para comprar *${count}* hora de bot en tu grupo`, m);
};
handler.help = ['rentar', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['rentar', 'buyall'];

handler.disabled = false;

export default handler;
