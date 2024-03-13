let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*_etiqueta la persona que quieres que sea owner_*`
    if (global.owner.includes(who.split`@`[0])) throw '_*Ya eres mi owner*_'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `*@${who.split`@`[0]} ahora eres mi owner*`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.owner = true

export default handler
