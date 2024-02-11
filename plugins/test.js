import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  await conn.reply(m.chat, '*!𝗣𝗿𝗼𝘅𝗶𝗺𝗮𝗺𝗲𝗻𝘁𝗲 𝗦𝗲 𝗘𝗻𝘃𝗶𝗮𝗿𝗮́ 𝗘𝗹 𝗠𝗲𝗻𝘂́.*',m,);

  let txt = ´
    TEST´;
    
  await conn.sendMessage(m.chat, {text: txt.trim()}, {quoted: m});
    
  } catch {
    conn.reply(m.chat, '⚠️ 𝑬𝒍 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝑻𝒊𝒆𝒏𝒆 𝑼𝒏 𝑬𝒓𝒓𝒐𝒓 𝑪𝒐𝒎𝒖𝒏𝒊𝒒𝒖𝒆𝒍𝒐 𝑨𝒍 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝑶 𝑨𝒍 𝑺𝒕𝒂𝒇𝒇.', m);
  }
};

handler.command = /^(test)$/i;
export default handler;
