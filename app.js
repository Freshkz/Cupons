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

/* ────────────────────────────────────────────────
   TEMPORIZADOR — fecha de reinicio
   Cambiá el día aquí (actualmente: día 22 de cada mes)
   ──────────────────────────────────────────────── */
const CONFIG_TEMPORIZADOR = {
  DIA_REINICIO: 29,
};

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
    efecto: ["efecto-brillo", "efecto-glow", "efecto-shine", "efecto-aura-rose"],
  },
  { emoji: "🍕", titulo: "Cupón para pedir comida",        descripcion: "Una noche sin cocinar. Pedimos lo que quieras.",                  efecto: "efecto-sparkle" },
  { emoji: "💆", titulo: "Cupón para un masaje",           descripcion: "30 minutos de masaje de espalda. Sin límite de tiempo.",          efecto: "efecto-glow"    },
  { emoji: "🛌", titulo: "Cupón para dormir hasta tarde",  descripcion: "Un fin de semana sin que nadie te despierte.",                   efecto: "efecto-brillo"  },
  { emoji: "🌅", titulo: "Cupón para una escapada",        descripcion: "A donde quieras ir juntos. Sin peros.",                          efecto: "efecto-shine"   },
  { emoji: "🎶", titulo: "Cupón para bailar en casa",      descripcion: "Tu playlist, yo te sigo. Sin importar la hora.",                 efecto: "efecto-sparkle" },
  { emoji: "🍳", titulo: "Cupón para desayuno en cama",    descripcion: "Me levanto primero y te lo llevo. Prometido.",                   efecto: "efecto-brillo"  },
  { emoji: "💌", titulo: "Cupón para una carta de amor",   descripcion: "A mano, lo que siento, cuando lo pidas.",                        efecto: ""               },
  { emoji: "✨", titulo: "Cupón comodín",                  descripcion: "Para lo que se te ocurra. Vale para cualquier cosa.",             efecto: "efecto-sparkle" },
  { emoji: "🍔", titulo: "Cupón para BIG PONS",            descripcion: "Este cupón invoca a Big Pons 🍔, Yo pago (😠)",             efecto: "efecto-shine"},
  { emoji: "🏃", titulo: "Cupón para Ir a verte",          descripcion: "Este cupón activa modo: no aguanto más y voy a verte",             efecto: "efecto-glow"},
  { emoji: "📸", titulo: "Cupón para Sesión de fotos obligatoria", descripcion: "Este cupón te obliga a sacarte fotos conmigo. no importa si decis que salis mal, si no queres  y si te haces el dificil",             efecto: "efecto-glow"},
  { emoji: "😡", titulo: "Cupón para Pelear",                  descripcion: "Este cupón activa una pelea falsa, puede ser por cualquier cosa! (WARNING:Reírnos y olvidarnos en 2 minutos 💘) ",             efecto: "efecto-shine"},
  { emoji: "😤", titulo: "Cupón ¿Quién es esa?",                  descripcion: "Este cupón me permite hacerme el celoso ",             efecto: "efecto-shine"},
  { emoji: "👂", titulo: "Cupón para mandarte un audio largo",   descripcion: "Te mando un audio de lo que pienso cuando no te lo digo. Sin resumir.",       efecto: "efecto-sparkle"   },

];

const CUPONES_SEXY = [
  { emoji: "🔥", titulo: "Cupón para una noche sin apuro",       descripcion: "Sin celular, sin hora. Solo nosotros dos.",                      efecto: ""              },
  { emoji: "🛁", titulo: "Cupón para un baño juntos",            descripcion: "Velas, espuma, y lo que venga después.",                          efecto: ""              },
  { emoji: "💋", titulo: "Cupón para que te bese donde quieras", descripcion: "Sin restricciones. El control lo tenés vos.",                      efecto: "efecto-brillo" },
  { emoji: "🙈", titulo: "Cupón para una fantasía tuya",         descripcion: "Me decís, yo cumplo. Sin preguntas.",                               efecto: ""              },
  { emoji: "😊", titulo: "Cupón para TOTA",            descripcion: "Lo que imagines, lo hacemos realidad.",                             efecto: "efecto-shine"              },
  { emoji: "🌙", titulo: "Cupón para una noche de hotel",        descripcion: "Solo para nosotros dos. Nada de interrupciones.",                   efecto: "efecto-berenjenas"              },
  { emoji: "👀", titulo: "Cupón para un striptease",             descripcion: "Lo que pedís, te lo doy. Sin prisa.",                               efecto: "efecto-berenjenas"              },
  { emoji: "🍓", titulo: "Cupón para una noche de exploración",  descripcion: "Vos mandás. Yo acepto todo lo que propongás.",                      efecto: "efecto-berenjenas"              },
];


