import fs from 'fs';
const timeout = 60000;
const poin = 1000;
const handler = async (m, {conn, usedPrefix}) => {
  conn.advpeli = conn.advpeli ? conn.advpeli : {};
  const id2 = m.chat;
  if (id2 in conn.advpeli) {
    conn.reply(m.chat, '[⚠] Todavia hay adivinanzas sin responder en este chat', conn.advpeli[id2][0]);
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
  conn.advpeli[id2] = [
    await conn.reply(m.chat, caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.advpeli[id2]) await conn.reply(m.chat, `Se acabo el tiempo!\nla respuesta es: ${json.response}`, conn.advpeli[id2][0]);
      delete conn.advpeli[id2];
    }, timeout)];
};
handler.help = ['pelicula'];
handler.tags = ['game'];
handler.command = /^(película|pelicula|peli)$/i;
export default handler;
