/* ════════════════════════════════════════════════════════════════
   CUPONES DE AMOR — app.js
   ════════════════════════════════════════════════════════════════

   ╔══════════════════════════════════════════════════════════════╗
   ║  ZONA DE CONFIGURACIÓN — editá acá sin tocar nada más abajo ║
   ╚══════════════════════════════════════════════════════════════╝

   Para agregar cupones: agregá un objeto al array correspondiente.
     { emoji: "🎁", titulo: "...", descripcion: "...", efecto: "efecto-brillo" }
   Efectos disponibles:
     "efecto-brillo"    → borde parpadeante suave
     "efecto-sparkle"   → chispa ✨ sobre el emoji
     "efecto-glow"      → pulso de sombra rosa
     "efecto-shine"     → destello diagonal
     "efecto-float"     → levitación continua
     "efecto-tilt"      → inclinación 3D al hover
     "efecto-neon-rose" → borde neón rosa brillante
     "efecto-aura-rose" → aura difusa rosa alrededor
     ""                 → sin efecto

   Para agregar frases: sumá el string al array correspondiente.

   Para agregar mensajes secretos: agregá una clave en MENSAJES_SECRETOS
   y su contraseña en CONTRASENAS_SECRETAS.

   Para agregar mensajes de chat: agregá un objeto en CONVERSACION.
     { quien: "Fresh" | "Kin", texto: "...", delay: <ms> }

   ════════════════════════════════════════════════════════════════ */


/* ────────────────────────────────────────────────
   EMAILJS — configuración
   ──────────────────────────────────────────────── */
const CONFIG_EMAIL = {
  PUBLIC_KEY:   "o5TmmqNsrvE19BRW4",
  SERVICE_ID:   "service_cvypaic",
  TEMPLATE_ID:  "template_3i29qmi",
};

const CONFIG_SYNC = {
  BIN_ID:  "69fad65d856a682189b079e6",
  API_KEY: "$2a$10$rjQmMhPuWojkLBK3IRhTIe3q.PjkoNDlELyd8oBP3o7M8I.KQmjgq",
};
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${CONFIG_SYNC.BIN_ID}`;

/* ────────────────────────────────────────────────
   TEMPORIZADOR — fecha de reinicio
   Cambiá el día aquí (actualmente: día 22 de cada mes)
   ──────────────────────────────────────────────── */
const CONFIG_TEMPORIZADOR = {
  DIA_REINICIO: 29,
};



/* ────────────────────────────────────────────────
    EFECTO CUSTOM — imágenes/emojis flotantes
    Agregá acá lo que querés que flote en cada cupón
    ──────────────────────────────────────────────── */
  const EFECTOS_CUSTOM = {
    "Cupón para DropLegendario": {
      items: ["img/esfera.png", "img/logo.png", "img/icon_skill1.png", "img/icon_transformation1.png", "💎"],
      cantidad: 12,
      tamaño: "1.4rem",
      modo: "pixel",
    },

    "Cupón Sorpresa": {
      items: ["img/signo_interrogacion.png","❓"],
      cantidad: 5,
      tamaño: "1.4rem",
      modo: "",
    },



    // Para agregar otro cupón:
    // "Título exacto del cupón": {
    //   items: ["img/tuimagen.png", "🔥", "✨"],
    //   cantidad: 5,
    //   tamaño: "1.2rem",
    // },

                                              //"Cupón para raid especial": {   // ← ejemplo con modo pixel
                                              //items: ["img/gems.png", "⚔️", "💥", "img/icon_skill1.png"],
                                              //cantidad: 12,
                                                //tamaño: "1rem",
                                                //modo: "pixel",     // ← este es el nuevo modo
                                              //},
                                          //};
  };



  /* ────────────────────────────────────────────────
   MODALES DE PERSONAJES — agregá los que quieras
   ──────────────────────────────────────────────── */
const PERSONAJES = [
  {
    id:          "buu",
    contrasena:  "majin buu",
    fondo:       "img/buu.png",
    personaje:   "img/kidbuu.png",
    titulo:      "💕 Mensaje Secreto 💕",
    texto:       "Si Majin Buu puede volverse bueno por cariño… imaginate lo que hacés vos conmigo 💖",
    confetti:    false,
  },
  {
    id:          "gojo",
    contrasena:  "gojo satoru",
    fondo:       "img/gojo.png",
    personaje:   "img/gojo2.png",
    titulo:      "Descubriste el secreto más fuerte…",
    texto:       "Vos",
    confetti:    true,
  },

  {
    id:          "angel",
    contrasena:  "angel",
    fondo:       "img/PRIME.jpg",
    personaje:   "img/angel_gojo.png",
    titulo:      "QUE BRONCA ME DAS  TE AMO",
    texto:       "TE AMO TE TE AMO TE AMO TE AMO TE AMO TE AMO",
    confetti:    true,
  },

  {
  id:             "invencible",
  contrasena:     "invencible",
  fondo:          "",
  personaje:      "",
  titulo:         "",
  texto:          "",
  confetti:       false,
  audio:          null,
  introVideo:     "videos/Invincible_titlecard.mp4",
  introMuted:     false,
  introTriggerEn: "invencibl",
  soloVideo:      true,   // ← solo el video, sin modal después
  },

  // Para agregar uno nuevo, copiá el bloque de arriba y cambiá los valores




   // id:          "invencible",
  // contrasena:  "invencible",
  // fondo:       "",
  // personaje:   "",
  // titulo:      "",
  // texto:       "",
  // confetti:    false,
  // audio:       "",  // tema de la serie
  // introVideo:  "videos/Invincible_titlecard.mp4",  // cambiá por el ID real
  // introMuted:  false,                            // false = con sonido
  // introTriggerEn: "invencibl",   // ← el video arranca cuando escriben esto
  // },
];







/* ────────────────────────────────────────────────
   FRASES ALEATORIAS (header, modo normal)
   ──────────────────────────────────────────────── */
const FRASES = [
  "Cada vez que entro acá, pienso en vos. 💕",
  "Sos mi lugar favorito en el mundo.",
  "No existe canción que no me recuerde a vos.",
  "Hasta tus malas caras me parecen lindas.",
  "Me enamoré de vos sin darme cuenta.",
  "Sos la persona con la que más quiero perder el tiempo.",
  "Con vos todo tiene más sentido.",
  "Gracias por ser mi amorcito.",
  "Tenés el mejor olor del universo. Sorry, es la verdad.",
  "Si pudiera, te elegiría otra vez.",
];

const FRASES_GAMER = [
  "PLAYER 2 HAS JOINED THE GAME ♥",
  "YOU ARE MY FINAL BOSS AND MI PRIZE",
  "HP: FULL — REASON: YOU",
  "ACHIEVEMENT UNLOCKED: BEST GIRLFRIEND",
  "INSERT COIN TO START A KISS",
];

/* ────────────────────────────────────────────────
   FRASES FLOTANTES DE FONDO
   ──────────────────────────────────────────────── */
const FRASES_FONDO = [
  "te amo", "sos mi todo", "mi papoy", "para siempre",
  "te quiero mucho", "sos hermosa", "mi favorita",
  "juntos", "con todo mi amor", "te elijo a vos",
  "sos mi paz", "mi lugar", "amor", "siempre vos",
  "♥", "💕", "✨",
];

const FRASES_FONDO_GAMER = [
  "player 2", "co-op mode", "♥ hp full", "best team",
  "game on", "player 1 loves you", "gg ♥", "insert coin",
  "respawn together", "♥ x99",
];

/* ────────────────────────────────────────────────
   FRASES MODO SEXY
   ──────────────────────────────────────────────── */
const FRASES_SEXY = [
  "Solo para vos, mi amor 🔥",
  "Lo que querás, cuando querás.",
  "Sos irresistible y lo sabés.",
  "Esta noche, las reglas las ponés vos.",
  "Todo lo que imagines, es posible.",
];

const FRASES_FONDO_SEXY = [
  "💋", "🔥", "te deseo", "solo vos",
  "mi amor", "✨", "esta noche", "♥",
  "para siempre", "tuya", "💕", "🌹",
];

/* ────────────────────────────────────────────────
   CUPONES
   ──────────────────────────────────────────────── */
const CUPONES_ROMANTICOS = [
  {
    emoji: "🎬",
    titulo: "Cupón para ver una película",
    descripcion: "Elijo yo la película, preparás el pochoclo. Sin quejas.",
    efecto: ["efecto-brillo", "efecto-glow", "efecto-aura-rose"],
  },
  { emoji: "img/goku-zzz.gif", emojiBackup: "🛌🏃", titulo: "Cupón para dormir hasta tarde",  descripcion: "Un fin de semana sin que nadie te despierte.",                   efecto: ["efecto-corazones", "efecto-sparkle"] },
  { emoji: "🌅", titulo: "Cupón para una escapada",        descripcion: "A donde quieras ir juntos. Sin peros.",                          efecto: [ "efecto-aura-corazones", "efecto-sparkle"] },
  { emoji: "img/goku_dancing.gif",emojiBackup: "🎶" ,titulo: "Cupón para bailar en casa",      descripcion: "Tu playlist, yo te sigo. Sin importar la hora.",                 efecto: ["efecto-corazones", "efecto-sparkle"] },
  { emoji: "🍳", titulo: "Cupón para desayuno en cama",    descripcion: "Me levanto primero y te lo llevo. Prometido.",                   efecto: ["efecto-corazones", "efecto-brillo"] },
  { emoji: "💌", titulo: "Cupón para una carta de amor",   descripcion: "A mano, lo que siento, cuando lo pidas.",                        efecto: ["efecto-corazones", "efecto-sparkle"] },
  { emoji: "✨", titulo: "Cupón comodín",                  descripcion: "Para lo que se te ocurra. Vale para cualquier cosa.",             efecto: ["efecto-sparkle", "efecto-golden"] },
  { emoji: "img/goku-run.gif", emojiBackup: "🏃", titulo: "Cupón para Ir a verte",          descripcion: "Este cupón activa modo: no aguanto más y voy a verte",             efecto: ["efecto-corazones", "efecto-glow"] },
  { emoji: "📸", titulo: "Cupón para Sesión de fotos obligatoria", descripcion: "Este cupón te obliga a sacarte fotos conmigo. no importa si decis que salis mal, si no queres  y si te haces el dificil",             efecto: ["efecto-corazones", "efecto-sparkle"] },
  { emoji: "👂", titulo: "Cupón para mandarte un audio largo",   descripcion: "Te mando un audio de lo que pienso cuando no te lo digo. Sin resumir.", efecto: ["efecto-aura-corazones", "efecto-sparkle"] },
  { emoji: "❓", titulo: "Cupón Sorpresa",   descripcion: "ESTE CUPON NO HACE NADA.... ˢⁱ ᵖᵒˢᵗᵃ ⁿᵒ ʰᵃᶜᵉ ⁿᵃᵈᵃ", efecto: [ "efecto-sparkle", "efecto-magnetico"], sorpresa: true },
];

const CUPONES_SEXY = [
  { emoji: "🔥", titulo: "Cupón para una noche sin apuro",       descripcion: "Sin celular, sin hora. Solo nosotros dos.",                      efecto: ["efecto-neon-rose", "efecto-berenjenas", "efecto-tilt"] },
  { emoji: "🛁", titulo: "Cupón para un baño juntos",            descripcion: "Velas, espuma, y lo que venga después.",                          efecto:["efecto-glow", "efecto-aura-rose", "efecto-tilt"] },
  { emoji: "💋", titulo: "Cupón para que te bese donde quieras", descripcion: "Sin restricciones. El control lo tenés vos.",                      efecto: ["efecto-brillo", "efecto-berenjenas", "efecto-tilt"] },
  { emoji: "🙈", titulo: "Cupón para una fantasía tuya",         descripcion: "Me decís, yo cumplo. Sin preguntas.",                               efecto:["efecto-aura-rose", "efecto-berenjenas", "efecto-tilt"] },
  { emoji: "img/smiling-jinu.gif",emojiBackup: "😊" , titulo: "Cupón para TOTA",            descripcion: "Lo que imagines, lo hacemos realidad.",                             efecto: ["efecto-glow", "efecto-berenjenas", "efecto-aura-rose", "efecto-tilt"] },
  { emoji: "🌙", titulo: "Cupón para una noche de hotel",        descripcion: "Solo para nosotros dos. Nada de interrupciones.",                   efecto: ["efecto-glow", "efecto-berenjenas", "efecto-aura-rose", "efecto-tilt"] },
  { emoji: "👀", titulo: "Cupón para un striptease",             descripcion: "Lo que pedís, te lo doy. Sin prisa.",                               efecto: ["efecto-aura-rose", "efecto-berenjenas", "efecto-tilt"] },
  { emoji: "🍓", titulo: "Cupón para una noche de exploración",  descripcion: "Vos mandás. Yo acepto todo lo que propongás.",                      efecto: [ "efecto-berenjenas", "efecto-tilt"] },
  { emoji: "❤️‍🔥", titulo: "Cupón para lamerte",  descripcion: "Te puedo lamer donde quieras, este cupon  tambien puede ser usado a la inversa",                      efecto: [ "efecto-berenjenas", "efecto-tilt", "efecto-aura-rose"] },
  { emoji: "🥵", titulo: "Cupón de Foto Peligrosa",  descripcion: "Canjeable por una foto capaz de reiniciar el cerebro de cualquiera",                      efecto: [ "efecto-berenjenas", "efecto-tilt", "efecto-aura-rose"] },
];


const CUPONES_GAMER = [
  { emoji: "img/goku-ultra.gif", emojiBackup: "🏆", titulo: "Cupón para una noche de Dragon Ball", descripcion: "A las 8 nos levantamos a jugar. Seré tu healer(no), tu support(no), lo que necesites.",              efecto: ["efecto-pixels", "efecto-brillo", "efecto-magnetico"] },
  { emoji: "🎮", titulo: "Cupón para elegir el juego",                 descripcion: "Tu elección, sin discusión. Esa noche mandás vos.",                                            efecto: ["efecto-sparkle", "efecto-neon-rose", "efecto-magnetico"] },
  { emoji: "🕹️", titulo: "Cupón para modo co-op",                      descripcion: "Un juego para dos. Somos el mejor equipo del mundo.",                                          efecto: ["efecto-pixels", "efecto-tilt", "efecto-magnetico"] },
  { emoji: "⚔️", titulo: "Cupón para raid especial",                   descripcion: "Nos quedamos despiertos hasta ganarlo. Sin rendirnos.",                                        efecto: ["efecto-pixels", "efecto-glow", "efecto-magnetico"] },
  { emoji: "🌟", titulo: "Cupón para stream juntos",                   descripcion: "Ponemos la cámara y jugamos como si fuéramos streamers famosos.",                              efecto: ["efecto-pixels", "efecto-sparkle" , "efecto-magnetico"] },
  { emoji: "img/picoro.gif",emojiBackup: "🎯" ,titulo: "Cupón para 1v1",                             descripcion: "Te dejo ganar... o capaz no. Spoiler: te voy a dejar ganar.",                                  efecto: ["efecto-pixels", "efecto-tilt", "efecto-brillo"] },
  { emoji: "👻", titulo: "Cupón para Phasmophobia",                    descripcion: "Volvemos a donde empezó todo 👻 pero esta vez te agarro más fuerte… porque ya sé que no te quiero soltar 😳", efecto: ["efecto-pixels", "efecto-magnetico", "efecto-brillo"] },
  { emoji: "🎥", titulo: "Cupón para Stremearte",                      descripcion: "Activa este cupón y te voy a stremear cualquier cosa que me pidas. Me convierto en el mejor jugador del mundo… o al menos hago que parezca 😎 (incluye dedicarte cada kill… si es que hay alguna)..", efecto: ["efecto-pixels", "efecto-magnetico", "efecto-brillo"] },
  { emoji: "img/gems.png", emojiBackup: "💎",titulo: "Cupón para DropLegendario",        descripcion: "Este cupón otorga un boost de gemas en Gekshin Sqquadra para cumplir tus deseos mas cursed o mas blessed ✨.(la cantidad depende del bolsillo del susodicho 🥹)",efecto: ["efecto-ki", "efecto-magnetico", "efecto-brillo", "efecto-pixels"] },
];
/* ────────────────────────────────────────────────
   CUPONES COTIDIANOS
   ──────────────────────────────────────────────── */
const CUPONES_COTIDIANOS = [
  { emoji: "🛒", titulo: "Cupón para ir al super juntos",        descripcion: "Con carrito, discusión de marca incluida y algo que no necesitamos igual.",    efecto: ["efecto-glow", "efecto-magnetico"] },
  { emoji: "📺", titulo: "Cupón para maratonear una serie",      descripcion: "Elegís vos. Me quejo en los primeros 10 minutos y después me engancho igual.", efecto:  ["efecto-shine", "efecto-magnetico"] },
  { emoji: "🧹", titulo: "Cupón para ordenar juntos",            descripcion: "Yo hago mi parte sin que me tengas que pedir dos veces. Prometo intentarlo.",  efecto:["efecto-brillo", "efecto-magnetico"] },
  { emoji: "🍦", titulo: "Cupón para salir por helado",          descripcion: "Adónde quieras, cuándo quieras. Yo pago y no me como el tuyo (mucho).",       efecto: [ "efecto-corazones", "efecto-magnetico"] },
  { emoji: "📱", titulo: "Cupón para noche sin celular",         descripcion: "Los dos guardamos el teléfono. Solo nosotros dos, una hora entera.",           efecto: ["efecto-aura-rose", "efecto-corazones", "efecto-magnetico"] },
  { emoji: "🎲", titulo: "Cupón para juego de mesa",             descripcion: "Lo que quieras: Uno, Ajedrez, Monopoly. No hago trampa. Casi nunca.",             efecto: ["efecto-float", "efecto-sparkle"] },
  { emoji: "🌧️", titulo: "Cupón para día de lluvia juntos",      descripcion: "Sin planes, sin salir. Adentro, tapados, sin hacer nada y que sea perfecto.", efecto: ["efecto-float", "efecto-corazones"] },
  { emoji: "💆", titulo: "Cupón para un masaje",           descripcion: "30 minutos de masaje de espalda. Sin límite de tiempo.",          efecto: ["efecto-glow", "efecto-aura-rose", "efecto-magnetico"] },
  { emoji: "🍔", titulo: "Cupón para BIG PONS",            descripcion: "Este cupón invoca a Big Pons 🍔, Yo pago (😠)",             efecto: ["efecto-shine", "efecto-sparkle", "efecto-magnetico"] },
  { emoji: "🍕", titulo: "Cupón para pedir comida",        descripcion: "Una noche sin cocinar. Pedimos lo que quieras.",                  efecto: ["efecto-sparkle", "efecto-magnetico"] },
  { emoji: "img/rumi-wtf.gif", emojiBackup: "😤", titulo: "Cupón ¿Quién es esa?",                  descripcion: "Este cupón me permite hacerme el celoso ",             efecto: ["efecto-shine", "efecto-tilt", "efecto-chispas"] },
  { emoji: "img/zoe-angry.gif", emojiBackup: "😡", titulo: "Cupón para Pelear",                  descripcion: "Este cupón activa una pelea falsa, puede ser por cualquier cosa! (WARNING:Reírnos y olvidarnos en 2 minutos 💘) ",efecto: ["efecto-shine", "efecto-tilt", "efecto-chispas"] },
];
/* ────────────────────────────────────────────────
   MENSAJES SECRETOS
   Clave del objeto = tipo.  Para agregar uno nuevo:
   1. Sumá la clave acá con su título y texto.
   2. Sumá la contraseña en CONTRASENAS_SECRETAS (abajo).
   ──────────────────────────────────────────────── */
const MENSAJES_SECRETOS = {
  corazon: {
    titulo: "🫀 Lo que no te digo seguido",
    texto: `Sos la persona más especial que tuve. No es un cliché, es la verdad más honesta que tengo.

