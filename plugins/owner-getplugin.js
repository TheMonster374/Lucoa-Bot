import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));
  if (!text) throw `*[❗] ingresa el nombre de algun plugin (archivo) existente*\n\n*◦ ejemplo*\n*◦ ${usedPrefix + command}* info-infobot\n\n*◦ Lista de plugins (archivos) existentes:*\n*◦* ${ar1.map((v) => ' ' + v).join`\n*◦*`}`;
  if (!ar1.includes(text)) return m.reply(`*[❗] No se encontro el plugin (archivo) llamado "${text}", ingresa alguno existente*\n\n*==================================*\n\n*◦ Lista de plugins (archivos) existentes:*\n*◦* ${ar1.map((v) => ' ' + v).join`\n*◦*`}`);
  let o;
  try {
    o = await exec('cat plugins/' + text + '.js');
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) {
      const aa = await conn.sendMessage(m.chat, {text: stdout}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa});
    }
    if (stderr.trim()) {
      const aa2 = await conn.sendMessage(m.chat, {text: stderr}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa2});
    }
  }
};
handler.help = ['getplugin'].map((v) => v + '');
handler.tags = ['owner'];
handler.command = /^(getplugin|gp)$/i;
handler.rowner = true;
export default handler;
