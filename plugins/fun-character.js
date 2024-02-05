import fetch from "node-fetch";
import axios from "axios";
import { translate } from "@vitalets/google-translate-api";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `⚠️️ *Ingrese el nombre de su personaje.*\n*Ejemplo* : ${
      usedPrefix + command
    } Goku`;
  try {
    const res = await axios.get(
      `https://weeb-api.vercel.app/character?search=${text}`
    );
    const { id, name, gender, imageUrl, siteUrl, description } = res.data[0];
    let desc = await translate(`${description}`, {
      to: "es",
      autoCorrect: true,
    });
    let gen = await translate(`${gender}`, { to: "es", autoCorrect: true });
    const result = `↳  *Nombre:* ${name.full}\n↳  *Nombre Nativo:* ${name.native}\n↳  *Genero:* ${gen.text}\n↳  *Link:* ${siteUrl}\n↳  *Descripcion:* ${desc.text}`;

    conn.sendFile(m.chat, imageUrl, "out.png", result, m);
  } catch {
    m.reply("*_Lo siento, al parecer no se encontro este personaje._*");
  }
};

handler.help = ["character *<nombre>*"];
handler.tags = ["search"];
handler.command = ["character"];

export default handler;
