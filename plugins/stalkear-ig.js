import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw `*𝑰𝒏𝒈𝒓𝒆𝒔𝒂 𝒆𝒍 𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆 𝒅𝒆 𝒊𝒈* \n\n [🐶] 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: igstalk ale2_0_2`;
    }

    try {
        const apiUrl = `https://api.betabotz.eu.org/api/stalk/ig?username=${args[0]}&apikey=B29wmghC`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status && data.result) {
            const userInfo = data.result.user_info;

            const infoMessage = `
                *${userInfo.full_name}/@${userInfo.username}*

*Biografía:* ${userInfo.biography}
*Enlace externo:* ${userInfo.external_url}
*Cuenta privada:* ${userInfo.is_private ? 'Sí' : 'No'}
*Verificado:* ${userInfo.is_verified ? 'Sí' : 'No'}

*ᴇꜱᴛᴀᴅÍꜱᴛɪᴄᴀꜱ:*
Posts: ${userInfo.posts}
Seguidores: ${userInfo.followers}
Siguiendo: ${userInfo.following}
${userInfo.external_url}
            `;

            await conn.sendFile(m.chat, userInfo.profile_pic_url, 'profile_pic.jpg', infoMessage, m);
        } else {
            throw '[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐';
        }
    } catch (error) {
        console.error(error);
        throw '[❗] 𝑬𝑹𝑹𝑶𝑹 [❗]*_\n\n𝑶𝒄𝒖𝒓𝒓𝒊𝒐 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒆𝒔𝒑𝒆𝒓𝒂𝒅𝒐';
    }
};

handler.help = ['igstalk'];
handler.tags = ['stalkear'];
handler.command = ['igstalk'];

export default handler;
