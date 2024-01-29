const xpperlimit = 200;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^RentarBot/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].limit >= xpperlimit * count) {
    global.db.data.users[m.sender].limit -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : + ${count} hora el bot en tu grupo (mandar enlace al bot) 
‣ *Gastado* : -${xpperlimit * count} Diamantes💎
└──────────────`, m);
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficiente *Diamantes💎* para comprar *${count}* Hora el bot en tu grupo`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['rentbot', 'RentarBot'];

handler.disabled = false;

export default handler;
