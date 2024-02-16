//import { bold } from "chalk"
let handler = async (m, { conn, text }) => {
   
   if (!text) return m.reply('[ ⚠ ] _𝑬𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐!_')
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    m.reply('_𝑮𝒓𝒖𝒑𝒐 𝒄𝒓𝒆𝒂𝒅𝒐 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂𝒎𝒆𝒏𝒕𝒆 *' + text + '*_\n\n*𝑵𝒐𝒎𝒃𝒓𝒆:* ' + text + '\n*𝑰𝑫:* ' + group.gid + '\n*𝑳𝒊𝒏𝒌:* ' + url)
       } catch (e) {
    m.reply(`[❌] 𝑬𝑹𝑹𝑶𝑹 [❌]`)
  }
}
handler.help = ['creategroup']
handler.tags = ['owner']
handler.command = /^((create|buat)(gc|grup|group))$/
handler.owner = true
handler.premium = false
export default handler