Cuando estoy al lado tuyo el mundo tiene más sentido. Y cuando no estás, pienso en vos de formas que ni yo entiendo.

Te amo con cada parte rara y desorganizada de mí.`,
  },
  james: {
    titulo: "👑 James Lee — Leyenda de la Primera Generación",
    texto: `Encontraste el secreto más escondido 💜

Si esto lo estás leyendo, es porque sos exactamente la persona para quien lo escribí.

Eres mi primera generación. Mi única generación. La persona con la que quiero todas las aventuras — las del juego y las de verdad.

No hay panel de lookism que te describa. Sos el unlock más importante de mi vida.`,
  },
  papoy: {
    titulo: "🐾 Papoy te amo",
    texto: `Papoyyy 💕

Sos tan linda que a veces no lo puedo creer.

Gracias por existir, por tus trolleos, por dejarme quererte, por las noches jugando, por los abrazos que no terminan nunca.

Sos mi papoy favorita del universo entero.

Te amo muchísimo.`,
  },
  wife: {
    titulo: "🔓 WIFE MODE ACTIVADO ",
    texto: `Advertencia: este mensaje puede causar sonrisas permanentes, apego emocional y planes de futuro con vos. 😌❤️

No es solo una idea romántica, es una decisión silenciosa que tengo hace rato.
Quiero que seas vos. En los días buenos, en los difíciles, en todo.
Y aunque todavía no sea “oficial”, en mi cabeza ya lo es hace tiempo.


Nivel de amor: infinito.
Estado actual: te estoy eligiendo en todas las realidades posibles 💍❤️`,
  },
  Kin: {
    titulo: "Vos 🌸",
    texto: `No sos una parte de mi vida. Sos el motivo por el que muchas cosas tienen sentido.

Antes de vos, todo era normal… después de vos, todo tiene intención.
Hasta lo simple se siente distinto si estás en eso.

No sé explicarlo bien, pero me pasa algo raro:
te pienso y se me acomoda el mundo, a la inversa tambien jjeje.`,
  },
  Negros: {
    titulo: "?",
    texto: `❓

`,

  },
  jinu: {
    titulo: "Con mi soda pop",
    texto: `Eres mi soda pop

`,

  },
  buu: {
    titulo: "Absorción emocional en progreso",
    texto: `Si Majin Buu puede volverse bueno por cariño… imaginate lo que hacés vos conmigo 💖.

`,
  },
  alguntipo: {
    titulo: "⋆༺💗༻⋆ 𝟐𝟗   ⋆༺💗༻⋆",
          texto: `
      Hay personas que llegan…
      y otras que se sienten destinadas. ✨
      De todas las personas del mundo…
      terminamos siendo nosotros dos.
      tan natural,
      que nunca imaginé
      que terminarías convirtiéndote
      en mi lugar favorito del mundo. 🌎💗
      El 29 no es solo una fecha.
      Es acordarme de tus risas,
      de nuestras conversaciones eternas,
      de las noches donde el sueño perdía
      porque hablar con vos era más lindo. ☁️. ✨.
`,

  },
  error404: {
    titulo: "ERROR 404 — Feelings Not Found",
    texto: `The message you are looking for may have been removed, renamed…
            or Fresh is currently too busy thinking about Kin 💗
