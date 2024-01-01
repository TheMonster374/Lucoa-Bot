const { cmd, pickRandom } = require('../lib')
const os = require('os')
const diskusage = require('diskusage')
const moment = require("moment-timezone")
const fs = require("fs")

cmd({
pattern: "menu",
desc: "comandos del bot",
filename: __filename,
category: "help",
},
async(conn, m ) => {
const { commands } = require('../lib/commands.js') 

    const cmds = {}
    commands.map(async(command, index) => {
    if (command.dontAddCommandList === false && command.pattern !== undefined) {
    if (!cmds[command.category]) cmds[command.category] = []
    cmds[command.category].push(command.pattern)
    }
    })
    
    const time = moment(moment()).format('HH:mm:ss')
    moment.tz.setDefault('Asia/KOLKATA').locale('id')
    const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
    let str = `╭────《 ` + global.botname + ` 》─────⊷\n`
str += `│ ╭──────────────◆
│ │ usuario: ${await conn.getName(m.sender)}
│ │ creador: Skid
│ │ Plugins: ${commands.length}
│ │ Hora: ${time}
│ │ Fecha: ${date}
│ ╰──────────────◆
╰───────────────⊷\n
`
for (const category in cmds) {
str += `╭────❏ *${category}* ❏\n` 
if (m.text.toLowerCase() == category.toLowerCase()) {
str = `╭─────❏ *${category}* ❏\n`       
for (const plugins of cmds[category]) { 
str += `│ ${plugins}\n` 
}
str += `╰━━━━━━━━━━━━━──⊷\n`  
break 
} else {
for (const plugins of cmds[category]) {
str += `│ ${plugins}\n`
}
str += `╰━━━━━━━━━━━━━━──⊷\n`   
}}


let lol = pickRandom(["🌐", "🌟", "✨", "📍", "🚩"])
let proTip = pickRandom([`usa ${global.prefix}serbot para convertirte en bot`, `Unete al grupo oficial si hay algun cambio`, "tienes alguna idea de comando? cuentame desde el *grupo oficial*", "tienes un host? descarga a skid bot desde *github*"])
str += `╭─────❏ *audios* ❏\n`
str += '│a\n'
str += '│uwu\n'
str += '│epico\n'
str += '│rawr\n'
str += '│shitpost\n'
str += '│epico\n'
str += '│siuuu\n'
str += '│mierda de bot\n'
str += '│onichan\n'
str += '│la biblia\n'
str += '│es puto\n'
str += '│bañate\n'
str += '│yamete\n'
str += '│te amo\n'
str += '│un pato\n'
str += '│sexo\n'
str += '│baneado\n'
str += '│viernes\n'
str += '│baneado\n'
str += `╰━━━━━━━━━━━━━━──⊷\n`
str += `${lol} *Pro tip*: ${proTip}`
await conn.sendMessage(m.chat, {   
    text: str,  
    contextInfo:{  
    forwardingScore: 9999999,  
    isForwarded: true,   
    mentionedJid: [m.sender],  
    "externalAdReply": {  
    "showAdAttribution": true,  
    "containsAutoReply": true,
    "renderLargerThumbnail": true,  
    "title": global.botname,   
    "body": 'made with ♥️',
    "containsAutoReply": true,  
    "mediaType": 1,   
    "thumbnail": global.menu,  
    "mediaUrl": `https://chat.whatsapp.com/JPJ0n2V0uujCRvmJRNM7ZU`,  
    "sourceUrl": `https://chat.whatsapp.com/JPJ0n2V0uujCRvmJRNM7ZU`  
    }
    }  
    }, { quoted: m})
    await conn.sendNyanCat(m.chat, '*ATENCION*\n*durante esta semana se estara mejorando al bot, por lo que habra muchos reinicios*', global.menu3, '[ I N F O ]', 'nueva update!!', m)
    })
    
    cmd({
        pattern: "ping",
        desc: "verificar el ping",
        category: "info",
        filename: __filename,
    },
    async(conn, m) => {
        var inital = new Date().getTime()
        const { key } = await conn.sendMessage(m.chat, {text: '```Ping!!!```'})
        var final = new Date().getTime()
       return await conn.sendMessage(m.chat, {text: '*Pong*\n *' + (final - inital) + ' ms* ', edit: key})
    })
    cmd({
    pattern: "estado",
    alias: ["status", "checkbot"],
    desc: "checar el estado del bot",
    category: "info",
    }, 
    async (conn, m) => {
     let cpuInfo = os.cpus() 
 let Cores = cpuInfo.length 
 let Model = cpuInfo[0].model 
 let arch = os.arch() 
 let memory = os.totalmem() 
 let skidCheck = '/' 
 let getGroups = await conn.groupFetchAllParticipating() 
 let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]) 
 let anu = groups.map(v => v.id) 
 let usedRam = process.memoryUsage() 
 diskusage.check(skidCheck, (err, info) => { 
     if (err) { 
         console.error(err) 
         return 
     } 
  
     let totalUwu = info.total 
     let freee = info.free 
     let txtt = ` 
     🌐 Estado del Sistema 🌐 
  
 ➤ Sistema Operativo: ${os.platform()} 
 ➤ Arquitectura: ${arch} 
 ➤ CPU: ${Model} 
 ➤ Núcleos: ${Cores} 
 ➤ Memoria RAM: ${formatByte(memory)}/${formatByte(usedRam.rss)} 
 ➤ Espacio en Disco Usado: ${formatByte(totalUwu)} 
 ➤ Espacio Total en Disco: ${formatByte(freee)} 
      
   
     🌀 Estado del Bot 🌀
  
 ➤ Jadibots: ${listJadibot.length} 
 ➤ Chats: ${anu.length}  
 ➤ Usuarios: ${Object.keys(global.db.data.users).length} 
 ➤ Estado: released
 `
 m.reply(txtt, global.fkontak)
 })
    
})


let file = require.resolve(__filename)  
  fs.watchFile(file, () => {  
  fs.unwatchFile(file)  
  console.log(`Update ${__filename}`)
  delete require.cache[file]  
  require(file)  
  })
