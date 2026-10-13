/* Логика сайта: отрисовка, меню, переходы, тема, язык, маршруты.
   Тексты берутся из assets/js/i18n/{ru,en}.js (подключаются раньше). */
'use strict';
(() => {
/* =========================================================
   УТИЛИТЫ
   ========================================================= */
const $ = (s, r=document) => r.querySelector(s);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
/* Язык: выбран в <head> (?lang= → сохранённый → язык браузера) */
let lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
let L = CONTENT[lang];
const T = k => L.UI[k];
const INFO_ICON = icon('info');
const store = {
  get(k){ try{ return localStorage.getItem(k) }catch(e){ return null } },
  set(k,v){ try{ localStorage.setItem(k,v) }catch(e){} }
};
const ARROW = icon('arrow-right', 'arr go');
/* Логотип: исходный Logo.svg, обрезан по контуру, цвет — currentColor */
const LOGO = '<svg viewBox="22 31 196 178" fill="currentColor" aria-hidden="true"><rect x="178.796" y="31" width="39.2008" height="85.1303"/><rect x="131.761" y="31" width="39.2008" height="85.1303"/><rect x="84.7178" y="31" width="39.2008" height="85.1303"/><rect x="37.6744" y="31" width="39.2008" height="85.1303"/><rect x="123.922" y="123.87" width="46.4347" height="101.922" transform="rotate(90 123.922 123.87)"/><rect x="123.922" y="178.043" width="30.9565" height="86.2417" transform="rotate(90 123.922 178.043)"/><rect x="218" y="123.87" width="85.1303" height="86.2417" transform="rotate(90 218 123.87)"/></svg>';

let toastT;
function toast(msg){
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(()=>el.classList.remove('show'), 2600);
}
function placeThumb(seg){
  const on = seg.querySelector('button[aria-pressed="true"]'), th = seg.querySelector('.seg__thumb');
  if(!on || !th) return;
  th.style.width = on.offsetWidth + 'px';
  th.style.transform = `translateX(${on.offsetLeft}px)`;
}
function bindSeg(seg, onChange){
  seg.addEventListener('click', e => {
    const b = e.target.closest('button'); if(!b || b.getAttribute('aria-pressed')==='true') return;
    $$('button', seg).forEach(x => x.setAttribute('aria-pressed', String(x===b)));
    placeThumb(seg); onChange && onChange(b.dataset.val || b.dataset.themeSet);
  });
  seg.addEventListener('keydown', e => {
    if(!['ArrowLeft','ArrowRight'].includes(e.key)) return;
    const bs = $$('button', seg), i = bs.indexOf(document.activeElement); if(i<0) return;
    const n = bs[(i + (e.key==='ArrowRight'?1:-1) + bs.length) % bs.length]; n.focus(); n.click();
  });
  requestAnimationFrame(()=>placeThumb(seg));
}
function swapContent(el, render){
  el.classList.add('out');
  setTimeout(()=>{ render(); el.classList.remove('out') }, 180);
}
const plural = n => L.plural(n);
const moreLabel = n => T('more')(n, plural(n));

/* Статичные тексты разметки: data-i18n — содержимое, data-i18n-attr="атрибут:ключ,…" */
function applyStatic(){
  document.documentElement.lang = lang;
  document.title = T('title');
  $('meta[name="description"]').setAttribute('content', T('description'));
  $('meta[property="og:title"]')?.setAttribute('content', T('title'));
  $('meta[property="og:description"]')?.setAttribute('content', T('description'));
  $$('[data-i18n]').forEach(el => { const v = T(el.dataset.i18n); if(v != null) el.innerHTML = v; });
  $$('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(',').forEach(pair => {
    const [attr, key] = pair.split(':'); const v = T(key); if(v != null) el.setAttribute(attr, v);
  }));
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

/* =========================================================
   ОТРИСОВКА
   ========================================================= */
const fillLogos = (root=document) => $$('[data-logo-slot]', root).forEach(a => a.innerHTML = LOGO);
fillLogos();

function renderMainNav(current){
  $$('[data-mainnav]').forEach(ul => {
    ul.innerHTML = L.MAIN_NAV.map(i => i.soon
      ? `<li><a class="nav-a link is-soon" href="#" aria-disabled="true" data-stub="${T('blogSoon')}">${i.label}</a></li>`
      : `<li><a class="nav-a link" href="${i.href}"${i.id===current?' aria-current="page"':''}>${i.label}</a></li>`).join('');
  });
}

let audience = 'smb';
function renderServices(aud){
  audience = aud;
  $('#svcGrid').innerHTML = L.SERVICES[aud].map(s => `
    <a class="svc shift" href="#/expertise/${s.id}">
      <div class="svc__head"><h3>${s.t}</h3><p>${s.d}</p></div>
      <div class="tags">${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="price">${s.p}</div>
      ${ARROW}
    </a>`).join('');
}

function renderFooters(){
  const kvazar = `<h3>${T('kvazarH')}</h3><p>${T('kvazarText')}</p>
        <a class="btn btn--outline" href="https://t.me/kvazardesign" target="_blank" rel="noopener">${T('kvazarBtn')}</a>`;
  const bottom = `<div class="foot__bottom"><span>${T('rights')}</span><span class="reg" role="img" aria-label="®">R</span></div>
  <a class="logo foot__logo" href="#/" aria-label="${T('toHome')}">${LOGO}</a>`;
  const full = `
  <div class="foot__grid">
    <div class="foot__left">
      <p class="foot__lead">${T('footLead')}</p>
      <dl>
        <div><dt>${T('tg')}</dt><dd><a class="link" href="https://t.me/bushkovf" target="_blank" rel="noopener">bushkovf</a></dd></div>
        <div><dt>${T('max')}</dt><dd><a class="link" href="https://max.ru/u/f9LHodD0cOI4ISXWL-6K2X1wagOrrNW9PGlK3J3rjiWWJbR2LEPEhVQjpx8" target="_blank" rel="noopener">${T('maxOpen')}</a></dd></div>
        <div><dt>${T('mail')}</dt><dd><a class="link" href="mailto:bushkovf@mail.ru">bushkovf@mail.ru</a></dd></div>
      </dl>
      <div class="foot__also">
        <p class="foot__lead">${T('footAlso')}</p>
        <ul><li><a class="link" href="https://vc.ru/id1598278" target="_blank" rel="noopener">vc</a></li><li><a class="link" href="https://habr.com/ru/users/monsher/articles/" target="_blank" rel="noopener">habr</a></li><li><a class="link" href="https://hh.ru/resume/65a07422ff02636e9f0039ed1f6c5778505974" target="_blank" rel="noopener">hh</a></li></ul>
      </div>
    </div>
    <div class="foot__right"><div class="kvazar">${kvazar}</div></div>
  </div>
  ${bottom}`;
  $$('[data-footer]').forEach(f => f.innerHTML = full);
  $$('[data-kvazar]').forEach(k => k.innerHTML = kvazar);
  $$('[data-footer-mini]').forEach(f => f.innerHTML = bottom);
}

/* Список длиннее 8 пунктов показывает первые 6 и кнопку «Ещё N» */
/* Портфолио: фильтр в доп. меню (на телефоне — лента чипсов над списком) */
let caseFilter = 'all', filterT;
function renderFilter(){
  const count = id => id==='all' ? L.CASES.length : L.CASES.filter(x=>x.c.includes(id)).length;
  $('#filterList').innerHTML = L.CATEGORIES.map(c => `<li><button type="button" data-filter="${c.id}" aria-pressed="${c.id===caseFilter}">${c.t}<span class="cnt">${count(c.id)}</span></button></li>`).join('');
  $('#filterChips').innerHTML = L.CATEGORIES.map(c => `<a class="shift" href="#" role="button" data-filter="${c.id}"${c.id===caseFilter?' aria-current="true"':''}>${c.t}</a>`).join('');
}
function renderCases(){
  const list = L.CASES.filter(x => caseFilter==='all' || x.c.includes(caseFilter));
  $('#cases').innerHTML = list.map(x => `<a class="case shift is-out" href="#" data-stub="${T('caseStub')}"><h2>${x.t}</h2><p>${x.d}</p></a>`).join('');
  $('#casesEmpty').hidden = list.length>0;
  requestAnimationFrame(()=>requestAnimationFrame(()=>$$('#cases .case').forEach((el,i)=>{ el.style.transitionDelay = `${i*40}ms`; el.classList.remove('is-out'); })));
}
function setFilter(id){
  if(id===caseFilter) return;
  caseFilter = id; renderFilter();
  $$('#cases .case').forEach(el => { el.style.transitionDelay='0ms'; el.classList.add('is-out'); });
  clearTimeout(filterT); filterT = setTimeout(renderCases, 220);
}
document.addEventListener('click', e => {
  const f = e.target.closest('[data-filter]'); if(!f) return;
  e.preventDefault(); setFilter(f.dataset.filter);
});

const LIMIT = 6, MAX_OPEN = 8;
function tariffCard(t, sec, i, list){
  if(t.kind==='note'){
    return `<article class="tcard tcard--note">
      <h3>${t.name}</h3>
      <dl class="choose">${t.rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('')}</dl>
    </article>`;
  }
  const uid = `${sec.id}-${i}`;
  const base = t.base!=null ? list[t.base] : null;
  const cut = t.items.length > MAX_OPEN ? LIMIT : t.items.length;
  const vis = t.items.slice(0, cut), rest = t.items.slice(cut);
  const li = a => a.map(x=>`<li>${x}</li>`).join('');
  return `<article class="tcard">
    <div><h3>${t.name}</h3><p class="tcard__for">${t.for}</p></div>
    <div class="tcard__price">${t.old?`<s><span class="sr-only">${T('was')}</span>${t.old}</s>`:''}<div class="tcard__sum"><strong>${t.price}</strong>${t.note?tip(t.note):''}</div></div>
    <div class="tcard__meta tags">${t.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <div><button class="btn" type="button" data-contact="${t.name}">${T('request')}</button></div>
    <div class="tcard__body">
      <p class="tcard__label">${base ? T('allFrom')(base.gen||base.name) : T('includes')}</p>
      <ul class="clist">${li(vis)}</ul>
      ${rest.length ? `
        <div class="collapse" id="more-${uid}"><div><ul class="clist">${li(rest)}</ul></div></div>
        <button class="morebtn" type="button" aria-expanded="false" aria-controls="more-${uid}" data-more="${rest.length}"><span>${moreLabel(rest.length)}</span>${icon('chevron-down')}</button>` : ''}
      <p class="tcard__result"><b>${T('result')}</b> ${t.result}</p>
    </div>
  </article>`;
}

/* Подсказка «i» у цены: открывается наведением, фокусом и нажатием */
const tip = text => `<span class="tip"><button class="tip__btn" type="button" aria-label="${T('priceNote')}" aria-expanded="false">${icon('info')}</button><span class="tip__txt" role="tooltip">${text}</span></span>`;
document.addEventListener('click', e => {
  const b = e.target.closest('.tip__btn');
  $$('.tip.open').forEach(t => { if(!b || t !== b.parentElement){ t.classList.remove('open'); t.firstElementChild.setAttribute('aria-expanded','false'); } });
  if(b){ const open = b.parentElement.classList.toggle('open'); b.setAttribute('aria-expanded', String(open)); }
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') $$('.tip.open').forEach(t => { t.classList.remove('open'); t.firstElementChild.setAttribute('aria-expanded','false'); }); });

/* Окно «Обсудить задачу»: пользователь выбирает, куда написать */
const contactSheet = $('#contactSheet');
let contactTopic = '';
const MAX_URL = 'https://max.ru/u/f9LHodD0cOI4ISXWL-6K2X1wagOrrNW9PGlK3J3rjiWWJbR2LEPEhVQjpx8';
function renderContact(){
  const rows = [
    {ic:'send', name:T('contactTg'), note:'@bushkovf', href:'https://t.me/bushkovf', copy:'https://t.me/bushkovf'},
    {ic:'message-circle', name:T('contactMax'), note:T('maxOpen'), href:MAX_URL, copy:MAX_URL},
    {ic:'mail', name:T('contactMail'), note:'bushkovf@mail.ru', href:'mailto:bushkovf@mail.ru', copy:'bushkovf@mail.ru', mail:true},
  ];
  contactSheet.innerHTML = `
    <div class="csheet__head"><h2 id="csTitle">${T('contactTitle')}</h2><button class="csheet__close" type="button" data-close-contact aria-label="${T('close')}">${icon('x')}</button></div>
    <ul class="csheet__list">${rows.map(r => `
      <li class="csheet__row">
        <a class="csheet__item shift" href="${r.href}"${r.mail ? ' data-mail' : ' target="_blank" rel="noopener"'}>${icon(r.ic)}<span>${r.name}</span><small>${r.note}</small></a>
        <button class="csheet__copy shift" type="button" data-copy="${r.copy}" aria-label="${T('copy')}: ${r.name}">${icon('copy')}<span>${T('copy')}</span></button>
      </li>`).join('')}
    </ul>`;
}
/* Копирование в буфер: кнопка на полторы секунды показывает «Скопировано» (уведомление закрыло бы модальное окно) */
async function copyText(text){
  try{ await navigator.clipboard.writeText(text); return true; }
  catch(e){
    const ta = Object.assign(document.createElement('textarea'), {value:text}); ta.style.cssText = 'position:fixed;opacity:0';
    contactSheet.append(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok;
  }
}
function openContact(topic){
  contactTopic = topic || '';
  const subj = T('mailSubject') + (contactTopic ? ` ${contactTopic}` : '');
  $('[data-mail]', contactSheet).href = `mailto:bushkovf@mail.ru?subject=${encodeURIComponent(subj)}`;
  contactSheet.showModal();
}
contactSheet.addEventListener('click', e => {
  const cp = e.target.closest('[data-copy]');
  if(cp){
    copyText(cp.dataset.copy).then(ok => { if(!ok) return;
      cp.classList.add('is-done'); cp.innerHTML = `${icon('check')}<span>${T('copied')}</span>`;
      clearTimeout(cp._t); cp._t = setTimeout(() => { cp.classList.remove('is-done'); cp.innerHTML = `${icon('copy')}<span>${T('copy')}</span>`; }, 1500);
    });
    return;
  }
  if(e.target === contactSheet || e.target.closest('[data-close-contact]')) contactSheet.close();
  else if(e.target.closest('[data-stub]')) contactSheet.close();
  else if(e.target.closest('a[href^="http"], a[href^="mailto"]')) setTimeout(() => contactSheet.close(), 0);
});

function renderTariffs(sec, aud){
  const list = sec.tariffs[aud] || sec.tariffs.smb;
  return list.map((t,i)=>tariffCard(t,sec,i,list)).join('');
}

function renderExpertise(){
  $('#xsections').innerHTML = L.SECTIONS.map(s => `
    <section class="xsec" id="${s.id}" aria-labelledby="h-${s.id}">
      <h2 id="h-${s.id}">${s.n}. ${s.title}</h2>
      ${s.tariffs.ent ? `
      <div class="seg" role="group" aria-label="${T('bizSize')}" data-seg="tariff" data-sec="${s.id}">
        <span class="seg__thumb" aria-hidden="true"></span>
        <button type="button" aria-pressed="true" data-val="smb">${T('smb')}</button>
        <button type="button" aria-pressed="false" data-val="ent">${T('ent')}</button>
      </div>` : `<p class="lead-note">${T('sameTerms')}</p>`}
      <div class="tariffs swap" data-tariffs="${s.id}">${renderTariffs(s,'smb')}</div>
      <div class="prose">
        <div class="info reveal">${INFO_ICON}<div>${s.info.map(p=>`<p>${p}</p>`).join('')}</div></div>
        ${s.prose || ''}
      </div>
    </section>`).join('');

  $('#subnav').innerHTML = L.SECTIONS.map(s => `<li><a class="nav-a link" href="#/expertise/${s.id}" data-spy="${s.id}">${s.short}</a></li>`).join('');
  $('#subchips').innerHTML = L.SECTIONS.map(s => `<a class="shift" href="#/expertise/${s.id}" data-spy="${s.id}">${s.n}. ${s.short}</a>`).join('');

  $$('[data-seg="tariff"]').forEach(seg => bindSeg(seg, val => {
    const sec = L.SECTIONS.find(x=>x.id===seg.dataset.sec), box = $(`[data-tariffs="${sec.id}"]`);
    swapContent(box, ()=>{ box.innerHTML = renderTariffs(sec,val) });
  }));
  $$('[data-funnel]').forEach(renderFunnel);
}

/* Воронка: концентрические секторы с вершиной внизу */
function renderFunnel(host){
  const ax=230, ay=690, s=Math.sin(19.4*Math.PI/180), c=Math.cos(19.4*Math.PI/180);
  const R=[578,464,348,233,117];
  const pt = r => [[ax - r*s, ay - r*c],[ax + r*s, ay - r*c]];
  const band = (r2,r1) => { const [a,b]=pt(r2),[d,e]=pt(r1);
    return `M${a[0]} ${a[1]} A${r2} ${r2} 0 0 1 ${b[0]} ${b[1]} L${e[0]} ${e[1]} A${r1} ${r1} 0 0 0 ${d[0]} ${d[1]}Z`; };
  const [ga,gb]=pt(117), RR=[660, ...R];
  /* Шесть слоёв от внешнего к продукту; цвета --f1…--f6 свои у светлой и тёмной темы */
  const paths = [
    ...RR.slice(0,5).map((r,i)=>`<path data-i="${i}" d="${band(r,RR[i+1])}" fill="var(--f${i+1})"/>`),
    `<path data-i="5" d="M${ax} ${ay} L${ga[0]} ${ga[1]} A117 117 0 0 1 ${gb[0]} ${gb[1]}Z" fill="var(--f6)"/>`
  ].join('');
  host.outerHTML = `<figure class="funnel reveal" aria-label="${T('funnelAria')}">
    <svg viewBox="0 0 730 700" aria-hidden="true">${paths}</svg>
    ${L.FUNNEL.map((f,i)=>`<div class="frow" data-i="${i}" style="top:${f.y/7}%"><div class="frow__line"></div><div class="frow__txt"><b>${f.t}</b><span>${f.d}</span></div></div>`).join('')}
  </figure>`;
}
document.addEventListener('pointerover', e => {
  const f = e.target.closest('.funnel');
  if(f){
    const el = e.target.closest('[data-i]'); const i = el ? el.dataset.i : null;
    f.classList.toggle('is-hl', i!=null);
    $$('[data-i]', f).forEach(x => x.classList.toggle('hl', x.dataset.i===i));
  }
});
document.addEventListener('pointerout', e => {
  const f = e.target.closest('.funnel'); if(f && !f.contains(e.relatedTarget)) f.classList.remove('is-hl');
});

document.addEventListener('click', e => {
  const t = e.target.closest('.morebtn');
  if(t){
    const box = document.getElementById(t.getAttribute('aria-controls'));
    const open = t.getAttribute('aria-expanded')!=='true';
    t.setAttribute('aria-expanded', String(open)); box.classList.toggle('open', open);
    if(t.classList.contains('morebtn')) t.querySelector('span').textContent = open ? T('collapse') : moreLabel(+t.dataset.more);
    return;
  }
  const st = e.target.closest('[data-stub]'); if(st){ e.preventDefault(); toast(st.dataset.stub); return; }
  const ct = e.target.closest('[data-contact]'); if(ct){ e.preventDefault(); openContact(ct.dataset.contact); return; }
  if(e.target.closest('[data-open-map]')) openMap(e.detail===0);
});

/* =========================================================
   БОЛЬШОЕ МЕНЮ
   ========================================================= */
const fmenu = $('#fmenu'); let lastFocus = null, closeT;
/* Пункты нумеруются по колонкам сверху вниз — так они всплывают волной слева направо */
function renderMap(){
  let i = 0;
  const n = L.MAP.reduce((k,c)=>k + 1 + c.items.length, 0);
  $('#fcols').innerHTML = L.MAP.map(col => `<div class="fcol">
    <h2 class="fitem" style="--i:${i++};--n:${n}"><a class="link" href="${col.href}">${col.title}</a></h2>
    <ul>${col.items.map(([l,h])=>`<li class="fitem" style="--i:${i++};--n:${n}"><a class="link" href="${h}"${h.startsWith('http')?' target="_blank" rel="noopener"':''}>${l}</a></li>`).join('')}</ul>
  </div>`).join('');
}
/* byKeyboard — открыто клавишей: тогда переводим фокус на «Закрыть»; мышью — без видимого контура */
function openMap(byKeyboard){
  lastFocus = document.activeElement;
  fmenu.classList.add('open'); document.body.classList.add('locked','menu-open');
  $('#main').inert = true; $('#rail').inert = true;
  setTimeout(()=>{ if(byKeyboard) $('#fclose').focus({preventScroll:true}); else { fmenu.tabIndex=-1; fmenu.focus({preventScroll:true}); } }, 300);
}
function closeMap(){
  if(!fmenu.classList.contains('open')) return;
  fmenu.classList.remove('open'); document.body.classList.remove('locked','menu-open');
  document.body.classList.add('menu-closing');
  clearTimeout(closeT); closeT = setTimeout(()=>document.body.classList.remove('menu-closing'), 900);
  $('#main').inert = false; $('#rail').inert = false;
  lastFocus && lastFocus.focus && lastFocus.focus();
}
$('#fclose').addEventListener('click', closeMap);
/* Переход из большого меню: пункты гаснут → под скрытым контентом меняется
   страница → фон меню уходит → проявляется новая страница */
fmenu.addEventListener('click', e => {
  const a = e.target.closest('a'); if(!a) return;
  const href = a.getAttribute('href');
  if(!href.startsWith('#/') || reduceMotion.matches){ closeMap(); return; }
  e.preventDefault();
  fmenu.classList.remove('open');
  setTimeout(() => {
    const b = document.body;
    if(href === location.hash) scrollWithin(parse()); else { clickNav = true; location.hash = href; }
    requestAnimationFrame(() => {
      b.classList.remove('locked','menu-open'); b.classList.add('menu-closing','menu-nav');
      $('#main').inert = false; $('#rail').inert = false;
      clearTimeout(closeT); closeT = setTimeout(() => b.classList.remove('menu-closing','menu-nav'), 900);
    });
  }, 260);
});
fmenu.addEventListener('keydown', e => {
  if(e.key!=='Tab') return;
  const f = $$('button, a', fmenu); const first=f[0], last=f[f.length-1];
  if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus() }
  else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus() }
});

/* =========================================================
   ПОЛОСА И ЗАКРЕПЛЕНИЕ ГЛАВНОГО МЕНЮ
   Главная: полоса открывает большое меню.
   Внутренняя: наведение — серый фон и цвет иконки; клик —
   главное меню закрепляется поверх доп. меню; снять — только
   стрелкой ‹ (или Esc с клавиатуры).
   ========================================================= */
const rail = $('#rail'), mobile = matchMedia('(max-width:960px)');
function setPinned(on){
  document.body.classList.toggle('pinned', on);
  rail.setAttribute('aria-expanded', String(on));
  rail.setAttribute('aria-label', on ? T('menuClose') : (document.body.dataset.kind==='home' ? T('menuOpen') : T('menuOpenMain')));
  $('#mainpanel').inert = !on; $('#sideSub').inert = on;
}
rail.addEventListener('click', e => {
  if(document.body.dataset.kind==='home' || mobile.matches){ openMap(e.detail===0); return; }
  setPinned(!document.body.classList.contains('pinned'));
});
document.addEventListener('keydown', e => {
  if(e.key!=='Escape') return;
  if(fmenu.classList.contains('open')) closeMap();
  else if(document.body.classList.contains('pinned')){ setPinned(false); rail.focus() }
});

/* =========================================================
   ТЕМА И ЯЗЫК
   ========================================================= */
function setTheme(t){
  document.documentElement.dataset.theme = t; store.set('fb-theme', t);
  $$('#themeSeg button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.themeSet===t)));
  placeThumb($('#themeSeg'));
}
setTheme(store.get('fb-theme') || 'dark');
bindSeg($('#themeSeg'), t => {
  if(document.startViewTransition && !reduceMotion.matches){
    document.documentElement.dataset.vt = 'theme';
    document.startViewTransition(() => setTheme(t)).finished.finally(() => delete document.documentElement.dataset.vt);
  } else setTheme(t);
});
/* Переключение языка: перерисовать всё и остаться на том же экране */
function setLang(next){
  if(next === lang || !CONTENT[next]) return;
  const update = () => {
    lang = next; L = CONTENT[lang]; store.set('fb-lang', lang);
    renderAll();
    apply(parse(), scrollY);
  };
  if(document.startViewTransition && !reduceMotion.matches){
    document.documentElement.dataset.vt = 'theme';
    document.startViewTransition(update).finished.finally(() => delete document.documentElement.dataset.vt);
  } else update();
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* =========================================================
   ГЛАВНАЯ: табы, прогресс прокрутки
   ========================================================= */
bindSeg($('[data-seg="audience"]'), val => swapContent($('#svcGrid'), ()=>renderServices(val)));

function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max>0 ? Math.min(1, Math.max(0, scrollY/max)) : 0;
  const txt = (p*100).toFixed(3).padStart(6,'0') + '%';
  $$('.progress').forEach(el => el.textContent = txt);
}
addEventListener('scroll', onScroll, {passive:true});

const io = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target) } }), {rootMargin:'0px 0px -8% 0px'});
function observeReveals(root=document){ $$('.reveal:not(.in)', root).forEach(el => io.observe(el)); }