`,
  },
};

/* ────────────────────────────────────────────────
   CONTRASEÑAS SECRETAS
   { contraseña: "tipo" }  — el tipo debe coincidir con una clave en MENSAJES_SECRETOS
   La contraseña "modo gamer" activa el modo especial.
   ──────────────────────────────────────────────── */
const CONTRASENAS_SECRETAS = {
  "legend of the first generation": "james",
  "papoy":                          "papoy",
  "wife":                           "wife",
  "kin":                            "Kin",
  "negros":                         "Negros",
  "jinu":                           "jinu",
  "error 404":                            "error404",
  "29":                            "alguntipo",
  "modo gamer":                     "gamer",        // especial: activa modo gamer
  "reset cupones":                  "reset",        // especial: resetea todos los canjeados
  "modo tota":                           "sexy-toggle",  // especial: muestra/oculta cupones sexy
  "modo totita":                         "sexy-toggle",  // especial: igual que tota
  "amor":                           "reset-modo",
  "dev mode":                       "dev-toggle",
};

/* ────────────────────────────────────────────────
   MINI CHAT
   ──────────────────────────────────────────────── */
const CONVERSACIONES = [
  [
    { quien: "Fresh", texto: "Hola", delay: 1800 },
    { quien: "Kin", texto: "holaaaa 💕", delay: 4200 },
    { quien: "Fresh", texto: "¿Qué haces?", delay: 7200 },
    { quien: "Kin", texto: "nadaa, aburrida 😭", delay: 11000 },
    { quien: "Fresh", texto: "¿Jugamos algo?", delay: 15000 },
    { quien: "Kin", texto: "obvioo, a qué?", delay: 19000 },
    { quien: "Fresh", texto: "Dragon Ball online 😏", delay: 24000 },
    { quien: "Kin", texto: "JAJAJA dale, a las 8 estamos?", delay: 30000 },
    { quien: "Fresh", texto: "De una", delay: 34000 },
    { quien: "Fresh", texto: "El domingo igual tenemos que viciar fuerte", delay: 39000 },
    { quien: "Kin", texto: "NASHE", delay: 44000 },
    { quien: "Fresh", texto: "Sí o sí", delay: 48000 },
    { quien: "Kin", texto: "me encanta jugar con vos jsjs 💕", delay: 54000 },
    { quien: "Fresh", texto: "A mí también… posta", delay: 60000 },
    { quien: "Kin", texto: "🥺", delay: 64000 },
    { quien: "Fresh", texto: "Jaja, vení", delay: 70000 },
    { quien: "Fresh", texto: "Igual, fuera de joda… sos re importante para mí", delay: 78000 },
    { quien: "Kin", texto: "ay 🥺 vos también", delay: 86000 },
    { quien: "Fresh", texto: "Te quiero mucho", delay: 94000 },
    { quien: "Kin", texto: "yo más 💜", delay: 102000 },
    { quien: "Fresh", texto: "Mentira, yo más. Olor a caquita 😌", delay: 110000 },
    { quien: "Kin", texto: "🥺💕", delay: 118000 },
    { quien: "Kin", texto: "POKEEEEE", delay: 126000 },
  ],

  [
    { quien: "Fresh", texto: "Amor tengo hambre", delay: 800 },
    { quien: "Kin", texto: "otra vez? jajaja", delay: 1800 },
    { quien: "Fresh", texto: "Necesito algo dulce… MUY dulce 🍫", delay: 3200 },
    { quien: "Kin", texto: "mmm alguien rosa y gordito estaría orgulloso", delay: 4800 },
    { quien: "Fresh", texto: "El gordo que  convierte todo en chocolate? 👀", delay: 7000 },
    { quien: "Kin", texto: "exacto… pense en él 💗", delay: 8500 },
  ],

  [
    { quien: "Fresh", texto: "Amor viste ese personaje re fachero?", delay: 800 },
    { quien: "Kin", texto: "cual? 😏", delay: 2000 },
    { quien: "Fresh", texto: "El de pelo blanco… ojos tapados esta roto, se parece a mi.....", delay: 3500 },
    { quien: "Kin", texto: "aaa ya se quien decís 😳", delay: 5000 },
    { quien: "Fresh", texto: "En el cielo y en paraguay soy el unico albañil", delay: 6500 },
    { quien: "Kin", texto: "na bueno....capaz sirve para algo ese nombre...👀", delay: 8000 },
  ],

  [
    { quien: "Fresh", texto: "Vos sos un angel posta", delay: 800 },
    { quien: "Kin", texto: "ay 🥺 por?", delay: 2000 },
    { quien: "Fresh", texto: "Porque siempre cuidas a los petes 💕", delay: 3500 },
    { quien: "Kin", texto: "bueno… capaz esa palabra es importante 😏", delay: 5200 },
  ],


  [
    { quien: "Fresh", texto: "Te digo algo pero no te rías", delay: 1200 },
    { quien: "Kin", texto: "no prometo nada JAJA", delay: 3000 },
    { quien: "Fresh", texto: "Yo ya te considero mi esposa oficialmente", delay: 5000 },
    { quien: "Kin", texto: "JAJAJA que decis", delay: 7000 },
    { quien: "Fresh", texto: "Es que posta… en mi cabeza ya lo sos", delay: 9000 },
    { quien: "Kin", texto: "entonces decilo en inglés 😏", delay: 11000 },
    { quien: "Fresh", texto: "Mmm… capaz eso sirve para algo", delay: 13000 },
  ],


  [
    { quien: "Fresh", texto: "Hoy estoy en modo raro", delay: 1200 },
    { quien: "Kin", texto: "modo que?", delay: 3000 },
    { quien: "Fresh", texto: "MODO VICIO TOTAL", delay: 5000 },
    { quien: "Kin", texto: "ah listo, no salimos mas entonces", delay: 7000 },
    { quien: "Fresh", texto: "No no… es como un modo especial", delay: 9000 },
    { quien: "Kin", texto: "tipo cuando activas algo y cambia todo?", delay: 11000 },
    { quien: "Fresh", texto: "Exacto… como un comando", delay: 13000 },
    { quien: "Kin", texto: "y es bastante obvio cual seria 😏", delay: 15000 },
  ],

  [
  { quien: "Fresh", texto: "amor estas despierta?", delay: 800 },
  { quien: "Kin", texto: "si amorcito pequeño, no podia dormir 😭", delay: 1900 },
  { quien: "Fresh", texto: "venia a robarte besos virtuales entonces", delay: 3400 },
  { quien: "Kin", texto: "llegaste tarde, ya me los robe yo primero 💋", delay: 5200 },
  { quien: "Fresh", texto: "imposible ganarte", delay: 6800 },
  { quien: "Kin", texto: "obvio, soy un pedazo de nazi", delay: 8600 },
  ],

  [
    { quien: "Fresh", texto: "Te das cuenta que tu nombre aparece en todos lados?", delay: 1200 },
    { quien: "Kin", texto: "?? donde JAJA", delay: 3000 },
    { quien: "Fresh", texto: "En mis contraseñas, en mi cabeza, en todo", delay: 5000 },
    { quien: "Kin", texto: "ay 🥺", delay: 7000 },
    { quien: "Fresh", texto: "Es como una clave universal", delay: 9000 },
    { quien: "Kin", texto: "mmm… capaz literalmente lo es 👀", delay: 11000 },
    { quien: "Fresh", texto: "Yo digo que pruebes con eso", delay: 13000 },
  ],


  [
  { quien: "Fresh", texto: "me salio una partida horrible 😭", delay: 1200 },
  { quien: "Kin", texto: "cuantas veces moriste?", delay: 2600 },
  { quien: "Fresh", texto: "no quiero hablar del tema", delay: 4300 },
  { quien: "Kin", texto: "JAJAJA entonces fueron muchas", delay: 6100 },
  { quien: "Fresh", texto: "pero mira el lado bueno", delay: 7900 },
  { quien: "Kin", texto: "cual?", delay: 9200 },
  { quien: "Fresh", imagen: "img/broly_culo.png", delay: 10800 },
  ],


  [
    { quien: "Fresh", texto: "Amoor si rompemos todo… se puede resetear?", delay: 800 },
    { quien: "Kin", texto: "obvio jajaja", delay: 2000 },
    { quien: "Fresh", texto: "Como a los judios?", delay: 3500 },
    { quien: "Kin", texto: "exacto… reset y listo 👀", delay: 5200 },
  ],


  [
  { quien: "Fresh", texto: "te imaginas vivir juntos?", delay: 900 },
  { quien: "Kin", texto: "si, vos jugando y yo molestandote cada 5 minutos", delay: 2400 },
  { quien: "Fresh", texto: "eso ya pasa ahora", delay: 4100 },
  { quien: "Kin", texto: "pero ahi podria darte besitos mientras pierdes rankeds", delay: 6200 },
  { quien: "Fresh", texto: "entonces pisaria diamante facil", delay: 8400 },
  { quien: "Kin", texto: "soy tu buff emocional 💗", delay: 10100 },
  ],


  [
  { quien: "Fresh", texto: "estas demasiado linda hoy", delay: 1000 },
  { quien: "Kin", texto: "hoy solamente? 🤨", delay: 2500 },
  { quien: "Fresh", texto: "uh ya empezo la auditoria", delay: 4300 },
  { quien: "Kin", texto: "responda correctamente señor", delay: 6200 },
  { quien: "Fresh", texto: "siempre estas linda, hoy solo estoy mas enamorado", delay: 8700 },
  { quien: "Kin", texto: "aaaaa asi si 😭💗", delay: 10400 },
  ],
  
  [
    { quien: "Fresh", texto: "amor…", delay: 800 },
    { quien: "Kin", texto: "decime 💕", delay: 2000 },
    { quien: "Fresh", texto: "amor amor amor", delay: 3500 },
    { quien: "Kin", texto: "che creo que eso hace algo 👀", delay: 5200 },
  ],


  [
    { quien: "Fresh", texto: "Amor estoy aburrido", delay: 1500 },
    { quien: "Kin", texto: "mmm eso es peligroso 😏", delay: 3500 },
    { quien: "Fresh", texto: "Cuando me aburro me dan ideas…", delay: 6000 },
    { quien: "Kin", texto: "ideas o ganas? 👀", delay: 8500 },
    { quien: "Fresh", texto: "Las dos cosas…", delay: 11000 },
    { quien: "Kin", texto: "entonces activa ese modo… ya sabes cual", delay: 14000 },
    { quien: "Fresh", texto: "El modo prohibido? 😳", delay: 17000 },
    { quien: "Kin", texto: "ese mismo… el de la tota 😈", delay: 20000 },
    { quien: "Fresh", imagen: "img/ojo.jpg", delay: 25000 },
  ],


  [
    { quien: "Fresh", texto: "Che hay un modo secreto que casi nadie conoce", delay: 1500 },
    { quien: "Kin", texto: "a ver 👀", delay: 3500 },
    { quien: "Fresh", texto: "Es medio… subido de tono", delay: 6000 },
    { quien: "Kin", texto: "JAJAJA ya me imagino", delay: 8500 },
    { quien: "Fresh", texto: "Cuando lo activas cambia todo", delay: 11000 },
    { quien: "Kin", texto: "te pones rarito? 😏", delay: 14000 },
    { quien: "Fresh", texto: "Digamos que si…", delay: 17000 },
    { quien: "Fresh", texto: "Probá con una palabra corta… muy nuestra", delay: 20000 },
  ],





  [
    { quien: "Fresh", texto: "Amor necesito confesarte algo", delay: 1500 },
    { quien: "Kin", texto: "decime 😳", delay: 3500 },
    { quien: "Fresh", texto: "A veces entro en un modo…", delay: 6000 },
    { quien: "Kin", texto: "???", delay: 8500 },
    { quien: "Fresh", texto: "Un modo donde pienso cosas…", delay: 11000 },
    { quien: "Kin", texto: "QUE COSAS 😳", delay: 14000 },
    { quien: "Fresh", texto: "Cosas con vos claramente", delay: 17000 },
    { quien: "Kin", texto: "ah bueno bueno buenooo 😏", delay: 20000 },
    { quien: "Fresh", texto: "Creo que ese modo tiene nombre…", delay: 23000 },
    { quien: "Kin", texto: "y empieza con tota 👀", delay: 26000 },
  ],

  [
    { quien: "Fresh", texto: "Hay niveles en todo", delay: 2000 },
    { quien: "Kin", texto: "explicate", delay: 4200 },
    { quien: "Fresh", texto: "Uno básico… y otro más avanzado", delay: 7000 },
    { quien: "Kin", texto: "como los juegos", delay: 9500 },
    { quien: "Fresh", texto: "Exacto… el primero lo sacas con insistencia normal", delay: 12000 },
    { quien: "Kin", texto: "y el otro?", delay: 14500 },
    { quien: "Fresh", texto: "Cuando te pasas bastante de ese número", delay: 17000 },
    { quien: "Kin", texto: "ah… entonces hay recompensa doble 👀", delay: 19500 },
  ],



  [
    { quien: "Fresh", texto: "Me gustan los secretos que requieren insistencia", delay: 2000 },
    { quien: "Kin", texto: "por que?", delay: 4200 },
    { quien: "Fresh", texto: "Porque no cualquiera llega", delay: 7000 },
    { quien: "Kin", texto: "solo los curiosos", delay: 9500 },
    { quien: "Fresh", texto: "Los que prueban varias veces", delay: 12000 },
    { quien: "Kin", texto: "y siguen probando", delay: 14500 },
    { quien: "Fresh", texto: "Hasta completar algo… tipo un ciclo completo", delay: 17000 },
    { quien: "Kin", texto: "y después?", delay: 19500 },
    { quien: "Fresh", texto: "Si siguen incluso más… hay otro secreto 👀", delay: 22000 },
  ],

  [
    { quien: "Fresh", texto: "Hola amorrrrrr", delay: 800 },
    { quien: "Kin", texto: "holaaaa 💕", delay: 2000 },
    { quien: "Fresh",texto: "Sale Gekshin?", delay: 4500 },
    { quien: "Kin", texto: "Entrandooo", delay: 5000 },
  ],

  [
    { quien: "Fresh", texto: "Papoy", delay: 800 },
    { quien: "Kin", texto: "que", delay: 1800 },
    { quien: "Fresh", texto: "te amo", delay: 5600 },
  ],

  [
    { quien: "Fresh", texto: "entramos?", delay: 800 },
    { quien: "Kin", texto: "ya estoy 😎", delay: 1800 },
    { quien: "Fresh", texto: "carriame", delay: 2600 },
    { quien: "Kin", imagen: "img/jay-like.gif", delay: 5600 },
  ],

  [
    { quien: "Fresh",imagen: "img/gojo_lindo.gif", delay: 800 },
    { quien: "Fresh", texto: "estas?",  imagen: "img/gojo_lindo.gif", delay: 1000 },
    { quien: "Kin", texto: "si bb 💕", delay: 1800 },
    { quien: "Fresh", texto: "venis?", delay: 3000 },
    { quien: "Kin", texto: "obvio 😳", delay: 4200 },
  ],


  [
    { quien: "Fresh", texto: "me ignoras", delay: 800 },
    { quien: "Kin", texto: "nooo 😭", delay: 1800 },
    { quien: "Fresh", texto: "seguro?", delay: 3000 },
    { quien: "Kin", texto: "te estaba stalkeando 💀", delay: 4200 },
    { quien: "Kin", imagen: "img/vegeta-goku.gif", delay: 6200 },
  ],

  [
    { quien: "Fresh", texto: "tenes hambre?", delay: 800 },
    { quien: "Kin", texto: "si 😭", delay: 1800 },
    { quien: "Fresh", texto: "pedimos algo?", delay: 3000 },
    { quien: "Kin", texto: "si vos elegis 💕", delay: 4200 },
    { quien: "Fresh", imagen: "img/gun-sad.gif", delay: 6000 },
  ],

  [
    { quien: "Kin", texto: "te acordas?", delay: 800 },
    { quien: "Fresh", texto: "de que 😳", delay: 1800 },
    { quien: "Kin", texto: "de nosotros", delay: 3200 },
    { quien: "Fresh", texto: "siempre 💕", delay: 4500 },
  ],

  [
    { quien: "Fresh", texto: "me aburrí", delay: 800 },
    { quien: "Kin", texto: "vení y no te aburrís 😏", delay: 2000 },
    { quien: "Fresh", texto: "apa", delay: 3200 },
  ],
];


/* ════════════════════════════════════════════════════════════════
   LÓGICA — no necesitás tocar nada de acá para abajo
   ════════════════════════════════════════════════════════════════ */

/* ── Estado global ── */
emailjs.init(CONFIG_EMAIL.PUBLIC_KEY);

const todos = [
  ...CUPONES_ROMANTICOS.map(v => ({ ...v, tipo: "romantico" })),
  ...CUPONES_COTIDIANOS.map(v => ({ ...v, tipo: "cotidiano" })),
  ...CUPONES_SEXY.map(v => ({       ...v, tipo: "sexy" })),
  ...CUPONES_GAMER.map(v => ({      ...v, tipo: "gamer" })),
];

// Clave estable por cupón: tipo + título (no cambia aunque agregues más cupones)
function idCupon(v) {
  return `${v.tipo}__${v.titulo}`;
}

let canjeados = JSON.parse(localStorage.getItem("cupones_canjeados_v3") || "{}");

// REEMPLAZÁ la función cargarCanjeados() completa por esta:
async function cargarCanjeados() {
  // 1. Render inmediato con localStorage (sin esperar red)
  renderGrilla();

  // 2. JSONBin con timeout de 3 segundos
  try {
    const fetchPromise = fetch(JSONBIN_URL + "/latest", {
      headers: { "X-Master-Key": CONFIG_SYNC.API_KEY }
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 3000)
    );

    const res  = await Promise.race([fetchPromise, timeoutPromise]);
    const data = await res.json();
    const remoto = data.record || {};

    // Solo re-renderiza si el remoto tiene diferencias reales
    const hayDiferencias = Object.keys(remoto).some(k => !canjeados[k]);
    Object.assign(canjeados, remoto);
    localStorage.setItem("cupones_canjeados_v3", JSON.stringify(canjeados));
    if (hayDiferencias) renderGrilla();

  } catch (err) {
    console.warn("JSONBin no disponible, usando local:", err.message);
  }
}

async function guardarCanjeados() {
  try {
    localStorage.setItem("cupones_canjeados_v3", JSON.stringify(canjeados));
    await fetch(JSONBIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": CONFIG_SYNC.API_KEY
      },
      body: JSON.stringify(canjeados)
    });
  } catch (err) {
    console.warn("Error al guardar en la nube:", err);
  }
}

let filtroActual   = "todos";
let cuponEnCanje   = null;
let modoGamer      = false;
let modoSexy       = false;
let sexyVisible    = false;
let musicaActiva   = false;
let toastTimer     = null;
let chatIniciado   = false;
let chatAbierto    = false;
let clicksCorazon  = 0;
let timerCorazon   = null;


let secretosDescubiertos = JSON.parse(localStorage.getItem("secretos_descubiertos") || "[]");


let mododev = false;

let audioActual = null;





/* ── Referencias DOM ── */
const grilla         = document.getElementById("grilla");
const contador       = document.getElementById("contador");
const fraseEl        = document.getElementById("frase-aleatoria");
const overlay        = document.getElementById("overlay");
const modalEmoji     = document.getElementById("modal-emoji");
const modalTitulo    = document.getElementById("modal-titulo");
const modalSubtitulo = document.getElementById("modal-subtitulo");
const btnConfirmar   = document.getElementById("btn-confirmar");
const toast          = document.getElementById("toast");
const audio          = document.getElementById("audio");
const audioGamer     = document.getElementById("audio-gamer");
const audioSexy      = document.getElementById("audio-sexy");
const audioCheck     = document.getElementById("audio-check");
const audioUnlock    = document.getElementById("audio-unlock");
const audioMsg = document.getElementById("audio-msg");

function reproducirSonidoMensaje() {
  audioMsg.currentTime = 0;   // reinicia el sonido
  audioMsg.volume = 0.25;     // volumen tipo iPhone
  audioMsg.playbackRate = 1.05; // le da ese toque "pop"
  
   // pequeño delay como en iPhone
  setTimeout(() => {
    audioMsg.play().catch(() => {});
  }, 50);
}



function reproducirAudio(audioTarget) {
  // apagar todos
  [audio, audioGamer, audioSexy].forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  // guardar cuál está activo
  audioActual = audioTarget;

  if (!musicaActiva) return;

  audioTarget.currentTime = 0;
  audioTarget.play().catch(() => {});
}


function registrarSecreto(val) {
  if (!secretosDescubiertos.includes(val)) {
    secretosDescubiertos.push(val);
    localStorage.setItem("secretos_descubiertos", JSON.stringify(secretosDescubiertos));
  }
  actualizarContadorSecretos();
}

function actualizarContadorSecretos() {
  const el = document.getElementById("contador-secretos");
  if (!el) return;
  const total = Object.keys(CONTRASENAS_SECRETAS).length + PERSONAJES.length;
  const encontrados = secretosDescubiertos.length;
  el.textContent = `🔍 ${encontrados}/${total} secretos descubiertos`;
  el.style.opacity = encontrados > 0 ? "1" : "0.4";
}


// Sonido de click para el corazón (generado por Web Audio API, sin archivo externo)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function sonarClickCorazon() {
  const osc  = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(520, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(320, audioCtx.currentTime + 0.08);
  gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.12);
}
const btnMusica      = document.getElementById("btn-musica");
const chatEl         = document.getElementById("mini-chat");
const chatMensajes   = document.getElementById("chat-mensajes");
const btnChatToggle  = document.getElementById("btn-chat-toggle");
const corazonEl      = document.getElementById("corazon-secreto");
const campoSecretoWrap = document.getElementById("campo-secreto-wrap");
const campoSecreto   = document.getElementById("campo-secreto");

let introActiva = false;  // flag para no re-triggerear

campoSecreto.addEventListener("input", () => {
  if (introActiva) return;
  const val = campoSecreto.value.toLowerCase();

  const personaje = PERSONAJES.find(p =>
    p.introTriggerEn && val === p.introTriggerEn
  );
  if (!personaje) return;

  introActiva = true;
  mostrarIntroYoutube(personaje, () => {
    introActiva = false;
  });
});

// Resetear flag si borran el campo
campoSecreto.addEventListener("input", () => {
  if (campoSecreto.value === "") introActiva = false;
});




audio.volume      = 0.15;
audioGamer.volume = 0.15;
audioSexy.volume = 0.15;

/* ══════════════════════════════════════════════
   FRASES ALEATORIAS
   ══════════════════════════════════════════════ */
function mostrarFraseAleatoria() {
  const arr = modoGamer ? FRASES_GAMER : modoSexy ? FRASES_SEXY : FRASES;
  fraseEl.textContent = arr[Math.floor(Math.random() * arr.length)];
}
mostrarFraseAleatoria();


/* ══════════════════════════════════════════════
   TEMPORIZADOR
   ══════════════════════════════════════════════ */
function calcularTemporizador() {
  const ahora = new Date();
  const dia   = CONFIG_TEMPORIZADOR.DIA_REINICIO;

  let fin = new Date(ahora.getFullYear(), ahora.getMonth(), dia, 0, 0, 0, 0);
  if (ahora >= fin) {
    fin = new Date(ahora.getFullYear(), ahora.getMonth() + 1, dia, 0, 0, 0, 0);
  }
  const inicio    = new Date(fin.getFullYear(), fin.getMonth() - 1, dia, 0, 0, 0, 0);
  const total     = fin - inicio;
  const restante  = fin - ahora;
  const porcentaje = Math.max(0, restante / total);

  const dias    = Math.floor(restante / (1000 * 60 * 60 * 24));
  const horas   = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((restante % (1000 * 60)) / 1000);

  document.getElementById("temp-countdown").textContent =
    `${dias}d ${String(horas).padStart(2,"0")}h ${String(minutos).padStart(2,"0")}m ${String(segundos).padStart(2,"0")}s`;

  const fechaLabel = fin.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  document.getElementById("temp-subtexto").textContent = `Próximo reinicio: ${fechaLabel} 💕`;
  document.getElementById("temp-barra").style.width = (porcentaje * 100).toFixed(1) + "%";
}
calcularTemporizador();
setInterval(calcularTemporizador, 1000);


/* ══════════════════════════════════════════════
   GRILLA DE CUPONES
   ══════════════════════════════════════════════ */
const EFECTOS_CICLO = ["efecto-brillo", "efecto-sparkle", "", "efecto-brillo", "", "efecto-sparkle"];

function getEfectoFallback(idx) {
  return modoGamer ? "" : EFECTOS_CICLO[idx % EFECTOS_CICLO.length];
}






/* ══════════════════════════════════════════════
   EFECTO CORAZONES — hover con JS
   ══════════════════════════════════════════════ */
function iniciarEfectoCorazones() {
  document.querySelectorAll(".efecto-corazones").forEach(card => {
    card.addEventListener("mouseenter", () => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const h = document.createElement("span");
          h.textContent = Math.random() > 0.5 ? "♥" : "♡";
          h.style.cssText = `
            position: absolute;
            font-size: ${0.7 + Math.random() * 0.6}rem;
            color: ${Math.random() > 0.5 ? "var(--rosa)" : "var(--rosa-oscuro)"};
            left: ${10 + Math.random() * 80}%;
            top: ${20 + Math.random() * 50}%;
            pointer-events: none;
            z-index: 10;
            animation: corazonFlotante 1.2s ease forwards;
          `;
          card.appendChild(h);
          setTimeout(() => h.remove(), 1200);
        }, i * 120);
      }
    });
  });
}


function iniciarEfectoBerenjenas() {
  document.querySelectorAll(".efecto-berenjenas").forEach(card => {
    if (card._berenjenasInit) return;
    card._berenjenasInit = true;
    card.style.overflow = "visible";
    card.addEventListener("mouseenter", () => {
      const emojis = ["🍆","💦","🍑","🔥","💋"];
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          const h = document.createElement("span");
          h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          h.style.cssText = `
            position: absolute;
            font-size: ${0.8 + Math.random() * 0.7}rem;
            left: ${5 + Math.random() * 85}%;
            top: ${15 + Math.random() * 55}%;
            pointer-events: none;
            z-index: 999;
            animation: berenjena ${0.9 + Math.random() * 0.6}s ease forwards;
          `;
          card.appendChild(h);
          setTimeout(() => h.remove(), 1500);
        }, i * 100);
      }
    });
  });
}



function actualizarPuntosNuevos() {
  const vistos = JSON.parse(localStorage.getItem("cupones_vistos") || "[]");

  const filtros = {
    "romantico":  "[data-filtro='normales']",
    "cotidiano":  "[data-filtro='cotidianos']",
    "sexy":       "[data-filtro='sexy']",
    "gamer":      "[data-filtro='gamer']",
  };

  Object.entries(filtros).forEach(([tipo, selector]) => {
    const tabEl = document.querySelector(selector);
    if (!tabEl) return;

    const puntoExistente = tabEl.querySelector(".tab-punto-nuevo");
    if (puntoExistente) puntoExistente.remove();

    // Hay cupón nuevo si existe un cupón de ese tipo que no fue visto
    const hayNuevo = todos.some(v =>
      v.tipo === tipo && !vistos.includes(idCupon(v))
    );

    const tabVisible = tabEl.style.display !== "none";
    if (hayNuevo && tabVisible) {
      const punto = document.createElement("span");
      punto.className = "tab-punto-nuevo";
      tabEl.appendChild(punto);
    }
  });
}

function iniciarEfectoPixels() {
  const colores = ["#00ffcc","#ff00aa","#8800ff","#ffee00","#00aaff"];
  document.querySelectorAll(".efecto-pixels").forEach(card => {
    if (card._pixelsInit) return;
    card._pixelsInit = true;
    card.style.overflow = "visible";

    // pixels fijos permanentes
    for (let i = 0; i < 5; i++) {
      const p = document.createElement("span");
      const size = 4 + Math.floor(Math.random() * 6);
      p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${colores[Math.floor(Math.random() * colores.length)]};
        left: ${5 + Math.random() * 85}%;
        top: ${10 + Math.random() * 70}%;
        pointer-events: none;
        z-index: 999;
        opacity: 0.6;
        animation: pixelFlotante ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s;
      `;
      card.appendChild(p);
    }

    // hover: explotan más
    card.addEventListener("mouseenter", () => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const p = document.createElement("span");
          const size = 3 + Math.floor(Math.random() * 8);
          p.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colores[Math.floor(Math.random() * colores.length)]};
            left: ${5 + Math.random() * 85}%;
            top: ${10 + Math.random() * 70}%;
            pointer-events: none;
            z-index: 999;
            animation: pixelFlotante 0.9s ease forwards;
          `;
          card.appendChild(p);
          setTimeout(() => p.remove(), 900);
        }, i * 60);
      }
    });
  });
}

function iniciarEfectoGolden() {
  document.querySelectorAll(".efecto-golden").forEach(card => {
    if (card._goldenInit) return;
    card._goldenInit = true;

    // Destello diagonal dentro del cuerpo (respeta el clip)
    const cuerpo = card.querySelector(".vale-cuerpo");
    if (cuerpo) {
      cuerpo.style.overflow = "hidden";
      const shine = document.createElement("div");
      shine.style.cssText = `
        position: absolute;
        top: -80%;
        left: -80%;
        width: 60%;
        height: 250%;
        background: linear-gradient(105deg, transparent 30%, rgba(255,220,100,0.15) 45%, rgba(255,240,150,0.6) 50%, rgba(255,220,100,0.15) 55%, transparent 70%);
        transform: skewX(-15deg);
        animation: goldenShine 3.5s ease-in-out infinite;
        pointer-events: none;
        z-index: 1;
      `;
      cuerpo.appendChild(shine);
    }


  




    
    // Partículas doradas — resto igual que tenías
    const particulas = ["✨","⭐","💫","★","✦"];
    for (let i = 0; i < 4; i++) {
      const p = document.createElement("span");
      p.textContent = particulas[Math.floor(Math.random() * particulas.length)];
      p.style.cssText = `
        position: absolute;
        font-size: ${0.6 + Math.random() * 0.5}rem;
        left: ${5 + Math.random() * 85}%;
        top: ${10 + Math.random() * 65}%;
        pointer-events: none;
        z-index: 10;
        color: #f0d080;
        opacity: 0.7;
        animation: goldenParticula ${2.5 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s;
      `;
      card.appendChild(p);
    }

    card.addEventListener("mouseenter", () => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const p = document.createElement("span");
          p.textContent = particulas[Math.floor(Math.random() * particulas.length)];
          p.style.cssText = `
            position: absolute;
            font-size: ${0.7 + Math.random() * 0.6}rem;
            left: ${5 + Math.random() * 85}%;
            top: ${10 + Math.random() * 65}%;
            pointer-events: none;
            z-index: 10;
            color: #f0d080;
            animation: goldenExplosion 1s ease forwards;
          `;
          card.appendChild(p);
          setTimeout(() => p.remove(), 1000);
        }, i * 80);
      }
    });
  });
}



function iniciarEfectoAuraCorazones() {
  document.querySelectorAll(".efecto-aura-corazones").forEach(card => {
    if (card._auraCorazonesInit) return;
    card._auraCorazonesInit = true;

    const emojis = ["♥", "♡", "💕", "✨", "♥"];
    const cantidad = 6;
    const radio = 120; // distancia del centro del cupón

    // Crear corazones orbitando
    emojis.slice(0, cantidad).forEach((emoji, i) => {
      const h = document.createElement("span");
      h.textContent = emoji;
      const angulo = (360 / cantidad) * i;
      const duracion = 4 + Math.random() * 2;
      const delay = -(duracion / cantidad) * i; // distribuidos en la órbita

      h.style.cssText = `
        position: absolute;
        font-size: ${0.7 + Math.random() * 0.4}rem;
        color: ${Math.random() > 0.5 ? "#e8a0b4" : "#c26e8a"};
        pointer-events: none;
        z-index: 10;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform-origin: 0 0;
        animation: orbitar${card._auraCorazonesInit ? "" : ""} ${duracion}s linear ${delay}s infinite;
      `;

      // CSS personalizado por elemento via style tag
      const id = `aura-corazon-${Math.random().toString(36).slice(2)}`;
      h.id = id;

      const style = document.createElement("style");
      style.textContent = `
        #${id} {
          animation: none;
        }
      `;
      document.head.appendChild(style);

      card.appendChild(h);

      // Animar manualmente con JS para control total
      let angActual = angulo;
      let visible = false;

      function tick() {
        angActual += 360 / (duracion * 60);
        if (angActual >= 360) angActual -= 360;

        const rad = (angActual * Math.PI) / 180;
        const x = Math.cos(rad) * radio;
        const y = Math.sin(rad) * (radio * 0.45); // elipse, no círculo

        h.style.transform = `translate(${x}px, ${y}px) scale(${0.8 + Math.abs(Math.sin(rad)) * 0.4})`;
        h.style.opacity = visible ? (0.4 + Math.abs(Math.sin(rad)) * 0.6).toString() : "0";
        h.style.zIndex = Math.sin(rad) > 0 ? "10" : "-1"; // pasa por detrás y por delante

        requestAnimationFrame(tick);
      }

      // Solo aparecen al hover
      card.addEventListener("mouseenter", () => { visible = true; });
      card.addEventListener("mouseleave", () => { visible = false; });

      tick();
    });
  });
}


function iniciarEfectoMagnetico() {
  document.querySelectorAll(".efecto-magnetico").forEach(card => {
    if (card._magneticoInit) return;
    card._magneticoInit = true;

    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      card.style.setProperty("--mag-x",  `${dx * 8}px`);
      card.style.setProperty("--mag-y",  `${dy * 5}px`);
      card.style.setProperty("--mag-rx", `${-dy * 7}deg`);
      card.style.setProperty("--mag-ry", `${dx * 9}deg`);
      card.classList.add("magnetico-activo");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("magnetico-activo");
      card.style.removeProperty("--mag-x");
      card.style.removeProperty("--mag-y");
      card.style.removeProperty("--mag-rx");
      card.style.removeProperty("--mag-ry");
    });
  });
}

function iniciarEfectoRipple() {
  document.querySelectorAll(".efecto-ripple").forEach(card => {
    if (card._rippleInit) return;
    card._rippleInit = true;

    let ultimoRipple = 0;

    card.addEventListener("mousemove", e => {
      const ahora = Date.now();
      if (ahora - ultimoRipple < 400) return; // máx 1 ripple cada 400ms
      ultimoRipple = ahora;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid rgba(194,110,138,0.6);
        background: transparent;
        pointer-events: none;
        z-index: 3;
        animation: rippleOnda 0.7s ease forwards;
      `;
      card.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}


