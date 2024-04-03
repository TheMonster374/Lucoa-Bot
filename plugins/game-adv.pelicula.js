import fs from 'fs';
const timeout = 60000;
const poin = 1000;
const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki2 = conn.tekateki2 ? conn.tekateki2 : {};
  const id = m.chat;
  if (id in conn.tekateki2) {
    conn.reply(m.chat, '[⚠] Todavia hay adivinanzas sin responder en este chat', conn.tekateki2[id][0]);
    throw false;
  }
  const tekateki2 = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`));
  const json = tekateki2[Math.floor(Math.random() * tekateki2.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ *${json.question}*
*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp
`.trim();
  conn.tekateki2[id] = [
    await conn.reply(m.chat, caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki2[id]) await conn.reply(m.chat, `Se acabo el tiempo!\nla respuesta es: ${json.response}`, conn.tekateki2[id][0]);
      delete conn.tekateki2[id];
    }, timeout)];
};
handler.help = ['pelicula'];
handler.tags = ['game'];
handler.command = /^(película|pelicula|peli)$/i;
export default handler;