let spyIO;
function startSpy(){
  spyIO && spyIO.disconnect();
  spyIO = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting) markSpy(en.target.id) }), {rootMargin:'-40% 0px -55% 0px'});
  $$('.xsec, [data-spysec]').forEach(s => spyIO.observe(s));
}
function markSpy(id){
  $$('[data-spy]').forEach(a => a.dataset.spy===id ? a.setAttribute('aria-current','true') : a.removeAttribute('aria-current'));
  const chip = $(`.page.is-active .subchips [data-spy="${id}"]`);
  if(chip && chip.offsetParent){ const bar = chip.parentNode; bar.scrollTo({left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth)/2, behavior:'smooth'}); }
}

/* =========================================================
   МАРШРУТЫ
   ========================================================= */
/* Философия: статья и навигация по разделам */
function renderPhilo(){
  $('#philoBody').innerHTML = L.PHILO;
  fillLogos($('#philoBody'));
  $('#philoNav').innerHTML = L.PHILO_NAV.map(([id,t]) => `<li><a class="nav-a link" href="#/philosophy/${id}" data-spy="${id}">${t}</a></li>`).join('');
  $('#philoChips').innerHTML = L.PHILO_NAV.map(([id,t]) => `<a class="shift" href="#/philosophy/${id}" data-spy="${id}">${t}</a>`).join('');
}

