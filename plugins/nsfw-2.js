import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 𝐄𝐒𝐓𝐀𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎𝐒 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎, 𝐒𝐈 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍 𝐘 𝐃𝐄𝐒𝐄𝐀 𝐔𝐒𝐀𝐑𝐋𝐎𝐒 𝐔𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 #enable modohorny*';

  case 'ahegao':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!AntiNsfw) return reply(mess.nonsfw);
        A17.sendMessage(from, { react: { text: "🥵", key: m.key } })

        var nsfwdata = JSON.parse(fs.readFileSync('./HostMedia/nsfw/agegao.json'))
        var kairesult = pickRandom(nsfwdata)
        A17.sendMessage(m.chat, { caption: mess.success, image: { url: kairesult.url } }, { quoted: m })
        break;

};
handler.help = ['ahegao'];
handler.command = ['ahegao'];
handler.tags = ['nsfw'];
export default handler;
