let handler = async (m, { text, args }) => {
  if (!args.join(" ")) throw `[🐶] pon un nombre perra`
try {
let cret = await sms.groupCreate(args.join(" "), [])
let response = await sms.groupInviteCode(cret.id)
const teksop = `     「 Grupo - Creado 」

▸ Nombre : ${cret.subject}
▸ Dueño : @${cret.owner.split("@")[0]}
▸ Creacion : ${moment(cret.creation * 1000).tz("America/Lima'").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
sms.sendMessage(m.chat, { text:teksop, mentions: await sms.parseMention(null)}, {quoted:m})
} catch {
m.reply(`${error.message}`)
}}


handler.help = ['creargc']
handler.tags = ['owner'];
handler.command = /^(creargc|grupocrear)$/i;
handler.rowner = true;
export default handler;
