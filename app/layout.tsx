import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['cyrillic', 'latin'] });
const space = Space_Grotesk({ variable: '--font-space', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ИИ Элита — практический онлайн-курс',
  description: 'Три дня практики: ИИ-агенты, AI-видео, вайбкодинг и готовое портфолио.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>;
}
