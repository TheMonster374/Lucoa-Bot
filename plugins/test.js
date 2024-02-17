const maker = require('mumaker')

    start: async(Yaka, m, { pushName, prefix, text }) => {
        if (!text.includes("|")) return m.reply(`Example: *${prefix}pornhub Yaka MD | Yakashi*`);
        const teks1 = text.split("|")[0];
        const teks2 = text.split("|")[1];
        
        maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${teks1}`, `${teks2}`])
            .then((data) => Yaka.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
            .catch((err) => m.reply('An Error occued!'));
    }
handler.command = ["ph"]
module.exports = {
    category: "Logo Maker",
    handler: {
        command: ['ph']
    }},
