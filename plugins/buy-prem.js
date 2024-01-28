const xpperlimit = 100;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buyprem/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  const prem = Math.floor(Math.random() * 3600000)
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].limit >= xpperlimit * count) {
    global.db.data.users[m.sender].limit -= xpperlimit * count;
    global.db.data.users[m.sender].premium += count;
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : + ${count} hora premium 
‣ *Gastado* : -${xpperlimit * count} 💎
└──────────────`, m);
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficiente *diamanantes* para comprar *${count}* hora premium`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buyprem', 'BuyPrem'];

handler.disabled = false;

export default handler;
