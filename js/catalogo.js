/* =====================================================================
   CATÁLOGO DIGITAL COOPERACAFE — lógica de datos y navegación
   =====================================================================
   Cómo agregar/editar marcas:
   Edita únicamente el arreglo "marcas" de abajo. No es necesario tocar
   el HTML ni el resto del JavaScript. Cada marca puede tener 1 o más
   productos; la cuadrícula se adapta sola según la cantidad.
   ===================================================================== */

const marcas = [
  {
    nombre: "JM ESTRADA",
    logo: "assets/jmestradalogo.png",
    enlace: "https://www.jmestrada.com/categoria-producto/cafe/",
    productos: [
      { nombre: "Despulpadoras", imagen: "assets/despulpadora.png" },
      {
        nombre: "Módulo clasificador tanque tina",
        imagen: "assets/tanquetina.png",
      },
      { nombre: "Secadora Manual", imagen: "assets/secadoramanual.png" },
    ],
  },
  {
    nombre: "FIMAR",
    logo: "assets/fimarlogo.png",
    enlace: "https://fimar.co/maquinaria-para-cafe.html",
    productos: [
      { nombre: "Despulpadora", imagen: "assets/despulpadorafimar.png" },
      { nombre: "Fimar", imagen: "assets/fimar2.png" },
    ],
  },
  {
    nombre: "FUNDICIÓN CENTRAL S.A.",
    logo: "assets/fundicionlogo.png",
    enlace:
      "https://mettler.com.co/tienda/agricola/linea-cafetera/despulpadoras-de-cafe/despulpadoras-de-cafe-ideal-antioquena-n2-n2-5-y-n3/?v=ab6c04006660",
    productos: [
      { nombre: "Despulpadora", imagen: "assets/despulfundicion.png" },
    ],
  },
  {
    nombre: "PENAGOS",
    logo: "assets/penagoslogo.png",
    enlace: "https://penagos.com/categoria-producto/cafe/",
    productos: [
      { nombre: "Maquina1", imagen: "assets/penagos1.png" },
      { nombre: "Maquina2", imagen: "assets/penagos2.png" },
      { nombre: "Maquina3", imagen: "assets/penagos3.png" },
    ],
  },
  {
    nombre: "ROYAL CONDOR",
    logo: "assets/condorlogo.png",
    enlace: "https://www.royalcondor.com/",
    productos: [
      { nombre: "Condor1", imagen: "assets/condor1.png" },
      { nombre: "Condor2", imagen: "assets/condor2.png" },
    ],
  },
  {
    nombre: "ROTOPLAST",
    logo: "assets/rotoplaslogo.png",
    enlace: "https://rotoplast.com.co/catalogo/linea-agricola/",
    productos: [
      { nombre: "Tanque1", imagen: "assets/tanque1.png" },
      { nombre: "Tanque2", imagen: "assets/tanque2.png" },
    ],
  },
  {
    nombre: "RAGROCAFÉ",
    logo: "assets/agrocafelogo.png",
    enlace: "https://agrocafe.com.co/agroinsumos/",
    productos: [{ nombre: "Agro1", imagen: "assets/agrocafe1.png" }],
  },
  {
    nombre: "EVOAGRO",
    logo: "assets/evologo.png",
    enlace: "https://evoagro.com/productos-fertilizantes/",
    productos: [{ nombre: "EvoAgro1", imagen: "assets/evoagro1.png" }],
  },
  {
    nombre: "YARA",
    logo: "assets/yaralogo.png",
    enlace: "https://www.yara.com.co/nutricion-vegetal/productos/",
    productos: [{ nombre: "Yara1", imagen: "assets/yara1.png" }],
  },
  {
    nombre: "ACEPALMA",
    logo: "assets/palmalogo.png",
    enlace: "https://www.acepalma.com/",
    productos: [{ nombre: "Palma1", imagen: "assets/palma1.png" }],
  },
  {
    nombre: "PRECISAGRO",
    logo: "assets/preciagrologo.png",
    enlace:
      "https://precisagro.com.co/product-category/soluciones-agricolas/nutricion-de-cultivos/",
    productos: [
      { nombre: "Producto1", imagen: "assets/preci1.png" },
      { nombre: "Producto2", imagen: "assets/preci2.png" },
    ],
  },
  {
    nombre: "PROPLACOL",
    logo: "assets/proplacollogo.png",
    enlace: "https://www.facebook.com/proplacol/?locale=es_LA",
    productos: [
      { nombre: "Producto1", imagen: "assets/pro1.png" },
      { nombre: "Producto2", imagen: "assets/pro2.png" },
    ],
  },
  {
    nombre: "SYNGENTA",
    logo: "assets/syngentalogo.png",
    enlace:
      "https://www.diabonos.com/portafolio/Protecci%C3%B3n%20de%20cultivos/Fungicidas",
    productos: [
      { nombre: "Mertect500", imagen: "assets/mertect500.png" },
      { nombre: "Verdadero600", imagen: "assets/verdadero600.png" },
    ],
  },
  {
    nombre: "BAYER",
    logo: "assets/bayerlogo.png",
    enlace:
      "https://www.agro.bayer.co/es-co/productos/product-details.html/insecticide/curbix_sc200.html",
    productos: [{ nombre: "Curbix", imagen: "assets/curbix.png" }],
  },
  {
    nombre: "COLINAGRO",
    logo: "assets/colinagrologo.png",
    enlace: "https://colinagro.com/",
    productos: [
      { nombre: "Agrimins1", imagen: "assets/agrimins1.png" },
      { nombre: "Agrimins2", imagen: "assets/agrimins2.png" },
    ],
  },
  {
    nombre: "UPL",
    logo: "assets/upllogo.png",
    enlace:
      "https://www.uplcorp.com/co/Producto?level_one=2&level_two_select=29&level_three_select=",
    productos: [
      { nombre: "Glifocafé", imagen: "assets/glifocafe.png" },
      { nombre: "Ktionic", imagen: "assets/ktionic.png" },
    ],
  },
  {
    nombre: "STIHL",
    logo: "assets/stihllogo.png",
    enlace: "https://www.stihl.com.co/es/c/motosierras-98176",
    productos: [
      { nombre: "Motosierra", imagen: "assets/moto1.png" },
      { nombre: "Motosierra2", imagen: "assets/moto2.png" },
      { nombre: "Guadaña", imagen: "assets/moto3.png" },
    ],
  },
  {
    nombre: "SHINDAIWA",
    logo: "assets/shindaiwalogo.png",
    enlace:
      "https://www.shindaiwa-latinamerica.com/es/brushcutters/b45-brushcutter-u-handle",
    productos: [{ nombre: "Guadaña", imagen: "assets/guadañashin.png" }],
  },
  {
    nombre: "INNOVAKIT",
    logo: "assets/innovakitlogo.png",
    enlace:
      "https://www.innovakit.com/category/herremientas?srsltid=AU7gw4UnA12F-5Pl53IqnykT12dwIAqN_xibt9uR2rMbK1cZABTk8HHC",
    productos: [
      { nombre: "Cosecha1", imagen: "assets/cosecha1.png" },
      { nombre: "Cosecha2", imagen: "assets/cosecha2.png" },
    ],
  },

  /* Agrega aquí el resto de marcas reales siguiendo el mismo formato,
     hasta completar las ~20 marcas de COOPERACAFE. */
];

