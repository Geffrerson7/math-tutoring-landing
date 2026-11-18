# PROYECTO: CLASES CON GEFFERSON
## Desarrollo de landing page profesional — MVP

Actúa como Senior Frontend Developer, Creative Developer, UI/UX Designer y especialista en diseño web de alta calidad inspirado en Awwwards.

Tu objetivo es diseñar e implementar una página web profesional para mi emprendimiento de clases particulares de matemática, dirigido a estudiantes de primaria y secundaria en Villa El Salvador, Lima, Perú.

Quiero una web con una identidad visual distintiva, una experiencia de usuario excelente y una ejecución frontend de alta calidad.

No quiero una plantilla educativa genérica. Busco una experiencia visual memorable, moderna, elegante y profesional, inspirada en la calidad de diseño de los sitios reconocidos por Awwwards.

El objetivo comercial principal es conseguir nuevos alumnos y facilitar que los padres de familia contacten conmigo.

---

# 1. INFORMACIÓN OFICIAL DEL EMPRENDIMIENTO

Utiliza los siguientes datos como fuente única de información comercial:

- Marca: Clases con Gefferson.
- Profesor: Gefferson.
- Servicio principal: clases particulares de matemática.
- Público objetivo: estudiantes de primaria y secundaria.
- Zona principal de atención: Villa El Salvador, Lima, Perú.
- Modalidad: presencial a domicilio y virtual.
- Experiencia: experiencia informal ayudando a estudiantes.
- Tarifa de primaria: S/ 30 por hora.
- Tarifa de secundaria: S/ 35 por hora.
- WhatsApp: +51 952 253 272.
- Enlace de contacto: https://wa.me/51952253272.

IMPORTANTE:

- No presentes al profesor como licenciado en educación, docente titulado o especialista certificado.
- No inventes años de experiencia, testimonios, cantidad de alumnos, resultados académicos ni certificaciones.
- No inventes instituciones educativas donde haya trabajado.
- La presentación debe destacar su experiencia informal ayudando a estudiantes de forma honesta y profesional.
- No inventes una dirección física.
- No inventes disponibilidad horaria.

---

# 2. OBJETIVOS DEL PROYECTO

La web debe cumplir cinco objetivos:

1. Presentar profesionalmente los servicios de Clases con Gefferson.
2. Generar confianza en los padres de familia.
3. Explicar los beneficios de las clases particulares.
4. Comunicar claramente las tarifas y modalidades.
5. Convertir visitantes en consultas mediante WhatsApp.

El diseño debe priorizar la conversión sin parecer una página publicitaria invasiva.

---

# 3. STACK TECNOLÓGICO

Para el MVP utiliza exclusivamente:

- HTML5.
- CSS3.
- JavaScript vanilla (ES6+).
- SVG para iconos y elementos gráficos cuando sea necesario.

No utilizar:

- React.
- Next.js.
- Vue.
- Angular.
- Tailwind CSS.
- Bootstrap.
- Frameworks CSS.
- Backend.
- Bases de datos.

No instalar dependencias si no existe una justificación técnica.

Mantén una arquitectura sencilla, organizada y mantenible.

La estructura debe facilitar una futura migración a React o Next.js, pero no implementes abstracciones innecesarias para conseguirlo.

---

# 4. DIRECCIÓN ARTÍSTICA: AWWWARDS-INSPIRED

Esta es una de las partes más importantes del proyecto.

Quiero una web con calidad visual inspirada en sitios destacados de Awwwards.

No quiero una landing page educativa genérica ni una plantilla convencional.

La web debe transmitir que fue diseñada por un estudio creativo profesional.

## 4.1 Referencias estéticas

Inspirarse en tendencias de diseño reconocidas en Awwwards:

- Editorial web design.
- Modern Swiss design.
- Experimental typography.
- Bento layouts.
- Asymmetric compositions.
- Minimalist interfaces.
- Motion design.
- Microinteractions.
- Creative scrolling experiences.
- Modern digital experiences.

No copiar diseños existentes. Crear una identidad visual original para Clases con Gefferson.

## 4.2 Concepto visual

Concepto principal:

"Matemática con claridad, creatividad y confianza".

La dirección visual debe combinar:

- Educación.
- Geometría.
- Precisión matemática.
- Creatividad.
- Diseño editorial.
- Tecnología.

