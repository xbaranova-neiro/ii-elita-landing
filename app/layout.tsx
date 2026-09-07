import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ii-elita-lab.karina-komyak.chatgpt.site'),
  title: 'Погружение в ИИ-элиту — курс Ксении Барановой',
  description: 'Бесплатный трёхдневный практический курс Ксении Барановой: AI-агенты, видео, вайбкодинг и готовое портфолио.',
  openGraph: {
    title: 'Погружение в ИИ-элиту — Ксения Баранова',
    description: 'AI-агенты, видео, вайбкодинг и готовое портфолио.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ИИ Элита' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Погружение в ИИ-элиту — Ксения Баранова',
    description: 'AI-агенты, видео, вайбкодинг и готовое портфолио.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><head><link rel="preload" href="/fonts/montserrat-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><link rel="preload" href="/fonts/manrope-cyrillic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
