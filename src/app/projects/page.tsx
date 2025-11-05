import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - WJ',
  description: 'AI를 활용한 자동화 프로젝트: 비트코인 자동매매, 블로그 자동화, MBTI 테스트, 주식 트레이딩 봇',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: '비트코인 자동매매 봇',
      description: 'AI로 설계한 트레이딩 봇으로 24/7 자동 거래 운영. 백테스팅과 리스크 관리를 통한 안정적 수익 창출.',
      status: '운영중',
      link: '/projects/bitcoin-bot',
      badge: 'success',
      icon: '₿',
    },
    {
      title: '블로그 자동화 시스템',
      description: 'AI 콘텐츠 생성부터 SEO 최적화, 자동 배포까지. 월 60개 이상의 고품질 포스팅 자동 생성.',
      status: '운영중',
      link: '/projects/blog-automation',
      badge: 'success',
      icon: '📝',
    },
    {
      title: 'MBTI 성격유형 테스트',
      description: '16가지 성격 유형 분석 웹 애플리케이션. Next.js 기반 반응형 웹사이트로 실시간 테스트 가능.',
      status: '운영중',
      link: 'https://16personality-type-test.vercel.app/',
      badge: 'success',
      icon: '🧠',
      external: true,
    },
    {
      title: '주식 트레이딩 봇',
      description: 'AI 기반 주식 자동매매 시스템 개발 중. 시장 데이터 분석 및 자동 주문 실행.',
      status: '진행중',
      link: '/projects/stock-bot',
      badge: 'warning',
      icon: '📈',
    },
  ];

  return (
    <Section className="py-16">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <p className="mb-12 text-lg text-gray-600">
        AI를 활용하여 설계하고 운영하는 자동화 프로젝트들입니다.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title}>
            {project.external ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant={project.badge as 'success' | 'warning'}>
                      {project.status}
                    </Badge>
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="mt-4 text-sm font-medium text-sky-600 flex items-center gap-1">
                    웹사이트 방문하기 🔗
                  </p>
                </Card>
              </a>
            ) : (
              <Link href={project.link} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant={project.badge as 'success' | 'warning'}>
                      {project.status}
                    </Badge>
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="mt-4 text-sm font-medium text-sky-600">
                    자세히 보기 →
                  </p>
                </Card>
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
