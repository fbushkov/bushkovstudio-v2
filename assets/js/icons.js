/* Иконки Lucide (lucide-static 1.48.0, лицензия ISC, https://lucide.dev).
   Генерируется tools/icons.py — руками не править. */
'use strict';
window.ICONS = {
  'menu':'<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
  'chevron-left':'<path d="m15 18-6-6 6-6"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'arrow-left':'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'funnel':'<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
  'layout-grid':'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  'info':'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'check':'<path d="M20 6 9 17l-5-5"/>'
};
/* Иконка строкой: icon('arrow-right', 'arr') */
window.icon = (name, cls = '') =>
  `<svg class="lucide${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
/* Заполняет заготовки <svg data-lucide="имя"> в разметке */
window.hydrateIcons = (root = document) => root.querySelectorAll('svg[data-lucide]').forEach(el => {
  const tpl = document.createElement('template');
  tpl.innerHTML = icon(el.dataset.lucide, el.getAttribute('class') || '');
  el.replaceWith(tpl.content.firstChild);
});