/* Logo de COOPERACAFE usado en la portada (mismo que el del encabezado) */
const LOGO_COOPERACAFE =
  "https://cooperacafe.com/wp-content/uploads/2023/03/Recurso-1.png";

/* Total de páginas del libro: la portada + cada marca */
const TOTAL_PAGINAS = marcas.length + 1;

/* índice 0 = portada; índice 1..N = marcas[0..N-1] */
function contenidoEnIndice(indice) {
  if (indice === 0) return { esPortada: true };
  return marcas[indice - 1];
}

/* ---------------------------------------------------------------------
   ESTADO Y REFERENCIAS DEL DOM
   ------------------------------------------------------------------- */
const libro = document.getElementById("libro");
const paginaAtras = document.getElementById("paginaAtras");
const paginaAdelante = document.getElementById("paginaAdelante");
const indicador = document.getElementById("indicador");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let indiceActual = 0;
let animando = false; // true mientras corre la animación de paso de página
let arrastrando = false; // true mientras el usuario arrastra/desliza
let origenX = 0;
let ultimoDeltaX = 0;
let direccionGesto = null; // 'next' | 'prev' | 'bloqueado' | null

/* ---------------------------------------------------------------------
   PRECARGA DE IMÁGENES
   ---------------------------------------------------------------------
   Se cargan en memoria del navegador TODAS las imágenes del catálogo
   apenas se abre la página. Así, cuando el usuario pasa de página, la
   foto ya está lista y no "aparece a medio giro" ni frena la animación.
   ------------------------------------------------------------------- */
function precargarImagenes() {
  const rutas = new Set();
  rutas.add(LOGO_COOPERACAFE);
  marcas.forEach((marca) => {
    if (marca.logo) rutas.add(marca.logo);
    marca.productos.forEach((p) => {
      if (p.imagen) rutas.add(p.imagen);
    });
  });
  rutas.forEach((ruta) => {
    const img = new Image();
    img.src = ruta;
  });
}

