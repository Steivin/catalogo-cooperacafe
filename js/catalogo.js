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
  /*
  {
    nombre: "PROPLACOL",
    logo: "assets/proplacollogo.png",
    enlace: "https://www.facebook.com/proplacol/?locale=es_LA",
    productos: [
      { nombre: "Producto1", imagen: "assets/pro1.png" },
      { nombre: "Producto2", imagen: "assets/pro2.png" },
    ],
  },
  */
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
];

/* Logo de COOPERACAFE*/
const LOGO_COOPERACAFE =
  "https://cooperacafe.com/wp-content/uploads/2023/03/Recurso-1.png";

const TOTAL_PAGINAS = marcas.length + 1;

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
let animando = false;
let arrastrando = false;
let origenX = 0;
let ultimoDeltaX = 0;
let direccionGesto = null;

/* ---------------------------------------------------------------------
   PRECARGA DE IMÁGENES
   ---------------------------------------------------------------------
   Se cargan en memoria del navegador TODAS las imágenes del catálogo
   apenas se abre la página.
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
   RENDERIZADO
   ---------------------------------------------------------------------
   ------------------------------------------------------------------- */
function calcularGrid(cantidad) {
  if (cantidad <= 1) return { columnas: 1, filas: 1 };
  if (cantidad === 2) return { columnas: 2, filas: 1 };
  if (cantidad <= 4) return { columnas: 2, filas: 2 };
  const columnas = Math.ceil(Math.sqrt(cantidad));
  const filas = Math.ceil(cantidad / columnas);
  return { columnas, filas };
}

function tarjetaProducto(producto, indice, total) {
  const esTercerDeTres = total === 3 && indice === 2;
  const estilo = esTercerDeTres
    ? ' style="grid-column: 1 / -1; justify-self: center; width: 50%;"'
    : "";
  return `
    <article class="producto"${estilo}>
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
        <h1 class="portada__titulo">PORTAFOLIO DE PRODUCTOS<br>PROVISIÓN AGRÍCOLA</h1>
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
        ${marca.productos.map((p, i) => tarjetaProducto(p, i, marca.productos.length)).join("")}
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
}

/* ---------------------------------------------------------------------
   ANIMACIÓN DE PASO DE PÁGINA
   ------------------------------------------------------------------- */
function prepararFlip(direccion) {
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
  void paginaAdelante.offsetHeight;
  paginaAdelante.style.transition = "";
  paginaAtras.innerHTML = "";
  animando = false;
  actualizarIndicador();
  actualizarModoTactil();
}

function actualizarModoTactil() {
  const cuerpo = paginaAdelante.querySelector(".pagina__cuerpo");
  const necesitaScroll =
    !!cuerpo && cuerpo.scrollHeight > cuerpo.clientHeight + 1;
  libro.style.touchAction = necesitaScroll ? "pan-y" : "none";
}

function irA(direccion) {
  if (animando) return;
  if (TOTAL_PAGINAS <= 1) return;

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
   ARRASTRE CON MOUSE Y TOUCH NATIVO 
   ---------------------------------------------------------------------
   ------------------------------------------------------------------- */
const UMBRAL_COMPLETAR = 0.22;
const UMBRAL_INTENCION = 6;

function iniciarArrastre(x, y, objetivo) {
  if (animando) return;
  if (objetivo && objetivo.closest("a, button")) return;

  arrastrando = true;
  direccionGesto = null;
  origenX = x;
  origenY = y;
  ultimoDeltaX = 0;
  paginaAdelante.classList.add("arrastrando");
  paginaAdelante.classList.remove("animando");
}

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

    if (paginaNecesitaScroll && Math.abs(deltaY) > Math.abs(delta)) {
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
  return true;
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
let ultimoToqueTs = 0;

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
    if (esHorizontal) e.preventDefault();
  },
  { passive: false },
);

libro.addEventListener("touchend", soltarArrastre, { passive: true });
libro.addEventListener("touchcancel", soltarArrastre, { passive: true });

/* ---- Mouse (computador) ---- */
libro.addEventListener("mousedown", (e) => {
  if (Date.now() - ultimoToqueTs < 800) return;
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

window.addEventListener("resize", actualizarModoTactil);

/* ---------------------------------------------------------------------
   INICIO
   ------------------------------------------------------------------- */
precargarImagenes();
renderPagina(paginaAdelante, contenidoEnIndice(indiceActual));
actualizarIndicador();
actualizarModoTactil();
