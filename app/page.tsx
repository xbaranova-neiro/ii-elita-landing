'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Award, Bot, Check, Clock3, Code2, Film, ShieldCheck, Sparkles, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const practice = [
  { icon: Bot, title: 'Автономный AI‑агент', text: 'Для мониторинга конкурентов, новостей и поиска сильных инфоповодов.' },
  { icon: Film, title: 'Фото и AI‑видео', text: 'Единая нейрофотосессия, продающая карусель и ролик с цифровым аватаром.' },
  { icon: Code2, title: 'Собственный веб‑сервис', text: 'Рабочий инструмент без программистов и дорогих зарубежных подписок.' },
  { icon: Zap, title: 'Маркетинговая система', text: 'Аналитика аудитории, оффер, контент‑план и коммерческое предложение.' },
];

const days = [
  { n: '01', title: 'ИИ‑агенты и промптинг', text: 'Передовые нейросети, промпты уровня Top‑2%, персональный агент в MyBotica и автоматизация операционки.', result: 'Агент + система аналитики' },
  { n: '02', title: 'Визуал и вайбкодинг', text: 'Киношное AI‑видео, цифровые аватары и сборка собственного веб‑приложения за считанные минуты.', result: 'Креативы + видео + сервис' },
  { n: '03', title: 'Безопасность и деньги', text: 'Главные факапы, авторские права, упаковка ИИ‑услуг и стратегия выхода на высокий чек.', result: 'Защищённый проект + план продаж' },
];

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); };

  return <main className="site">
    <header className="topbar shell">
      <a href="#top" className="logo"><span><Sparkles/></span><b>ШКОЛА НЕЙРОСЕТЕЙ</b><small>КСЕНИИ БАРАНОВОЙ</small></a>
      <div className="top-facts"><span><b>3 ДНЯ</b>живой практики</span><span><b>ONLINE</b>из любой точки</span><a href="#register">Занять место</a></div>
    </header>

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="pill">БЕСПЛАТНЫЙ ПРАКТИЧЕСКИЙ ОНЛАЙН-КУРС</div>
        <h1>Погружение<br/>в <em>ИИ‑элиту</em></h1>
        <p>Создание контента, автоматизация и вайбкодинг для бизнеса и фриланса</p>
        <div className="hero-points"><span><Check/>AI‑агенты 24/7</span><span><Check/>9 работ в портфолио</span><span><Check/>Именной нейропаспорт</span></div>
      </div>

      <div className="hero-person">
        <div className="hero-halo"/>
        <img src="/ksenia.png" alt="Ксения Баранова — автор курса"/>
        <div className="author-card"><small>АВТОР КУРСА</small><b>Ксения<br/>Баранова</b><span>16 лет в бизнесе · 9000+ выпускников</span></div>
        <div className="float-card card-agents"><span>01</span><b>AI‑агенты</b><small>вместо рутины</small></div>
        <div className="float-card card-code"><span>02</span><b>Вайбкодинг</b><small>без программистов</small></div>
        <div className="ai-logo logo-openai"><img src="/openai.svg" alt="OpenAI"/></div>
        <div className="ai-logo logo-claude"><img src="/anthropic.svg" alt="Anthropic Claude"/></div>
        <div className="ai-logo logo-gemini"><img src="/gemini.svg" alt="Google Gemini"/></div>
      </div>
    </section>

    <section className="lead-card shell" id="register">
      <div><small>СТАРТ БЕСПЛАТНО</small><h2>Заберите место<br/>и подарок за регистрацию</h2><p>Пришлём программу и все детали курса на почту.</p></div>
      {sent ? <div className="form-success"><span><Check/></span><div><b>Место за вами</b><p>Письмо скоро придёт на почту</p></div></div> : <form onSubmit={submit}><label><span>Ваше имя</span><Input name="name" required placeholder="Ксения"/></label><label><span>Email</span><Input name="email" type="email" required placeholder="you@example.com"/></label><Button type="submit">Занять место бесплатно <ArrowRight/></Button><small>Нажимая кнопку, вы соглашаетесь на обработку данных.</small></form>}
    </section>

    <section className="section shell" id="results">
      <header className="section-title"><div><small>РЕЗУЛЬТАТ ЗА 3 ДНЯ</small><h2>Не просто посмотрите.<br/><em>Соберёте своими руками.</em></h2></div><p>Каждый модуль заканчивается готовым результатом, который можно добавить в портфолио или сразу внедрить в бизнес.</p></header>
      <div className="practice-grid">{practice.map(({icon: Icon,title,text},i)=><article key={title}><span>0{i+1}</span><div className="practice-icon"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="numbers"><div className="shell numbers-grid"><div><b>9</b><span>ГОТОВЫХ РАБОТ<br/>В ПОРТФОЛИО</span></div><div><b>80<small>%</small></b><span>РУТИНЫ МОЖНО<br/>ПЕРЕДАТЬ ИИ</span></div><div><b>24<small>/7</small></b><span>РАБОТАЮТ ВАШИ<br/>AI‑АГЕНТЫ</span></div></div></section>

    <section className="section program shell" id="program">
      <header className="section-title"><div><small>ПРОГРАММА</small><h2>Три дня —<br/><em>три больших шага.</em></h2></div><p>От точного запроса нейросети до своей производственной системы и понятной модели монетизации.</p></header>
      <div className="day-grid">{days.map((day,i)=><article key={day.n} className={i===1?'featured':''}><div className="day-top"><span>ДЕНЬ</span><b>{day.n}</b></div><h3>{day.title}</h3><p>{day.text}</p><div className="day-result"><small>НА РУКАХ</small><b>{day.result}</b></div></article>)}</div>
    </section>

    <section className="why shell">
      <div className="why-title"><small>ПОЧЕМУ ВЫ ДОЙДЁТЕ</small><h2>Всё устроено<br/>для <em>результата</em></h2><p>Короткий интенсивный формат, практика и поддержка — без месяцев теории.</p></div>
      <div className="why-grid"><article className="wide"><Clock3/><h3>Живые занятия</h3><p>Реальные демонстрации, вопросы и разборы кейсов прямо на эфире.</p></article><article><Users/><h3>Чат участников</h3><p>Обмен опытом, контактами и заказами.</p></article><article><ShieldCheck/><h3>Проверка заданий</h3><p>Обратная связь по практическим работам.</p></article><article className="accent"><Sparkles/><h3>Премьерный доступ</h3><p>MyBotica и приветственные токены для практики.</p></article><article><Award/><h3>Библиотека промптов</h3><p>Готовые формулы запросов под рабочие задачи.</p></article></div>
    </section>

    <section className="passport-section"><div className="shell passport-wrap"><div className="passport-copy"><small>NEURO PASSPORT</small><h2>Навык получает<br/><em>официальный статус</em></h2><p>По итогам курса вы получите именной нейропаспорт от лицензированной образовательной школы — документ для портфолио, подтверждающий продвинутый уровень.</p><ul><li><Check/>Именной документ</li><li><Check/>9 подтверждённых работ</li><li><Check/>Статус AI‑специалиста</li></ul></div><div className="passport-card"><div className="pass-head"><Sparkles/><b>NEURO<br/>PASSPORT</b><span>ADVANCED · 2026</span></div><h3>ВАШЕ<br/>ИМЯ</h3><div className="pass-foot"><span>ID · TOP 2%</span><b><ShieldCheck/> VERIFIED</b></div></div></div></section>

    <section className="expert shell"><div className="expert-photo"><div className="expert-blob"/><img src="/ksenia.png" alt="Ксения Баранова"/></div><div className="expert-copy"><small>АВТОР И ВЕДУЩАЯ КУРСА</small><h2>Ксения<br/><em>Баранова</em></h2><p>Основатель Школы SMM и нейросетей. Помогает превращать новые технологии в понятные рабочие инструменты для бизнеса, экспертов и фрилансеров.</p><div className="expert-facts"><span><b>16 лет</b>в бизнесе</span><span><b>21 курс</b>создано</span><span><b>9000+</b>выпускников</span></div></div></section>

    <section className="final-cta" id="final-register"><div className="shell final-wrap"><div><small>БЕСПЛАТНЫЙ СТАРТ</small><h2>Займите место<br/>в <em>ИИ‑элите</em></h2><p>Три дня, после которых у вас останется не только понимание, но и готовая система AI‑инструментов.</p></div><a href="#register">Зарегистрироваться бесплатно <ArrowRight/></a></div></section>

    <footer className="footer shell"><a href="#top" className="logo"><span><Sparkles/></span><b>ШКОЛА НЕЙРОСЕТЕЙ</b><small>КСЕНИИ БАРАНОВОЙ</small></a><p>Практический курс для бизнеса и фриланса</p><span>© 2026</span></footer>
  </main>;
}
