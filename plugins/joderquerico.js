let handler = async (m, {
    conn,
    args,
    usedPrefix
}) => {
    const user = global.db.data.users[m.sender];
    if (args.length !== 1 || isNaN(args[0])) {
        return conn.reply(m.chat, `❓ Ingresa el número total de regalos que deseas comprar.\nEjemplo: *${usedPrefix}buygift 2*`, m);
    }

    const total = parseInt(args[0]);
    const giftPrice = 1000;
    const maxTotal = 10;

    if (total < 1 || total > maxTotal) {
        return conn.reply(m.chat, `❌ Lo sentimos, sólo puedes comprar 1 a ${maxTotal} gift sekaligus.`, m);
    }

    const totalPrice = total * giftPrice;
    if (user.money < totalPrice) {
        return conn.reply(m.chat, `❌Lo sentimos, no tienes suficiente dinero para comprar ${total} regalos.\nCoste total: ${totalPrice} Dinero\nTu dinero actual: ${user.money} Dinero`, m);
    }

    let giftCodes = [];
    for (let i = 0; i < total; i++) {
        const giftCode = generateGiftCode();
        giftCodes.push(giftCode);
    }

    if (!conn.freegift) conn.freegift = {};
    conn.freegift[m.sender] = {
        ...(conn.freegift[m.sender] || {}),
        code: conn.freegift[m.sender]?.code ? conn.freegift[m.sender].code.concat(giftCodes) : giftCodes,
    };
    user.money -= totalPrice;
    conn.reply(m.chat, `🎁 Usted ha comprado ${total} gift con total ${totalPrice} Dinero.\n\nTu código de regalo en secuencia de números:\n${giftCodes.map((code, index) => `${index + 1}. ${code}`).join('\n')}`, m);
};
handler.help = ['buygift <total>'];
handler.tags = ['rpg'];
handler.command = /^buygift$/i;

export default handler;

function generateGiftCode() {
    const length = 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}
