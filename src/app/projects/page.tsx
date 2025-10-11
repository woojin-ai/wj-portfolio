import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - 이우진',
  description: 'AI를 활용한 자동화 프로젝트: 비트코인 자동매매, 블로그 자동화, 주식 트레이딩 봇',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: '비트코인 자동매매 봇',
      description: 'AI로 설계한 트레이딩 봇으로 24/7 자동 거래 운영. 백테스팅과 리스크 관리를 통한 안정적 수익 창출.',
      status: '운영중',
      link: '/projects/bitcoin-bot',
      badge: 'success',
    },
    {
      title: '블로그 자동화 시스템',
      description: 'AI 콘텐츠 생성부터 SEO 최적화, 자동 배포까지. 월 60개 이상의 고품질 포스팅 자동 생성.',
      status: '운영중',
      link: '/projects/blog-automation',
      badge: 'success',
    },
    {
      title: '주식 트레이딩 봇',
      description: 'AI 기반 주식 자동매매 시스템 개발 중. 시장 데이터 분석 및 자동 주문 실행.',
      status: '진행중',
      link: '/projects/stock-bot',
      badge: 'warning',
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
          <Link key={project.title} href={project.link}>
            <Card>
              <div className="mb-3">
                <Badge variant={project.badge as 'success' | 'warning'}>
                  {project.status}
                </Badge>
              </div>
              <h2 className="mb-3 text-xl font-bold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-primary">
                자세히 보기 →
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
