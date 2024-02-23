import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒕𝒖 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆, 𝒔𝒊 𝒏𝒐 𝒍𝒐 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂𝒔 𝒑𝒖𝒆𝒅𝒆𝒔 𝒖𝒔𝒂𝒓 #myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐, 𝒄𝒐𝒎𝒑𝒓𝒖𝒆𝒃𝒂 𝒒𝒖𝒆 𝒍𝒐 𝒉𝒂𝒚𝒂𝒔 𝒆𝒔𝒄𝒓𝒊𝒕𝒐 𝒃𝒊𝒆𝒏\n\n𝒔𝒊 𝒏𝒐 𝒍𝒐 𝒓𝒆𝒄𝒖𝒆𝒓𝒅𝒂𝒔 𝒑𝒖𝒆𝒅𝒆𝒔 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 #myns';
  user.registered = false;
  m.reply(`𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒄𝒊𝒐𝒏 𝒆𝒙𝒊𝒕𝒐𝒔𝒂, 𝒚𝒂 𝒏𝒐 𝒆𝒔𝒕𝒂𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐 𝒆𝒏 𝒆𝒍 𝒃𝒐𝒕`);
};
handler.help = ['unreg <numero de serie>']
handler.tags = ['rg'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
