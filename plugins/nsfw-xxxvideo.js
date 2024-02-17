import fetch from "node-fetch";
let handler = async (m, { conn, usedPrefix, command }) => {
  let name = await conn.getName(m.sender);
  if (!global.db.data.chats[m.chat].nsfw && m.isGroup)
    throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`;
  let res = await fetch(
    "https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51"
  );
  let json = await res.json();
  await conn.sendNyanCat(
    m.chat,
    global.waitt,
    null,
    null,
    null,
    null,
    m
  );
  conn.sendFile(
    m.chat,
    json.result,
    "out.png",
    `_${command}_`.trim(),
    m,
    true,
    {
      contextInfo: {
        forwardingScore: 200,
        isForwarded: false,
        externalAdReply: {
          showAdAttribution: false,
          title: null,
          body: `h`,
          mediaType: 2,
          sourceUrl: null,
          thumbnail: catalogo,
        },
        mentions: [m.sender],
      },
    },
    { quoted: m }
  );
};
handler.help = ["videoxxx"];
handler.tags = ["nsfw"];
handler.command = /^videoxxx|vídeoxxx$/i;

export default handler;
