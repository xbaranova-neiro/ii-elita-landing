'use client';

import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  Check,
  Clock3,
  Code2,
  Film,
  Fingerprint,
  Gift,
  Layers3,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const practice = [
  {
    icon: Code2,
    number: '01',
    title: 'Веб‑сервисы и приложения',
    text: 'Кастомные задачники, интерактивные сервисы и аналоги Trello, Canva и Duolingo без знания кода — через вайбкодинг.',
    tone: 'blue',
  },
  {
    icon: Bot,
    number: '02',
    title: 'Автономные ИИ‑агенты',
    text: 'Умные боты на MyBotica для анализа конкурентов, парсинга новостей и автоматической подготовки контента 24/7.',
    tone: 'cyan',
  },
  {
    icon: Film,
    number: '03',
    title: 'Продающий визуал и AI‑видео',
    text: 'Единые нейрофотосессии, карусели для соцсетей и сложные ролики с цифровыми аватарами без съёмочной группы.',
    tone: 'violet',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Маркетинговые стратегии',
    text: 'Глубинная аналитика ЦА, точные смыслы, коммерческие предложения и готовые контент‑планы под любую нишу.',
    tone: 'lime',
  },
];

const format = [
  { icon: Clock3, title: '3 живых практических дня', text: 'Реальные демонстрации, разборы кейсов и работа с передовыми нейросетями.', wide: true },
  { icon: Award, title: 'Домашние задания + разборы', text: 'Практические задания с проверкой и наработкой реального портфолио.' },
  { icon: Bot, title: 'Доступ к MyBotica', text: 'Авторская ИИ‑платформа и приветственные токены.' },
  { icon: Layers3, title: 'Библиотека промптов', text: 'Проверенные формулы и алгоритмы точных запросов.' },
  { icon: Users, title: 'Чат с участниками', text: 'Сообщество специалистов и предпринимателей для обмена опытом и заказами.' },
  { icon: ShieldCheck, title: 'Факапы и безопасность', text: 'Главные ошибки и юридические тонкости работы с ИИ.', accent: true },
];

const days = [
  {
    day: '01',
    title: 'Фундамент ИИ‑элиты, продвинутый промптинг и ИИ‑агенты',
    items: [
      'Экосистема передовых нейросетей и промпты уровня Top‑2% специалистов.',
      'Персональный ИИ‑агент в MyBotica: мониторинг конкурентов и сбор вирусных инфоповодов.',
      'Маркетинговый анализ, упаковка смыслов и продающие карусели для соцсетей.',
      'Интеграция ИИ в процессы и экономия до 80% времени на операционке.',
    ],
    result: 'Рабочее пространство, ИИ‑агент для аналитики рынка и маркетинговая система под ваш проект.',
  },
  {
    day: '02',
    title: 'Визуал, киношное AI‑видео и вайбкодинг',
    items: [
      'Сложносоставные ролики и цифровые аватары: сценарий, раскадровка, анимация и динамика.',
      'Собственные аналоги Trello, Canva и трекеров задач без программистов за 15 минут.',
      'Замена платных зарубежных сервисов собственными разработками.',
    ],
    result: 'Серия рекламных фото, ролик с аватаром и собственный рабочий веб‑сервис.',
  },
  {
    day: '03',
    title: 'Факапы, юридическая безопасность и монетизация',
    items: [
      '10 критических ошибок, из‑за которых сливают бюджеты и теряют охваты.',
      'Авторские права на ИИ‑контент, штрафы и правила использования в РФ.',
      'Высокий чек на ИИ‑услуги: коммерческие предложения и очередь из клиентов.',
      'Стратегия внедрения ИИ в бизнес на 2025–2026 годы.',
    ],
    result: 'Понимание юридических границ, защищённый проект и план выхода на высокий чек.',
  },
];

