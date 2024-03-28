let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber q tan puta es*`
/*  let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;*/
    let gay2 = `*🏳️‍🌈🏳️‍🌈 ${text} ES ${Math.floor(Math.random() * 600)}% GAY, QUE GAY🏳️‍🌈🏳️‍🌈*.
    `.trim();
m.reply(gay2, null, { mentions: conn.parseMention(gay2) })}
}

handler.help = ['gay2'].map((v) => v + ' <@user>')
handler.tags = ['fun']
handler.command =/^(gay2)/i
handler.fail = null
export default handler



/*const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `etiqueta a alguien para saber que tan gay es`;
const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay3':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*Los calculos han arrojado que 😄*${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n Eso es bajo... ¡Tu eres Joto, no Gay!`;
      } else if (percentages > 100) {
        description = `${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*`;
      } else {
        description = `${text.toUpperCase()} ${percentages}% Gay. ${emoji}*`;
      }
      break;

handler.command = /^(gay3)$/i;
export default handler*/