const CUPONES_GAMER = [
  { emoji: "🎮", titulo: "Cupón para una noche de Dragon Ball Online", descripcion: "A las 8 nos levantamos a jugar. Seré tu healer(no), tu support(no), lo que necesites.",              efecto: "efecto-brillo"  },
  { emoji: "🏆", titulo: "Cupón para elegir el juego",                 descripcion: "Tu elección, sin discusión. Esa noche mandás vos.",                                            efecto: "efecto-sparkle" },
  { emoji: "🕹️", titulo: "Cupón para modo co-op",                      descripcion: "Un juego para dos. Somos el mejor equipo del mundo.",                                          efecto: "efecto-berenjenas"               },
  { emoji: "⚔️", titulo: "Cupón para raid especial",                   descripcion: "Nos quedamos despiertos hasta ganarlo. Sin rendirnos.",                                        efecto: "efecto-brillo"  },
  { emoji: "🌟", titulo: "Cupón para stream juntos",                   descripcion: "Ponemos la cámara y jugamos como si fuéramos streamers famosos.",                              efecto: "efecto-sparkle" },
  { emoji: "🎯", titulo: "Cupón para 1v1",                             descripcion: "Te dejo ganar... o capaz no. Spoiler: te voy a dejar ganar.",                                  efecto: "efecto-berenjenas"               },
  { emoji: "👻", titulo: "Cupón para Phasmophobia",                    descripcion: "Volvemos a donde empezó todo 👻 pero esta vez te agarro más fuerte… porque ya sé que no te quiero soltar 😳", efecto: "efecto-pixels" },
];

/* ────────────────────────────────────────────────
   CUPONES COTIDIANOS
   ──────────────────────────────────────────────── */
const CUPONES_COTIDIANOS = [
  { emoji: "🛒", titulo: "Cupón para ir al super juntos",        descripcion: "Con carrito, discusión de marca incluida y algo que no necesitamos igual.",    efecto: "efecto-sparkle"   },
  { emoji: "📺", titulo: "Cupón para maratonear una serie",      descripcion: "Elegís vos. Me quejo en los primeros 10 minutos y después me engancho igual.", efecto: "efecto-shine"     },
  { emoji: "🚗", titulo: "Cupón para viaje con música a full",   descripcion: "Ventanilla abajo, la tuya. Yo aguanto el frío sin quejarme. Casi.",            efecto: "efecto-pixels"      },
  { emoji: "🧹", titulo: "Cupón para ordenar juntos",            descripcion: "Yo hago mi parte sin que me tengas que pedir dos veces. Prometo intentarlo.",  efecto: "efecto-brillo"    },
  { emoji: "🍦", titulo: "Cupón para salir por helado",          descripcion: "Adónde quieras, cuándo quieras. Yo pago y no me como el tuyo (mucho).",       efecto: "efecto-neon-rose" },
  { emoji: "📱", titulo: "Cupón para noche sin celular",         descripcion: "Los dos guardamos el teléfono. Solo nosotros dos, una hora entera.",           efecto: "efecto-aura-rose" },
  { emoji: "🎲", titulo: "Cupón para juego de mesa",             descripcion: "Lo que quieras: Uno, Ajedrez, Monopoly. No hago trampa. Casi nunca.",             efecto: "efecto-corazones"      },
  { emoji: "🌧️", titulo: "Cupón para día de lluvia juntos",      descripcion: "Sin planes, sin salir. Adentro, tapados, sin hacer nada y que sea perfecto.", efecto: "efecto-float"     },
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
  "modo gamer":                     "gamer",        // especial: activa modo gamer
  "reset cupones":                  "reset",        // especial: resetea todos los canjeados
  "tota":                           "sexy-toggle",  // especial: muestra/oculta cupones sexy
  "totita":                         "sexy-toggle",  // especial: igual que tota
  "amor":                           "reset-modo",
};

/* ────────────────────────────────────────────────
   MINI CHAT
   ──────────────────────────────────────────────── */
