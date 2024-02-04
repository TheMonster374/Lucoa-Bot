import fetch from 'node-fetch';

var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*Ingrese una petición*\n\nEjemplo, !blackbox ?`, m, estilo, )

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    var apii = await fetch`https://vihangayt.me/tools/blackboxv4?q=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status && data.data) {
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*Ocurrió un fallo*`, m, estilo, )
}

handler.help = ['blackbox'];
handler.tags = ['ai'];
handler.command = /^blackbox$/i;

export default handler;
