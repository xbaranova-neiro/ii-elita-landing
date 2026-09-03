'use client';

import { FormEvent, useState } from 'react';
import { ArrowDown, ArrowRight, Bot, Check, Code2, Film, Menu, ShieldCheck, Sparkles, Zap } from 'lucide-react';

type Theme = 'elite' | 'cinema' | 'signal';
const options: {id: Theme; label: string; caption: string}[] = [
  { id: 'elite', label: 'A', caption: 'NEON EDITORIAL' },
  { id: 'cinema', label: 'B', caption: 'CINEMA POSTER' },
  { id: 'signal', label: 'C', caption: 'SWISS SIGNAL' },
];

const areas = [
  ['01', 'AI-АГЕНТЫ', 'Автономный мониторинг конкурентов, новостей и контента 24/7.'],
  ['02', 'ВАЙБКОДИНГ', 'Собственные сервисы и приложения без команды разработчиков.'],
  ['03', 'ВИЗУАЛ + ВИДЕО', 'Нейрофотосессии, карусели и ролики с цифровыми аватарами.'],
  ['04', 'МОНЕТИЗАЦИЯ', 'Оффер, коммерческое предложение и стратегия высокого чека.'],
];

const days = [
  ['01', 'Фундамент ИИ-элиты', 'Продвинутый промптинг, персональный агент в MyBotica, анализ рынка и автоматизация операционки.', 'ИИ-агент + маркетинговая система'],
  ['02', 'Визуал и вайбкодинг', 'Киношное AI-видео, цифровой аватар и собственный веб-сервис вместо дорогих подписок.', 'Креативы + ролик + веб-сервис'],
  ['03', 'Безопасность и деньги', 'Факапы, авторские права, упаковка ИИ-услуг и план выхода на высокий чек.', 'Защищённый проект + план продаж'],
];

