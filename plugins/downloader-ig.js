import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw `${JT.smsIG}.\n\n ${JT.smsEjemplo} *.ig* `;
    }

    try {
        const apiUrl = `${apikasu}/api/dowloader/instagram?url=${args[0]}&apikey=${apikeykasu}`
        const response = await fetch(apiUrl);
        const responseData = await response.json();


        if (responseData.status && responseData.result.length > 0) {
            for (const media of responseData.result) {
                await conn.sendFile(m.chat, media.link, media.ext === 'mp4' ? 'video.mp4' : 'imagen.jpg', '', m);
            }
        } else {
            throw `
> ⚠️ 𝑬𝒓𝒓𝒐𝒓 ⚠️ 

[❌] 𝑵𝒐 𝒔𝒆 𝒑𝒖𝒅𝒐 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒆𝒍 𝒄𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒅𝒆 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎.`;
        }
    } catch (error) {
        console.error(error);
        throw `
> ⚠️ 𝑬𝒓𝒓𝒐𝒓 ⚠️

[❌] 𝑶𝒄𝒖𝒓𝒓𝒊ó 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒂𝒍 𝒑𝒓𝒐𝒄𝒆𝒔𝒂𝒓 𝒍𝒂 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅: ${error.message};`
    }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagramdl|instagram|igdl|ig)$/i;

export default handler;
