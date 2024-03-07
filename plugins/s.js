const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  // const b = text.split('|');
//  if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
 // if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;*/
if (!text) return conn.sendPoll(m.chat, `${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['owner','grupo cerrar'])
  const caption = `Menu`.trim();
  const options = 
    if (args[0] === 'owner') {
m.reply('Mi creador es')
} else if (args[0] === 'cerrar') {
m.reply('xd')
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['poll', 'encuesta'];
export default handler;
