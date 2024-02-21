import axios from 'axios';
const handler = async (m, {args}) => {
  if (!args[0]) throw '[💡] 𝑬𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒕𝒖 𝒑𝒂𝒊𝒔 𝒐 𝒄𝒊𝒖𝒅𝒂𝒅';
  try {
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`);
    const res = await response;
    const name = res.data.name;
    const Country = res.data.sys.country;
    const Weather = res.data.weather[0].description;
    const Temperature = res.data.main.temp + '°C';
    const Minimum_Temperature = res.data.main.temp_min + '°C';
    const Maximum_Temperature = res.data.main.temp_max + '°C';
    const Humidity = res.data.main.humidity + '%';
    const Wind = res.data.wind.speed + 'km/h';
    const wea = `「 📍 」𝑳𝑼𝑮𝑨𝑹: ${name}\n「 🗺️ 」𝑷𝑨𝑰𝑺: ${Country}\n「 🌤️ 」𝑻𝑰𝑬𝑴𝑷𝑶: ${Weather}\n「 🌡️ 」𝑻𝑬𝑴𝑷𝑬𝑹𝑨𝑻𝑼𝑹𝑨: ${Temperature}\n「 💠 」 𝑻𝑬𝑴𝑷𝑬𝑹𝑨𝑻𝑼𝑹𝑨 𝑴𝑰𝑵𝑰𝑴𝑨: ${Minimum_Temperature}\n「 📛 」 𝑻𝑬𝑴𝑷𝑬𝑹𝑨𝑻𝑼𝑹𝑨 𝑴𝑨𝑿𝑰𝑴𝑨: ${Maximum_Temperature}\n「 💦 」𝑯𝑼𝑴𝑬𝑫𝑨𝑫: ${Humidity}\n「 🌬️ 」 𝑽𝑰𝑬𝑵𝑻𝑶: ${Wind}`;
    m.reply(wea);
  } catch {
    return '*[⚠️] 𝑬𝑹𝑹𝑶𝑹 [⚠️]\n\n 𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒐𝒏 𝒓𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐𝒔, 𝑪𝒐𝒓𝒓𝒐𝒃𝒐𝒓𝒆 𝒒𝒖𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒕𝒖 𝒑𝒂𝒊𝒔 𝒐 𝒄𝒊𝒖𝒅𝒂𝒅 𝒆𝒔𝒕𝒆 𝒃𝒊𝒆𝒏*';
  }
};
handler.help = ['clima *<ciudad/país>*'];
handler.tags = ['tools'];
handler.command = /^(clima|tiempo)$/i;
export default handler;
