import {createHash} from 'crypto';
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
m.reply(`*_Tu Numero de serie es:_*  ${sn}
`.trim(), {contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `GRUPO DE WHATSAPP`,
body: `🤍 Unete al grupo OFC`,
mediaType: 1,
sourceUrl: 'https://chat.whatsapp.com/Jql7XsV7V179fvOmKnEftc',
thumbnailUrl: 'https://i.imgur.com/yafZkFB.jpeg'
}}}, { quoted: m })
});
};
handler.help = ['myns'];
handler.tags = ['rg'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
