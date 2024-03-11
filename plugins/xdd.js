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
}

try {
	const response = await fetch(url, options);
	const result = await response.text();

	    const message = `
*Pokedex - Información de ${json.name}*

*Nombre:* ${json.name}
*ID:* ${json.id}
*Tipo:* ${json.type}
*Habilidades:* ${json.abilities}
*Tamaño:* ${json.height}
*Peso:* ${json.weight}

📖 *Descripción:*
${json.description}

🔍 ¡Encuentra más detalles sobre este Pokémon en la Pokedex! 🔍

🔗 [Pokedex](https://www.pokemon.com/es/pokedex/${json.name.toLowerCase()})
    `

    conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
}
}
  
handler.help = ['pokedex <pokemon>'];
handler.tags = ['anime', 'pokemon'];
handler.command = /^xdd/i;

export default handler;
