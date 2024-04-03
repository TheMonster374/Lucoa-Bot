import fs from 'fs';
const timeout = 60000;
const poin = 1000;
const handler = async (m, {conn, usedPrefix}) => {
  conn.advpeli = conn.advpeli ? conn.advpeli : {};
  const id = m.chat;
  if (id in conn.advpeli) {
    conn.reply(m.chat, '[⚠] Todavia hay adivinanzas sin responder en este chat', conn.advpeli[id][0]);
    throw false;
  }
  const advpeli = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`));
  const json = advpeli[Math.floor(Math.random() * advpeli.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `
ⷮ *${json.question}*
*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp
`.trim();
  conn.advpeli[id] = [
    await conn.reply(m.chat, caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.advpeli[id]) await conn.reply(m.chat, `Se acabo el tiempo!\nla respuesta es: ${json.response}`, conn.advpeli[id][0]);
      delete conn.advpeli[id];
    }, timeout)];
};
handler.help = ['pelicula'];
handler.tags = ['game'];
handler.command = /^(película|pelicula|peli)$/i;
export default handler;
