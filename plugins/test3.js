import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  m.react(rwait);

  let type = (command).toLowerCase();
  let baseUrl = 'https://nekos.best/api/v2/';

  const fetchImage = async (endpoint) => {
    try {
      const response = await fetch(baseUrl + endpoint);
      if (!response.ok) throw `❎ Error fetching ${type} image`;
      const imageBuffer = await response.buffer(); // Get the image data as a buffer
      conn.sendFile(m.chat, imageBuffer, 'img.jpg', `✅ Random ${type}`, m);
      m.react(dmoji);
    } catch (error) {
      console.error(error);
      m.reply(`❎ An error occurred while fetching the ${type} image.`);
    }
  };

  switch (type) {
    case 'husbando':
      fetchImage('husbando');
      break;

    case 'kitsune':
      fetchImage('kitsune');
      break;

    default:
      
      break;
  }
};

handler.command = ['husbando', 'kitsune'] 


export default handler
