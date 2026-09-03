import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['cyrillic', 'latin'] });
const space = Space_Grotesk({ variable: '--font-space', subsets: ['latin'] });

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
  return <html lang="ru"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>;
}