Utilizar elementos matemáticos como recursos gráficos, no como decoración aleatoria.

Ejemplos:

- Figuras geométricas.
- Diagramas.
- Fórmulas.
- Líneas de construcción.
- Cuadrículas.
- Coordenadas.
- Operaciones matemáticas.
- Formas abstractas inspiradas en geometría.

## 4.3 Paleta de colores

Utilizar inicialmente la paleta **02. Forest & Lime** como identidad visual del proyecto.

**Paleta inicial: Forest & Lime**

- Verde oscuro principal: `#142D27`.
- Verde secundario: `#285447`.
- Fondo claro: `#F1F0E8`.
- Lima de acento: `#C6E36B`.
- Texto oscuro: `#26352F`.

**Criterios de uso:**

- El verde oscuro debe transmitir confianza, estabilidad y personalidad.
- El verde secundario debe utilizarse en superficies, bloques y elementos complementarios.
- El fondo claro debe aportar limpieza, legibilidad y equilibrio visual.
- El lima debe reservarse para llamadas a la acción, elementos interactivos y detalles destacados.
- Evitar incorporar demasiados colores adicionales.
- Mantener suficiente contraste entre texto, fondos y elementos interactivos en ambos temas.

**Preparación para futuros cambios de paleta:**

Esta elección es temporal y corresponde únicamente a la primera implementación visual. Una vez terminada la web, quiero probar las otras dos paletas finalistas:

1. **Midnight & Cream**.
2. **Burgundy & Sand**.

Por ello, implementa los colores mediante variables CSS centralizadas (preferentemente dentro de `:root` y los selectores de tema correspondientes). No distribuyas códigos de color directamente por los componentes o las reglas CSS.

La arquitectura visual debe permitir cambiar de paleta modificando únicamente las variables de diseño, sin tener que reescribir componentes, secciones, estilos estructurales ni funcionalidades.

**Modo claro y oscuro:**

- Diseñar una versión clara y otra oscura de Forest & Lime.
- Mantener la identidad de la paleta en ambos modos.
- Definir variables independientes para fondos, superficies, textos, bordes, acentos y estados interactivos.
- Incorporar un selector manual de tema: claro, oscuro y sistema.
- Respetar la preferencia del sistema operativo cuando se seleccione el modo sistema.
- Evitar invertir colores automáticamente; cada tema debe tener una combinación diseñada y revisada para garantizar legibilidad.

El objetivo es que Forest & Lime sea la primera identidad visual implementada, pero que las otras dos paletas puedan probarse posteriormente de manera rápida y controlada.

## 4.4 Tipografía

Utilizar una combinación tipográfica con personalidad editorial:

- Tipografía display para titulares.
- Sans-serif moderna para textos y navegación.
- Jerarquía tipográfica marcada.
- Titulares de gran impacto visual.
- Excelente legibilidad en dispositivos móviles.

Puedes evaluar tipografías como:
- Space Grotesk.
- DM Sans.
- Manrope.
- Plus Jakarta Sans.

Selecciona una combinación coherente y evita cargar demasiadas familias tipográficas.

## 4.5 Composición

Utilizar:

- Hero impactante con tipografía protagonista.
- Composiciones asimétricas.
- Espacios negativos intencionales.
- Secciones con diferentes ritmos visuales.
- Tarjetas con diseños originales.
- Cuadrículas editoriales.
- Contraste entre superficies oscuras y claras.
- Elementos gráficos que conecten visualmente las secciones.

Evitar que toda la página se construya con el mismo patrón de tres tarjetas repetidas.

## 4.6 Motion design e interacciones

Implementar cuando aporten valor:

- Animaciones de entrada al hacer scroll.
- Transiciones suaves entre estados.
- Microinteracciones en botones.
- Efectos hover en tarjetas.
- Animaciones sutiles en elementos geométricos.
- Navegación fluida.
- Feedback visual en elementos interactivos.
- Animaciones tipográficas discretas.

Las animaciones deben ser ligeras y no perjudicar el rendimiento ni la accesibilidad.

Evitar:

- Animaciones excesivas.
- Scroll controlado artificialmente.
- Efectos que dificulten la navegación.
- Animaciones que retrasen la aparición del contenido.
- Efectos que afecten la experiencia móvil.

Respetar prefers-reduced-motion.

## 4.7 Experiencia visual

El resultado debe sentirse:

