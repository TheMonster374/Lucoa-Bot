import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*ingresa un enlace de github.*\n\nejemplo: _${usedPrefix + command} https://github.com/AleXD0009_`;
  if (!regex.test(args[0])) throw '[ ❌ ] el enlace es incorrecto';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`[ ⏳ ] 𝑆𝑒 𝑒𝑠𝑡𝑎 𝑒𝑛𝑣𝑖𝑎𝑛𝑑𝑜 𝑒𝑙 𝑎𝑟𝑐ℎ𝑖𝑣𝑜, 𝑒𝑠𝑝𝑒𝑟𝑎...\n\n[ ⚠ ] 𝑆𝑖 𝑛𝑜 𝑠𝑒 𝑒𝑛𝑣𝑖𝑎 𝑝𝑢𝑒𝑑𝑒 𝑠𝑒𝑟 𝑝𝑜𝑟𝑞𝑢𝑒 𝑠𝑢𝑝𝑒𝑟𝑎 𝑒𝑙 𝑙𝑖𝑚𝑖𝑡𝑒 𝑑𝑒 𝑡𝑎𝑚𝑎ñ𝑜`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone']
handler.tags = ['downloader']
handler.command = /gitclone/i;
export default handler;
