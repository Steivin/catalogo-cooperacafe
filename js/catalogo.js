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
let origenY = 0;
let ultimoDeltaX = 0;
let direccionGesto = null; // 'next' | 'prev' | 'bloqueado' | 'vertical' | null

/* ---------------------------------------------------------------------
   PRECARGA DE IMÁGENES
   ---------------------------------------------------------------------
   Se cargan en memoria del navegador TODAS las imágenes del catálogo
   apenas se abre la página. Así, cuando el usuario pasa de página, la
   foto ya está lista y no "aparece a medio giro" ni frena la animación.
   ------------------------------------------------------------------- */
function precargarImagenes() {
  const rutas = new Set();
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
    .closest(".producto__imagen-cont, .pagina__logo-cont")
    ?.classList.add("sin-imagen");
}
window.manejarErrorImagen = manejarErrorImagen;

/* ---------------------------------------------------------------------
   RENDERIZADO DE UNA PÁGINA (una marca completa)
   ------------------------------------------------------------------- */
function claseGrilla(cantidad) {
  if (cantidad <= 1) return "grilla--1";
  if (cantidad === 2) return "grilla--2";
  if (cantidad <= 4) return "grilla--3-4";
  return "grilla--muchos";
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

function renderPagina(elemento, marca) {
  if (!marca) {
    elemento.innerHTML = "";
    return;
  }
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
      <div class="grilla ${claseGrilla(marca.productos.length)}">
        ${marca.productos.map(tarjetaProducto).join("")}
      </div>
      <a class="pagina__boton" href="${marca.enlace}" target="_blank" rel="noopener noreferrer">
        Ver página
      </a>
    </div>`;
}

function actualizarIndicador() {
  indicador.textContent = `Página ${indiceActual + 1} de ${marcas.length}`;
  btnAnterior.disabled = indiceActual === 0;
  btnSiguiente.disabled = indiceActual === marcas.length - 1;
}

/* ---------------------------------------------------------------------
   ANIMACIÓN DE PASO DE PÁGINA (efecto "hoja de libro")
   ------------------------------------------------------------------- */
function prepararFlip(direccion) {
  const destino = direccion === "next" ? indiceActual + 1 : indiceActual - 1;
  renderPagina(paginaAtras, marcas[destino]);
  paginaAdelante.style.transformOrigin =
    direccion === "next" ? "left center" : "right center";
  return destino;
}

function finalizarFlip(direccion, destino) {
  indiceActual = destino;
  renderPagina(paginaAdelante, marcas[indiceActual]);
  paginaAdelante.classList.remove("animando", "arrastrando");
  paginaAdelante.style.transition = "none";
  paginaAdelante.style.transform = "rotateY(0deg)";
  // fuerza reflow antes de restaurar la transición para el próximo flip
  void paginaAdelante.offsetHeight;
  paginaAdelante.style.transition = "";
  paginaAtras.innerHTML = "";
  animando = false;
  actualizarIndicador();
}

function irA(direccion) {
  if (animando) return;
  if (direccion === "next" && indiceActual >= marcas.length - 1) return;
  if (direccion === "prev" && indiceActual <= 0) return;

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
   ARRASTRE CON MOUSE Y DESLIZAMIENTO TÁCTIL (Pointer Events unifica ambos)
   ------------------------------------------------------------------- */
const UMBRAL_COMPLETAR = 0.22; // fracción del ancho para confirmar el cambio de página
const UMBRAL_INTENCION = 8; // px mínimos antes de decidir si el gesto es horizontal o vertical

function alIniciarArrastre(e) {
  if (animando) return;
  // Ignorar si el gesto empezó sobre un botón/enlace (para no robar el clic)
  if (e.target.closest("a, button")) return;

  arrastrando = true;
  direccionGesto = null;
  origenX = e.clientX;
  origenY = e.clientY;
  ultimoDeltaX = 0;
  paginaAdelante.classList.add("arrastrando");
  paginaAdelante.classList.remove("animando");
  libro.setPointerCapture?.(e.pointerId);
}

function alMoverArrastre(e) {
  if (!arrastrando) return;
  const delta = e.clientX - origenX;
  const deltaY = e.clientY - origenY;
  ultimoDeltaX = delta;
  const ancho = libro.clientWidth || 1;

  if (direccionGesto === null) {
    // Aún no sabemos si la persona quiere pasar de página o solo hacer scroll vertical
    if (
      Math.abs(delta) < UMBRAL_INTENCION &&
      Math.abs(deltaY) < UMBRAL_INTENCION
    )
      return;

    if (Math.abs(deltaY) > Math.abs(delta)) {
      // El movimiento es principalmente vertical: dejarlo como scroll normal, no interferir
      direccionGesto = "vertical";
      arrastrando = false;
      paginaAdelante.classList.remove("arrastrando");
      return;
    }

    const quiereSiguiente = delta < 0;
    if (quiereSiguiente && indiceActual >= marcas.length - 1) {
      direccionGesto = "bloqueado";
      return;
    }
    if (!quiereSiguiente && indiceActual <= 0) {
      direccionGesto = "bloqueado";
      return;
    }
    direccionGesto = quiereSiguiente ? "next" : "prev";
    prepararFlip(direccionGesto);
  }
  if (direccionGesto === "bloqueado" || direccionGesto === "vertical") return;

  // Ya es un gesto horizontal confirmado: evita que el navegador intente
  // además desplazar o hacer zoom con el mismo gesto (eso es lo que causaba
  // el salto/"cosas raras" al arrastrar).
  e.preventDefault?.();

  const progreso = Math.max(-1, Math.min(1, delta / ancho));
  paginaAdelante.style.transform = `rotateY(${progreso * 180}deg)`;
}

function alSoltarArrastre() {
  if (!arrastrando) {
    direccionGesto = null;
    return;
  }
  arrastrando = false;
  paginaAdelante.classList.remove("arrastrando");

  if (
    direccionGesto === null ||
    direccionGesto === "bloqueado" ||
    direccionGesto === "vertical"
  ) {
    direccionGesto = null;
    return;
  }

  const ancho = libro.clientWidth || 1;
  const progreso = Math.abs(ultimoDeltaX) / ancho;
  paginaAdelante.classList.add("animando");

  if (progreso > UMBRAL_COMPLETAR) {
    animando = true;
    const destino =
      direccionGesto === "next" ? indiceActual + 1 : indiceActual - 1;
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

libro.addEventListener("pointerdown", alIniciarArrastre);
libro.addEventListener("pointermove", alMoverArrastre);
libro.addEventListener("pointerup", alSoltarArrastre);
libro.addEventListener("pointercancel", alSoltarArrastre);
libro.addEventListener("pointerleave", (e) => {
  // Solo soltar si el botón del mouse ya no está presionado (evita cortar el arrastre táctil)
  if (arrastrando && e.pointerType === "mouse" && e.buttons === 0)
    alSoltarArrastre();
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

/* ---------------------------------------------------------------------
   INICIO
   ------------------------------------------------------------------- */
precargarImagenes();
renderPagina(paginaAdelante, marcas[indiceActual]);
actualizarIndicador();
