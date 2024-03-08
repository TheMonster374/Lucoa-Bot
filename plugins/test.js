/*const handler = async (m, {conn, text, args, usedPrefix, command}) => {
    let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
  if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ ${usedPrefix + command} Pregunta? |Opcion1|Opcion2...*`;
  const caption = `Bienvenido a mi menu`.trim();
  //const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const option = ['grupo abrir','grupo cerrar'].trim();
const options = text.split("|").slice(1).map(option => ({ optionName: option.trim.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: option,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.command = ['a', 'test'];
export default handler;*/
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return conn.sendMessage(jid, { poll: { name, values, selectableCount }}) }
if (!text) return sendPoll(m.chat, `TEST`, ['abrir','cerrar'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
  conn.relayMessage(m.chat, sendPoll, {quoted: m});

if (args[0] === 'abrir') {
m.reply(`*GRUPO ABIERTO CON EXITO✅*`)
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply('`*GRUPO CERRADO CON EXITO✅*`')
await conn.groupSettingUpdate(m.chat, 'announcement')
}}
    /*if (args[0] === 'owner') {
m.reply('mi creador es')
}

else if (args[0] === 'cerrar') {
m.reply('grupo cerrado')
} */

handler.command = /^(test|XD)$/i;

export default handler;
