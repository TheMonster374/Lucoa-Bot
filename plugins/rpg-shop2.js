const xplimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xplimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xplimit * count) {
    global.db.data.users[m.sender].exp -= xplimit * count;
    global.db.data.users[m.sender].money += count;
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : + ${count}💎 
‣ *Gastado* : -${xpperlimit * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Coins`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buyCoins', 'buyallCoins'];

handler.disabled = false;

export default handler;
