import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WJ - AI 플래너 & 개발자',
  description: 'AI로 효율과 수익을 설계하는 플래너. AI-어시스트 개발로 자동화·콘텐츠 운영을 시스템화합니다.',
  verification: {
    google: '_YX3kbSeZq2clAsi9usIngHj7Q_4ScH4ywFCIpREnvQ',
  },
  openGraph: {
    title: 'WJ - AI 플래너 & 개발자',
    description: 'AI로 효율과 수익을 설계하는 플래너. AI-어시스트 개발로 자동화·콘텐츠 운영을 시스템화합니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