function renderAll(){
  renderContact();
  applyStatic();
  renderFooters();
  renderServices(audience);
  renderFilter(); renderCases();
  renderExpertise();
  renderPhilo();
  renderMap();
  $$('.seg').forEach(placeThumb);
}
/* Типографика: любое слово или число до трёх символов (и с запятой, точкой или кавычкой после него)
   привязывается неразрывным пробелом к следующему слову и не висит в конце строки.
   Тире не начинает строку, а короткая часть слова через дефис («IT-продукты») не отрывается от остальной */
const SHORT_WORD = /(?<=^|[\s(«„"“—–\-\/])((?:[\p{L}\p{N}’']{1,3}|\p{N}[.,]\p{N})[.,;:!?»“”)…]*) (?=\S)/gu;
const SHORT_HYPHEN = /(?<=^|[\s(«„"“])(\p{L}{1,3})-(?=\p{L})/gu;
const DASH = / (?=[—–] )/g;
function glue(root){
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n =>
    n.parentElement && !n.parentElement.closest('script,style,textarea,svg') && / /.test(n.data) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT});
  for(let n; (n = w.nextNode());){ const t = n.data.replace(SHORT_WORD, '$1\u00A0').replace(SHORT_HYPHEN, '$1-\u2060').replace(DASH, '\u00A0'); if(t !== n.data) n.data = t; }
}
new MutationObserver(list => list.forEach(m => m.addedNodes.forEach(n =>
  n.nodeType === 1 ? glue(n) : n.nodeType === 3 && n.parentElement && glue(n.parentElement)))
).observe(document.body, {childList:true, subtree:true});
hydrateIcons();
renderAll();
glue(document.body);
document.documentElement.classList.remove('i18n-wait');
let currentPage = null, clickNav = false, lastHash = location.hash;
const scrollMemo = {};
if('scrollRestoration' in history) history.scrollRestoration = 'manual';

/* Переход инициирован кликом по ссылке (а не кнопками «назад/вперёд» браузера) */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#/"]'); if(!a || e.defaultPrevented) return;
  const href = a.getAttribute('href');
  const [p='home'] = href.replace(/^#\/?/,'').split('/').filter(Boolean);
  const page = L.PAGES[p] ? p : (L.TITLES[p] ? 'stub' : 'home');
  // якорь внутри текущей страницы не создаёт шаг истории: «Назад» уводит со страницы, а не по разделам
  if(page === currentPage && !fmenu.classList.contains('open')){
    e.preventDefault();
    if(href !== location.hash){ history.replaceState(null, '', href); lastHash = href; }
    scrollWithin(parse());
    return;
  }
  clickNav = true;
}, true);

/* «Назад» в доп. меню возвращает туда, откуда пришли (с той же позиции прокрутки) */
let depth = 0;
$('.back').addEventListener('click', e => { if(depth > 0){ e.preventDefault(); clickNav = false; history.back(); } });

/* Старые адреса разделов экспертизы ведут в новые */
const SUB_ALIAS = {product:'strategy', 'ux-ui':'diagnostics', 'design-systems':'team-os'};
function parse(){
  let [p='home', sub] = location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
  if(p==='expertise' && SUB_ALIAS[sub]) sub = SUB_ALIAS[sub];
  const page = L.PAGES[p] ? p : (L.TITLES[p] ? 'stub' : 'home');
  return {p, sub, page};
}

/* Применить состояние страницы — без анимаций, мгновенно */
function apply({p, sub, page}, restoreY){
  closeMap();
  document.body.dataset.kind = page==='home' ? 'home' : 'inner';
  setPinned(false);
  $('#sideHome').hidden = page!=='home';
  $('#sideSub').hidden = !L.PAGES[page];
  if(L.PAGES[page]){ $('#sideSub').dataset.page = page; $('#subTitle').textContent = L.PAGES[page]; }
  renderMainNav(page==='home' ? 'home' : p);
  $('#topLeft').innerHTML = page==='home'
    ? '<span class="year">2016–2027</span>'
    : `<nav class="crumbs" aria-label="${T('crumbs')}"><a class="link" href="#/">${T('home')}</a><i aria-hidden="true"></i><span aria-current="page">${L.PAGES[page]||L.TITLES[p]}</span></nav>`;
  if(page==='stub') $('#stubTitle').textContent = L.TITLES[p];

  $$('.page').forEach(x => x.classList.toggle('is-active', x.id==='page-'+page));
  currentPage = page;
  $$('.seg').forEach(placeThumb);
  if(page==='expertise' || page==='philosophy') startSpy();

  const target = sub && document.getElementById(sub);
  const y = restoreY != null ? restoreY : (target ? target.getBoundingClientRect().top + scrollY : 0);
  window.scrollTo({top:y, behavior:'instant'});
  if(sub) markSpy(sub);
  // элементы на экране показываем сразу, ниже — по прокрутке
  $$('#page-'+page+' .reveal:not(.in)').forEach(el => { if(el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); });
  observeReveals($('#page-'+page));
  onScroll();
}

/* Смена страницы: View Transitions API (Chrome, Edge, Safari 18+),
   иначе — ручное затухание и проявление */
function swapPage(update){
  const b = document.body;
  if(reduceMotion.matches){ update(); return; }
  if(document.startViewTransition){
    document.documentElement.dataset.vt = 'page';
    b.classList.add('no-anim');
    const t = document.startViewTransition(update);
    t.finished.finally(() => { b.classList.remove('no-anim'); delete document.documentElement.dataset.vt; });
    return;
  }
  b.classList.add('page-leave');
  setTimeout(() => {
    b.classList.add('no-anim'); update();
    requestAnimationFrame(() => { b.classList.remove('no-anim'); b.classList.remove('page-leave'); });
  }, 200);
}

/* Раскрывающиеся блоки «Развернуть / Свернуть» */
document.addEventListener('click', e => {
  const b = e.target.closest('.ph-more__btn'); if(!b) return;
  const open = b.getAttribute('aria-expanded') !== 'true';
  b.setAttribute('aria-expanded', String(open));
  b.querySelector('span').textContent = open ? T('collapse') : T('expand');
  b.closest('.ph-more').classList.toggle('open', open);
});

/* Тот же экран: плавная прокрутка к разделу или наверх */
function scrollWithin(next){
  closeMap(); setPinned(false);
  const behavior = reduceMotion.matches ? 'instant' : 'smooth';
  const target = next.sub && document.getElementById(next.sub);
  if(target){ target.scrollIntoView({behavior, block:'start'}); markSpy(next.sub); }
  else window.scrollTo({top:0, behavior});
}

function route(){
  const next = parse(), byClick = clickNav; clickNav = false;
  scrollMemo[lastHash] = scrollY; lastHash = location.hash;
  if(byClick) depth++; else depth = Math.max(0, depth-1);

  if(next.page === currentPage){ scrollWithin(next); return; }
  const restoreY = byClick ? null : scrollMemo[location.hash];
  // уход из большого меню: меню само гасит сцену, страницу меняем под ним
  if(document.body.classList.contains('menu-open') || document.body.classList.contains('menu-closing')){
    apply(next, restoreY); return;
  }
  swapPage(() => apply(next, restoreY));
}
addEventListener('hashchange', route);
addEventListener('resize', () => { $$('.seg').forEach(placeThumb); if(mobile.matches) setPinned(false); });
document.fonts && document.fonts.ready.then(()=>$$('.seg').forEach(placeThumb));
apply(parse());
})();
