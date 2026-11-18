/**
 * INTERACCIONES — Clases con Gefferson
 * ------------------------------------------------------------------
 * Módulos: WhatsApp · precios · creador de mensaje · tema · menú móvil
 *          navegación activa · header · animaciones de entrada
 *          acordeón · botón flotante · año del footer
 * Sin dependencias. Cada init* es independiente y tolera la ausencia
 * de su marcado.
 */
(function () {
  'use strict';

  var config = window.SITE_CONFIG;
  var root = document.documentElement;
  var supportsIO = 'IntersectionObserver' in window;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var desktopQuery = window.matchMedia('(min-width: 64em)');

  /* ---------------------------------------------------------------- */
  /* WhatsApp                                                          */
  /* ---------------------------------------------------------------- */

  /** Construye el texto del mensaje según nivel y modalidad (ambos opcionales). */
  function buildMessage(level, mode) {
    var m = config.messages;
    var text = m.greeting;
    if (level && m.levels[level]) text += ' ' + m.levels[level];
    text += '.';
    if (mode && m.modes[mode]) text += ' ' + m.modes[mode];
    return text + ' ' + m.closing;
  }

  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + config.whatsapp.number + '?text=' + encodeURIComponent(message);
  }

  /** Enlaces con data-wa="general|primaria|secundaria" o una clave de messages.presets. */
  function initWhatsAppLinks() {
    var presets = config.messages.presets || {};
    document.querySelectorAll('[data-wa]').forEach(function (link) {
      var key = link.getAttribute('data-wa');
      var message = presets[key] || buildMessage(key === 'general' ? '' : key);
      link.href = buildWhatsAppUrl(message);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }

  /** Precios con data-price="primaria|secundaria". */
  function initPrices() {
    document.querySelectorAll('[data-price]').forEach(function (el) {
      var amount = config.prices[el.getAttribute('data-price')];
      if (typeof amount === 'number') el.textContent = config.currency + ' ' + amount;
    });
  }

  /** Formulario de contacto: actualiza vista previa y enlace al elegir opciones. */
  function initMessageBuilder() {
    var form = document.querySelector('[data-wa-builder]');
    if (!form) return;
    var preview = form.querySelector('[data-wa-preview]');
    var link = form.querySelector('[data-wa-builder-link]');

    function update() {
      var level = (form.querySelector('input[name="level"]:checked') || {}).value || '';
      var mode = (form.querySelector('input[name="mode"]:checked') || {}).value || '';
      var message = buildMessage(level, mode);
      if (preview) preview.textContent = message;
      if (link) link.href = buildWhatsAppUrl(message);
    }

    form.addEventListener('change', update);
    form.addEventListener('submit', function (event) { event.preventDefault(); });
    update();
  }

  /* ---------------------------------------------------------------- */
  /* Tema claro / oscuro / sistema                                     */
  /* ---------------------------------------------------------------- */

  function initTheme() {
    var switcher = document.querySelector('[data-theme-switch]');
    var buttons = document.querySelectorAll('[data-theme-option]');
    var meta = document.querySelector('meta[name="theme-color"]');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    var STORAGE_KEY = 'cg-theme';

    function getPref() {
      return root.getAttribute('data-theme-pref') || 'system';
    }

    function apply(pref) {
      var dark = pref === 'dark' || (pref === 'system' && systemDark.matches);
      root.setAttribute('data-theme', dark ? 'dark' : 'light');
      root.setAttribute('data-theme-pref', pref);
      buttons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-theme-option') === pref));
      });
      if (meta) {
        var color = getComputedStyle(root).getPropertyValue('--meta-theme-color').trim();
        if (color) meta.setAttribute('content', color);
      }
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pref = btn.getAttribute('data-theme-option');
        try { localStorage.setItem(STORAGE_KEY, pref); } catch (e) { /* almacenamiento no disponible */ }
        apply(pref);
      });
    });

    systemDark.addEventListener('change', function () {
      if (getPref() === 'system') apply('system');
    });

    if (switcher) switcher.hidden = false;
    apply(getPref());
  }

  /* ---------------------------------------------------------------- */
  /* Menú móvil                                                        */
  /* ---------------------------------------------------------------- */

  function initMobileNav() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-nav]');
    var header = document.querySelector('[data-header]');
    if (!toggle || !nav) return;
    var label = toggle.querySelector('[data-nav-toggle-label]');
    var outside = [document.querySelector('main'), document.querySelector('[data-footer]'), document.querySelector('[data-wa-float]')];

    function setOpen(open, restoreFocus) {
      toggle.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = open ? 'Cerrar' : 'Menú';
      nav.classList.toggle('is-open', open);
      if (header) header.classList.toggle('is-menu-open', open);
      document.body.classList.toggle('is-locked', open);
      // Bloquea el resto de la página para lectores de pantalla y teclado
      outside.forEach(function (el) { if (el) el.inert = open; });
      if (open) {
        var first = nav.querySelector('a, button');
        if (first) first.focus();
      } else if (restoreFocus) {
        toggle.focus();
      }
    }

    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    toggle.addEventListener('click', function () { setOpen(!isOpen(), true); });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a') && isOpen()) setOpen(false, false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) setOpen(false, true);
    });

    desktopQuery.addEventListener('change', function (event) {
      if (event.matches && isOpen()) setOpen(false, false);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Header con fondo al hacer scroll + enlace activo                  */
  /* ---------------------------------------------------------------- */

  function initHeaderState() {
    var header = document.querySelector('[data-header]');
    if (!header) return;
    var update = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });
    update();
  }

  function initActiveNav() {
    if (!supportsIO) return;
    var links = document.querySelectorAll('.site-nav__link');
    var sections = document.querySelectorAll('[data-nav-section]');

    function setActive(id) {
      links.forEach(function (link) {
        if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.getAttribute('data-nav-section'));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------------------------------------------------------------- */
  /* Animaciones de entrada                                            */
  /* ---------------------------------------------------------------- */

  function initReveal() {
    var targets = document.querySelectorAll('[data-reveal], [data-steps]');
    if (!supportsIO || reducedMotion.matches) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------------------------------------------------------------- */
  /* Acordeón de preguntas frecuentes                                  */
  /* ---------------------------------------------------------------- */

  function initAccordion() {
    document.querySelectorAll('[data-accordion]').forEach(function (accordion) {
      accordion.addEventListener('click', function (event) {
        var trigger = event.target.closest('.accordion__trigger');
        if (!trigger) return;
        var item = trigger.closest('.accordion__item');
        var open = trigger.getAttribute('aria-expanded') !== 'true';
        trigger.setAttribute('aria-expanded', String(open));
        item.classList.toggle('is-open', open);
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Botón flotante: visible tras el hero, oculto en contacto/footer   */
  /* ---------------------------------------------------------------- */

  function initFloatingButton() {
    var button = document.querySelector('[data-wa-float]');
    if (!button || !supportsIO) return;
    var watched = {
      hero: document.querySelector('[data-hero]'),
      contact: document.querySelector('[data-contact]'),
      footer: document.querySelector('[data-footer]'),
    };
    var visible = { hero: true, contact: false, footer: false };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.getAttribute('data-float-key')] = entry.isIntersecting;
      });
      var show = !visible.hero && !visible.contact && !visible.footer;
      button.classList.toggle('is-visible', show);
      button.tabIndex = show ? 0 : -1;
    });

    Object.keys(watched).forEach(function (key) {
      if (!watched[key]) return;
      watched[key].setAttribute('data-float-key', key);
      observer.observe(watched[key]);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Año dinámico                                                      */
  /* ---------------------------------------------------------------- */

  function initYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = year; });
  }

  /* ---------------------------------------------------------------- */

  if (!config) {
    console.error('SITE_CONFIG no está definido: revisa que js/config.js se cargue antes que js/main.js.');
  } else {
    initWhatsAppLinks();
    initPrices();
    initMessageBuilder();
  }
  initTheme();
  initMobileNav();
  initHeaderState();
  initActiveNav();
  initReveal();
  initAccordion();
  initFloatingButton();
  initYear();
})();
