import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen5
    const img = './src/Menunsfw.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const totalusr = Object.keys(global.db.data.users).length;
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))



let uptime = `${clockString(process.uptime())}`
const str = `
    > ℍ𝕠𝕝𝕒 *${taguser}*, 𝕊𝕠𝕪 𝕃𝕦𝕔𝕠𝕒
  
┏━☋ ꕥ *👤 𝗨𝗦𝗨𝗔𝗥𝗜𝗢* ꕥ
┃➥🐲 *𝘕𝘰𝘮𝘣𝘳𝘦* : ${taguser}
┃➥💎 *𝘋𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴* : ${limit}
┃➥🏆 *𝘕𝘪𝘷𝘦𝘭* : ${level}
┃➥💴 *𝘠𝘦𝘯𝘦𝘴* : ${money}
┗━━━━━━━━━━━━━☊
 ${readMore}
┏━☋ ꕥ *🐲 𝗟𝗨𝗖𝗢𝗔-𝗕𝗢𝗧* ꕥ
┃➥🧁 *𝘊𝘳𝘦𝘢𝘥𝘰𝘳𝘢*: 𝒀𝒖𝒏𝒏𝒚𝒔
┃➥👤 *𝘜𝘴𝘶𝘢𝘳𝘪𝘰𝘴* : ${totalusr}
┃➥🕘 *𝘈𝘤𝘵𝘪𝘷𝘢* : ${uptime}
┃➥✨ *𝘛𝘰𝘵𝘢𝘭 𝘨𝘳𝘶𝘱𝘰𝘴* : ${groupsIn.length}
┗━━━━━━━━━━━━━☊
 ${readMore}

❥━☋《ɴꜱꜰᴡ》🔞
╭─────────────···
┃➽ _${usedPrefix}fuck <@usuario>_
┃➽ _${usedPrefix}cum <@usuario>_
┃➽ _${usedPrefix}blowjob <@usuario>_
┃➽ _${usedPrefix}genshin_
┃➽ _${usedPrefix}swimsuit_
┃➽ _${usedPrefix}schoolswimsuit_
┃➽ _${usedPrefix}white_
┃➽ _${usedPrefix}barefoot_
┃➽ _${usedPrefix}touhou_
┃➽ _${usedPrefix}gamecg_
┃➽ _${usedPrefix}hololive_
┃➽ _${usedPrefix}uncensored_
┃➽ _${usedPrefix}sunglasses_
┃➽ _${usedPrefix}glasses_
┃➽ _${usedPrefix}weapon_
┃➽ _${usedPrefix}shirtlift_
┃➽ _${usedPrefix}chain_
┃➽ _${usedPrefix}fingering_
┃➽ _${usedPrefix}flatchest_
┃➽ _${usedPrefix}torncloth_
┃➽ _${usedPrefix}bondage_
┃➽ _${usedPrefix}demon_
┃➽ _${usedPrefix}wet_
┃➽ _${usedPrefix}pantypull_
┃➽ _${usedPrefix}headdress_
┃➽ _${usedPrefix}headphone_
┃➽ _${usedPrefix}tie_
┃➽ _${usedPrefix}anusview_
┃➽ _${usedPrefix}shorts_
┃➽ _${usedPrefix}stokings_
┃➽ _${usedPrefix}topless_
┃➽ _${usedPrefix}beach_
┃➽ _${usedPrefix}bunnygirl_
┃➽ _${usedPrefix}bunnyear_
┃➽ _${usedPrefix}idol_
┃➽ _${usedPrefix}vampire_
┃➽ _${usedPrefix}gun_
┃➽ _${usedPrefix}maid_
┃➽ _${usedPrefix}bra_
┃➽ _${usedPrefix}nobra_
┃➽ _${usedPrefix}bikini_
┃➽ _${usedPrefix}whitehair_
┃➽ _${usedPrefix}blonde_
┃➽ _${usedPrefix}pinkhair_
┃➽ _${usedPrefix}bed_
┃➽ _${usedPrefix}ponytail_
┃➽ _${usedPrefix}nude_
┃➽ _${usedPrefix}dress_
┃➽ _${usedPrefix}underwear_
┃➽ _${usedPrefix}foxgirl_
┃➽ _${usedPrefix}uniform_
┃➽ _${usedPrefix}skirt_
┃➽ _${usedPrefix}sex_
┃➽ _${usedPrefix}sex2_
┃➽ _${usedPrefix}sex3_
┃➽ _${usedPrefix}breast_
┃➽ _${usedPrefix}twintail_
┃➽ _${usedPrefix}spreadpussy_
┃➽ _${usedPrefix}tears_
┃➽ _${usedPrefix}seethrough_
┃➽ _${usedPrefix}breasthold_
┃➽ _${usedPrefix}drunk_
┃➽ _${usedPrefix}fateseries_
┃➽ _${usedPrefix}spreadlegs_
┃➽ _${usedPrefix}openshirt_
┃➽ _${usedPrefix}headband_
┃➽ _${usedPrefix}food_
┃➽ _${usedPrefix}close_
┃➽ _${usedPrefix}tree_
┃➽ _${usedPrefix}nipples_
┃➽ _${usedPrefix}erectnipples_
┃➽ _${usedPrefix}horns_
┃➽ _${usedPrefix}greenhair_
┃➽ _${usedPrefix}wolfgirl_
┃➽ _${usedPrefix}catgirl_
┃➽ _${usedPrefix}fucking_
┃➽ _${usedPrefix}vtuber_
┃➽ _${usedPrefix}xneko_
┃➽ _${usedPrefix}xnxx_
┃➽ _${usedPrefix}xnxxsearch <query>_
┃➽ _${usedPrefix}nsfw_
┃➽ _${usedPrefix}tentaculos_
┃➽ _${usedPrefix}nsfwloli_
┃➽ _${usedPrefix}nsfwcum_
┃➽ _${usedPrefix}nsfwbdsm_
┃➽ _${usedPrefix}hentaipdf_
┃➽ _${usedPrefix}rule34_
╰─────────────···
❥━━━━━━━━━━━━━☊
      

`.trim();
    if (m.isGroup) {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch (e) {
conn.reply(m.chat, '[❌] ERROR \n\n El menu tiene un error', m);
       throw (e)
  }
};
handler.command =/^(menunsfw|menu18|menuporn)/i;
handler.exp = 50;
handler.register = false;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
