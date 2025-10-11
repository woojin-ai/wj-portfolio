import { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import ImageCarousel from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: 'MBTI 테스트 | 이우진 포트폴리오',
  description: 'AI 기반 MBTI 성격 유형 테스트 및 상세 분석 앱',
  openGraph: {
    title: 'MBTI 테스트 앱',
    description: 'AI가 분석하는 MBTI 성격 유형 및 커리어 추천',
    type: 'website',
  },
};

export default function MBTIPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MBTI 테스트',
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

  // 스크린샷 - 이미지 추가 시 여기에 경로 입력
  const screenshots: string[] = [
    // '/images/apps/mbti-1.jpg',
    // '/images/apps/mbti-2.jpg',
    // '/images/apps/mbti-3.jpg',
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
              <h1 className="text-4xl md:text-5xl font-bold">MBTI 테스트</h1>
              <Badge variant="success">개발 완료</Badge>
            </div>
            <p className="text-xl text-gray-600">
              AI 기반 MBTI 성격 유형 테스트 및 커리어 분석 앱
            </p>
          </div>

          {/* 앱 스크린샷 캐러셀 */}
          <div className="mb-12">
            <ImageCarousel images={screenshots} alt="MBTI 테스트 스크린샷" />
          </div>

          {/* 앱 설명 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">앱 설명</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>MBTI 테스트</strong> 앱은 Myers-Briggs Type Indicator 이론을 기반으로 
                16가지 성격 유형을 진단하고, AI가 개인화된 분석 및 커리어 추천을 제공합니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2">주요 기능</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>정식 MBTI 60문항 테스트</li>
                  <li>16가지 성격 유형 상세 분석</li>
                  <li>AI 기반 개인화 해석 및 조언</li>
                  <li>적합 직업 및 커리어 경로 추천</li>
                  <li>유형별 연애 스타일 및 궁합 분석</li>                  
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
                  <li><strong>Claude:</strong> 테스트 UI/UX 설계 및 결과 페이지 구현</li>
                  <li><strong>ChatGPT:</strong> MBTI 이론 데이터베이스 및 60문항 검증</li>                  
                </ul>
              </div>
              <div>                
              </div>
              <div>
                <h3 className="font-semibold mb-2">차별화 포인트</h3>
                <p className="text-sm text-gray-600">
                  💡 단순 유형 설명이 아닌, 사용자의 응답 패턴을 분석하여 
                  구체적이고 실용적인 조언을 제공합니다.
                </p>
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
              <Badge>Firebase (커뮤니티)</Badge>
              <Badge>AsyncStorage</Badge>
              <Badge>React Native Reanimated</Badge>
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
                  <p className="text-gray-600">앱 개발 및 AI 통합 완료, 베타 테스트 완료</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <h3 className="font-semibold">구글 플레이 등록 대기</h3>
                  <p className="text-gray-600">최종 빌드 준비 및 스토어 자산 제작 중</p>
                </div>
              </div>
              
            </div>
          </Card>

          {/* 다음 계획 */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">다음 계획</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>구글 플레이 스토어 출시 (2025년 상반기 목표)</li>
              <li>프리미엄 구독: 상세 커리어 로드맵 제공</li>
              <li>기업 채용 연동 (MBTI 기반 매칭)</li>
              <li>팀 빌딩 분석 도구 (B2B)</li>
              <li>AI 챗봇: MBTI 상담 서비스</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
