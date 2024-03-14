import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw 'ingresa tu numero de serie\n si no lo recuerdas puedes usar *#myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw 'numero incorrecto\n\n comprueba que lo hayas escrito bien\n\nsi no lo recuerdas puedes usar el comando *#myns*';
  user.registered = false;
  m.reply(`eliminacion exitosa \n ya no estas registrado en el bot`);
};
handler.help = ['unreg <numero de serie>']
handler.tags = ['rg'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
