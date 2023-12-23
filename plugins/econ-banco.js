let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let username = conn.getName(who)
    //let { wealth } = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ este usuario no se encuentra en mi database`

    var wealth = 'banca rota😭'
     if (`${user.bank}`           <= 3000){
            wealth = 'banca rota😭'
      } else if (`${user.bank}`   <= 6000){
            wealth = 'pobre😢'
        } else if (`${user.bank}` <= 100000){
            wealth = 'promedio💸'
        } else if (`${user.bank}` <= 1000000){
            wealth = 'rico💸💰'
        } else if (`${user.bank}` <= 10000000){
            wealth = 'millonario🤑'
        } else if (`${user.bank}` <= 1000000000){
            wealth = 'Multi-millonario🤑'
        } else if (`${user.bank}` <= 10000000000){
            wealth = 'billonario🤑🤑'
        }    
    
    conn.reply(m.chat, `🏦 *Banco | ${username}*

*coins🪙* : ${user.bank}

*poder :* ${wealth}

`, m, { mentions: [who] })  //${user.chicken}
}
handler.help = ['bank']
handler.tags = ['economy']
handler.command = ['bank', 'vault', 'banco'] 

export default handler
