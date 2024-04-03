import similarity from 'similarity';
const threshold = 0.72;
const handler = (m) => m;
handler.before = async function(m) {
  const id = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0;
  this.tekateki2 = this.tekateki2 ? this.tekateki2 : {};
  if (!(id in this.tekateki)) return m.reply('*esa adivinanza ya termino*');
  if (m.quoted.id == this.tekateki2[id][0].id) {
    const json = JSON.parse(JSON.stringify(this.tekateki2[id][1]));
    if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tekateki2[id][2];
      m.reply(`*Respuesta correcta!*\n+${this.tekateki2[id][2]} Exp`);
      clearTimeout(this.tekateki2[id][3]);
      delete this.tekateki2[id];
    } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`Casi lo logras`);
    else m.reply('Respuesta incorrecta!');
  }
  return !0;
};
handler.exp = 0;
handler.limit = 3
export default handler;
