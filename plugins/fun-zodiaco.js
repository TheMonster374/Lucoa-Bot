  let handler = (m, { usedPrefix, command, text }) => {
       // Code logic here
         if (!text) {
       throw `Ejemplo:\n${usedPrefix} ${command} 2003 02 25`;
   }
let cadenaISO08601 = `1970-0-1T:8:33:47`
let fecha = const date = new Date(cadenaISO08601);


   const d = new Date();
   const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()];

   const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
      const zodiac = getZodiac(birth[1], birth[2]);

    const ageD = new Date(d - date);
   const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear();
    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)];
      const cekusia = bulan === birth[1];

    const teks = `
👤 Edad : ${cekusia}
💌 Signo zodical : ${zodiac}
`.trim()
}      
      
handler.command = /^zodia[kc]$/i

      if (date == 'Fecha invalida, prueba con el siguiente formato AAAA MM DD Ejemplo: 2003 02 07 ') {
       throw date;
   }
