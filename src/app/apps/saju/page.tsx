import { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import ImageCarousel from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: '사주 풀이 | 이우진 포트폴리오',
  description: 'AI 기반 사주팔자 분석 및 해석 앱',
  openGraph: {
    title: '사주 풀이 앱',
    description: 'AI가 분석하는 사주팔자 및 운세 정보',
    type: 'website',
  },
};

export default function SajuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '사주 풀이',
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
    // '/images/apps/saju-1.jpg',
    // '/images/apps/saju-2.jpg',
    // '/images/apps/saju-3.jpg',
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
              <h1 className="text-4xl md:text-5xl font-bold">사주 풀이</h1>
              <Badge variant="success">개발 완료</Badge>
            </div>
            <p className="text-xl text-gray-600">
              AI 기반 사주팔자 분석 및 운세 해석 앱
            </p>
          </div>

          {/* 앱 스크린샷 캐러셀 */}
          <div className="mb-12">
            <ImageCarousel images={screenshots} alt="사주 풀이 스크린샷" />
          </div>

          {/* 앱 설명 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">앱 설명</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>사주 풀이</strong> 앱은 생년월일시를 기반으로 사주팔자를 계산하고,
                AI가 오행(五行) 이론과 명리학 원리를 적용하여 종합적인 운세를 분석합니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2">주요 기능</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>사주팔자 자동 계산 (년/월/일/시주)</li>
                  <li>오행 분석 및 상생상극 관계 시각화</li>
                  <li>AI 기반 종합 운세 해석</li>
                  <li>연애운, 재물운, 직업운, 건강운 분석</li>
                  <li>대운(大運) 및 년운(年運) 조회</li>
                  <li>궁합 분석 (커플 기능)</li>
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
                  <li><strong>Claude:</strong> 만세력 계산 알고리즘 구현 및 UI 설계</li>
                  <li><strong>ChatGPT:</strong> 명리학 이론 데이터베이스 구축</li>
                  <li><strong>Gemini:</strong> 오행 시각화 및 상생상극 관계 로직</li>
                </ul>
              </div>              
              <div>
                <h3 className="font-semibold mb-2">정확도 검증</h3>
                <p className="text-sm text-gray-600">
                  💡 만세력 알고리즘은 한국천문연구원 자료를 기반입니다.
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
              <Badge>Lunar Calendar Library</Badge>
              <Badge>AsyncStorage</Badge>
              <Badge>Victory (차트)</Badge>
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
                  <p className="text-gray-600">앱 개발 완료, 사주팔자 계산 정확도 테스트 완료</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <h3 className="font-semibold">구글 플레이 등록 대기</h3>
                  <p className="text-gray-600">콘텐츠 가이드라인 검토 중 (점술 카테고리)</p>
                </div>
              </div>              
            </div>
          </Card>

          {/* 다음 계획 */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">다음 계획</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>구글 플레이 스토어 출시</li>
              <li>프리미엄 구독: 무제한 해석 + 상세 대운 분석</li>
              <li>궁합 커뮤니티 기능</li>
              <li>전문가 상담 예약 연동</li>
              <li>위젯 지원 (오늘의 운세)</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
