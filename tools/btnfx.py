#!/usr/bin/env python3
"""Фоны залитых кнопок: «эквалайзер» из столбиков и лёгкий мерцающий шум.

Каждый столбик живёт в своём ритме (SMIL-анимация высоты), шум меняет зерно
скачками, как помехи. Получаются три файла в assets/img/fx/:
  eq-on-light.svg  тёмные столбики для светлой кнопки (тёмная тема)
  eq-on-dark.svg   светлые столбики для тёмной кнопки (светлая тема)
  eq-hover.svg     яркие столбики и шум для градиента наведения
Запуск: python3 tools/btnfx.py
"""
import pathlib, random

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'assets/img/fx'
W, H, BARS = 400, 100, 32
STEP = W / BARS
BAR = STEP * 0.62


def svg(color, bar_op, noise_op, speed, seed):
    rnd = random.Random(seed)
    bars = []
    for i in range(BARS):
        hs = [rnd.randint(18, 96) for _ in range(5)]
        hs.append(hs[0])
        h_vals = ';'.join(map(str, hs))
        y_vals = ';'.join(str(H - h) for h in hs)
        dur = round(rnd.uniform(1.1, 2.4) * speed, 2)
        begin = -round(rnd.uniform(0, dur), 2)
        x = round(i * STEP + (STEP - BAR) / 2, 2)
        bars.append(
            f'<rect x="{x}" y="{H - hs[0]}" width="{round(BAR, 2)}" height="{hs[0]}" rx="1.5">'
            f'<animate attributeName="height" values="{h_vals}" dur="{dur}s" begin="{begin}s" repeatCount="indefinite" calcMode="spline" keySplines="{";".join(["0.45 0 0.55 1"] * 5)}"/>'
            f'<animate attributeName="y" values="{y_vals}" dur="{dur}s" begin="{begin}s" repeatCount="indefinite" calcMode="spline" keySplines="{";".join(["0.45 0 0.55 1"] * 5)}"/>'
            '</rect>')
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="none">'
        '<defs>'
        f'<linearGradient id="f" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="{color}" stop-opacity="{bar_op}"/><stop offset="1" stop-color="{color}" stop-opacity="0"/></linearGradient>'
        '<filter id="n" x="0" y="0" width="100%" height="100%">'
        '<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="1">'
        '<animate attributeName="seed" values="1;7;3;11;5;9" dur="0.6s" calcMode="discrete" repeatCount="indefinite"/>'
        '</feTurbulence>'
        f'<feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 {noise_op * 3} -{noise_op}"/>'
        '</filter></defs>'
        f'<g fill="url(#f)">{"".join(bars)}</g>'
        f'<rect width="{W}" height="{H}" filter="url(#n)"/>'
        '</svg>')


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    files = {
        'eq-on-light.svg': svg('#1B1B1F', 0.16, 0.10, 1.6, 11),
        'eq-on-dark.svg': svg('#FFFFFF', 0.14, 0.10, 1.6, 23),
        'eq-hover.svg': svg('#FFFFFF', 0.22, 0.16, 0.8, 37),
    }
    for name, body in files.items():
        (OUT / name).write_text(body, encoding='utf-8')
        print(f'assets/img/fx/{name}: {len(body) // 1024} КБ')


if __name__ == '__main__':
    main()