function iniciarEfectoChispas() {
  const emojis = ["⚡", "💢", "✸", "🔥", "❗", "💥"];
  document.querySelectorAll(".efecto-chispas").forEach(card => {
    if (card._chispasInit) return;
    card._chispasInit = true;
    card.addEventListener("mouseenter", () => {
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          const h = document.createElement("span");
          h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          h.style.cssText = `
            position: absolute;
            font-size: ${0.7 + Math.random() * 0.7}rem;
            left: ${5 + Math.random() * 85}%;
            top: ${15 + Math.random() * 55}%;
            pointer-events: none;
            z-index: 999;
            animation: chispaElectrica ${0.6 + Math.random() * 0.5}s ease forwards;
          `;
          card.appendChild(h);
          setTimeout(() => h.remove(), 1100);
        }, i * 90);
      }
    });
  });
}


function iniciarEfectoCustom() {
  document.querySelectorAll(".vale").forEach(card => {
    if (card._customInit) return;

    const tituloEl = card.querySelector(".vale-titulo");
    if (!tituloEl) return;

    // ← Si tiene sorpresa-real, usar ese texto; sino el texto normal
    const sorpresaReal = tituloEl.querySelector(".sorpresa-real");
    const titulo = sorpresaReal 
      ? sorpresaReal.textContent.trim() 
      : tituloEl.textContent.trim();

    const config = EFECTOS_CUSTOM[titulo];
    if (!config) return;

    console.log("✅ efecto custom encontrado para:", titulo);
    card._customInit = true;
    card.style.overflow = "visible";

    function crearElemento() {
      const src = config.items[Math.floor(Math.random() * config.items.length)];
      const el  = document.createElement("span");
      const esPixel = config.modo === "pixel";

      if (esPixel) {
        const rect   = card.getBoundingClientRect();
        const startX = rect.left + Math.random() * rect.width;
        const startY = rect.top  + Math.random() * rect.height;
        el.style.cssText = `
          position: fixed;
          left: ${startX}px;
          top: ${startY}px;
          pointer-events: none;
          z-index: 9999;
          font-size: ${config.tamaño || "1.4rem"};
          --dx: ${(Math.random() - 0.5) * 300}px;
          --dy: ${(Math.random() - 0.5) * 300}px;
          --rot: ${Math.random() * 720 - 360}deg;
          animation: customPixelExplode ${0.8 + Math.random() * 0.8}s ease forwards;
        `;
      } else {
        el.style.cssText = `
          position: absolute;
          left: ${5 + Math.random() * 85}%;
          top: ${10 + Math.random() * 65}%;
          pointer-events: none;
          z-index: 10;
          font-size: ${config.tamaño || "1.2rem"};
          animation: customFlotante ${1.5 + Math.random() * 1.5}s ease forwards;
        `;
      }

      if (src.includes("/")) {
        el.innerHTML = `<img src="${src}"
          style="width:${config.tamaño || "1.4rem"};height:${config.tamaño || "1.4rem"};object-fit:contain;display:block;"
          onerror="this.replaceWith(document.createTextNode('✨'))">`;
      } else {
        el.textContent = src;
      }

      if (esPixel) {
        document.body.appendChild(el);
      } else {
        card.appendChild(el);
      }

      setTimeout(() => el.remove(), 1800);
    }

    card.addEventListener("mouseenter", () => {
      console.log("🖱️ hover en:", titulo);
      const cantidad = config.cantidad || 5;
      for (let i = 0; i < cantidad; i++) {
        setTimeout(() => crearElemento(), i * 80);
      }
    });
  });
}


