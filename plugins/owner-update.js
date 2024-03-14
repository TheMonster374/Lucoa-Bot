import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {

    await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
  
  try {
          const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
          let messager = stdout.toString()
          if (messager.includes('Already up to date.')) messager = '[ ✅ ] no hay actualizaciones pendientes*'
          if (messager.includes('Updating')) messager = '*_actualizacion exitosa_*\n\n' + stdout.toString()
          conn.reply(m.chat, messager, m);
  } catch {      
 try {    
      const status = execSync('git status --porcelain');
      if (status.length > 0) {
        const conflictedFiles = status
          .toString()
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('JTSession/') || line.includes('npm-debug.log')) {
              return null;
            }
            return '*→ ' + line.slice(3) + '*';
          })
          .filter(Boolean);
        if (conflictedFiles.length > 0) {
          const errorMessage = `𝗨𝗣𝗗𝗔𝗧𝗘\n\n*ꜱᴇ ʜᴀɴ ʜᴇᴄʜᴏ ᴄᴀᴍʙɪᴏꜱ ʟᴏᴄᴀʟᴇꜱ ᴇɴ ᴀʀᴄʜɪᴠᴏꜱ ᴅᴇʟ ʙᴏᴛ Qᴜᴇ ᴇɴᴛʀᴀɴ ᴇɴ ᴄᴏɴꜰʟɪᴄᴛᴏ ᴄᴏɴ ʟᴀꜱ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇꜱ ᴅᴇʟ ʀᴇᴘᴏꜱɪᴛᴏʀɪᴏ. ᴘᴀʀᴀ ᴀᴄᴛᴜᴀʟɪᴢᴀʀ, ʀᴇɪɴꜱᴛᴀʟᴀ ᴇʟ ʙᴏᴛ o ʀᴇᴀʟɪᴢᴀ ʟᴀꜱ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇꜱ ᴍᴀɴᴜᴀʟᴍᴇɴᴛᴇ*\n\n*ᴀʀᴄʜɪᴠᴏꜱ ᴇɴ ᴄᴏɴꜰʟɪᴄᴛᴏ:*\n\n${conflictedFiles.join('\n')}.*`;
          await conn.reply(m.chat, errorMessage, m);  
        }
      }
  } catch (error) {
    console.error(error);
    let errorMessage2 = '_*[❌] ocurrio un error inesperado_*';
    if (error.message) {
      errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
    }
    await conn.reply(m.chat, errorMessage2, m);
  }
 }
};
handler.help = ['update'];
handler.tags = ['owner'];
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;
