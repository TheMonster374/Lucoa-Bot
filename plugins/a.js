let handler = async (m, { conn }) => {
let msg = `
*dos puntos uve @${m.sender.split`@`[0]} 

`
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['xd']
handler.tags = ['info']
export default handler
