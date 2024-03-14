/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
if (global.conn.user.jid !== conn.user.jid) {
return conn.sendMessage(m.chat, { text: `*_Utiliza este comando en el numero principal del bot_*` }, { quoted: m })}

const sessionPath = './JTSession/';
try {
if (!existsSync(sessionPath)) {
return await conn.sendMessage(m.chat, { text: `*La carpeta (JTSession) No existe o esta vacia*` }, { quoted: m })}
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
}}
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, { text: `no se encontro ningun archivo para eliminar en la carpeta *(JTSession)*` }, { quoted: m });
} else {
await conn.sendMessage(m.chat, { text: `iniciando proceso de eliminacion de: ${filesDeleted} archivos de session, excepto el archivo *(creds.json)*` }, { quoted: m })}
} catch (err) {
console.error('error al leer o eliminar los archivos de la session', err);
await conn.sendMessage(m.chat, { text: `Ocurrio un error al eliminar las sessiones` }, { quoted: m });
}
await conn.sendMessage(m.chat, {text: `Hola, ya funciona\nsi el bot no responde a los comandos entonces haga un pequeño spam\n\n*ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, { quoted: m })}
handler.help = ['dsowner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession|deleteloli)$/i;
handler.rowner = true
export default handler;
