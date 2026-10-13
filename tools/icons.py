#!/usr/bin/env python3
"""Собирает assets/js/icons.js из библиотеки Lucide (пакет lucide-static).

В сайт попадают только нужные иконки, а не вся библиотека.
Новая иконка: добавьте её имя (как на lucide.dev) в ICONS и запустите
    python3 tools/icons.py
Скрипт скачает пакет через npm указанной версии и перезапишет icons.js.
"""
import pathlib, re, subprocess, sys, tarfile, tempfile

VERSION = '1.48.0'
ICONS = [
    'menu', 'chevron-left', 'chevron-down', 'arrow-left', 'arrow-right',
    'funnel', 'layout-grid', 'info', 'send', 'message-circle', 'mail', 'x',
]
ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'assets/js/icons.js'


def main():
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['npm', 'pack', f'lucide-static@{VERSION}', '--silent'],
                       cwd=tmp, check=True, stdout=subprocess.DEVNULL)
        with tarfile.open(next(pathlib.Path(tmp).glob('lucide-static-*.tgz'))) as tar:
            files = {pathlib.Path(m.name).stem: m for m in tar.getmembers()
                     if m.name.startswith('package/icons/') and m.name.endswith('.svg')}
            missing = [n for n in ICONS if n not in files]
            if missing:
                sys.exit(f'Нет в lucide-static {VERSION}: {", ".join(missing)}')
            body = {}
            for name in ICONS:
                svg = tar.extractfile(files[name]).read().decode()
                inner = re.search(r'<svg[^>]*>(.*)</svg>', svg, re.S).group(1)
                body[name] = re.sub(r'\s+', ' ', re.sub(r'\s*/>', '/>', inner)).replace('> <', '><').strip()

    rows = ',\n'.join(f"  '{k}':'{v}'" for k, v in body.items())
    OUT.write_text(f"""/* Иконки Lucide (lucide-static {VERSION}, лицензия ISC, https://lucide.dev).
   Генерируется tools/icons.py — руками не править. */
'use strict';
window.ICONS = {{
{rows}
}};
/* Иконка строкой: icon('arrow-right', 'arr') */
window.icon = (name, cls = '') =>
  `<svg class="lucide${{cls ? ' ' + cls : ''}}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${{ICONS[name]}}</svg>`;
/* Заполняет заготовки <svg data-lucide="имя"> в разметке */
window.hydrateIcons = (root = document) => root.querySelectorAll('svg[data-lucide]').forEach(el => {{
  const tpl = document.createElement('template');
  tpl.innerHTML = icon(el.dataset.lucide, el.getAttribute('class') || '');
  el.replaceWith(tpl.content.firstChild);
}});
""", encoding='utf-8')
    print(f'{OUT.relative_to(ROOT)}: {len(body)} иконок, lucide-static {VERSION}')


if __name__ == '__main__':
    main()
