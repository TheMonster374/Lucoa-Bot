const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
 // if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? x*`;
 // if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? x*`;
  const caption = `bienvenido a mi menu`.trim();
//  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
const options = text.split("|").slice(1).map(option => ({ optionName:  option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: `bienvenido a mi menu`,
        options: options,
        selectableOptionsCount: 1,
    }
  };
//conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
if (!text) return conn.sendPoll(m.chat, `${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*\nSelecione una de esta opción`, ['grupo abrir','grupo cerrar'])
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['poll', 'encuesta'];
export default handler;
