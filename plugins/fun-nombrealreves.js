let handler = async (m, { text }) => {
  if (!text) {
    throw '*ᴘᴏʀ ꜰᴀᴠᴏʀ, ᴇꜱᴄʀɪʙᴇ ᴛᴜ ɴᴏᴍʙʀᴇ ᴘᴀʀᴀ Qᴜᴇ ꜱᴇᴀ ᴄᴏɴᴠᴇʀᴛɪᴅᴏ ᴀʟ ʀᴇᴠᴇꜱ*';
  }

  const reversedName = text.split('').reverse().join('');

  await m.reply(`*[🐶]ᴛᴜ ɴᴏᴍʙʀᴇ ᴀʟ ʀᴇᴠᴇꜱ*: ${reversedName}`);
};

handler.command = ['nombrealreves'];
handler.help = ['nombrealreves'];
handler.tags = ['fun'];
export default handler;
