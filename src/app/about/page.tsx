import Section from '@/components/Section';
import Card from '@/components/Card';
import Pill from '@/components/Pill';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - WJ',
  description: 'AI가 생성한 코드를 설계·검증·운영하는 AI 플래너입니다.',
};

export default function AboutPage() {
  const tools = [
    'Claude',
    'ChatGPT',
    'Gemini',
    'GitHub',
    'Vercel',
    'PM2',
    'Playwright',
    'Puppeteer',
    'GA4',
    'Google Search Console',
  ];

  return (
    <>
      <Section className="py-16">
        <h1 className="mb-8 text-4xl font-bold">About Me</h1>
        
        <Card className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">역할 정의</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            저는 <strong>AI가 생성한 코드를 설계·검증·운영</strong>하는 플래너입니다.
            <br />
            직접 코드를 작성하기보다는, AI 도구를 활용하여 자동화 시스템을 기획하고 
            실제로 작동하는지 검증한 뒤, 안정적으로 운영합니다.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">주요 활용 도구</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Pill key={tool}>{tool}</Pill>
            ))}
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">핵심 역량</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-lg font-bold text-primary">설계</h3>
              <p className="text-gray-600">
                AI를 활용한 자동화 시스템 아키텍처 기획 및 설계
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-primary">검증</h3>
              <p className="text-gray-600">
                생성된 코드의 정확성과 안정성 테스트 및 검증
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-primary">운영</h3>
              <p className="text-gray-600">
                24/7 자동화 시스템 모니터링 및 최적화 운영
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-2xl font-bold">경력 사항</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">기본 정보</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 수원대학교 물리학과 졸업 (2010.03 ~ 2017.02)</li>
                <li>• 숭실대학교 정보과학대학원 인공지능학과 재학중 (2024.09 ~)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">G사 (2017.02 ~ 2019.03)</h3>
              <p className="text-sm text-gray-500 mb-2">방송 영상 음향 통합 솔루션 컨설팅회사</p>
              <ul className="space-y-1 text-gray-700">
                <li>• <strong>디즈니 채널, 주니어 채널 편성 검수 및 송출 담당</strong></li>
                <li>• 1분 1초 1프레임 단위 정확한 편성표 검수 및 실시간 송출 관리</li>
                <li>• 방송사고 방지를 위한 사전 점검 및 실시간 모니터링</li>
                <li>• 소재 입출고 관리 및 아카이브 체계 운영</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">C사 (2019.06 ~ 2023.10)</h3>
              <p className="text-sm text-gray-500 mb-2">방송/OTT 콘텐츠 제작 및 유통 기업 / IT전략기획, PI팀 팀원</p>
              <ul className="space-y-1 text-gray-700">
                <li>• <strong>IT 시스템 운영 기획 담당</strong></li>
                <li>• 콘텐츠 관리 시스템(CMS) 기획 및 고도화 프로젝트 수행</li>
                <li>• 현업부서들의 요구사항 수집/반영, 화면설계 기획</li>
                <li>• AI 기반 자막 생성, 인물 인식, 방송심의 분석 등 생성형 AI 기술 도입 검토 및 적용</li>
                <li>• IT 프로젝트 예산 수립 및 집행 관리 (총 78억 규모 프로젝트)</li>
                <li>• 4년간 매년 20% 이상 사용자 증가 달성</li>
              </ul>
            </div>
            
            
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">자격증</h2>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-primary mb-1">AI-POT 1급</h3>
                <p className="text-sm text-gray-600">AI 프롬프트 활용능력</p>
                <p className="text-xs text-gray-500 mt-1">KPC한국생산성본부 | 2025.08</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-primary mb-1">AI-POT 2급</h3>
                <p className="text-sm text-gray-600">AI 프롬프트 활용능력</p>
                <p className="text-xs text-gray-500 mt-1">KPC한국생산성본부 | 2025.02</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-primary mb-1">AIDE 1급</h3>
                <p className="text-sm text-gray-600"></p>
                <p className="text-xs text-gray-500 mt-1">한국인공지능자격센터 | 2024.04</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-primary mb-1">AIDE 2급</h3>
                <p className="text-sm text-gray-600"></p>
                <p className="text-xs text-gray-500 mt-1">한국인공지능자격센터 | 2024.03</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-primary mb-1">컴퓨터활용능력 2급</h3>
                <p className="text-sm text-gray-600"></p>
                <p className="text-xs text-gray-500 mt-1">고용노동부 | 2015.09</p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'WJ',
            jobTitle: 'AI 플래너',
            knowsAbout: ['AI Development', 'Automation', 'System Design', 'Trading Bots'],
            description: 'AI가 생성한 코드를 설계·검증·운영하는 플래너',
          }),
        }}
      />
    </>
  );
}
