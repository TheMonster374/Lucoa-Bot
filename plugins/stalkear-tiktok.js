import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, args, command}) => {
 if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*', m);
try {  	
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
let txt = `┏━━≪ *TIKTOK STALK* ≫━•
┃🔖 *Nombre* ${res.name}
┃🔖 nombre de usuario ${res.username}
┃👥 seguidores ${res.followers}
┃🫂 siguiendo ${res.following}
┃📌 biografia ${res.desc}
┃━━━━━━━━━━━━━━
┃ *🔗 Link* : https://tiktok.com/${res.username}
┗━━━━━━━━━━━━━•`
await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
} catch (e) {
m.reply(`ha ocurrio un error`)
console.log(e)}}

handler.command = /^(tiktokstalk)$/i;
export default handler;
