import fetch from 'node-fetch'
const handler = async (m, { conn, text }) => {
  if (!text) {
throw * 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙾𝙽𝚃𝚁𝙰𝚂𝙴𝙽̃𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝚃𝚄 𝚂𝙰𝙻𝙰, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 ${usedPrefix + command} 12345678*
let textfilter = text.toLowerCase()
let res = await fetch(global.API('https://anonyzoom.herokuapp.com', '/index.php', { pass: textfilter }))
let json = await res.json()
if (json.Join_URL == '') { throw '* 𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙶𝙴𝙽𝙴𝚁𝙰𝚁 𝙻𝙰 𝚂𝙰𝙻𝙰 𝚅𝙸𝚁𝚃𝚄𝙰𝙻, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝚃𝙴𝙽𝚃𝙴𝙻𝙾 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾*'
} else {
let zoomA = `[ 𝐆𝐄𝐍𝐄𝐑𝐀𝐃𝐎𝐑 𝐃𝐄 𝐒𝐀𝐋𝐀𝐒 𝐃𝐄 𝐙𝐎𝐎𝐌 ]\n
𝙻𝙸𝙽𝙺 𝚉𝙾𝙾𝙼: ${json.Join_URL}
𝙲𝙾𝙽𝚃𝚁𝙰𝚂𝙴𝙽̃𝙰: ${json.Password}
𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙻𝙰 𝚃𝚁𝙰𝙽𝚂𝙼𝙸𝚂𝙸𝙾𝙽: ${json.Duration} minutos`
await conn.reply(m.chat, zoomA, m)
}}

 } catch (error) {
    console.error(error);
    throw `
> ꜱɪɴ ʀᴇꜱᴘᴜᴇꜱᴛᴀ
ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴘʀᴏᴄᴇꜱᴀʀ ʟᴀ ꜱᴏʟɪᴄɪᴛᴜᴅ: ${error.message}`;
  }
};
handler.command = /^(zoom|zoomgen|videollamada)$/i
export default handler;
