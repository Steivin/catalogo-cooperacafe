# Catálogo Digital COOPERACAFE

## Cómo completar el catálogo

1. **Logo**: por ahora `index.html` apunta directamente a
   `https://cooperacafe.com/wp-content/uploads/2023/03/Recurso-1.png`, así
   que se ve correctamente sin hacer nada. Si prefieres tenerlo local (para
   que funcione sin conexión), descarga esa imagen, guárdala como
   `assets/logo-cooperacafe.png` y cambia el `src` del `<img class="cabecera__logo">`
   en `index.html` por `assets/logo-cooperacafe.png`.

2. **Marcas y productos**: edita únicamente el arreglo `marcas` al inicio de
   `js/catalogo.js`. Las 5 marcas actuales son de ejemplo (para mostrar cómo
   se ve la página con 1, 2, 3-4 y 5+ fotos de producto) — reemplázalas por
   las ~20 marcas reales, siguiendo el mismo formato. Cada marca tiene:
   - `logo`: la imagen grande que aparece antes de los productos.
   - `enlace`: el único botón al final de la página (por ejemplo, la página
     web general de esa marca).
   - `productos`: solo necesitan `nombre` (para el texto alternativo) e
     `imagen` — ya no llevan descripción, precio ni enlace propio.

3. **Imágenes**: coloca los logos y las fotos de producto en la carpeta
   `assets/` y referencia esas rutas en `logo` e `imagen` (por ejemplo
   `assets/logo-marca-01.png`, `assets/producto-01.jpg`). Si una imagen no
   existe o no carga, se muestra automáticamente un ícono de reemplazo para
   que nunca se vea un enlace roto.

4. **Abrir el catálogo**: abre `index.html` en el navegador (haciendo doble
   clic, o sirviéndolo con cualquier servidor estático). No requiere
   instalación ni build.

## Estructura

```
catalogo-cooperacafe/
├── index.html
├── css/styles.css
├── js/catalogo.js
└── assets/        ← coloca aquí las fotos de producto y, si quieres, el logo local
```