function iniciarEfectoKi() {
  document.querySelectorAll(".efecto-ki").forEach(card => {
    if (card._kiInit) return;
    card._kiInit = true;
    card.style.overflow = "visible";
    card.style.position = "relative";

    const w = card.offsetWidth  || 280;
    const h = card.offsetHeight || 300;
    const cx = w / 2;
    const cy = h / 2;

    // Aura de fondo — div separado, no ::before
    const aura = document.createElement("div");
    aura.style.cssText = `
      position: absolute;
      inset: -12px;
      border-radius: 22px;
      background: radial-gradient(ellipse at center,
        transparent 35%,
        rgba(100,200,255,0.3) 65%,
        rgba(100,200,255,0.1) 85%,
        transparent 100%
      );
      pointer-events: none;
      z-index: 0;
      animation: kiAura 2s ease-in-out infinite;
    `;
    card.appendChild(aura);

    // Partículas orbitando
    for (let i = 0; i < 10; i++) {
      const angulo = (360 / 10) * i;
      const rad    = (angulo * Math.PI) / 180;
      const radioX = cx + 18;
      const radioY = cy + 18;

      const p = document.createElement("div");
      const dur   = 2 + Math.random() * 1.5;
      const delay = -(dur / 10) * i;
      const size  = 5 + Math.random() * 5;

      const x = cx + Math.cos(rad) * radioX - size / 2;
      const y = cy + Math.sin(rad) * radioY - size / 2;

      p.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(100,200,255,0.9);
        box-shadow: 0 0 8px rgba(100,200,255,1), 0 0 16px rgba(100,200,255,0.6);
        pointer-events: none;
        z-index: 11;
        animation: kiPulso ${dur}s ease-in-out ${delay}s infinite;
      `;
      card.appendChild(p);
    }

    // Rayos girando
    [{ dur: 8, dir: "normal" }, { dur: 5, dir: "reverse" }, { dur: 12, dir: "normal" }].forEach(({ dur, dir }) => {
      const rayo = document.createElement("div");
      rayo.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9;
        animation: kiRayoGiro ${dur}s linear infinite;
        animation-direction: ${dir};
        transform-origin: 0 0;
      `;
      const linea = document.createElement("div");
      linea.style.cssText = `
        position: absolute;
        width: 2px;
        height: 25px;
        background: linear-gradient(to bottom, rgba(100,200,255,1), transparent);
        border-radius: 2px;
        top: -${cy + 25}px;
        left: -1px;
        filter: blur(1px);
      `;
      rayo.appendChild(linea);
      card.appendChild(rayo);
    });
  });
}



/* ══════════════════════════════════════════════
   MODALES DE PERSONAJES — generación automática
   ══════════════════════════════════════════════ */
function iniciarPersonajes() {
  const container = document.getElementById("personajes-container");

  PERSONAJES.forEach(p => {

    // ── Intro de video — solo para personajes CON modal después ──
    if (p.introVideo && !p.soloVideo) {
      const introOverlay = document.createElement("div");
      introOverlay.id = `intro-${p.id}`;
      introOverlay.style.cssText = `
        position: fixed; inset: 0; background: #000;
        z-index: 400; display: flex; align-items: center;
        justify-content: center; opacity: 0; pointer-events: none;
        transition: opacity 0.4s;
      `;
      introOverlay.innerHTML = `
        <video id="intro-vid-${p.id}" src="${p.introVideo}"
          style="max-width:100%;max-height:100%;object-fit:contain;"
          playsinline ${p.introMuted ? "muted" : ""}>
        </video>
        <button style="
          position:absolute; top:1rem; right:1rem;
          background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);
          color:#fff; border-radius:20px; padding:0.4rem 1rem;
          font-size:0.8rem; cursor:pointer; font-family:'Lato',sans-serif;
        " id="intro-skip-${p.id}">✕ Cerrar</button>
      `;
      container.appendChild(introOverlay);

      const abrirModalDespues = () => {
        const vid = document.getElementById(`intro-vid-${p.id}`);
        vid.pause();
        introOverlay.style.opacity = "0";
        introOverlay.style.pointerEvents = "none";
        abrirModalPersonaje(p);
      };

      document.getElementById(`intro-skip-${p.id}`)
        .addEventListener("click", abrirModalDespues);
      document.getElementById(`intro-vid-${p.id}`)
        .addEventListener("ended", abrirModalDespues);
    }
    // soloVideo → lo maneja completamente mostrarIntroYoutube, no crear nada acá

    // ── Modal principal — solo si no es soloVideo ──
    if (!p.soloVideo) {
      const overlay = document.createElement("div");
      overlay.className = "overlay-buu";
      overlay.id = `overlay-${p.id}`;
      overlay.innerHTML = `
        <article class="buu-card">
          <img src="${p.fondo}" alt="fondo" class="buu-fondo">
          <img src="${p.personaje}" alt="${p.id}" class="buu-personaje">
          <div class="buu-mensaje">
            <div class="buu-titulo">${p.titulo}</div>
            <div class="buu-texto">${p.texto}</div>
          </div>
        </article>
        <button class="buu-cerrar" id="${p.id}-cerrar">✕ Cerrar</button>
      `;
      container.appendChild(overlay);

      const cerrar = () => {
        overlay.classList.remove("visible");
        if (overlay._audioPersonaje) {
          overlay._audioPersonaje.pause();
          overlay._audioPersonaje.currentTime = 0;
          overlay._audioPersonaje = null;
        }
      };
      document.getElementById(`${p.id}-cerrar`).addEventListener("click", cerrar);
      overlay.addEventListener("click", e => { if (e.target === overlay) cerrar(); });
    }

  });
}



