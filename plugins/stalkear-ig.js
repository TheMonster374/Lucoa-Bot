import fetch from 'node-fetch';

const handler = async (m, { conn, args }) => {
    if (!args[0]) {
        throw `ɪɴɢʀᴇꜱᴇ ᴇʟ ᴜꜱᴇʀɴᴀᴍᴇ ᴅᴇ ɪɴꜱᴛᴀɢʀᴀᴍ [🐶] ᴇᴊᴇᴍᴘʟᴏ: igstalk ale2_0_2`;
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
            throw '[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.';
        }
    } catch (error) {
        console.error(error);
        throw '[❗] ᴇʀʀᴏʀ [❗]*_\n\n*ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ɪɴᴇꜱᴘᴇʀᴀᴅᴏ.';
    }
};

handler.help = ['igstalk'];
handler.tags = ['stalkear'];
handler.command = ['igstalk'];

export default handler;
