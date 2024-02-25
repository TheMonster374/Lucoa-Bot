import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `[📚] 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝑮𝒊𝒕𝑯𝒖𝒃.\n\n*[💡] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐:* _${usedPrefix + command} https://github.com/AleXD0009/Jotchua-mini_`;
  if (!regex.test(args[0])) throw '_*𝑮 𝑰 𝑻 𝑪 𝑳 𝑶 𝑵 𝑬*_\n\n*[ ❌ ] El enlace que proporcionó es incorrecto.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`_*𝑮 𝑰 𝑻 𝑪 𝑳 𝑶 𝑵 𝑬*_\n\n*[ ⏳ ] 𝑺𝒆 𝒆𝒔𝒕á 𝒆𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝒆𝒍 𝒂𝒓𝒄𝒉𝒊𝒗𝒐. 𝒆𝒔𝒑𝒆𝒓𝒆...*\n\n*[ ⚠ ] 𝑺𝒊 𝒏𝒐 𝒔𝒆 𝒆𝒏𝒗í𝒂, 𝒑𝒐𝒅𝒓í𝒂 𝒔𝒆𝒓 𝒑𝒐𝒓𝒒𝒖𝒆 𝒔𝒖𝒑𝒆𝒓𝒂 𝒆𝒍 𝒍í𝒎𝒊𝒕𝒆 𝒅𝒆 𝒕𝒂𝒎𝒂ñ𝒐.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone']
handler.tags = ['downloader']
handler.command = /gitclone/i;
export default handler;
