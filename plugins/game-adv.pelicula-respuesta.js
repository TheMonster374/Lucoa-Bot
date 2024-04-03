import similarity from 'similarity';
const threshold = 0.72;
const handler = (m) => m;
handler.before = async function(m) {
  const id2 = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0;
  this.advpeli = this.advpeli ? this.advpeli : {};
  if (!(id2 in this.advpeli)) return m.reply('*esa adivinanza ya termino*');
  if (m.quoted.id2 == this.advpeli[id2][0].id) {
    const json = JSON.parse(JSON.stringify(this.advpeli[id2][1]));
    if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.advpeli[id2][2];
      m.reply(`*Respuesta correcta!*\n+${this.advpeli[id2][2]} Exp`);
      clearTimeout(this.advpeli[id2][3]);
      delete this.advpeli[id2];
    } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`Casi lo logras`);
    else m.reply('Respuesta incorrecta!');
  }
  return !0;
};
handler.exp = 0;
handler.limit = 3
export default handler;
