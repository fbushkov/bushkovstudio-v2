#!/usr/bin/env python3
"""Фоны залитых кнопок: размытые пятна, которые случайно «плавают» и переливаются,
и лёгкий мерцающий шум.

Каждое пятно движется по своей траектории (SMIL-анимация центра и размера),
шум меняет зерно скачками, как помехи. Получаются три файла в assets/img/fx/:
  wave-on-light.svg  серо-белые пятна для светлой кнопки (тёмная тема)
  wave-on-dark.svg   графитовые пятна для тёмной кнопки (светлая тема)
  wave-hover.svg     фиолетово-бирюзовые пятна для наведения
Цвета наведения подобраны так, чтобы белый текст на них был не ниже 4,5 : 1.
Запуск: python3 tools/btnfx.py
"""
import pathlib, random

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'assets/img/fx'
W, H = 400, 100
SPLINE = '0.45 0 0.55 1'


def svg(base, colors, noise_op, speed, seed):
    rnd = random.Random(seed)
    blobs = []
    for c in colors:
        pts = [(rnd.randint(-40, W + 40), rnd.randint(-30, H + 30)) for _ in range(5)]
        pts.append(pts[0])
        rx = [rnd.randint(110, 190) for _ in range(5)]
        rx.append(rx[0])
        dur = round(rnd.uniform(7, 12) * speed, 2)
        begin = -round(rnd.uniform(0, dur), 2)
        ks = ';'.join([SPLINE] * 5)
        anim = lambda attr, vals: (f'<animate attributeName="{attr}" values="{";".join(map(str, vals))}" dur="{dur}s" '
                                   f'begin="{begin}s" repeatCount="indefinite" calcMode="spline" keySplines="{ks}"/>')
        blobs.append(
            f'<ellipse cx="{pts[0][0]}" cy="{pts[0][1]}" rx="{rx[0]}" ry="{round(rx[0] * .55)}" fill="{c}">'
            + anim('cx', [p[0] for p in pts]) + anim('cy', [p[1] for p in pts])
            + anim('rx', rx) + anim('ry', [round(r * .55) for r in rx]) + '</ellipse>')
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="none">'
        '<defs>'
        '<filter id="b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="28"/></filter>'
        '<filter id="n" x="0" y="0" width="100%" height="100%">'
        '<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="1">'
        '<animate attributeName="seed" values="1;7;3;11;5;9" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>'
        '</feTurbulence>'
        f'<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 {noise_op * 3} -{noise_op}"/>'
        '</filter></defs>'
        f'<rect width="{W}" height="{H}" fill="{base}"/>'
        f'<g filter="url(#b)">{"".join(blobs)}</g>'
        f'<rect width="{W}" height="{H}" filter="url(#n)"/>'
        '</svg>')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob('eq-*.svg'):
        old.unlink()
    files = {
        'wave-on-light.svg': svg('#E4E2E6', ['#FFFFFF', '#C3C1C9', '#F4F3F6', '#B7B5BE'], 0.08, 1.0, 11),
        'wave-on-dark.svg': svg('#36373E', ['#202127', '#5A5B64', '#2A2B31', '#4A4B54'], 0.08, 1.0, 23),
        'wave-hover.svg': svg('#7A45C0', ['#A945AA', '#127E7B', '#5B3FB8', '#8E3790'], 0.10, 0.6, 37),
    }
    for name, body in files.items():
        (OUT / name).write_text(body, encoding='utf-8')
        print(f'assets/img/fx/{name}: {len(body) // 1024 or 1} КБ')


if __name__ == '__main__':
    main()
