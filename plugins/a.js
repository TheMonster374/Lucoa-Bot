let handler = async (m, {conn, command}) => {
// send a link
const m.reply  = await m.reply( { text: 'Hi, this was sent using https://github.com/adiwajshing/baileys' })
};
  handler.command = /^(XD)$/i;
export default handler;
