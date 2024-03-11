//import axios from 'axios';

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Por favor, proporciona el nombre de un Pokémon para buscar.';

const url = 'https://pokemon-api3.p.rapidapi.com/pokemon?name=%3CREQUIRED%3E';
    const response = await fetch(url);
    const json = await response.json();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'pokemon-api3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

      conn.sendMessage(m.chat, { text: result }, 'extendedTextMessage', { quoted: m });
}
  
handler.help = ['pokedex <pokemon>'];
handler.tags = ['anime', 'pokemon'];
handler.command = /^xdd/i;

export default handler;