const CONVERSACIONES = [
  [
    { quien: "Fresh", texto: "hola", delay: 800 },
    { quien: "Kin", texto: "holaaaa 💕", delay: 1600 },
    { quien: "Fresh", texto: "jugamos?", delay: 2800 },
    { quien: "Kin", texto: "a las 8 nos levantamos a jugar dragon ball online?", delay: 5200 },
    { quien: "Fresh", texto: "Obvio si, el domingo tenemos que jugar NASHE", delay: 6000 },
    { quien: "Fresh", texto: "SI O SI", delay: 6950 },
    { quien: "Kin", texto: "jaja amor ♥ te amo mucho sabs?", delay: 7200 },
    { quien: "Fresh", texto: "te amo más, olor a caquita", delay: 8600 }, 
    { quien: "Kin", texto: "🥺", delay: 9800 }, { quien: "Kin", texto: "POKEEEEE", delay: 10500 },
    { quien: "Fresh", texto: "sos lo mejor que me pasó, en serio", delay: 11200 },
    { quien: "Kin", texto: "yo también te amo lindo 💜", delay: 12600 },
  ],
  [
    { quien: "Fresh", texto: "Hola", delay: 800 },
    { quien: "Kin", texto: "holaaaa 💕", delay: 2000 },
    { quien: "Fresh", texto: "Jugamos?", delay: 3500 },
    { quien: "Kin", texto: "Entrandooo", delay: 4500 },
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
  ],

  [
    { quien: "Fresh", texto: "estas?", delay: 800 },
    { quien: "Kin", texto: "si bb 💕", delay: 1800 },
    { quien: "Fresh", texto: "venis?", delay: 3000 },
    { quien: "Kin", texto: "obvio 😳", delay: 4200 },
  ],


  [
    { quien: "Fresh", texto: "me ignoras", delay: 800 },
    { quien: "Kin", texto: "nooo 😭", delay: 1800 },
    { quien: "Fresh", texto: "seguro?", delay: 3000 },
    { quien: "Kin", texto: "te estaba stalkeando 💀", delay: 4200 },
  ],

  [
    { quien: "Fresh", texto: "tenes hambre?", delay: 800 },
    { quien: "Kin", texto: "si 😭", delay: 1800 },
    { quien: "Fresh", texto: "pedimos algo?", delay: 3000 },
    { quien: "Kin", texto: "si vos elegis 💕", delay: 4200 },
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

const canjeados    = JSON.parse(localStorage.getItem("cupones_canjeados_v3") || "{}");
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




/* ────────────────────────────────────────────────
   PALABRAS MALSONANTES — editá a gusto
   ──────────────────────────────────────────────── */
const PALABRAS_MALAS = ["salame", "puto", "gay", "idiota", "pelotudo", "boludo", "estupido", "imbecil", "garca", "hdp", "hijo de puta", "forro", "pendejo", "maricon", "zarpado", "choto", "cagón", "culiao", "la concha de tu madre", "mierda", "bostero", "cornudo", "gil", "loco", "tarado", "tonto", "verga", "pija", "chupapija", "coger", "follar", "coño", "zorra", "puta madre", "pajero", "culero"];

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
    grilla.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--texto-suave);font-style:italic;font-family:'Playfair Display',serif;font-size:1.1rem;">No hay cupones aquí todavía ♥</div>`;
    return;
  }

  filtrados.forEach((v, fi) => {
    const idx    = todos.indexOf(v);
    const esSexy  = v.tipo === "sexy";
    const esGamer = v.tipo === "gamer";
    const esCanj  = !!canjeados[idCupon(v)];
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

    div.innerHTML = `
      ${esGamer ? `<span class="vale-badge">🎮 Gamer</span>` : ""}
      ${esSexy  ? `<span class="vale-badge badge-sexy">💋 Sex</span>`   : ""}
      <button class="btn-canjear" data-idx="${idx}" ${esCanj ? "disabled" : ""}>Canjear</button>
      <div class="vale-cuerpo">
        <div class="vale-emoji">${v.emoji}</div>
        <div class="vale-titulo">${v.titulo}</div>
        ${v.descripcion ? `<div class="vale-descripcion">${v.descripcion}</div>` : ""}
      </div>
      <div class="sello">Canjeado ♥</div>
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

  modalEmoji.textContent     = v.emoji;
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

  canjeados[idCupon(v)] = { fecha: new Date().toLocaleString("es-AR") };
  localStorage.setItem("cupones_canjeados_v3", JSON.stringify(canjeados));

  overlay.classList.remove("visible");
  cuponEnCanje = null;
  renderGrilla();

  audioCheck.currentTime = 0;
  audioCheck.volume = 0.7;
  audioCheck.play().catch(() => {});
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  lanzarConfetti(modoGamer);
  mostrarToast("Cupón canjeado! ♥ Enviando aviso...");

  try {
    await emailjs.send(CONFIG_EMAIL.SERVICE_ID, CONFIG_EMAIL.TEMPLATE_ID, {
      cupon_emoji:  v.emoji,
      cupon_titulo: v.titulo,
      cupon_tipo:   v.tipo === "sexy" ? "🔥 Cupón Sexy" : v.tipo === "gamer" ? "🎮 Cupón Gamer" : v.tipo === "cotidiano" ? "☀️ Cupón Cotidiano" : "💌 Cupón Romántico",
      fecha:        new Date().toLocaleString("es-AR"),
    });
    mostrarToast("Aviso enviado! Ya sé lo que querés ♥");
  } catch (err) {
    console.error("EmailJS error:", err);
    mostrarToast("Cupón canjeado! (revisá la config de EmailJS)");
  }
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
  
  } else if (accion === "reset-modo") {
    if (modoGamer || modoSexy) {
      if (modoGamer) activarModoGamer();
      if (modoSexy)  activarModoSexy();
      mostrarToast("💕 Volvemos al modo amor~");
    } else {
      mostrarToast("💕 Ya estás en la página amor, mi amada 💕");
    }
  } else if (accion === "sexy-toggle") {
    activarModoSexy();
  } else if (accion === "reset") {
    if (confirm("¿Resetear todos los cupones canjeados? Vuelven a estar disponibles. ♥")) {
      Object.keys(canjeados).forEach(k => delete canjeados[k]);
      localStorage.removeItem("cupones_canjeados_v3");
      renderGrilla();
      mostrarToast("✨ Todos los cupones reseteados!");
    }
  } else if (accion) {
    mostrarModalSecreto(accion);
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

  const chat = CONVERSACIONES[Math.floor(Math.random() * CONVERSACIONES.length)];

  chat.forEach((msg, i) => {

    setTimeout(() => {

      // 👉 BURBUJAS DE ESCRIBIENDO (3 puntitos)
      const typing = document.createElement("div");
      typing.classList.add("chat-typing");

      typing.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
      `;

      // alineación tipo WhatsApp
      typing.style.alignSelf = msg.quien === "Fresh" ? "flex-end" : "flex-start";

      contenedor.appendChild(typing);
      contenedor.scrollTop = contenedor.scrollHeight;

      // ⏳ tiempo antes del mensaje
      setTimeout(() => {

        typing.remove();

        const burbuja = document.createElement("div");
        burbuja.classList.add("chat-burbuja", msg.quien);

        burbuja.innerHTML = `
          <div class="chat-nombre">${msg.quien === "Fresh" ? "Fresh" : "Kin"}</div>
          ${msg.texto}
        `;

        contenedor.appendChild(burbuja);
        contenedor.scrollTop = contenedor.scrollHeight;

        // 🔊 sonido tipo iPhone
        reproducirSonidoMensaje();

      }, 700 + msg.texto.length * 40);

    }, msg.delay || i * 1200);
  });
}


function abrirCerrarChat(abrir) {
  chatAbierto = abrir;
  chatEl.classList.toggle("visible", chatAbierto);

  btnChatToggle.style.opacity = abrir ? "0" : "1";
  btnChatToggle.style.pointerEvents = abrir ? "none" : "auto";
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

/* ══════════════════════════════════════════════
   CONTADOR DÍAS JUNTOS
   ══════════════════════════════════════════════ */
(function() {
  // ✏️ CAMBIÁ esta fecha por la fecha real en que empezaron
  const FECHA_INICIO = new Date("2025-09-29");

  const el = document.getElementById("dias-juntos");
  if (!el) return;

  function actualizar() {
    const hoy  = new Date();
    const diff = Math.floor((hoy - FECHA_INICIO) / (1000 * 60 * 60 * 24));
    const años  = Math.floor(diff / 365);
    const meses = Math.floor((diff % 365) / 30);
    const dias  = diff % 30;

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