# Clases con Gefferson — Landing page (MVP)

Landing page de clases particulares de matemática para primaria y secundaria en Villa El Salvador, Lima.
Está hecha con HTML, CSS y JavaScript vanilla, sin dependencias ni proceso de build.

## Estructura

```
index.html            Página completa (HTML semántico, SEO, Open Graph)
css/
  tokens.css          Paleta, temas claro/oscuro, tipografía y espaciado (única fuente de color)
  base.css            Reset, tipografía global, layout, utilidades y animaciones de entrada
  components.css      Botones, header, navegación, selector de tema, chips, ticker, acordeón, botón flotante
  sections.css        Estilos de cada sección (hero → footer)
js/
  config.js           Datos comerciales: WhatsApp, precios y textos de los mensajes
  main.js             Interacciones (menú, tema, WhatsApp, acordeón, animaciones, año)
assets/
  favicon.svg
  og-image.png        Imagen para compartir en redes (1200×630)
robots.txt
```

## Ejecutar localmente

No hace falta instalar nada. Hay dos opciones:

1. Abrir `index.html` con doble clic en el navegador.
2. Usar un servidor local (recomendado, se comporta igual que en producción):
   ```bash
   npx serve .
   # o bien
   python -m http.server 8080
   ```
   Luego abrir `http://localhost:8080` (o la URL que indique `serve`).

## Cambios habituales

| Qué cambiar | Dónde |
|---|---|
| Precios | `js/config.js` → `prices`. También conviene actualizar el texto de respaldo en `index.html` (buscar `data-price`), que es lo que ven Google y quien navega sin JavaScript. |
| Número de WhatsApp | `js/config.js` → `whatsapp`, y los `href` de respaldo en `index.html` (buscar `wa.me`). |
| Mensajes de WhatsApp | `js/config.js` → `messages` (los mensajes completos, como el de la sesión de diagnóstico, están en `messages.presets`) |
| Fotografía del profesor | Reemplaza `assets/foto-perfil.webp` (cuadrada o 4:5, ≥ 640 px). Se muestra en la sección "Sobre mí". |
| Colores / paleta | `css/tokens.css` (ver abajo) |

### Cambiar de paleta (Midnight & Cream, Burgundy & Sand)

1. En `css/tokens.css`, copia el bloque `[data-palette="forest-lime"]` (o usa la plantilla comentada que está debajo) con el nombre nuevo, por ejemplo `[data-palette="midnight-cream"]`, y reemplaza los valores `--p-*`.
2. En `index.html`, cambia `data-palette="forest-lime"` por `data-palette="midnight-cream"` en la etiqueta `<html>`.

Los componentes solo usan los tokens semánticos `--color-*`, así que no hay que tocar nada más.
Lo que sí hay que revisar a mano es el contraste de los derivados (`--p-ink-soft`, `--p-mist-soft`, etc.) en los dos temas.
El único color que está escrito fuera de `tokens.css` es el valor inicial de `<meta name="theme-color">`, y `main.js` lo sincroniza al cargar.

### Mensajes de WhatsApp

- **General** (header, hero, FAQ, footer, botón flotante): el mensaje base.
- **Primaria / Secundaria** (tarjetas de clases y tarifas): el mensaje base con "para primaria" o "para secundaria".
- **Diagnóstico gratuito**: mensaje de reserva que pide el nivel y el tema o sílabo a revisar (`data-wa="diagnostico"`).
- **Contacto**: un formulario permite elegir nivel y modalidad. Muestra una vista previa y arma el enlace con esa combinación.

## Despliegue

Es un sitio estático: se sube la carpeta tal cual, sin build.

**Netlify**
- Arrastra la carpeta a <https://app.netlify.com/drop>, o conecta el repositorio con *Build command* vacío y *Publish directory* `.`.

**Vercel**
- `npx vercel` desde la carpeta, o importa el repositorio con *Framework preset* "Other", sin build y con *Output directory* `.`.

**Después de tener dominio definitivo**
1. En `index.html`, descomenta `<link rel="canonical">` y pon la URL real.
2. Cambia `og:image` a una URL absoluta (`https://tu-dominio.pe/assets/og-image.png`) y añade `<meta property="og:url">`.
3. Añade un `sitemap.xml` y referéncialo en `robots.txt`.
4. Registra el sitio en Google Search Console. Opcionalmente, crea un Perfil de Empresa en Google como negocio de servicio a domicilio, sin dirección pública.

## Decisiones

- **Dirección visual "Cuaderno de construcción"**: diseño editorial suizo con cuadrícula milimetrada, líneas de construcción y diagramas reales (Teorema de Tales en el hero, una escalera de comprensión en la metodología y un diagrama de Venn para las modalidades).
- **Tipografía**: Space Grotesk para titulares y DM Sans para el texto, cargadas desde Google Fonts con `display=swap`.
- **Tema**: claro, oscuro o sistema. La preferencia se guarda en `localStorage` y se aplica antes del primer render, así que no hay parpadeo.
- **Accesibilidad**: enlace "Saltar al contenido", foco visible, acordeón con `aria-expanded` y regiones, y menú móvil que bloquea el resto de la página con `inert` y se cierra con Esc. Se respeta `prefers-reduced-motion`. Sin JavaScript, el contenido sigue visible y los enlaces de WhatsApp funcionan.
- **SEO**: no se publican datos estructurados `LocalBusiness`, porque requieren una dirección física que no existe.
