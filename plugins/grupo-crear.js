let handler = async (m, { text, args }) => {
if (!Owner) return ('> Este comando solo puede ser utilizado por mi creador >')
if (!args.join(" ")) return m.reply(`Uso: ${prefix+command} grupo nopor`)
try {
let cret = await sms.groupCreate(args.join(" "), [])
let response = await sms.groupInviteCode(cret.id)
const teksop = `     「 Grupo - Creado 」

▸ Nombre : ${cret.subject}
▸ Dueño : @${cret.owner.split("@")[0]}
▸ Creacion : ${moment(cret.creation * 1000).tz("America/Lima'").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
sms.sendMessage(m.chat, { text:teksop, mentions: await sms.parseMention(teksop)}, {quoted:m})
} catch {
m.reply(Error)
}}


handler.help = ['creargc']
handler.tags = ['owner'];
handler.command = /^(creargc|grupocrear)$/i;

export default handler;