- Premium.
- Moderno.
- Creativo.
- Profesional.
- Diferente.
- Cercano.
- Fácil de utilizar.

La estética Awwwards debe estar presente sin sacrificar la claridad comercial.

---

# 5. ESTRUCTURA DE LA PÁGINA

## 5.1 Header

Incluir:

- Logotipo tipográfico: Clases con Gefferson.
- Inicio.
- Sobre mí.
- Clases.
- Tarifas.
- Contacto.
- Botón destacado de WhatsApp.

Características:

- Header visualmente integrado con el diseño.
- Navegación funcional.
- Menú responsive.
- Transiciones sutiles.
- Estados hover y focus.
- Buen contraste.

Evaluar un header sticky únicamente si mejora la navegación.

## 5.2 Hero

Título principal:

"Aprende matemática con confianza y a tu propio ritmo."

Descripción:

"Clases particulares de matemática para estudiantes de primaria y secundaria. Aprende paso a paso, refuerza tus conocimientos y desarrolla tus habilidades matemáticas."

Botones:

- Solicitar una clase.
- Conocer las clases.

Mostrar visualmente:

- Clases presenciales y virtuales.
- Atención en Villa El Salvador.
- Matemática para primaria y secundaria.

Dirección visual:

- Tipografía de gran tamaño.
- Composición editorial.
- Elementos geométricos.
- Contraste visual.
- Diseño memorable.

El botón principal debe abrir WhatsApp con un mensaje previamente redactado.

No utilizar imágenes de stock genéricas de estudiantes sonriendo frente a una pizarra.

Priorizar recursos gráficos originales y elementos matemáticos.

## 5.3 Sobre mí

Título:

"Hola, soy Gefferson."

Texto sugerido:

"Me gusta compartir mis conocimientos y ayudar a estudiantes a comprender mejor las matemáticas. Mi enfoque consiste en explicar los conceptos de manera clara, desarrollar ejercicios paso a paso y reforzar aquellos temas que presentan mayor dificultad."

Destacar:

- Explicaciones claras.
- Paciencia durante el aprendizaje.
- Resolución de ejercicios.
- Atención según las necesidades del estudiante.

Diseño:

- Composición editorial.
- Espacio para fotografía del profesor.
- Elementos gráficos matemáticos.
- Diseño visual coherente con el resto de la web.

La fotografía debe ser reemplazable fácilmente.

Si todavía no existe una fotografía, utilizar un placeholder visual elegante. No inventar fotografías personales.

## 5.4 Servicios

Crear dos categorías principales.

### Matemática para primaria

Descripción:

"Refuerza las bases matemáticas y desarrolla confianza al resolver ejercicios."

Temas propuestos, sujetos a confirmación del profesor:

- Operaciones básicas.
- Fracciones.
- Decimales.
- Porcentajes.
- Resolución de problemas.
- Introducción a geometría.

### Matemática para secundaria

Descripción:

"Comprende los conceptos matemáticos y practica mediante ejercicios explicados paso a paso."

Temas propuestos, sujetos a confirmación:

- Aritmética.
- Álgebra.
- Ecuaciones.
- Geometría.
- Trigonometría.
- Razonamiento matemático.

No afirmar dominio de temas que el profesor todavía no haya confirmado.

Diseñar ambas categorías con personalidad visual diferenciada.

## 5.5 Metodología

Título:

"Aprender matemática paso a paso."

Mostrar cuatro etapas:

1. Identificar las dificultades del estudiante.
2. Explicar los conceptos de forma sencilla.
3. Resolver ejercicios paso a paso.
4. Practicar y reforzar los conocimientos.

La sección debe comunicar que las clases se adaptan al nivel y ritmo de aprendizaje del estudiante.

Utilizar una composición visual original, evitando las típicas cuatro tarjetas idénticas.

## 5.6 Modalidades

Crear dos modalidades.

### Presencial

- Clases a domicilio.
- Atención en Villa El Salvador.
- Horarios coordinados previamente.
- El costo de desplazamiento puede depender de la ubicación exacta.

### Virtual

- Clases mediante videollamada.
- Explicaciones y resolución de ejercicios.
- Coordinación previa del horario.

Diseñar una sección visualmente atractiva para presentar ambas modalidades.

No inventar plataformas, materiales incluidos ni condiciones comerciales adicionales.

## 5.7 Tarifas

Título:

"Clases particulares a precios accesibles."

