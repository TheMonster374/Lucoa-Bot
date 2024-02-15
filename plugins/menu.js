importar  {  promesas  }  desde  'fs'
importar  {  unirse  }  desde  'ruta'
importar  buscar  desde  'node-fetch'
importar  {  xpRange  }  desde  '../lib/levelling.js'

dejar  etiquetas  =  {
  'principal' : '📄 ɪɴꜰᴏ 📄━' ,
  'principal' : '📄 𝑰𝑵𝑭𝑶 📄━' ,
  'juego' : '🎮 ᴊᴜᴇɢᴏꜱ 🎮' ,
  'serbot' : '🤖 ꜱᴜʙ ʙᴏᴛꜱ 🤖' ,
  'rpg' : '💸ᴇᴄᴏɴᴏᴍɪᴀ💸' ,
  'rg' : '📊ʀᴇɢɪꜱᴛʀᴏ📊' ,
  'descargador' : '📥ᴅᴇꜱᴄᴀʀɢᴀꜱ📤' ,
  'marcador' : 'LOGO - FABRICANTE' ,
  'stalkear' : '👤ꜱᴛᴀʟᴋᴇʀ👤' ,
  'ia' : '🤖 ɪᴀ 🤖━━━━' ,
  'nable' : 'ᴀᴄᴛɪᴠᴀᴅᴏʀᴇꜱ📋' ,
  'grupo' : '🌱 ɢʀᴜᴘᴏꜱ 🌱' ,
  'buscar' : '🔎ʙᴜꜱᴄᴀᴅᴏʀ🔍' ,
  'img' : '🖼ɪᴍᴀɢᴇɴᴇꜱ🖼' ,
  'herramientas' : 'ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ🔧' ,
  'divertido' : '🎉ᴅɪᴠᴇʀꜱɪᴏɴ🎉' ,
  'audio' : 'ᴇꜰᴇᴄᴛᴏꜱ ᴅᴇ ᴀᴜᴅɪᴏꜱ' , 
  'pegatina' : '🧸ꜱᴛɪᴄᴋᴇʀꜱ🧸' ,
  'nsfw' : '🔞 ɴꜱꜰᴡ 🔞' ,
  'propietario' : '🐕 ᴄʀᴇᴀᴅᴏʀ 🐕' ,
  'avanzado' : 'ᴀᴠᴀɴᴢᴀᴅᴏ' ,
}
 menú  predeterminado constante =  {
  antes : `
──────────────────────
Hola *%taguser*,
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
┆📅 *𝑫𝒊𝒂*: %semana
┆📅 *𝑭𝒆𝒄𝒉𝒂*: %fecha
┆🐢 *𝑪𝒓𝒆𝒂𝒅𝒐𝒓*: +54 9 11 4477-5561
┆👤 *𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔* : %totalreg
┆📑 𝑨𝑽𝑰𝑺𝑶: 𝑺𝒆 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆 𝒔𝒊
┆𝒍𝒆 𝒉𝒂𝒃𝒍𝒂𝒏 𝒅𝒆 𝒋𝒐𝒕𝒄𝒉𝒖𝒂 𝒂 𝒐𝒕𝒓𝒂𝒔
┆𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒔 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒆𝒍
┆𝒃𝒐𝒕 𝒔𝒆𝒂 𝒎𝒂𝒔 𝒄𝒐𝒏𝒐𝒄𝒊𝒅𝒐 🐶
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
✗━━━━━━━━━━━━━━━━━━━━✗
┃🌼 *𝑵𝒐𝒎𝒃𝒓𝒆* : %nombre
┃💎 *𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔* : %límite
┃🔰 *𝑵𝒊𝒗𝒆𝒍* : %nivel
┃✨ *𝑿𝑷* : %exp.total
✗━━━━━━━━━━━━━━━━━━━━✗  
%leer más
──────────────────────
\t\t\t*𝑪 𝑶 𝑴 𝑨 𝑵 𝑫 𝑶 𝑺 *
` . recortarInicio ( ) ,
  encabezado : '╭━━━% categoría━━━━━━╮' ,
  cuerpo : '┃ *%cmd*\n' ,
  pie de página : '╰━━━━━━━━━━━━━━━━━━━╯ ' ,
  después de : '\n*Jotchua - Bot - Mini*' ,
}
let  handler  =  async  ( m ,  { conn ,  usedPrefix : _p , __dirname } )  =>  {
 intentar  {
    deje  _paquete  =  JSON . parse ( espera  promesas . readFile ( join ( __dirname ,  '../package.json' ) ) . catch ( _  =>  ( { } ) ) )  ||  { }
    let  { exp , límite , nivel }  =  global . base de datos . datos . usuarios [ m . remitente ]
    let  { min , xp , max }  =  xpRange ( nivel ,  global . multiplicador )
    let  nombre  =  esperar  conexión . getName ( m . remitente )
    let  d  =  nueva  fecha ( nueva  fecha  +  3600000 )
    dejar  local  =  'es'
    // d.getTimeZoneOffset()
    // La compensación -420 es 18,00
    // El desplazamiento 0 es 0,00
    // El desplazamiento 420 es 7,00
    let  weton  =  [ 'Pahing' ,  'Pon' ,  'Salario' ,  'Kliwon' ,  'Legi' ] [ Math . piso ( d  /  84600000 )  %  5 ]
    deja  semana  =  d . toLocaleDateString ( locale ,  {  día laborable : 'largo'  } )
    dejar  fecha  =  d . toLocaleDateString ( locale ,  {
      día : 'numérico' ,
      mes : 'largo' ,
      año : 'numérico'
    } )
    let  dateIslamic  =  Intl . DateTimeFormat ( localización  +  '-TN-u-ca-islamic' ,  {
      día : 'numérico' ,
      mes : 'largo' ,
      año : 'numérico'
    } ) . formato ( d )
    dejar  tiempo  =  d . toLocaleTimeString ( locale ,  {
      hora : 'numérico' ,
      minuto : 'numérico' ,
      segundo : 'numérico'
    } )
    let  _uptime  =  proceso . tiempo de actividad ( )  *  1000
    dejar  _muptime
    si  ( proceso . enviar )  {
      proceso . enviar ( 'tiempo de actividad' )
      _muptime  =  espera  nueva  Promesa ( resolver  =>  {
        proceso . una vez ( 'mensaje' ,  resolver )
        setTimeout ( resolución ,  1000 )
      } )  *  1000
    }
    let  muptime  =  cadena de reloj ( _muptime )
    dejar  tiempo de actividad  =  cadena de reloj ( _tiempo de actividad )
    let  totalreg  =  Objeto . claves ( global.db.datos.usuarios ) . _ _ _ _ _ _ longitud
    let  rtotalreg  =  Objeto . valores ( global.db.datos.usuarios ) . _ _ _ _ _ _ filtro ( usuario => usuario . registrado == verdadero ) . longitud    
    let  ayuda  =  Objeto . valores ( global.plugins ) . _ _ filtro ( complemento => ! complemento . deshabilitado ) . mapa ( complemento => {    
      devolver  {
        ayuda : Matriz . isArray ( complemento . etiquetas ) ? enchufar . ayuda : [ complemento . ayuda ] ,
        etiquetas : Matriz . isArray ( complemento . etiquetas ) ? enchufar . Etiquetas : [ complemento . etiquetas ] ,
        prefijo : 'customPrefix'  en  el complemento ,
        límite : complemento . límite ,
        prima : complemento . de primera calidad ,
        activado : ! enchufar . desactivado ,
      }
    } )
    para  ( deje  el complemento  de  ayuda )
      if  ( complemento  &&  'etiquetas'  en el  complemento )
        para  ( dejar  etiqueta  del  complemento . etiquetas )
          if  ( ! ( etiqueta  en  etiquetas )  &&  etiqueta )  etiquetas [ etiqueta ]  =  etiqueta
    conexión . menú  =  conexión . menú ? conexión . menú : { }
    dejar  antes  =  conectar . menú . antes  ||  Menú predeterminado . antes
    dejar  encabezado  =  conexión . menú . encabezado  ||  Menú predeterminado . encabezamiento
    dejar  cuerpo  =  conexión . menú . cuerpo  ||  Menú predeterminado . cuerpo
    dejar  pie de página  =  conexión . menú . pie de página  ||  Menú predeterminado . pie de página
    dejar  después  =  conectar . menú . después  ||  ( conexión . usuario . jid  ==  global . conexión . usuario . jid ? '' : `` )  +  menú predeterminado . después
    dejar  _texto  =  [
      antes ,
      ... Objeto . claves ( etiquetas ) . mapa ( etiqueta  =>  {
         encabezado de retorno . reemplazar ( / %categoría / g ,  etiquetas [ etiqueta ] )  +  '\n'  +  [
          ... ayuda . filtrar ( menú  =>  menú . etiquetas  &&  menú . etiquetas . incluye ( etiqueta )  &&  menú . ayuda ) . mapa ( menú  =>  {
             menú de retorno . ayuda . mapa ( ayuda  =>  {
               cuerpo de regreso . reemplazar ( / %cmd / g ,  menú . prefijo ? ayuda : '%p'  +  ayuda )
                . reemplazar ( / %isstar / g ,  menú . estrella ? '˄' : '' )
                . reemplazar ( / %isPremium / g ,  menú . premium ? '˄' : '' )
                . recortar ( )
            } ) . unirse ( '\n' )
          } ) ,
          pie de página
        ] . unirse ( '\n' )
      } ) ,
      después
    ] . unirse ( '\n' )
    let  text  =  tipo de  conexión . menú  ==  'cadena' ? conexión . menú : tipo de  conexión . menú  ==  'objeto' ? _texto : ''
    dejar  reemplazar  =  {
      '%' : '%' ,
      p : _p , tiempo de actividad , tiempo de actividad ,
      usuario de etiquetas : '@'  +  m . remitente . dividir ( "@s.whatsapp.net" ) [ 0 ] ,
      avispa : '@0' ,
      yo : conexión . getName ( conexión . usuario . jid ) ,
      npmname : _paquete . nombre ,
      versión : _paquete . versión ,
      npmdesc : _paquete . descripción ,
      npmmain : _paquete . principal ,
      autor : _paquete . autor . nombre ,
      licencia : _paquete . licencia ,
      exp : exp  -  mínimo ,
      maxexp : xp ,
      exptotal : exp ,
      xp4levelup : máx  -  exp ,
      github : _paquete . página de inicio ? _paquete . página de inicio . URL  ||  _paquete . página de inicio : '[url de github desconocida]' ,
      nivel , límite , nombre , weton , semana , fecha , fecha islámica , hora , totalreg , rtotalreg ,
      leer más : leerMás
    }
    texto  =  texto . reemplazar ( nueva  expresión regular ( `%( ${ Objeto . claves ( reemplazar ) . ordenar ( ( a ,  b )  =>  b . longitud  -  a . longitud ) . unirse `|` } )` ,  'g' ) ,  ( _ ,  nombre )  =>  ''  +  reemplazar [ nombre ] )
    dejar  pp  =  'https://telegra.ph/file/8adf82315f2b226833c27.mp4'
    dejar  pp2  =  'https://telegra.ph/file/8adf82315f2b226833c27.mp4'
conexión . sendMessage ( m . chat ,  {  video : {  url : [ pp ,  pp2 ] . getRandom ( )  } ,  gifPlayback : true ,  caption : text . trim ( ) ,  menciona : [ m . sender ]  } ,  {  quoted : m  } )
   
  }  atrapar  ( e )  {
    conexión . responder ( m . chat ,  '❎ Lo sentimos, el menú tiene un error.' ,  m )
    tirar  e
  }
}
manipulador . comando  =  [ 'menú' ,  'ayuda' ,  'menú' ] 
exportar  controlador predeterminado 
const  más  =  Cadena . deCharCode ( 8206 )
const  leerMás  =  más . repetir ( 4001 )
función  cadena de reloj ( ms )  {
  sea  h  =  isNaN ( ms ) ? '--' : Matemáticas . piso ( ms  /  3600000 )
  sea  m  =  isNaN ( ms ) ? '--' : Matemáticas . piso ( ms  /  60000 )  %  60
  sea  s  =  isNaN ( ms ) ? '--' : Matemáticas . piso ( ms  /  1000 )  %  60
  devolver  [ h ,  m ,  s ] . mapa ( v  =>  v . toString ( ) . padStart ( 2 ,  0 ) ) . unirse ( ':' )
  }
