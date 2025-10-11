import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI로 효율과 수익을 설계하는 플래너',
  description: 'AI-어시스트 개발로 자동화·콘텐츠 운영을 시스템화합니다. 비트코인 자동매매, 블로그 자동화, 쇼핑채널 운영, 모바일 앱 개발.',
};

export default function Home() {
  const highlights = [
    {
      title: '비트코인 자동매매',
      description: 'AI로 설계한 트레이딩 봇으로 24/7 자동 거래 운영',
      link: '/projects/bitcoin-bot',
    },
    {
      title: '블로그 자동화',
      description: 'AI 콘텐츠 생성부터 배포까지 완전 자동화 시스템',
      link: '/projects/blog-automation',
    },
    {
      title: '쇼핑채널 2개 운영',
      description: 'AI 대본·썸네일·TTS로 채널 운영',
      link: '/channels',
    },
    {
      title: '모바일 앱 4종',
      description: '2048, 타로, 사주, MBTI - 개발 완료·배포 대기',
      link: '/apps',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          AI로 효율과 수익을 설계하는
          <br />
          <span className="text-primary">플래너</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
          AI-어시스트 개발로 자동화·콘텐츠 운영을 시스템화합니다.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            Projects 보기
          </Link>
          <Link
            href="/sponsor"
            className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-transform hover:scale-105"
          >
            Sponsor
          </Link>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-gray-50 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">주요 프로젝트</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Link key={item.title} href={item.link}>
              <Card>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <p className="mt-4 text-sm font-medium text-primary">
                  자세히 보기 →
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'WJ',
            jobTitle: 'AI 플래너 & 개발자',
            description: 'AI로 효율과 수익을 설계하는 플래너',
            knowsAbout: ['AI Development', 'Automation', 'Content Creation', 'Trading Bots'],
          }),
        }}
      />
    </>
  );
}
