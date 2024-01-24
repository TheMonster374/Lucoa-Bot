import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `_*𝐆𝐈𝐓𝐂𝐋𝐎𝐍𝐄*_\n\n*Ingrese un enlace de GitHub.*\n\n*Ejemplo:* _${usedPrefix + command} https://github.com/AleXD0009/Jotchua-Bot_`;
  if (!regex.test(args[0])) throw '_*𝐆𝐈𝐓𝐂𝐋𝐎𝐍𝐄*_\n\n*El enlace que proporcionó es incorrecto.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`_*𝐆𝐈𝐓𝐂𝐋𝐎𝐍𝐄*_\n\n*Se está enviando el archivo. espere...*\n\n*Si no se envía, podría ser porque supera el límite de tamaño.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.command = /gitclone/i;
handler.limit = 1
export default handler;
