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
  conn.relayMessage(m.chat, sendPoll, {quoted: m});

if (command == 'abrir' || command == '' || command == 'Abrir') {  
m.reply(`a`);


if (command == 'banear') { 
if (!text) return m.reply(`envia uno de los siguientes comandos\n*${prefix + command} on*\n*${prefix + command} off*`)
if (!text) return conn.sendPoll(m.chat, `on*\n*off*`, ['banchat on','banchat off'])
//m.reply(`${lenguaje.enable.text}\n*${prefix + command} on*\n*${prefix + command} off*`)
if (args[0] === "on") {
global.db.data.chats[m.chat].isBanned = true
m.reply(`chat vabeadi`)
} else if (args[0] === "off") {  
global.db.data.chats[m.chat].isBanned = false
m.reply(`grupo baneado`)}}
    /*if (args[0] === 'owner') {
m.reply('mi creador es')
}

else if (args[0] === 'cerrar') {
m.reply('grupo cerrado')
} */
handler.command = /^(test|XD|abrir||Abrir|banear)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
