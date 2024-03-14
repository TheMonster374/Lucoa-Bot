import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {

  let type = (command).toLowerCase();
  let baseUrl = 'https://nekos.best/api/v2/kitsune';

  const fetchImage = async (endpoint) => {
    try {
      const response = await fetch(baseUrl + endpoint);
      if (!response.ok) throw `❎ Error fetching kitsune image`;
      const imageBuffer = await response.buffer(); // Get the image data as a buffer
      conn.sendFile(m.chat, imageBuffer, 'img.jpg', `✅ Random kitsune`, m);
    } catch (error) {
      console.error(error);
      m.reply(`❎ An error occurred while fetching the ${type} image.`);
    }
  };
};

handler.command = ['ktisune'] 


export default handler