function mostrarIntroYoutube(p, onCerrar) {
  let introOverlay = document.getElementById(`intro-yt-${p.id}`);

  if (!introOverlay) {
    introOverlay = document.createElement("div");
    introOverlay.id = `intro-yt-${p.id}`;
    introOverlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.96);
      z-index: 400; display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 1.2rem;
      opacity: 0; pointer-events: none;
      transition: opacity 0.35s ease;
    `;

    // ── Video ──
    const videoWrap = document.createElement("div");
    videoWrap.style.cssText = `
      position: relative;
      width: min(700px, 92vw);
      aspect-ratio: 16/9;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 0 60px rgba(0,0,0,0.8);
    `;

    const video = document.createElement("video");
    video.id = `intro-video-${p.id}`;
    video.style.cssText = `width:100%; height:100%; object-fit:contain; display:block;`;
    video.setAttribute("playsinline", "");
    // ← solo ponemos muted si el config lo pide
    if (p.introMuted) video.setAttribute("muted", "");
    video.innerHTML = `<source src="${p.introVideo}" type="video/mp4">`;
    videoWrap.appendChild(video);

    // ── Barra de progreso ──
    const barra = document.createElement("div");
    barra.style.cssText = `
      position: absolute; bottom: 0; left: 0;
      height: 3px; width: 0%;
      background: linear-gradient(90deg, var(--rosa), var(--rosa-oscuro));
      transition: width 0.25s linear;
      pointer-events: none;
    `;
    videoWrap.appendChild(barra);
    introOverlay.appendChild(videoWrap);

    // ── Botón cerrar ──
    const skipBtn = document.createElement("button");
    skipBtn.id = `intro-skip-${p.id}`;
    skipBtn.textContent = "✕  Cerrar y volver";
    skipBtn.style.cssText = `
      background: none;
      border: 1.5px solid rgba(255,255,255,0.35);
      color: rgba(255,255,255,0.7);
      border-radius: 30px;
      padding: 0.55rem 1.6rem;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      font-family: 'Lato', sans-serif;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
    `;
    skipBtn.addEventListener("mouseenter", () => {
      skipBtn.style.background = "rgba(255,255,255,0.1)";
      skipBtn.style.color = "#fff";
      skipBtn.style.borderColor = "rgba(255,255,255,0.7)";
    });
    skipBtn.addEventListener("mouseleave", () => {
      skipBtn.style.background = "none";
      skipBtn.style.color = "rgba(255,255,255,0.7)";
      skipBtn.style.borderColor = "rgba(255,255,255,0.35)";
    });
    introOverlay.appendChild(skipBtn);
    document.body.appendChild(introOverlay);
  }

  const video  = document.getElementById(`intro-video-${p.id}`);
  const skipBtn = document.getElementById(`intro-skip-${p.id}`);
  const barra  = introOverlay.querySelector("div > div"); // barra de progreso

  // ── Mostrar overlay primero, arrancar video después ──
  introOverlay.style.opacity = "1";
  introOverlay.style.pointerEvents = "all";

  video.currentTime = 0;
  video.muted = false;        // ← forzar sin mute explícitamente
  video.volume = 1.0;         // ← volumen al máximo

  // Pausar música de fondo mientras corre el video
  if (musicaActiva) {
    const audioActivo = modoGamer ? audioGamer : modoSexy ? audioSexy : audio;
    audioActivo.pause();
  }

  setTimeout(() => {
    const promesa = video.play();
    if (promesa !== undefined) {
      promesa.catch(() => {
        // Navegador bloqueó — última opción: pedirle al usuario que toque
        const aviso = document.createElement("div");
        aviso.style.cssText = `
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,0.7); cursor: pointer; z-index: 10;
          font-family: 'Lato', sans-serif; color: #fff;
          font-size: 1.1rem; letter-spacing: 0.05em;
        `;
        aviso.textContent = "▶  Tocá para reproducir";
        introOverlay.querySelector("div").appendChild(aviso);
        aviso.addEventListener("click", () => {
          aviso.remove();
          video.muted = false;
          video.volume = 1.0;
          video.play().catch(() => {});
        }, { once: true });
      });
    }
  }, 100);

  // Pequeño delay para que el fade-in termine antes de que arranque
  setTimeout(() => {
    video.play().catch(() => {
      // Si el browser bloquea sin mute, forzamos muted y reintentamos
      video.muted = true;
      video.play().catch(() => {});
    });
  }, 100);

  // Barra de progreso en tiempo real
  const actualizarBarra = () => {
    if (!video.duration) return;
    barra.style.width = (video.currentTime / video.duration * 100) + "%";
  };
  video.addEventListener("timeupdate", actualizarBarra);

  // ── Cerrar limpio — solo cierra, no abre nada ──
  const cerrar = () => {
    video.pause();
    video.currentTime = 0;
    barra.style.width = "0%";
    video.removeEventListener("timeupdate", actualizarBarra);
    introOverlay.style.opacity = "0";
    introOverlay.style.pointerEvents = "none";
    campoSecreto.value = "";
    introActiva = false;
    skipBtn.removeEventListener("click", cerrar);
    video.removeEventListener("ended", onVideoTerminado);
    campoSecreto.removeEventListener("keydown", onEnter);
    // Retomar música de fondo
    if (musicaActiva) {
      const audioActivo = modoGamer ? audioGamer : modoSexy ? audioSexy : audio;
      audioActivo.play().catch(() => {});
    }
    onCerrar?.();
  };

  // ── Video termina → abre modal ──
  // ── Video termina → solo cierra, sin modal ──
  const onVideoTerminado = () => {
    video.removeEventListener("timeupdate", actualizarBarra);
    introOverlay.style.opacity = "0";
    introOverlay.style.pointerEvents = "none";
    skipBtn.removeEventListener("click", cerrar);
    campoSecreto.removeEventListener("keydown", onEnter);

    // Retomar música de fondo
    if (musicaActiva) {
      const audioActivo = modoGamer ? audioGamer : modoSexy ? audioSexy : audio;
      audioActivo.play().catch(() => {});
    }

    campoSecreto.value = "";
    introActiva = false;
    onCerrar?.();
    // ← sin abrirModalPersonaje, termina y ya
  };

  // ── Enter procesa la contraseña normalmente ──
  const onEnter = (e) => {
    if (e.key !== "Enter") return;
    video.pause();
    video.removeEventListener("timeupdate", actualizarBarra);
    introOverlay.style.opacity = "0";
    introOverlay.style.pointerEvents = "none";
    skipBtn.removeEventListener("click", cerrar);
    video.removeEventListener("ended", onVideoTerminado);
    campoSecreto.removeEventListener("keydown", onEnter);
    onCerrar?.();
  };

  skipBtn.addEventListener("click", cerrar);
  video.addEventListener("ended", onVideoTerminado);
  campoSecreto.addEventListener("keydown", onEnter);
}



function abrirPersonaje(id) {
  const p = PERSONAJES.find(p => p.id === id);  // ← primero definir p
  if (!p) return;
  if (p.soloVideo) return;                       // ← después chequear

  if (p.introVideo) {
    const introOverlay = document.getElementById(`intro-${p.id}`);
    const vid = document.getElementById(`intro-video-${p.id}`);
    introOverlay.style.opacity = "1";
    introOverlay.style.pointerEvents = "all";
    vid.currentTime = 0;
    vid.play().catch(() => {});
  } else {
    abrirModalPersonaje(p);
  }
}

// Función separada que abre el modal (usada directamente o después del video)
function abrirModalPersonaje(p) {
  document.getElementById(`overlay-${p.id}`).classList.add("visible");
  if (p.confetti) lanzarConfetti(false);

  audioUnlock.currentTime = 0;
  audioUnlock.volume = 0.6;
  audioUnlock.play().catch(() => {});

  if (p.audio) {
    const audioPersonaje = new Audio(p.audio);
    audioPersonaje.volume = 0.7;
    audioPersonaje.play().catch(() => {});
    document.getElementById(`overlay-${p.id}`)._audioPersonaje = audioPersonaje;
  }
}



/* ────────────────────────────────────────────────
   PALABRAS MALSONANTES — editá a gusto
   ──────────────────────────────────────────────── */
const PALABRAS_MALAS = [ "trolo","salame", "puto", "gay", "idiota", "pelotudo", "boludo", "estupido", "imbecil", "garca", "hdp", "hijo de puta", "forro", "pendejo", "maricon", "zarpado", "choto", "cagón", "culiao", "la concha de tu madre", "mierda", "bostero", "cornudo", "gil", "loco", "tarado", "tonto", "verga", "pija", "chupapija", "coger", "follar", "coño", "zorra", "puta madre", "pajero", "culero"];

const RESPUESTAS_MALAS = [
  "😐 en serio? eso es lo mejor que se te ocurrió?",
  "💀 bruh...",
  "🤨 eso no te va a llevar a ningún lado",
  "😒 qué creativo, de verdad",
  "🙄 intentá con algo un poco más romántico, conchudita",
  "💅 no, siguiente",
  "Que te pasa la salame❓",
  "🫵 eso habla más de vos que de la página",
  "💸 Muy jochis",
];

/* ══════════════════════════════════════════════
   PISTAS TROLL
   ══════════════════════════════════════════════ */
function buscarPistaTroll(intento) {
  //Detectar palabras malsonantes primero
  const esMala = PALABRAS_MALAS.some(p => intento.includes(p));
  if (esMala) {
    const audiobruh = document.getElementById("audio-bruh");
    audiobruh.currentTime = 0;
    audiobruh.volume = 0.3;
    audiobruh.play().catch(() => {});
    return RESPUESTAS_MALAS[Math.floor(Math.random() * RESPUESTAS_MALAS.length)];
  }

  // ... resto de la función igual
  const claves = Object.keys(CONTRASENAS_SECRETAS);

  // Ver si alguna clave contiene lo que escribió o viceversa
  const cercana = claves.find(clave =>
    clave.includes(intento) ||
    intento.includes(clave.split(" ")[0]) // primera palabra de la clave
  );

  if (cercana) {
    const pistasCaliente = [
      "👀 estuviste MUY cerca...",
      "🔥 casi casi...",
      "😏 seguí pensando, ibas bien",
      "🫦 eso me suena familiar...",
      "💋 caliente caliente...",
    ];
    return pistasCaliente[Math.floor(Math.random() * pistasCaliente.length)];
  }

  // Levenshtein simple — detecta si se equivocó por poco en una palabra
  const casiFallo = claves.find(clave => distancia(intento, clave) <= 2);
  if (casiFallo) {
    return "🤏 OMG CASI BEBA, revisá cómo lo escribiste";
  }

  const pistasLejos = [
    "Mmm... no es eso 🤭",
    "❌ ni cerca jaja",
    "❓",
    "💀 naaa",
    "😂 seguí intentando",
    "🤔 pensá más...",
  ];
  return pistasLejos[Math.floor(Math.random() * pistasLejos.length)];
}





// distancia de Levenshtein para detectar typos
function distancia(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}


function renderGrilla() {
  grilla.innerHTML = "";

  const vistos = JSON.parse(localStorage.getItem("cupones_vistos") || "[]");
  const filtrados = todos.filter(v => {
    const esCanjeado = !!canjeados[idCupon(v)];
    if (filtroActual === "todos")        return v.tipo !== "gamer" && v.tipo !== "sexy";
    if (filtroActual === "normales")     return v.tipo === "romantico";
    if (filtroActual === "cotidianos")   return v.tipo === "cotidiano";
    if (filtroActual === "sexy")         return v.tipo === "sexy";
    if (filtroActual === "gamer")        return v.tipo === "gamer";
    if (filtroActual === "disponibles")  return !esCanjeado && v.tipo !== "gamer" && v.tipo !== "sexy";
    if (filtroActual === "canjeados")    return esCanjeado;
    return true;
  });

  const totalDisp = todos.filter(v => !canjeados[idCupon(v)]).length;
  const totalCanj = Object.keys(canjeados).length;
  contador.innerHTML = `<span>${totalDisp}</span> disponibles · <span>${totalCanj}</span> canjeados de <span>${todos.length}</span> cupones`;

  if (filtrados.length === 0) {
    grilla.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--texto-suave);font-style:italic;font-family:'Playfair Display',serif;font-size:1.1rem;">No hay cupones aca todavía ♥</div>`;
    return;
  }

  filtrados.forEach((v, fi) => {
    const idx    = todos.indexOf(v);
    const esSexy  = v.tipo === "sexy";
    const esGamer = v.tipo === "gamer";
    const esCanj = mododev ? false : !!canjeados[idCupon(v)];
    const efecto = v.efecto || getEfectoFallback(fi);

    const esCotidiano = v.tipo === "cotidiano";
    const div = document.createElement("div");
    const clases = ["vale"];
    if (esSexy)      clases.push("sexy");
    if (esCotidiano) clases.push("cotidiano");
    if (esGamer)     clases.push("gamer-card");
    if (esCanj)                      clases.push("canjeado");
    if (!esCanj && efecto) {
      if (Array.isArray(efecto)) {
        efecto.forEach(e => clases.push(e));
      } else {
        clases.push(efecto);
      }
    }
    div.className = clases.join(" ");
    div.style.animationDelay = `${fi * 0.06}s`;

    const labelPie = esSexy ? "Cupón Sexy" : esGamer ? "Cupón Gamer" : v.tipo === "cotidiano" ? "Cupón Cotidiano" : "Cupón · Aniversario";

    // Aura por categoría
    if (esGamer)          div.classList.add("aura-gamer");
    else if (esSexy)      div.classList.add("aura-sexy");
    else if (esCotidiano) div.classList.add("aura-cotidiana");
    else                  div.classList.add("aura-romantica");

  const esSorpresa = v.sorpresa && !esCanj;  // ← ya canjeado = ya no es sorpresa

  div.innerHTML = `
    <div class="vale-categoria-franja"></div>
    ${!esCanj && !vistos.includes(idCupon(v)) ? `<span class="vale-punto-nuevo"></span>` : ""}
    ${esGamer ? `<span class="vale-badge">🎮 Gamer</span>` : ""}
    ${esSexy  ? `<span class="vale-badge badge-sexy">💋 Sex</span>` : ""}
    <button class="btn-canjear" data-idx="${idx}" ${esCanj ? "disabled" : ""}>Canjear</button>
    <div class="vale-cuerpo ${esSorpresa ? "sorpresa-cuerpo" : ""}">
      <div class="vale-emoji ${esSorpresa ? "sorpresa-emoji" : ""}">
        ${esSorpresa ? "❓" : 
          v.emoji.includes("/") || v.emoji.endsWith(".png") || v.emoji.endsWith(".jpg") || v.emoji.endsWith(".webp") || v.emoji.endsWith(".gif")
            ? `<img src="${v.emoji}" alt="emoji" class="vale-emoji-img" onerror="this.replaceWith(document.createTextNode('${v.emojiBackup || '✨'}'))">`
            : v.emoji
        }
      </div>
      <div class="vale-titulo">
        ${esSorpresa ? `<span class="sorpresa-tapado">??? Cupón Sorpresa ???</span>
                        <span class="sorpresa-real">${v.titulo}</span>` 
                    : v.titulo}
      </div>
      <div class="vale-descripcion">
        ${esSorpresa ? `<span class="sorpresa-tapado">Pasa el mouse por aca para descubrir qué es...</span>
                        <span class="sorpresa-real">${v.descripcion || ""}</span>`
                    : (v.descripcion || "")}
      </div>
    </div>
    <div class="sello">Canjeado ♥</div>
    <div class="vale-tachado"></div>
    <div class="vale-pie">
      <span class="vale-label">${labelPie}</span>
      <span class="vale-numero">${String(idx + 1).padStart(2, "0")}</span>
    </div>
  `;
    grilla.appendChild(div);
  });

  setTimeout(() => {
    iniciarEfectoCorazones();
    iniciarEfectoBerenjenas();
    iniciarEfectoPixels();
    iniciarEfectoGolden();
    iniciarEfectoAuraCorazones();
    iniciarEfectoMagnetico();
    iniciarEfectoRipple();
    iniciarEfectoChispas();
    iniciarEfectoCustom();
    iniciarEfectoKi();
      // Marcar cupones como vistos al hacer hover
    document.querySelectorAll(".vale").forEach(card => {
      card.addEventListener("mouseenter", () => {
        const tituloEl = card.querySelector(".vale-titulo");
        if (!tituloEl) return;
        const v = todos.find(c => c.titulo === tituloEl.textContent.trim());
        if (!v) return;

        const vistos = JSON.parse(localStorage.getItem("cupones_vistos") || "[]");
        const id = idCupon(v);
        if (!vistos.includes(id)) {
          vistos.push(id);
          localStorage.setItem("cupones_vistos", JSON.stringify(vistos));
          actualizarPuntosNuevos();
        }
      }, { once: true });
    });
  }, 100);
  
}




