import fetch from "node-fetch";
import {createHash} from 'crypto';

const handler = async function(m, {conn, text, usedPrefix}) {
const sn = createHash('md5').update(m.sender).digest('hex');

  m.reply(`
*_Tu Numero de serie es:_*  ${sn}
`.trim());
};

handler.help = ['myns'];
handler.tags = ['rg'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