const outcomes = [
  ['НАВЫКИ ИИ‑ЭЛИТЫ', 'Вайбкодинг, автономные ИИ‑агенты на MyBotica и медиаконтент премиум‑уровня.'],
  ['СВОБОДНОЕ ВРЕМЯ', 'До 80% рутины можно делегировать умным нейропомощникам.'],
  ['ПОРТФЕЛЬ ПРОЕКТОВ', 'Своя база инструментов: от нейрофотосессий до веб‑приложений.'],
  ['ОФИЦИАЛЬНЫЙ НЕЙРОПАСПОРТ', 'Документ от школы с лицензией Минобрнауки РФ.'],
  ['ЭКОНОМИЯ И РОСТ ДОХОДА', 'Замена подписок своими разработками и план выхода на чек от 100 000 ₽.'],
];

function RegisterForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return <div className="form-success" role="status" aria-live="polite"><span><Check /></span><div><b>Место за вами</b><p>Приглашение скоро придёт на почту</p></div></div>;
  }

  return (
    <form onSubmit={submit}>
      <label><span>Ваше имя</span><Input name="name" autoComplete="name" required placeholder="Ксения" /></label>
      <label><span>Email</span><Input name="email" type="email" autoComplete="email" spellCheck={false} required placeholder="you@example.com" /></label>
      <Button type="submit">Занять место бесплатно <ArrowRight /></Button>
      <small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
    </form>
  );
}