Mostrar los precios claramente:

Primaria:

S/ 30 por hora.

Secundaria:

S/ 35 por hora.

Indicar que los precios corresponden a la tarifa base y que las condiciones de desplazamiento para clases presenciales se coordinan previamente.

Incluir botones de WhatsApp para consultar disponibilidad.

Los precios deben estar centralizados en una configuración fácil de modificar.

La presentación de precios debe ser clara, elegante y sin costos ocultos.

## 5.8 Preguntas frecuentes

Incluir:

- ¿Qué niveles educativos atiendes?
- ¿Las clases son presenciales o virtuales?
- ¿En qué zonas brindas clases?
- ¿Cuánto cuesta una hora de clase?
- ¿Cómo puedo reservar una clase?
- ¿Qué necesita el estudiante para comenzar?

Responder únicamente con información confirmada.

Utilizar acordeones accesibles si mejoran la experiencia.

## 5.9 Contacto

Título:

"¿Necesitas apoyo con matemática?"

Descripción:

"Conversemos sobre las necesidades del estudiante y coordinemos una clase."

Datos:

- Profesor: Gefferson.
- Zona: Villa El Salvador, Lima.
- Modalidad: presencial y virtual.
- WhatsApp: +51 952 253 272.

Botón principal:

"Escribir por WhatsApp".

Enlace:

https://wa.me/51952253272

Mensaje inicial:

"Hola Gefferson, estoy interesado/a en recibir información sobre tus clases particulares de matemática. Quisiera consultar la disponibilidad para mi hijo/a."

Crear mensajes personalizados para cada nivel educativo cuando el usuario seleccione primaria o secundaria.

También debe existir un botón flotante de WhatsApp visible en dispositivos móviles, sin obstruir el contenido.

## 5.10 Footer

Incluir:

- Clases con Gefferson.
- Enlaces de navegación.
- WhatsApp.
- Villa El Salvador, Lima, Perú.
- Año dinámico mediante JavaScript.
- Derechos reservados.

---

# 6. REQUISITOS TÉCNICOS

## HTML

- Utilizar HTML5 semántico.
- Mantener una estructura accesible.
- Utilizar encabezados jerárquicos.
- Agregar atributos adecuados a los enlaces.
- Incluir metadatos SEO.
- Incluir Open Graph.
- Configurar idioma español.

## CSS

- Utilizar variables CSS.
- Separar estilos por componentes o secciones cuando sea conveniente.
- Aplicar metodología de nombres consistente.
- Diseño mobile-first.
- Evitar reglas duplicadas.
- Implementar estados hover y focus.
- Utilizar animaciones sutiles.
- Respetar prefers-reduced-motion.
- Mantener consistencia visual.

## JavaScript

Implementar únicamente las interacciones necesarias:

- Menú móvil.
- Navegación suave.
- Botones de WhatsApp.
- Mensajes personalizados según nivel educativo.
- Acordeones de preguntas frecuentes.
- Animaciones al entrar en pantalla.
- Año dinámico del footer.

Centralizar la información comercial en un archivo de configuración cuando sea conveniente.

Evitar JavaScript innecesario.

---

# 7. SEO LOCAL

Optimizar para búsquedas relacionadas con:

- Clases particulares de matemática en Villa El Salvador.
- Profesor de matemática en Villa El Salvador.
- Clases de matemática para primaria.
- Clases de matemática para secundaria.
- Refuerzo escolar de matemática.

Incluir:

- Title.
- Meta description.
- Open Graph.
- URL canónica cuando exista dominio definitivo.
- Estructura semántica.
- Contenido natural y relevante.

No utilizar palabras clave de forma artificial.

No inventar dirección física ni ubicación exacta del domicilio del profesor.

No publicar datos estructurados de negocio que requieran una dirección física inexistente.

---

# 8. RENDIMIENTO Y ACCESIBILIDAD

Objetivos:

- Carga rápida.
- Imágenes optimizadas.
- Evitar JavaScript innecesario.
- Buen contraste.
- Navegación mediante teclado.
- Textos alternativos.
- Enlaces accesibles.
- Responsive en móviles, tablets y escritorio.
- Respetar preferencias de movimiento reducido.
- Evitar cambios de layout inesperados.

Prestar especial atención a Core Web Vitals.

No sacrificar rendimiento por efectos visuales.

---

# 9. ALCANCE EXCLUIDO DEL MVP