/* ══════════════════════════════════════════════
   TABS
   ══════════════════════════════════════════════ */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("activo"));
    tab.classList.add("activo");
    filtroActual = tab.dataset.filtro;
    renderGrilla();
  });
});


/* ══════════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════════ */
function mostrarToast(msg) {
  toast.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 4000);
}


/* ══════════════════════════════════════════════
   MODAL CANJE
   ══════════════════════════════════════════════ */
grilla.addEventListener("click", e => {
  const btn = e.target.closest(".btn-canjear");
  if (!btn) return;
  const idx = parseInt(btn.dataset.idx);
  const v   = todos[idx];
  if (canjeados[idCupon(v)]) return;

  cuponEnCanje = idx;
  const esSexy = v.tipo === "sexy";

  if (v.emoji.includes("/") || v.emoji.endsWith(".png") || v.emoji.endsWith(".jpg") || v.emoji.endsWith(".gif")) {
  modalEmoji.innerHTML = `<img src="${v.emoji}" style="width:2.5rem;height:2.5rem;object-fit:contain;" onerror="this.replaceWith(document.createTextNode('${v.emojiBackup || '✨'}'))">`;
} else {
  modalEmoji.textContent = v.emoji;
}
  modalTitulo.textContent    = `¿Canjeás "${v.titulo}"?`;
  modalSubtitulo.textContent = esSexy
    ? "Se va a marcar como usado y me va a llegar la solicitud 🔥"
    : "Se va a marcar como usado y me va a llegar una notificación.";

  btnConfirmar.className = "btn-confirmar" + (esSexy ? " sexy-btn" : "");
  overlay.classList.add("visible");
});

document.getElementById("btn-cancelar").addEventListener("click", () => {
  overlay.classList.remove("visible");
  cuponEnCanje = null;
});

overlay.addEventListener("click", e => {
  if (e.target === overlay) { overlay.classList.remove("visible"); cuponEnCanje = null; }
});

btnConfirmar.addEventListener("click", async () => {
  if (cuponEnCanje === null) return;
  const idx = cuponEnCanje;
  const v   = todos[idx];

  overlay.classList.remove("visible");
  cuponEnCanje = null;

  // Modo dev: simular sin guardar nada
  if (mododev) {
    mostrarToast("🛠️ Dev: canje simulado, nada guardado");
    return;
  }

  // 1. Actualizar UI inmediatamente
  canjeados[idCupon(v)] = { fecha: new Date().toLocaleString("es-AR") };
  localStorage.setItem("cupones_canjeados_v3", JSON.stringify(canjeados));

  renderGrilla();

  audioCheck.currentTime = 0;
  audioCheck.volume = 0.7;
  audioCheck.play().catch(() => {});
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  lanzarConfetti(modoGamer);
  mostrarToast("Cupón canjeado! ♥");

  // Animar tachado
  setTimeout(() => {
    const cards = grilla.querySelectorAll(".vale.canjeado");
    cards.forEach(card => {
      const tachado = card.querySelector(".vale-tachado");
      if (!tachado) return;
      tachado.style.width   = "0%";
      tachado.style.opacity = "0";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          tachado.style.transition = "width 0.8s cubic-bezier(.77,0,.18,1), opacity 0.3s ease";
          tachado.style.width   = "84%";
          tachado.style.opacity = "0.75";
        });
      });
    });
  }, 50);

  // 2. JSONBin en segundo plano
  guardarCanjeados().catch(err => console.warn("JSONBin error:", err));

  // 3. EmailJS en segundo plano
  emailjs.send(CONFIG_EMAIL.SERVICE_ID, CONFIG_EMAIL.TEMPLATE_ID, {
    cupon_emoji:  (v.emoji.includes("/") ? (v.emojiBackup || "🎁") : v.emoji),
    cupon_titulo: v.titulo,
    cupon_tipo:   v.tipo === "sexy" ? "🔥 Cupón Sexy" : v.tipo === "gamer" ? "🎮 Cupón Gamer" : v.tipo === "cotidiano" ? "☀️ Cupón Cotidiano" : "💌 Cupón Romántico",
    fecha:        new Date().toLocaleString("es-AR"),
  }).then(() => mostrarToast("Aviso enviado! ♥"))
    .catch(err => console.error("EmailJS:", err));
});


/* ══════════════════════════════════════════════
   MÚSICA
   ══════════════════════════════════════════════ */
function intentarAutoplay() {
  audio.play().then(() => {
    musicaActiva = true;
    btnMusica.textContent = "🎶";
    btnMusica.classList.add("tocando");
  }).catch(() => {});
  document.removeEventListener("click",      intentarAutoplay);
  document.removeEventListener("touchstart", intentarAutoplay);
}
document.addEventListener("click",      intentarAutoplay, { once: true, capture: false });
document.addEventListener("touchstart", intentarAutoplay, { once: true, capture: false });

btnMusica.addEventListener("click", e => {
  e.stopPropagation();
  const audioActivo = modoGamer ? audioGamer : modoSexy ? audioSexy : audio;
  if (musicaActiva) {
    audioActivo.pause();
    btnMusica.textContent = "🎵";
    btnMusica.classList.remove("tocando");
  } else {
    audioActivo.play();
    btnMusica.textContent = "🎶";
    btnMusica.classList.add("tocando");
  }
  musicaActiva = !musicaActiva;
});


/* ══════════════════════════════════════════════
   FLASH DE TRANSICIÓN DE MODO
   ══════════════════════════════════════════════ */
function flashModo(tipo) {
  // Flash de overlay
  const flash = document.createElement("div");
  flash.className = `mode-flash ${tipo}`;
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 700);

  // Entrada dramática de los cupones con delay escalonado
  setTimeout(() => {
    const vales = grilla.querySelectorAll(".vale");
    vales.forEach((v, i) => {
      v.classList.remove("mode-transition");
      void v.offsetWidth; // reflow
      v.style.animationDelay = `${i * 0.055}s`;
      v.classList.add("mode-transition");
      setTimeout(() => v.classList.remove("mode-transition"), 700 + i * 55);
    });
  }, 150);
}

/* ══════════════════════════════════════════════
   MODO GAMER
   ══════════════════════════════════════════════ */
function activarModoGamer() {
  modoGamer = !modoGamer;
  document.body.classList.toggle("gamer-mode", modoGamer);
  document.body.classList.remove("sexy-mode");
  modoSexy = false;
  document.querySelector(".tab-sexy").style.display = "";
  mostrarFraseAleatoria();
  renderGrilla();

  if (modoGamer) {
    reproducirAudio(audioGamer)?.catch(() => {});
    if (musicaActiva) { btnMusica.textContent = "🎶"; btnMusica.classList.add("tocando"); }
    mostrarToast("🎮 MODO GAMER ACTIVADO!");
    flashModo("gamer");
    setTimeout(() => lanzarConfetti(true), 80);
  } else {
    audioGamer.pause();
    if (musicaActiva) { audio.play().catch(() => {}); }
    mostrarToast("💕 Volvemos al modo amor~");
    flashModo("off");
  }
}


/* ══════════════════════════════════════════════
   MODO SEXY
   ══════════════════════════════════════════════ */
function activarModoSexy() {
  // Si está activo el modo gamer, lo apagamos primero
  if (modoGamer) {
    modoGamer = false;
    document.body.classList.add("sexy-mode");
    document.body.classList.remove("gamer-mode");
    audioGamer.pause();
  }

  modoSexy = !modoSexy;
  document.body.classList.toggle("sexy-mode", modoSexy);

  // Mostrar/ocultar tab sexy
  sexyVisible = modoSexy;
  const tabSexy = document.querySelector(".tab-sexy");
  tabSexy.style.display = modoSexy ? "inline-block" : "";

  mostrarFraseAleatoria();
  renderGrilla();

  if (modoSexy) {
    audio.pause();
    audioSexy.currentTime = 0;
    reproducirAudio(audioSexy)?.catch(() => {});
    if (musicaActiva) { btnMusica.textContent = "🎶"; btnMusica.classList.add("tocando"); }
    mostrarToast("🔥 Modo Totita activado~ 💋");
    flashModo("sexy");
    setTimeout(() => lanzarConfetti(false), 80);
  } else {
    audioSexy.pause();
    if (musicaActiva) { audio.play().catch(() => {}); btnMusica.textContent = "🎶"; btnMusica.classList.add("tocando"); }
    if (filtroActual === "sexy") {
      filtroActual = "todos";
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("activo"));
      document.querySelector("[data-filtro='todos']").classList.add("activo");
      renderGrilla();
    }
    mostrarToast("💕 Volvemos al modo amor~");
    flashModo("off");
  }
}
corazonEl.addEventListener("click", () => {
  clicksCorazon++;
  sonarClickCorazon();

  // Un solo latido por click: agrega la clase, la animación corre una vez y se quita sola
  corazonEl.classList.remove("latiendo");
  void corazonEl.offsetWidth; // fuerza reflow para reiniciar la animación
  corazonEl.classList.add("latiendo");

  clearTimeout(timerCorazon);

  if (clicksCorazon >= 7 && clicksCorazon < 15) {
    campoSecretoWrap.classList.add("visible");
  }
  if (clicksCorazon >= 15) {
    clicksCorazon = 0;
    campoSecretoWrap.classList.remove("visible");
    mostrarModalSecreto("corazon");
  }

  timerCorazon = setTimeout(() => {
    corazonEl.classList.remove("latiendo");
    if (clicksCorazon < 15) clicksCorazon = 0;
    campoSecretoWrap.classList.remove("visible");
  }, 8000);
});

