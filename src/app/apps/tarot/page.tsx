import { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import ImageCarousel from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: '타로 카드 | 이우진 포트폴리오',
  description: 'AI 기반 타로 카드 리딩 앱 - 메이저/마이너 아르카나 78장 지원',
  openGraph: {
    title: '타로 카드 앱',
    description: 'AI 기반 타로 카드 리딩 및 해석 서비스',
    type: 'website',
  },
};

export default function TarotPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '타로 카드',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    author: {
      '@type': 'Person',
      name: '이우진',
    },
  };

  const screenshots = [
    '/images/apps/tarot-1.jpg',
    '/images/apps/tarot-2.jpg',
    '/images/apps/tarot-3.jpg',
    '/images/apps/tarot-4.jpg',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">타로 카드</h1>
              <Badge variant="success">개발 완료</Badge>
            </div>
            <p className="text-xl text-gray-600">
              AI 기반 타로 카드 리딩 및 해석 앱
            </p>
          </div>

          {/* 앱 스크린샷 캐러셀 */}
          <div className="mb-12">
            <ImageCarousel images={screenshots} alt="타로 카드 스크린샷" />
          </div>

          {/* 앱 설명 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">앱 설명</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>타로 카드</strong> 앱은 78장의 메이저/마이너 아르카나를 활용한 
                타로 리딩 서비스를 제공합니다. AI 기반 해석으로 개인화된 인사이트를 제공하며,
                다양한 스프레드 방식을 지원합니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2">주요 기능</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>78장 타로 카드 전체 지원 (메이저 22장 + 마이너 56장)</li>
                  <li>다양한 스프레드: 원 카드, 쓰리 카드, 켈틱 크로스 등</li>
                  <li>AI 기반 개인화 해석 (GPT-4 활용)</li>
                  <li>리딩 히스토리 저장 및 관리</li>
                  <li>매일 운세 카드 (Daily Draw)</li>
                  <li>카드별 상세 정보 및 이미지</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* AI 활용 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI 활용</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">개발 프로세스</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Claude:</strong> 앱 UI/UX 설계 및 카드 셔플 알고리즘 구현</li>
                  <li><strong>ChatGPT:</strong> 타로 카드 데이터베이스 구축 (78장 설명)</li>                  
                </ul>
              </div>              
            </div>
          </Card>

          {/* 기술 스택 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>React Native</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Expo</Badge>
              <Badge>OpenAI API (GPT-4)</Badge>
              <Badge>AsyncStorage</Badge>
              <Badge>React Native Reanimated</Badge>
              <Badge>Lottie (애니메이션)</Badge>
            </div>
          </Card>

          {/* 운영 환경 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">운영 환경 및 상태</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold">개발 완료</h3>
                  <p className="text-gray-600">앱 개발 및 AI 통합 완료, 베타 테스트 진행 중</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <h3 className="font-semibold">구글 플레이 등록 대기</h3>
                  <p className="text-gray-600">AI 기능 정책 검토 및 개인정보 처리방침 준비 중</p>
                </div>
              </div>             
            </div>
          </Card>

          {/* 다음 계획 */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">다음 계획</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>구글 플레이 스토어 출시 및 마케팅</li>
              <li>무료 리딩 (광고) + 프리미엄 구독 모델</li>
              <li>커뮤니티 기능 (리딩 공유)</li>
              <li>오프라인 모드 (기본 해석)</li>
              <li>다국어 지원 (영어, 일본어)</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