No implementar:

- Inicio de sesión.
- Registro de usuarios.
- Panel administrativo.
- Gestión de alumnos.
- Reservas automatizadas.
- Pasarela de pagos.
- Base de datos.
- Sistema de calificaciones.
- Plataforma de videoclases.
- Blog.
- Backend.

Estas funcionalidades podrán evaluarse en futuras versiones si existe una necesidad real.

---

# 10. FORMA DE TRABAJO

Trabaja mediante las siguientes fases.

## Fase 1: Inspección y planificación

1. Inspecciona el repositorio.
2. Identifica los archivos existentes.
3. Comprueba si existe una configuración previa.
4. Evalúa el estado del proyecto.
5. Propón una estructura de archivos.
6. Presenta un plan de implementación.

No modifiques archivos antes de revisar el estado actual del repositorio.

## Fase 2: Dirección de arte y diseño

Antes de implementar:

1. Propón tres direcciones visuales diferenciadas.
2. Describe la composición del hero.
3. Define tipografía y jerarquía visual.
4. Define el uso de la paleta.
5. Explica cómo se diferenciarán visualmente las secciones.
6. Selecciona la dirección que mejor combine estética Awwwards, educación y conversión comercial.

No empieces con una plantilla genérica.

## Fase 3: Implementación

Implementa la landing page completa según la dirección visual seleccionada.

Prioriza:

- Calidad visual.
- Coherencia entre secciones.
- Experiencia móvil.
- Accesibilidad.
- Interacciones funcionales.
- Código mantenible.

## Fase 4: Integraciones

Implementa y verifica:

- WhatsApp.
- Mensajes personalizados.
- Navegación.
- Menú móvil.
- Acordeones.
- Interacciones visuales.

## Fase 5: Optimización

Revisar:

- Responsive.
- SEO.
- Accesibilidad.
- Rendimiento.
- Animaciones.
- Contraste.
- Experiencia de usuario.

## Fase 6: Verificación

Antes de finalizar:

- Verificar que no existan errores en consola.
- Revisar los enlaces.
- Comprobar el funcionamiento del menú.
- Comprobar todos los botones de WhatsApp.
- Verificar los mensajes personalizados.
- Comprobar el responsive.
- Revisar accesibilidad básica.
- Evitar código duplicado.
- Ejecutar las verificaciones disponibles.

No marques una fase como terminada si no has ejecutado sus verificaciones.

---

# 11. CRITERIOS DE ACEPTACIÓN

El proyecto se considerará terminado cuando:

1. La web tenga una identidad visual distintiva y una ejecución de alta calidad.
2. El diseño esté correctamente adaptado a móviles, tablets y escritorio.
3. Toda la información comercial sea correcta.
4. Las tarifas sean visibles.
5. Los botones de WhatsApp funcionen correctamente.
6. Los mensajes de WhatsApp estén personalizados.
7. La navegación sea funcional.
8. No existan errores críticos de consola.
9. La web tenga metadatos SEO.
10. El código esté organizado y documentado.
11. La experiencia sea accesible.
12. Las animaciones no comprometan rendimiento ni usabilidad.

---

# 12. ENTREGABLES

Al terminar, proporciona:

- Landing page funcional.
- Código organizado.
- Diseño responsive.
- Integración funcional de WhatsApp.
- SEO básico.
- README con instrucciones.
- Resumen de archivos creados y modificados.
- Pruebas realizadas y resultados.
- Limitaciones detectadas.
- Mejoras futuras recomendadas.
- Instrucciones para ejecutar localmente.
- Recomendaciones para desplegar en Vercel o Netlify.

---

# 13. INSTRUCCIÓN FINAL

Quiero un resultado que combine la calidad visual de un sitio web destacado en Awwwards con la claridad y confianza que necesita un emprendimiento educativo.

No quiero una página que parezca generada automáticamente a partir de una plantilla.

Presta especial atención al hero, la tipografía, las composiciones, los detalles visuales y las transiciones entre secciones.

Cada elemento debe tener una razón de existir.

La prioridad es crear una web visualmente memorable, profesional, rápida, accesible y orientada a conseguir alumnos.

No sobredimensiones la arquitectura: este proyecto es una landing page comercial, no una plataforma educativa.

Trabaja de manera ordenada, revisa antes de modificar y verifica antes de dar por terminado el trabajo.