function Hero({ theme }: { theme: Theme }) {
  if (theme === 'cinema') return (
    <section className="hero cinema-hero" id="top">
      <div className="cinema-orbit" aria-hidden="true"><span>3</span></div>
      <div className="hero-nav"><b>ИИ / ЭЛИТА</b><span>БЕСПЛАТНЫЙ ОНЛАЙН-КУРС · 3 ДНЯ</span><Menu/></div>
      <div className="cinema-title"><small>ПРАКТИКА ДЛЯ ТЕХ, КТО ХОЧЕТ БОЛЬШЕ</small><h1>БУДУЩЕЕ<br/>УЖЕ <em>ВАШЕ</em></h1></div>
      <div className="cinema-bottom"><p>Создайте свою систему из AI‑агентов, видео и веб‑сервисов — и превратите её в конкурентное преимущество.</p><a href="#register">ВОЙТИ БЕСПЛАТНО <ArrowRight/></a></div>
      <a className="scroll-cue" href="#about"><ArrowDown/></a>
    </section>
  );
  if (theme === 'signal') return (
    <section className="hero signal-hero" id="top">
      <div className="signal-nav"><b>NEURO / 03</b><div><span>ПРОГРАММА</span><span>РЕЗУЛЬТАТ</span><span>РЕГИСТРАЦИЯ</span></div></div>
      <div className="signal-grid">
        <div className="signal-index"><b>01—03</b><span>ONLINE<br/>INTENSIVE</span></div>
        <div className="signal-copy"><div className="tag">БЕСПЛАТНЫЙ ПРАКТИЧЕСКИЙ КУРС</div><h1>ИИ — ваш<br/><em>новый штат</em></h1><p>Три дня, чтобы перестать «пробовать нейросети» и начать собирать из них работающую систему для бизнеса.</p><a href="#register">ЗАБРАТЬ МЕСТО <ArrowRight/></a></div>
        <div className="signal-poster"><div className="poster-mark"><Sparkles/></div><span>TOP<br/>2%</span><p>AGENTS<br/>VISUAL<br/>CODE</p></div>
      </div>
      <div className="signal-ticker">9 РАБОТ В ПОРТФОЛИО <i/> ДО 80% РУТИНЫ — ИИ <i/> ИМЕННОЙ НЕЙРОПАСПОРТ</div>
    </section>
  );
  return (
    <section className="hero elite-hero" id="top">
      <div className="elite-grid" aria-hidden="true"/>
      <nav className="elite-nav"><a href="#top"><Sparkles/> <b>ИИ ЭЛИТА</b></a><div><a href="#program">ПРОГРАММА</a><a href="#register">РЕГИСТРАЦИЯ ↗</a></div></nav>
      <div className="elite-meta"><span>БЕСПЛАТНЫЙ<br/>ОНЛАЙН-КУРС</span><span>3 ДНЯ<br/>ТОЛЬКО ПРАКТИКА</span></div>
      <div className="elite-title"><div className="title-line"><span>И</span><span>И</span></div><h1>ЭЛИТА<sup>®</sup></h1><p>AI‑АГЕНТЫ / ВИЗУАЛ / ВАЙБКОДИНГ</p></div>
      <div className="elite-action"><p>Освойте технологии, о которых 98% рынка ещё не знают. Соберите рабочую AI‑систему и 9 проектов в портфолио.</p><a href="#register"><span>ЗАНЯТЬ МЕСТО</span><ArrowRight/></a></div>
      <div className="elite-stamp"><b>TOP<br/>2%</b><span>SKILL<br/>LEVEL</span></div>
    </section>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>('elite');
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setDone(true); };
  return <main className={`site theme-${theme}`}>
    <Hero theme={theme}/>

    <div className="concept-switch" aria-label="Выбор концепции">
      <div className="concept-label">3 КОНЦЕПЦИИ</div>
      {options.map(o => <button key={o.id} className={theme === o.id ? 'active' : ''} onClick={() => setTheme(o.id)}><b>{o.label}</b><span>{o.caption}</span></button>)}
    </div>

    <section className="manifest section-wrap" id="about"><div className="manifest-label">НЕ КУРС ПРО КНОПКИ</div><h2>Здесь не наблюдают<br/>за будущим.<br/><em>Его собирают.</em></h2><p>За три живых дня вы превратите нейросети из набора разрозненных инструментов в личную производственную систему.</p></section>

    <section className="areas section-wrap" aria-label="Практические направления">
      {areas.map(([n,title,text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ArrowRight/></article>)}
    </section>

    <section className="portfolio-band"><div className="section-wrap"><div className="portfolio-number">9</div><div><span>ГЛАВНАЯ ФИШКА</span><h2>Не сертификат участия.<br/><em>Портфель готовых работ.</em></h2><p>От автономного агента и нейрофотосессии до собственного веб-сервиса — всё создаёте прямо на эфирах.</p></div></div></section>

    <section className="program section-wrap" id="program"><header><span>ПРОГРАММА / 3 ДНЯ</span><h2>Сначала — навык.<br/>Сразу — <em>результат.</em></h2></header><div className="day-list">{days.map(([n,title,text,result]) => <article key={n}><b>{n}</b><div><h3>{title}</h3><p>{text}</p></div><aside><small>НА РУКАХ</small><span>{result}</span></aside></article>)}</div></section>

    <section className="passport section-wrap"><div className="passport-copy"><span>NEURO PASSPORT</span><h2>Навык, который<br/>получает <em>статус.</em></h2><p>Именной нейропаспорт от лицензированной образовательной школы подтверждает ваш продвинутый уровень и усиливает портфолио.</p><ul><li><Check/>9 практических работ</li><li><Check/>Официальный документ</li><li><Check/>Уровень advanced</li></ul></div><div className="passport-object"><div className="passport-top"><Sparkles/><b>NEURO<br/>PASSPORT</b><small>ADVANCED / 2026</small></div><h3>ВАШЕ<br/>ИМЯ</h3><div className="passport-bottom"><span>ID 003–TOP2</span><div><ShieldCheck/> VERIFIED</div></div></div></section>

    <section className="format section-wrap"><header><span>ВНУТРИ</span><h2>Всё нужное.<br/><em>Ничего лишнего.</em></h2></header><div className="format-cards"><article><Zap/><b>LIVE</b><h3>3 живых дня</h3><p>Демонстрации и кейсы в реальном времени.</p></article><article><Bot/><b>ACCESS</b><h3>MyBotica</h3><p>Премьерный доступ и приветственные токены.</p></article><article><Code2/><b>LIBRARY</b><h3>Промпты</h3><p>Проверенные формулы под рабочие задачи.</p></article><article><Film/><b>COMMUNITY</b><h3>Разборы</h3><p>Домашние задания, обратная связь и чат.</p></article></div></section>

    <section className="closing" id="register"><div className="closing-word">READY?</div><div className="closing-inner section-wrap"><div><span>БЕСПЛАТНАЯ РЕГИСТРАЦИЯ</span><h2>Ваше место<br/>в <em>ИИ-элите.</em></h2><p>Зарегистрируйтесь сейчас и получите бонус к старту курса.</p></div>{done ? <div className="success"><Check/><h3>Место за вами</h3><p>Подтверждение скоро придёт на почту.</p></div> : <form onSubmit={submit}><label>ИМЯ<input name="name" required placeholder="Как к вам обращаться"/></label><label>EMAIL<input name="email" type="email" required placeholder="you@example.com"/></label><button>ЗАНЯТЬ МЕСТО БЕСПЛАТНО <ArrowRight/></button><small>Нажимая кнопку, вы соглашаетесь на обработку данных.</small></form>}</div></section>

    <footer className="footer section-wrap"><b>ИИ ЭЛИТА</b><span>ДЛЯ БИЗНЕСА И ФРИЛАНСА</span><span>© 2026</span></footer>
  </main>;
}