// Quita la clase al terminar la animación (un solo latido)
corazonEl.addEventListener("animationiteration", () => {
  corazonEl.classList.remove("latiendo");
});

campoSecreto.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const val = campoSecreto.value.trim().toLowerCase();
  campoSecreto.value = "";
  campoSecretoWrap.classList.remove("visible");
  clicksCorazon = 0;

  const accion = CONTRASENAS_SECRETAS[val];

  if (accion === "gamer") {
    activarModoGamer();
    registrarSecreto(val);

  } else if (accion === "reset-modo") {
    if (modoGamer || modoSexy) {
      if (modoGamer) activarModoGamer();
      if (modoSexy)  activarModoSexy();
      mostrarToast("💕 Volvemos al modo amor~");
    } else {
      mostrarToast("💕 Ya estás en la página amor, mi amada 💕");
    }
    registrarSecreto(val);

  } else if (accion === "sexy-toggle") {
    activarModoSexy();
    registrarSecreto(val);

  } else if (accion === "reset") {
    if (confirm("¿Resetear todos los cupones canjeados? Vuelven a estar disponibles. ♥")) {
      Object.keys(canjeados).forEach(k => delete canjeados[k]);
      localStorage.removeItem("cupones_canjeados_v3");
      renderGrilla();
      mostrarToast("✨ Todos los cupones reseteados!");
    }

  } else if (accion === "dev-toggle") {
    mododev = !mododev;
    mostrarToast(mododev ? "🛠️ Modo dev ON" : "🛠️ Modo dev OFF");
    renderGrilla();

  } else if (PERSONAJES.find(p => p.contrasena === val)) {
    const personaje = PERSONAJES.find(p => p.contrasena === val);
    abrirPersonaje(personaje.id);
    registrarSecreto(val);

  } else if (accion) {
    // papoy, wife, kin, negros, jinu, 29, y cualquier otro mensaje secreto
    mostrarModalSecreto(accion);
    registrarSecreto(val);

  } else {
    const pista = buscarPistaTroll(val);
    mostrarToast(pista);
  }
});


/* ══════════════════════════════════════════════
   MODAL SECRETO
   ══════════════════════════════════════════════ */
function mostrarModalSecreto(tipo) {
  if (audioCtx.state === "suspended") audioCtx.resume();
  const info = MENSAJES_SECRETOS[tipo] || MENSAJES_SECRETOS.corazon;
  document.getElementById("secreto-titulo").textContent = info.titulo;
  document.getElementById("secreto-texto").textContent  = info.texto;
  document.getElementById("overlay-secreto").classList.add("visible");
  lanzarParticulasSecretas();
  lanzarConfetti(false);
  audioUnlock.currentTime = 0;
  audioUnlock.volume = 0.6;
  audioUnlock.play().catch(() => {});
}

document.getElementById("btn-cerrar-secreto").addEventListener("click", () => {
  document.getElementById("overlay-secreto").classList.remove("visible");
});
document.getElementById("overlay-secreto").addEventListener("click", e => {
  if (e.target === document.getElementById("overlay-secreto"))
    document.getElementById("overlay-secreto").classList.remove("visible");
});




function lanzarParticulasSecretas() {
  const cont   = document.getElementById("particulas-secreto");
  const emojis = ["💜","✨","💫","🌸","💕","🎆"];
  cont.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("span");
    p.className = "particula";
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left              = Math.random() * 100 + "%";
    p.style.animationDuration = (1.5 + Math.random() * 2) + "s";
    p.style.animationDelay    = (Math.random() * 1.5) + "s";
    p.style.fontSize          = (0.8 + Math.random() * 0.8) + "rem";
    cont.appendChild(p);
  }
}


/* ══════════════════════════════════════════════
  CONFETTI
   ══════════════════════════════════════════════ */
function lanzarConfetti(gamer) {
  const colores = gamer
    ? ["#00ffcc","#ff00aa","#8800ff","#ffee00","#00aaff"]
    : modoSexy
      ? ["#ff2d6b","#ff80aa","#8b0030","#ffb347","#fff0f5"]
      : ["#e8a0b4","#c26e8a","#c9a96e","#f5c6d0","#fff"];

  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti-pieza";
    c.style.left              = Math.random() * 100 + "vw";
    c.style.top               = "-10px";
    c.style.background        = colores[Math.floor(Math.random() * colores.length)];
    c.style.transform         = `rotate(${Math.random() * 360}deg)`;
    c.style.animationDuration = (0.8 + Math.random() * 1) + "s";
    c.style.animationDelay    = Math.random() * 0.5 + "s";
    c.style.borderRadius      = Math.random() > 0.5 ? "50%" : "2px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2500);
  }
}


/* ══════════════════════════════════════════════
   MINI CHAT
   ══════════════════════════════════════════════ */
function mostrarChatRandom() {
  const contenedor = document.getElementById("chat-mensajes");
  contenedor.innerHTML = "";

  // Cancelar timeouts anteriores
  if (window._chatTimeouts) {
    window._chatTimeouts.forEach(t => clearTimeout(t));
  }
  window._chatTimeouts = [];

  const chat = CONVERSACIONES[Math.floor(Math.random() * CONVERSACIONES.length)];

  chat.forEach((msg, i) => {
    const t1 = setTimeout(() => {
      // Si el chat se cerró, no hacer nada
      if (!chatAbierto) return;

      const typing = document.createElement("div");
      typing.classList.add("chat-typing");
      typing.innerHTML = `<span></span><span></span><span></span>`;
      typing.style.alignSelf = msg.quien === "Fresh" ? "flex-end" : "flex-start";
      contenedor.appendChild(typing);
      contenedor.scrollTop = contenedor.scrollHeight;

      const duracion = 700 + (msg.texto?.length || 10) * 40;

      const t2 = setTimeout(() => {
        if (!chatAbierto) return;

        typing.remove();

        const burbuja = document.createElement("div");
        burbuja.classList.add("chat-burbuja", msg.quien);
        burbuja.innerHTML = `
          <div class="chat-nombre">${msg.quien === "Fresh" ? "Fresh" : "Kin"}</div>
          ${msg.imagen ? `<img src="${msg.imagen}" style="max-width:140px;border-radius:10px;display:block;margin:4px 0;" onerror="this.style.display='none'">` : ""}
          ${msg.texto || ""}
        `;

        contenedor.appendChild(burbuja);
        contenedor.scrollTop = contenedor.scrollHeight;
        reproducirSonidoMensaje();

      }, duracion);

      window._chatTimeouts.push(t2);

    }, msg.delay || i * 1200);

    window._chatTimeouts.push(t1);
  });
}


function abrirCerrarChat(abrir) {
  chatAbierto = abrir;
  chatEl.classList.toggle("visible", chatAbierto);

  btnChatToggle.style.opacity = abrir ? "0" : "1";
  btnChatToggle.style.pointerEvents = abrir ? "none" : "auto";

  if (!abrir) {
    // Cancelar todos los timeouts al cerrar
    if (window._chatTimeouts) {
      window._chatTimeouts.forEach(t => clearTimeout(t));
      window._chatTimeouts = [];
    }
    // Limpiar mensajes para que la próxima apertura empiece limpio
    document.getElementById("chat-mensajes").innerHTML = "";
  }

  if (chatAbierto) {
    mostrarChatRandom();
  }
}

btnChatToggle.addEventListener("click", () => abrirCerrarChat(true));
document.getElementById("btn-chat-cerrar").addEventListener("click", () => abrirCerrarChat(false));


/* ══════════════════════════════════════════════
   FRASES FLOTANTES DE FONDO
   ══════════════════════════════════════════════ */
function crearFraseFondo() {
  const cont = document.getElementById("fondo-frases");
  const arr  = modoGamer ? FRASES_FONDO_GAMER : modoSexy ? FRASES_FONDO_SEXY : FRASES_FONDO;
  const span = document.createElement("span");
  span.className   = "fondo-frase";
  span.textContent = arr[Math.floor(Math.random() * arr.length)];
  span.style.left            = Math.random() * 100 + "vw";
  span.style.bottom          = "-2rem";
  span.style.fontSize        = (0.65 + Math.random() * 0.6) + "rem";
  const dur = 12 + Math.random() * 16;
  span.style.animationDuration = dur + "s";
  span.style.animationDelay    = "0s";
  cont.appendChild(span);
  setTimeout(() => span.remove(), dur * 1000);
}
setInterval(crearFraseFondo, 1800);
crearFraseFondo();






// Activa float después del fadeUp para no pisarse
  grilla.querySelectorAll(".efecto-float").forEach(el => {
    setTimeout(() => el.classList.add("cargado"), 500);
  });

/* ══════════════════════════════════════════════
   INICIO
   ══════════════════════════════════════════════ */
renderGrilla();
iniciarPersonajes();
cargarCanjeados();
actualizarContadorSecretos(); // ← agregar
actualizarPuntosNuevos(); // ← agregar acá
/* ══════════════════════════════════════════════
   CONTADOR DÍAS JUNTOS
   ══════════════════════════════════════════════ */
(function() {
  // ✏️ CAMBIÁ esta fecha por la fecha real en que empezaron
  const FECHA_INICIO = new Date("2025-08-29");

  const el = document.getElementById("dias-juntos");
  if (!el) return;

function actualizar() {
    const hoy = new Date();

    let años  = hoy.getFullYear() - FECHA_INICIO.getFullYear();
    let meses = hoy.getMonth()    - FECHA_INICIO.getMonth();
    let dias  = hoy.getDate()     - FECHA_INICIO.getDate();

    // Ajustar si los días son negativos
    if (dias < 0) {
      meses--;
      const mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
      dias += mesAnterior.getDate();
    }

    // Ajustar si los meses son negativos
    if (meses < 0) {
      años--;
      meses += 12;
    }

    let texto = "";
    if (años > 0)  texto += `${años} año${años > 1 ? "s" : ""}, `;
    if (meses > 0) texto += `${meses} mes${meses > 1 ? "es" : ""} y `;
    texto += `${dias} día${dias !== 1 ? "s" : ""}`;

    el.innerHTML = `juntos hace <span>${texto}</span> ♥`;
  }

  actualizar();
  setInterval(actualizar, 60000);
})();



/* ══════════════════════════════════════════════
   PANTALLA DE BIENVENIDA (una vez por día)
   ══════════════════════════════════════════════ */
(function() {
  const HOY   = new Date().toDateString();
  const KEY   = "bienvenida_vista";
  const visto = localStorage.getItem(KEY);
  const overlay = document.getElementById("bienvenida-overlay");
  if (!overlay) return;

  // Si ya la vio hoy, la ocultamos directo
  if (visto === HOY) {
    overlay.classList.add("oculto");
    return;
  }

  // Frases de bienvenida aleatorias
  const frasesBienvenida = [
    "Cada vez que abrís esto, pienso en vos.",
    "Estos cupones son todos tuyos, como yo.",
    "Hoy también es un buen día para quererte.",
    "Acá están tus cupones, úsalos cuando quieras.",
    "Gracias por existir en mi mundo.",
    "Sos mi favorita, por si no te lo dije hoy.",
  ];

  // Frase
  const fraseEl2 = document.getElementById("bienvenida-frase");
  if (fraseEl2) fraseEl2.textContent = frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)];

  // Días juntos
  const FECHA_INICIO = new Date("2025-09-29");
  const diasEl = document.getElementById("bienvenida-dias");
  if (diasEl) {
    const diff = Math.floor((new Date() - FECHA_INICIO) / (1000 * 60 * 60 * 24));
    diasEl.textContent = `${diff} días juntos ♥`;
  }

  // Corazones flotantes
  const cont = document.getElementById("bienvenida-corazones");
  if (cont) {
    ["♥","♡","💕","✨","🌸"].forEach((emoji, i) => {
      const h = document.createElement("span");
      h.className   = "bienvenida-corazon-flotante";
      h.textContent = emoji;
      h.style.left             = (10 + i * 18) + "%";
      h.style.bottom           = "0";
      h.style.animationDuration = (3 + i * 0.8) + "s";
      h.style.animationDelay   = (i * 0.5) + "s";
      cont.appendChild(h);
    });
  }

  // Botón cerrar
  document.getElementById("bienvenida-btn").addEventListener("click", () => {
    overlay.classList.add("saliendo");
    localStorage.setItem(KEY, HOY);
    setTimeout(() => overlay.classList.add("oculto"), 800);
  });
})();