export default function Home() {
  return (
    <main className="site">
      <div className="hero-stage" id="top">
        <header className="topbar shell">
          <a href="#top" className="logo" aria-label="15–17 сентября, начало в 19:00">
            <span className="date-mark"><em>15–17</em><i>СЕН · 19:00</i></span>
          </a>
          <div className="top-facts">
              <span><b>15–17 СЕНТЯБРЯ</b>каждый день в 19:00</span>
            <span><b>ONLINE</b>из любой точки</span>
            <a href="#register">Занять место <ArrowRight /></a>
          </div>
        </header>

        <section className="hero shell">
          <div className="hero-copy">
            <div className="pill"><span>NEW</span> ПРАКТИЧЕСКИЙ 3‑ДНЕВНЫЙ ОНЛАЙН‑КУРС</div>
            <h1>Погружение<br />в <em>ИИ‑элиту</em></h1>
            <p className="hero-subtitle">Контент, автоматизация и вайбкодинг — за 3 практических дня</p>
            <p className="hero-description"><strong>Освойте ИИ‑инструменты, которые уже дают преимущество.</strong><span>Соберите агента на MyBotica, создайте продающий визуал и собственный веб‑сервис — без кода.</span></p>
            <div className="hero-action">
              <a href="#register">Занять место бесплатно <ArrowRight /></a>
              <p><b>0 ₽</b><span>Участие<br />бесплатное</span></p>
            </div>
            <div className="hero-proof">
              <span><b>15–17.09</b><small>каждый день в 19:00</small></span>
              <span><b>9 работ</b><small>в вашем портфолио</small></span>
              <span><b>−80%</b><small>рутины с помощью ИИ</small></span>
            </div>
            <a className="gift-teaser" href="#gift"><Gift /><span><small>ПОДАРОК ЗА РЕГИСТРАЦИЮ</small><b>Персональный тест «Ваш ИИ‑архетип»</b></span><ArrowRight /></a>
          </div>

          <div className="hero-visual">
            <div className="visual-field"><b>AI</b><span>BUSINESS<br />CONTENT<br />CODE</span></div>
            <img className="hero-person-image" src="./ksenia-red.png" width="1751" height="2400" fetchPriority="high" alt="Ксения Баранова — автор курса" />
            <div className="author-tag"><small>АВТОР КУРСА</small><b>Ксения Баранова</b><span>16 лет в образовании<br />400 000+ учеников</span></div>
          </div>
        </section>
      </div>

      <section className="authority shell" aria-label="Достижения Ксении Барановой">
        <article><b>400 000+</b><span>учеников прошли<br />программы школы</span></article>
        <article><b>Госдума РФ</b><span>приглашённый эксперт<br />по искусственному интеллекту</span></article>
        <article><b>GetAward 2026</b><span>победитель в номинации<br />«Обучение года»</span></article>
        <article><b>Лицензия</b><span>образовательная школа<br />с официальной лицензией</span></article>
      </section>

      <section className="register shell" id="register">
        <div className="register-copy"><small>15–17 СЕНТЯБРЯ · 19:00 · УЧАСТИЕ БЕСПЛАТНОЕ</small><h2>Закрепите место<br />на онлайн‑курсе</h2><p>Сразу после регистрации пришлём приглашение, программу и подарок.</p></div>
        <RegisterForm />
      </section>

      <section className="section shell practice-section">
        <header className="section-heading">
          <div><small>ТОЛЬКО ПРАКТИКА</small><h2>Что будем<br /><em>изучать</em></h2></div>
          <p>Не наблюдать за чужими кейсами, а собирать работающие ИИ‑связки прямо во время эфиров.</p>
        </header>
        <div className="practice-grid">
          {practice.map(({ icon: Icon, number, title, text, tone }) => (
            <article className={`practice-card ${tone}`} key={title}>
              <div className="card-top"><span>{number}</span><div><Icon /></div></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="passport-band" id="passport">
        <div className="shell passport-wrap">
          <div className="passport-copy"><small>ОФИЦИАЛЬНОЕ ПОДТВЕРЖДЕНИЕ</small><h2>Именной<br /><em>нейропаспорт</em></h2><p>Документ от лицензированной образовательной школы для портфолио и подтверждения продвинутого уровня.</p></div>
          <div className="passport-card">
            <div className="passport-head"><Sparkles /><span>NEURO PASSPORT</span><small>ADVANCED · 2026</small></div>
            <div className="passport-portrait"><img src="./ksenia-red.png" alt="Пример фотографии в нейропаспорте" /></div>
            <div className="passport-identity"><small>ИМЕННОЙ ЦИФРОВОЙ ДОКУМЕНТ</small><strong>КСЕНИЯ<br />БАРАНОВА</strong><span>AI CREATOR · AGENT BUILDER</span></div>
            <div className="passport-holo"><span>AI</span></div>
            <div className="passport-serial">ID · KB 0009 / 2026</div>
            <div className="passport-foot"><span>9 ПРАКТИЧЕСКИХ РАБОТ</span><b><ShieldCheck /> VERIFIED</b></div>
          </div>
          <div className="portfolio-badge"><b>9</b><span>готовых работ<br />под реальные проекты</span></div>
        </div>
      </section>

      <section className="audience-section shell">
        <div className="audience-intro"><small>КОМУ ПОДОЙДЁТ</small><h2>Не «технарям».<br /><em>Тем, кто хочет больше.</em></h2><p>Вам не нужно уметь программировать. На курсе вы собираете ИИ‑систему под свою реальную работу и доход.</p></div>
        <div className="audience-grid">
          <article><span>01</span><h3>Экспертам</h3><p>Упаковать знания, ускорить контент и создать цифровой продукт.</p></article>
          <article><span>02</span><h3>Предпринимателям</h3><p>Автоматизировать процессы и заменить часть дорогих сервисов.</p></article>
          <article><span>03</span><h3>Маркетологам</h3><p>Делать стратегии, визуал и креативы быстрее и сильнее рынка.</p></article>
          <article><span>04</span><h3>Фрилансерам</h3><p>Расширить линейку услуг и выйти на более высокий чек.</p></article>
        </div>
      </section>

      <section className="section shell format-section">
        <header className="section-heading">
          <div><small>ФОРМАТ ОБУЧЕНИЯ</small><h2>Всё, чтобы<br /><em>дойти до результата</em></h2></div>
          <p>Короткий интенсивный формат, живая практика и поддержка без месяцев теории.</p>
        </header>
        <div className="format-grid">
          {format.map(({ icon: Icon, title, text, wide, accent }, index) => (
            <article key={title} className={`${wide ? 'wide' : ''} ${accent ? 'accent' : ''}`}>
              <Icon /><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="program-section" id="program">
        <div className="shell">
          <header className="section-heading inverse">
            <div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Три дня.<br /><em>Три уровня силы.</em></h2></div>
            <p>От продвинутого промптинга до своей производственной системы и модели монетизации.</p>
          </header>
          <div className="day-list">
            {days.map((day) => (
              <article className="day-card" key={day.day}>
                <div className="day-number"><small>ДЕНЬ</small><b>{day.day}</b></div>
                <div className="day-copy"><h3>{day.title}</h3><ul>{day.items.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
                <div className="day-result"><small>РЕЗУЛЬТАТ</small><p>{day.result}</p></div>
              </article>
            ))}
          </div>
          <a href="#register" className="program-cta">Занять место на курсе <ArrowRight /></a>
        </div>
      </section>

      <section className="practice-manifesto">
        <div className="shell manifesto-wrap">
          <div className="manifesto-number">9</div>
          <div><small>ГЛАВНАЯ ФИШКА КУРСА</small><h2>Практика и готовые<br /><em>изделия на руках</em></h2><p>Вы научитесь собирать автономных ИИ‑агентов на MyBotica, генерировать киношный визуал и запускать веб‑сервисы через вайбкодинг прямо во время эфиров.</p></div>
        </div>
      </section>

      <section className="section shell results-section">
        <header className="section-heading">
          <div><small>ВАШЕ ПОРТФОЛИО</small><h2>Не конспекты.<br /><em>Готовые продукты.</em></h2></div>
          <p>Уже во время курса вы собираете девять работ, которые можно применять в бизнесе, показывать клиентам и продавать.</p>
        </header>
        <div className="portfolio-preview">
          <article className="portfolio-agent">
            <div className="artifact-head"><span>01</span><b>MYBOTICA · AI AGENT</b></div>
            <Bot />
            <h3>Автономный ИИ‑агент<br />на MyBotica</h3>
            <p>Созданный на платформе MyBotica агент мониторит рынок, собирает инфоповоды и готовит материалы 24/7 — без программирования.</p>
            <div className="agent-actions">
              <div className="agent-status"><i /> Система активна</div>
              <a className="mybotica-link" href="https://mybotica.pro/" target="_blank" rel="noreferrer">Познакомиться с MyBotica <ArrowRight /></a>
            </div>
          </article>
          <article className="portfolio-media">
            <div className="artifact-head"><span>02</span><b>AI MEDIA · ГОТОВЫЕ РАБОТЫ</b></div>
            <div className="video-showcase">
              <figure><video controls playsInline preload="metadata" poster="./ai-video-01-poster.jpg"><source src="./ai-video-01.mp4" type="video/mp4" /></video><figcaption>AI STORY · 00:13</figcaption></figure>
              <figure><video controls playsInline preload="metadata" poster="./ai-video-02-poster.jpg"><source src="./ai-video-02.mp4" type="video/mp4" /></video><figcaption>DIGITAL AVATAR · 00:30</figcaption></figure>
            </div>
            <h3>AI‑видео: от идеи до готового ролика</h3><p>Сценарий, визуальный стиль, генерация сцен, цифровые аватары и финальный монтаж — без съёмочной группы.</p>
          </article>
          <article className="portfolio-app"><div className="artifact-head"><span>03</span><b>VIBE CODE</b></div><div className="app-window"><i /><i /><i /><span>Ваш веб‑сервис</span></div><Code2 /><h3>Собственное приложение</h3><p>Рабочий сервис под вашу задачу — собранный через промпты без программиста.</p></article>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="shell outcomes-wrap">
          <div className="outcomes-title"><small>ВСЕГО ЗА 3 ДНЯ</small><h2>Что останется<br /><em>у вас</em></h2></div>
          <div className="outcomes-list">
            {outcomes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="gift-section" id="gift">
        <div className="shell gift-wrap">
          <div className="gift-copy">
            <div className="gift-kicker"><Gift /> Подарок за регистрацию <b>0 ₽</b></div>
            <h2>Ваш персональный<br /><em>ИИ‑профиль</em></h2>
            <p className="gift-lead">Пройдите авторский ИИ‑тест и получите персональную карту роста — не абстрактный результат, а понятный маршрут к деньгам и свободному времени.</p>
            <div className="gift-benefits">
              <article><Fingerprint /><div><h3>Ваш ИИ‑архетип</h3><p>Узнаете уникальный тип, скрытые суперсилы и свой естественный стиль работы с ИИ.</p></div></article>
              <article><BrainCircuit /><div><h3>Персональный стек нейросетей</h3><p>От Midjourney до Cursor и Claude — инструменты, которые дадут именно вам максимальный буст в доходе.</p></div></article>
              <article><Workflow /><div><h3>Приоритет для делегирования</h3><p>Поймёте, что именно нужно передать ИИ в первую очередь, чтобы быстрее освободить время и вырасти.</p></div></article>
            </div>
            <a href="#register">Получить ИИ‑тест бесплатно <ArrowRight /></a>
          </div>

          <div className="result-photo" aria-label="Пример результата теста: архетип Креатор-Визионер">
            <div className="result-browser-bar"><i /><i /><i /><span>Ваш персональный результат</span></div>
            <div className="result-report">
              <div className="result-report-head">
                <span>AI ARCHETYPE REPORT</span>
                <b>02 / 04</b>
              </div>
              <div className="result-emblem"><Sparkles /><small>ВАШ ИИ‑АРХЕТИП</small></div>
              <h3>Креатор‑<br /><em>Визионер</em></h3>
              <p className="result-intro">Вы мыслите образами, эмоциями и визуалом. Ваша сила — зацепить внимание с первых секунд.</p>
              <div className="result-strength"><small>ВАША СУПЕРСИЛА</small><strong>Креативность<br />и чувство стиля</strong></div>
              <div className="result-details">
                <article><small>ИДЕАЛЬНЫЙ СТЕК</small><div className="result-chips"><span>Midjourney</span><span>Flux</span><span>Kling AI</span><span>Runway</span></div></article>
                <article><small>ДЕЛЕГИРОВАТЬ СНАЧАЛА</small><p>Фотосессии, монтаж, цифровые аватары и рекламные креативы.</p></article>
              </div>
              <div className="result-stamp"><Check /><span>ПЕРСОНАЛЬНЫЙ<br />МАРШРУТ ГОТОВ</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <a href="#top" className="footer-name">Ксения Баранова</a>
            <strong>Школа ИИ‑технологий</strong>
            <p>Практический трёхдневный онлайн‑курс по ИИ: контент, автономные агенты, автоматизация и собственные веб‑сервисы без кода.</p>
            <a className="footer-email" href="mailto:hello@xeniabaranova-school.ru">hello@xeniabaranova-school.ru</a>
          </div>

          <div className="footer-action">
            <small>ЗАНЯТЬ МЕСТО НА ОНЛАЙН‑КУРСЕ</small>
            <h3>Войдите в ИИ‑элиту<br />за три практических дня</h3>
            <a href="#register">Занять место бесплатно <ArrowRight /></a>
            <nav>
              <a href="https://xeniabaranova-school.ru/politica" target="_blank" rel="noreferrer">Политика обработки данных</a>
              <a href="https://xeniabaranova-school.ru/oferta_vibe-code" target="_blank" rel="noreferrer">Публичная оферта</a>
            </nav>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>© 2026 Ксения Баранова. Все права защищены.</p>
          <p>ИП Баранова Ксения Николаевна · ИНН 027402381827 · ОГРНИП 317028000116318</p>
          <p>Лицензия № Л035‑01198‑02/00172850 · Министерство образования и науки</p>
        </div>
      </footer>
    </main>
  );
}
