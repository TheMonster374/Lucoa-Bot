//import { bold } from "chalk"
let handler = async (m, { conn, text }) => {
   
   if (!text) return m.reply('*_escribe el nombre que quieres que tenga tu grupo_*')
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
 /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
    m.reply('_grupo creado correctamente *' + text + '*_\n\n*Nombre:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
       } catch (e) {
    m.reply(`[❌] ocurrio un error inesperado`)
  }
}
handler.help = ['creategroup']
handler.tags = ['owner']
handler.command = ['creategroup', 'creargrupo']
handler.owner = true

export default handler
