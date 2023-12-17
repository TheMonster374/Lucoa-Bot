import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*Ingrese el numero de serie, si no lo recuerda usar el comando #myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*numero de serie incorrecto, compruebe que lo haya escrito correctamente!*\n\n*si no lo recuerda puede usar el comando #myns*';
  user.registered = false;
  m.reply(`*𝚂𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾, 𝚄𝚂𝚃𝙴𝙳 𝚈𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
