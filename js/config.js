/**
 * CONFIGURACIÓN COMERCIAL — Clases con Gefferson
 * ------------------------------------------------------------------
 * Única fuente de datos comerciales usados por main.js.
 * Para cambiar precios, número o mensajes de WhatsApp, edita solo este archivo.
 *
 * Nota: index.html contiene los mismos valores como texto de respaldo
 * (para SEO y para quien navegue sin JavaScript). Al cargar la página,
 * main.js los sobrescribe con los de este archivo.
 */
window.SITE_CONFIG = Object.freeze({
  brand: 'Clases con Gefferson',
  teacher: 'Gefferson',
  location: 'Villa El Salvador, Lima, Perú',

  whatsapp: {
    number: '51952253272', // formato internacional sin "+" ni espacios
    display: '+51 952 253 272',
  },

  // Tarifa base por hora (en soles)
  currency: 'S/',
  prices: {
    primaria: 28,
    secundaria: 33,
  },

  // Piezas del mensaje de WhatsApp.
  // Mensaje final: greeting + [level] + "." + [mode] + closing
  messages: {
    greeting: 'Hola Gefferson, estoy interesado/a en recibir información sobre tus clases particulares de matemática',
    levels: {
      primaria: 'para primaria',
      secundaria: 'para secundaria',
    },
    modes: {
      presencial: 'Me interesa la modalidad presencial a domicilio.',
      virtual: 'Me interesa la modalidad virtual.',
    },
    closing: 'Quisiera consultar la disponibilidad para mi hijo/a.',

    // Mensajes completos para enlaces con data-wa="<clave>"
    presets: {
      diagnostico: 'Hola Gefferson, quisiera reservar la sesión de diagnóstico gratuita de 30 minutos. Nivel del estudiante: ___. Tema o sílabo que deseamos revisar: ___.',
    },
  },
});
