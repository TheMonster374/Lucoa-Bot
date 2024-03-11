//import fetch from 'node-fetch';

let handler = async (m, {conn, command}) => {
  
    const url = `https://api.cafirexos.com/api/nsfw/nsfwass=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
        throw `¡Oops! Parece que hubo un error al buscar el Pokémon. Por favor, inténtalo de nuevo más tarde.`;
    }
}
    await conn.sendFile(m.chat, url, "test.jpg", `` .trim(), )

handler.command = ["ass"];

export default handler;
