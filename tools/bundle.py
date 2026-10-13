"""Собирает сайт в один HTML-файл для просмотра и пересылки: стили, скрипты
и изображения встраиваются внутрь. Запуск: python3 tools/bundle.py [путь]"""
import base64, mimetypes, re, sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
out = Path(sys.argv[1]) if len(sys.argv) > 1 else root / 'dist' / 'bushkovstudio.html'
html = (root / 'index.html').read_text(encoding='utf-8')

def data_uri(rel):
    p = root / rel
    mime = mimetypes.guess_type(p.name)[0] or ('image/webp' if p.suffix == '.webp' else 'application/octet-stream')
    return f'data:{mime};base64,' + base64.b64encode(p.read_bytes()).decode()

def inline_css(m):
    css = (root / m.group(1)).read_text(encoding='utf-8')
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
# шрифты остаются ссылками: Gilroy берётся из системы или из папки assets/fonts рядом с файлом
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(html, encoding='utf-8')
print(out, round(out.stat().st_size / 1024), 'КБ')
