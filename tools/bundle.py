"""Собирает сайт в один HTML-файл для просмотра и пересылки: стили, скрипты
и изображения встраиваются внутрь. Запуск: python3 tools/bundle.py [путь]"""
import base64, mimetypes, re, sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
out = Path(sys.argv[1]) if len(sys.argv) > 1 else root / 'dist' / 'bushkovstudio.html'
html = (root / 'index.html').read_text(encoding='utf-8')

def data_uri(rel):
    p = root / rel
    mime = {'.webp':'image/webp','.woff2':'font/woff2'}.get(p.suffix) or mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
    return f'data:{mime};base64,' + base64.b64encode(p.read_bytes()).decode()

def inline_css(m):
    path = root / m.group(1)
    css = path.read_text(encoding='utf-8')
    # шрифты и картинки из CSS — тоже внутрь
    css = re.sub(r'url\(([^)"\']+)\)', lambda u: 'url(' + data_uri((path.parent / u.group(1)).resolve().relative_to(root)) + ')', css)
    return '<style>\n' + css + '</style>'

def inline_js(m):
    js = (root / m.group(1)).read_text(encoding='utf-8')
    return '<script>\n' + js.replace('</script', '<\\/script') + '</script>'

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', inline_css, html)
html = re.sub(r'<script src="([^"]+)" defer></script>', '', html)
scripts = re.findall(r'<script src="([^"]+)" defer></script>', (root / 'index.html').read_text(encoding='utf-8'))
body_js = ''.join(inline_js(re.match(r'(.*)', s)) for s in scripts)
html = html.replace('</body>', body_js + '\n</body>')
html = re.sub(r'(src|href)="(assets/img/[^"]+)"', lambda m: f'{m.group(1)}="{data_uri(m.group(2))}"', html)
html = re.sub(r'<link rel="preload"[^>]+>\n?', '', html)
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(html, encoding='utf-8')
print(out, round(out.stat().st_size / 1024), 'КБ')
