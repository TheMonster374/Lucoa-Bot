let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  if (!args[0] || args[0] == "help") return m.reply(`*ZONA - PEPERANGAN*

1. War Zone es un juego de guerra con sistema de ataque por turnos o turnos para atacar
2. El juego puede comenzar con 1v1 hasta 5v5.
3. El capital de guerra es el botín de guerra si tu equipo gana.
4. Cada jugador obtendrá 5000 HP (puntos de salud)
5. El éxito de un ataque depende de tu nivel y del nivel del enemigo al que estás atacando.
6. La posibilidad de atacar es de 40 segundos, más de eso se considera AFK (reducción de 2500 HP)
7. Un equipo ganará si el equipo contrario lo pierde todo (HP <= 0) y se queda con el botín de guerra.

*DAFTAR PERINTAH*
*${usedPrefix + command} join A/B* = Bergabung
*${usedPrefix + command} left* = Keluar
*${usedPrefix + command} money 10000* = Jumlah 🪙 Flint Taruhan
*${usedPrefix + command} player* = Daftar Pemain
*${usedPrefix + command} start* = Memulai Permainan`)


  if (args[0] == "money"){
    if (!(m.chat in conn.war)) return m.reply(`*Silahkan Buat Room Terlebih Dahulu, Ketik .war join*`)
    if(m.sender == conn.war[m.chat][0].user){
      if (args[1] != "undefined" && !isNaN(args[1])){
        args[1] = parseInt(args[1])
        if (args[1] < 1000) return m.reply('*Minimal 1000 🪙 Flint*')
        conn.war2[m.chat].money = args[1]
        return m.reply("*Berhasil Menetapkan Taruhan Perang Sebesar " + Number(args[1]).toLocaleString() + " 🪙 Flint*")
      }else {
        return m.reply("*Masukkan Jumlah Taruhan Perang Berupa Angka, Ketik .war money Jumlahnya*")
      }
    }else {
      return conn.reply(m.chat,`*Hanya @${conn.war[m.chat][0].user.split('@')[0]} Sebagai Pembuat Room Yang Bisa Mengganti Modal Awal Perang*`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
    }
  }

  // JOIN
  if (args[0] == "join"){
    
    if (global.db.data.users[m.sender].money < 1000) return m.reply("*🪙 Flint Kamu Minimal 1000 Untuk Bermain Game Ini*")
    // FIRST PLAYER
    if (!(m.chat in conn.war)) {
      conn.war2[m.chat] = {"war" : false, "turn" : 0, "time" : 0, "money" : 0}
      conn.war[m.chat] = []
      let exp = global.db.data.users[m.sender].exp
      conn.war[m.chat][0] = {"user": m.sender, "hp": 5000, "lvl": global.db.data.users[m.sender].level, "turn" : false}
      for (let i=1;i<10;i++){
        conn.war[m.chat][i] = {"user": "", "hp" : 0, "lvl" : 0, "turn" : false}
      }
      return m.reply(`*Berhasil Masuk Ke Dalam Permainan Sebagai Team A*\n\n*.war join a/b* = Bergabung\n*.war start* = Memulai Permainan`)
    }else {   // NOT FIRST PLAYER
      // IF FULL
      if (conn.war2[m.chat].war) {
        return m.reply(`*Permainan Sudah Dimulai, Tidak Bisa Bergabung*`)
      }
      // IF YOU ALREADY JOIN THE GAME
      for (let i = 0; i < conn.war[m.chat].length ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          let total = 0
          for (let i = 0 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              total += 1
            }
          }
          return m.reply(`*Anda Sudah Masuk Ke Dalam Permainan*\n\n*.war join a/b* = Bergabung\n*.war start* = Memulai Permainan`)
        }
      }
      
      // JOIN MILIH TIM
      if (args[1]){
        if (args[1].toLowerCase() == "a"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Tolong @${conn.war[m.chat][0].user.split('@')[0]} Tetapkan Jumlah Taruhan Awal Perang*\n\n.war money Jumlahnya`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          return m.reply('a')
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*🪙 Flint Kamu Minimal ${conn.war2[m.chat].money.toLocaleString()} Untuk Bermain Permainan Ini*`)
          for (let i = 1 ; i < 5 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Berhasil Masuk Ke Dalam Permainan Sebagai Team A*\n\n*.war join a/b* = Bergabung\n*.war start* = Memulai Permainan`)
            }
          } 
        }else if (args[1].toLowerCase() == "b"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Tolong @${conn.war[m.chat][0].user.split('@')[0]} Tetapkan Jumlah Taruhan Awal Perang*\n\n.war money Jumlahnya`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*🪙 Flint Kamu Minimal ${conn.war2[m.chat].money.toLocaleString()} Untuk Bermain Permainan Ini*`)
          for (let i = 5 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Berhasil Masuk Ke Dalam Permainan Sebagai Team B*\n\n*.war join a/b* = Bergabung\n*.war start* = Memulai Permainan`)
            }
          }
        }else {
          return m.reply(`*Pilih Salah Satu Tim A Atau B*\n\n.war join A\n.war join B`)
        }
      }else {
        // JOIN SESUAI URUTAN
        return m.reply(`*Pilih Salah Satu Tim A Atau B*\n\n.war join A\n.war join B`)
      }
      

      // CHECK IF ROOM FULL
      for (let i = 0 ; i < conn.war[m.chat].length ; i++) {
        let total = 0
        if (conn.war[m.chat][i].user != ""){
          total += 1
        }
        if (total == 10) conn.war2[m.chat].war = true
      }
    }
  }

  // LEFT GAME
  if (args[0] == "left"){
    // IF GAME START
    if (conn.war2[m.chat].war) {
      m.reply(`*Perang Sudah Dimulai, Anda Tidak Bisa Keluar*`)
    }else {   // IF NOT
      for (let i = 0 ; i < 10 ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          return m.reply(`*Berhasil Keluar Dari Permainan*`)
        }
      }
      return m.reply(`*Kamu Tidak Sedang Berada Di Dalam Game*`)
    }
  }

  // CEK PLAYER
  if (args[0] == "player"){ 
    if (!(m.chat in conn.war)) return m.reply(`*Tidak Ada Pemain Yang Bergabung Room War Zone*`)
    var teamA = []
    var teamB = []
    var teamAB = []
    for (let i = 0 ; i < conn.war[m.chat].length ; i++){
      if (i < 5){
        if (conn.war[m.chat][i].user != "") teamA.push(conn.war[m.chat][i].user)
      }else {
        if (conn.war[m.chat][i].user != "") teamB.push(conn.war[m.chat][i].user)
      }
      teamAB.push(conn.war[m.chat][i].user)
    }
    // return m.reply(teamA[0])
    conn.reply(m.chat, `${conn.war2[m.chat].war ? '*Giliran : ' + '@' + conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0] + '*\n*Taruhan: ' + Number(conn.war2[m.chat].money).toLocaleString() + ' 🪙 Flint*\n\n' : '*Taruhan: ' + Number(conn.war2[m.chat].money).toLocaleString() + ' 🪙 Flint*\n\n' }*TEAM A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i].lvl} HP: ${conn.war[m.chat][i].hp})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i+5].lvl} HP: ${conn.war[m.chat][i+5].hp})`).join`\n`,m, {contextInfo: {
      mentionedJid: teamAB
    }})
  }

  // START GAME
  if (args[0] == "start"){
    if (conn.war2[m.chat].war) return m.reply(`*La guerra ha comenzado, no puedes unirte*`)
    teamA = 0
    teamB = 0
    for (let i=0;i<10;i++){
      if(i<5){
        if (conn.war[m.chat][i].user != "") teamA += 1
      }else{
        if (conn.war[m.chat][i].user != "") teamB += 1
      }
    }

    if (teamA == teamB && teamA > 0){
      conn.war2[m.chat].war = true
      for (let i=0;i<5;i++){
        if (conn.war[m.chat][i].user != ""){
          let user = conn.war[m.chat][i].user
          return conn.reply(m.chat,`*El juego comenzó con éxito*\n*Por favor @${user.split('@')[0]} atacar al enemigo*\n\n.war player = Estadísticas del jugador\n.ataque @tag = Oponente de ataque`, m, {contextInfo: { mentionedJid: [user] }})
        }
      }
    }else {
      if (teamA > teamB){
        m.reply(`*Equipo B menos ${teamA-teamB} Más gente por el juego limpio*`)
      }else {
        m.reply(`*Equipo A menos ${teamB-teamA} Más gente por el juego limpio*`)
      }
    }
  } else {
  throw '*Por favor únete primero*'
  }

}
handler.help = ['war']
handler.tags = ['game']
handler.command = /^(war|guerra)$/i
handler.group = true
export default handler