/* ---------------------------------------------------------------------
   PLACEHOLDER PARA IMÁGENES FALTANTES
   (evita íconos de "imagen rota" mientras se cargan las fotos reales)
   ------------------------------------------------------------------- */
function imagenPlaceholder() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#F4EDE0"/>
      <g fill="none" stroke="#C7A17A" stroke-width="6" stroke-linecap="round">
        <path d="M55 90 h70 v45 a35 35 0 0 1 -70 0 z"/>
        <path d="M125 100 q22 0 22 20 a20 20 0 0 1 -22 20"/>
        <path d="M70 78 q0 -14 8 -18"/>
        <path d="M88 78 q0 -14 8 -18"/>
      </g>
    </svg>`;
  return "data:image/svg+xml;base64," + btoa(svg);
}

function manejarErrorImagen(img) {
  img.onerror = null;
  img.src = imagenPlaceholder();
  img
    .closest(".producto__imagen-cont, .pagina__logo-cont, .portada__logo-cont")
    ?.classList.add("sin-imagen");
}
window.manejarErrorImagen = manejarErrorImagen;

/* ---------------------------------------------------------------------
   RENDERIZADO DE UNA PÁGINA (portada o marca completa)
   ---------------------------------------------------------------------
   La cuadrícula de fotos usa filas/columnas calculadas (no un tamaño de
   celda fijo), así que siempre reparte el espacio vertical disponible
   entre las fotos que haya — nunca se pasa de la pantalla ni necesita
   scroll, sea un celular pequeño o una pantalla grande.
   ------------------------------------------------------------------- */
function calcularGrid(cantidad) {
  if (cantidad <= 1) return { columnas: 1, filas: 1 };
  if (cantidad === 2) return { columnas: 2, filas: 1 };
  if (cantidad <= 4) return { columnas: 2, filas: 2 };
  const columnas = Math.ceil(Math.sqrt(cantidad));
  const filas = Math.ceil(cantidad / columnas);
  return { columnas, filas };
}

function tarjetaProducto(producto) {
  return `
    <article class="producto">
      <div class="producto__imagen-cont">
        <img
          class="producto__imagen"
          src="${producto.imagen}"
          alt="${producto.nombre}"
          onerror="manejarErrorImagen(this)"
        >
      </div>
    </article>`;
}

function renderPagina(elemento, contenido) {
  if (!contenido) {
    elemento.innerHTML = "";
    return;
  }

  if (contenido.esPortada) {
    elemento.innerHTML = `
      <div class="portada">
        <h1 class="portada__titulo">Portafolio de Productos<br>Provisión Agrícola</h1>
        <div class="portada__logo-cont">
          <img
            class="portada__logo"
            src="${LOGO_COOPERACAFE}"
            alt="COOPERACAFE"
            onerror="manejarErrorImagen(this)"
          >
        </div>
      </div>`;
    return;
  }

  const marca = contenido;
  const { columnas, filas } = calcularGrid(marca.productos.length);
  const estiloGrilla = `grid-template-columns: repeat(${columnas}, 1fr); grid-template-rows: repeat(${filas}, 1fr);`;

  elemento.innerHTML = `
    <div class="pagina__cuerpo">
      <div class="pagina__logo-cont">
        <img
          class="pagina__logo"
          src="${marca.logo}"
          alt="${marca.nombre}"
          onerror="manejarErrorImagen(this)"
        >
      </div>
      <div class="grilla" style="${estiloGrilla}">
        ${marca.productos.map(tarjetaProducto).join("")}
      </div>
      <a class="pagina__boton" href="${marca.enlace}" target="_blank" rel="noopener noreferrer">
        Ver página
      </a>
    </div>`;
}

function actualizarIndicador() {
  indicador.textContent =
    indiceActual === 0
      ? "Portada"
      : `Página ${indiceActual} de ${marcas.length}`;
  // Con navegación circular, las flechas nunca se deshabilitan por llegar al final/inicio.
}

/* ---------------------------------------------------------------------
   ANIMACIÓN DE PASO DE PÁGINA (efecto "hoja de libro")
   ------------------------------------------------------------------- */
function prepararFlip(direccion) {
  // Navegación circular: después de la última marca se vuelve a la portada,
  // y antes de la portada se vuelve a la última marca.
  const destino =
    direccion === "next"
      ? (indiceActual + 1) % TOTAL_PAGINAS
      : (indiceActual - 1 + TOTAL_PAGINAS) % TOTAL_PAGINAS;
  renderPagina(paginaAtras, contenidoEnIndice(destino));
  paginaAdelante.style.transformOrigin =
    direccion === "next" ? "left center" : "right center";
  return destino;
}

function finalizarFlip(direccion, destino) {
  indiceActual = destino;
  renderPagina(paginaAdelante, contenidoEnIndice(indiceActual));
  paginaAdelante.classList.remove("animando", "arrastrando");
  paginaAdelante.style.transition = "none";
  paginaAdelante.style.transform = "rotateY(0deg)";
  // fuerza reflow antes de restaurar la transición para el próximo flip
  void paginaAdelante.offsetHeight;
  paginaAdelante.style.transition = "";
  paginaAtras.innerHTML = "";
  animando = false;
  actualizarIndicador();
  actualizarModoTactil();
}

/* ---------------------------------------------------------------------
   ¿La página visible necesita scroll vertical?
   ---------------------------------------------------------------------
   Si cabe completa, dejamos el swipe horizontal con control total (más
   fluido). Si no cabe (varias fotos + botón más abajo), le devolvemos al
   navegador el control del scroll vertical nativo y solo tomamos el
   gesto cuando es claramente horizontal.
   ------------------------------------------------------------------- */
function actualizarModoTactil() {
  const cuerpo = paginaAdelante.querySelector(".pagina__cuerpo");
  const necesitaScroll =
    !!cuerpo && cuerpo.scrollHeight > cuerpo.clientHeight + 1;
  libro.style.touchAction = necesitaScroll ? "pan-y" : "none";
}

function irA(direccion) {
  if (animando) return;
  if (TOTAL_PAGINAS <= 1) return; // no tiene sentido "pasar página" con 0 o 1 marca

  animando = true;
  const destino = prepararFlip(direccion);
  paginaAdelante.classList.add("animando");
  paginaAdelante.classList.remove("arrastrando");

  const anguloFinal = direccion === "next" ? -180 : 180;

  requestAnimationFrame(() => {
    paginaAdelante.style.transform = `rotateY(${anguloFinal}deg)`;
  });

  paginaAdelante.addEventListener("transitionend", function alTerminar(e) {
    if (e.propertyName !== "transform") return;
    paginaAdelante.removeEventListener("transitionend", alTerminar);
    finalizarFlip(direccion, destino);
  });
}

function siguiente() {
  irA("next");
}
function anterior() {
  irA("prev");
}

/* ---------------------------------------------------------------------
   ARRASTRE CON MOUSE (computador) Y TOUCH NATIVO (celulares/tablets)
   ---------------------------------------------------------------------
   Se usan APIs separadas a propósito: Pointer Events tiene comportamientos
   inconsistentes en navegadores móviles reales (sobre todo iOS), así que
   para el dedo se usan los eventos táctiles clásicos (más compatibles),
   y para el mouse, sus propios eventos.
   ------------------------------------------------------------------- */
const UMBRAL_COMPLETAR = 0.22; // fracción del ancho para confirmar el cambio de página
const UMBRAL_INTENCION = 6; // px mínimos de movimiento antes de considerarlo un arrastre real (y no un tap)

function iniciarArrastre(x, y, objetivo) {
  if (animando) return;
  // Ignorar si el gesto empezó sobre un botón/enlace (para no robar el clic)
  if (objetivo && objetivo.closest("a, button")) return;

  arrastrando = true;
  direccionGesto = null;
  origenX = x;
  origenY = y;
  ultimoDeltaX = 0;
  paginaAdelante.classList.add("arrastrando");
  paginaAdelante.classList.remove("animando");
}

// Devuelve true si el llamador debe hacer preventDefault() sobre el evento
// (es decir, si el gesto ya se confirmó como horizontal).
function moverArrastre(x, y) {
  if (!arrastrando) return false;

  const delta = x - origenX;
  const deltaY = y - origenY;
  ultimoDeltaX = delta;
  const ancho = libro.clientWidth || 1;
  const paginaNecesitaScroll = libro.style.touchAction === "pan-y";

  if (direccionGesto === null) {
    if (
      Math.abs(delta) < UMBRAL_INTENCION &&
      Math.abs(deltaY) < UMBRAL_INTENCION
    )
      return false;

    // Solo si la página tiene contenido para desplazar verticalmente
    // consideramos que el gesto podría ser un scroll en vez de un swipe.
    if (paginaNecesitaScroll && Math.abs(deltaY) > Math.abs(delta)) {
      // Es un scroll vertical: soltamos por completo y dejamos que el
      // navegador lo maneje de forma nativa.
      direccionGesto = "vertical";
      arrastrando = false;
      paginaAdelante.classList.remove("arrastrando");
      return false;
    }

    if (TOTAL_PAGINAS <= 1) {
      direccionGesto = "bloqueado";
      return false;
    }
    direccionGesto = delta < 0 ? "next" : "prev";
    prepararFlip(direccionGesto);
  }
  if (direccionGesto === "bloqueado" || direccionGesto === "vertical")
    return false;

  const progreso = Math.max(-1, Math.min(1, delta / ancho));
  paginaAdelante.style.transform = `rotateY(${progreso * 180}deg)`;
  return true; // gesto horizontal confirmado: el llamador debe evitar scroll/zoom nativo
}

function soltarArrastre() {
  if (!arrastrando) {
    direccionGesto = null;
    return;
  }
  arrastrando = false;
  paginaAdelante.classList.remove("arrastrando");

  if (direccionGesto === null || direccionGesto === "bloqueado") {
    direccionGesto = null;
    return;
  }

  const ancho = libro.clientWidth || 1;
  const progreso = Math.abs(ultimoDeltaX) / ancho;
  paginaAdelante.classList.add("animando");

  if (progreso > UMBRAL_COMPLETAR) {
    animando = true;
    const destino =
      direccionGesto === "next"
        ? (indiceActual + 1) % TOTAL_PAGINAS
        : (indiceActual - 1 + TOTAL_PAGINAS) % TOTAL_PAGINAS;
    const anguloFinal = direccionGesto === "next" ? -180 : 180;
    const direccionFinal = direccionGesto;
    requestAnimationFrame(() => {
      paginaAdelante.style.transform = `rotateY(${anguloFinal}deg)`;
    });
    paginaAdelante.addEventListener("transitionend", function alTerminar(e) {
      if (e.propertyName !== "transform") return;
      paginaAdelante.removeEventListener("transitionend", alTerminar);
      finalizarFlip(direccionFinal, destino);
    });
  } else {
    // no se alcanzó el umbral: regresa suavemente a su lugar
    requestAnimationFrame(() => {
      paginaAdelante.style.transform = "rotateY(0deg)";
    });
    paginaAdelante.addEventListener("transitionend", function alCancelar(e) {
      if (e.propertyName !== "transform") return;
      paginaAdelante.removeEventListener("transitionend", alCancelar);
      paginaAdelante.classList.remove("animando");
      paginaAtras.innerHTML = "";
    });
  }
  direccionGesto = null;
}

/* ---- Touch (celulares y tablets) ---- */
let ultimoToqueTs = 0; // para ignorar los eventos de "mouse" sintéticos que algunos navegadores disparan después de un toque

libro.addEventListener(
  "touchstart",
  (e) => {
    ultimoToqueTs = Date.now();
    const t = e.touches[0];
    iniciarArrastre(t.clientX, t.clientY, e.target);
  },
  { passive: true },
);

libro.addEventListener(
  "touchmove",
  (e) => {
    const t = e.touches[0];
    const esHorizontal = moverArrastre(t.clientX, t.clientY);
    if (esHorizontal) e.preventDefault(); // evita que la página haga scroll/zoom mientras se pasa la hoja
  },
  { passive: false }, // necesario para poder llamar preventDefault()
);

libro.addEventListener("touchend", soltarArrastre, { passive: true });
libro.addEventListener("touchcancel", soltarArrastre, { passive: true });

/* ---- Mouse (computador) ---- */
libro.addEventListener("mousedown", (e) => {
  if (Date.now() - ultimoToqueTs < 800) return; // era un toque, no un clic de mouse real
  iniciarArrastre(e.clientX, e.clientY, e.target);
});

window.addEventListener("mousemove", (e) => {
  if (!arrastrando) return;
  moverArrastre(e.clientX, e.clientY);
});

window.addEventListener("mouseup", () => {
  if (arrastrando) soltarArrastre();
});

/* ---------------------------------------------------------------------
   BOTONES Y TECLADO
   ------------------------------------------------------------------- */
btnSiguiente.addEventListener("click", siguiente);
btnAnterior.addEventListener("click", anterior);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") siguiente();
  if (e.key === "ArrowLeft") anterior();
});

// Si la ventana cambia de tamaño (o el celular gira), puede cambiar si la
// página actual necesita scroll o no.
window.addEventListener("resize", actualizarModoTactil);

/* ---------------------------------------------------------------------
   INICIO
   ------------------------------------------------------------------- */
precargarImagenes();
renderPagina(paginaAdelante, contenidoEnIndice(indiceActual));
actualizarIndicador();
actualizarModoTactil();
