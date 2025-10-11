import { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import ImageCarousel from '@/components/ImageCarousel';

export const metadata: Metadata = {
  title: '2048 게임 | 이우진 포트폴리오',
  description: 'AI 어시스턴트와 함께 개발한 클래식 2048 퍼즐 게임 앱',
  openGraph: {
    title: '2048 게임 앱',
    description: 'AI 어시스턴트와 함께 개발한 클래식 2048 퍼즐 게임',
    type: 'website',
  },
};

export default function Game2048Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '2048 게임',
    applicationCategory: 'GameApplication',
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

  // 스크린샷 이미지 경로 - 실제 존재하는 파일만
  const screenshots = [
    '/images/apps/2048-1.jpg',
    '/images/apps/2048-2.jpg',
    '/images/apps/2048-3.jpg',
    '/images/apps/2048-4.jpg',
    '/images/apps/2048-6.jpg',
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
              <h1 className="text-4xl md:text-5xl font-bold">2048 게임</h1>
              <Badge variant="success">개발 완료</Badge>
            </div>
            <p className="text-xl text-gray-600">
              클래식 2048 퍼즐 게임 - AI 어시스턴트 협업 개발
            </p>
          </div>

          {/* 앱 스크린샷 캐러셀 */}
          <div className="mb-12">
            <ImageCarousel images={screenshots} alt="2048 게임 스크린샷" />
          </div>

          {/* 앱 설명 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">앱 설명</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>2048</strong>은 숫자 타일을 슬라이드하여 합치는 클래식 퍼즐 게임입니다.
                간단하지만 중독성 있는 게임플레이로 전 세계적으로 사랑받는 게임을 모바일 앱으로 구현했습니다.
              </p>
              <div>
                <h3 className="font-semibold mb-2">주요 기능</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>4×4 그리드 기반 게임플레이</li>
                  <li>부드러운 터치 제스처 지원</li>
                  <li>점수 및 최고 점수 기록</li>
                  <li>게임 상태 자동 저장</li>
                  <li>Undo 기능 (광고 시청)</li>
                  <li>다크 모드 지원</li>
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
                  <li><strong>Claude:</strong> React Native 컴포넌트 구조 설계 및 게임 로직 구현</li>
                  <li><strong>ChatGPT:</strong> 애니메이션 최적화 및 터치 제스처 처리</li>
                  <li><strong>Gemini:</strong> 게임 알고리즘 검증 및 버그 수정</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                💡 AI가 생성한 코드를 검토·테스트하고, 사용자 경험을 개선하는 방향으로 반복 개발했습니다.
              </p>
            </div>
          </Card>

          {/* 기술 스택 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>React Native</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Expo</Badge>
              <Badge>AsyncStorage</Badge>
              <Badge>React Native Gesture Handler</Badge>
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
                  <p className="text-gray-600">앱 개발 및 테스트 완료, 배포 준비 중</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏳</span>
                <div>
                  <h3 className="font-semibold">구글 플레이 등록 대기</h3>
                  <p className="text-gray-600">스토어 정책 검토 및 최종 빌드 준비 중</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold">플랫폼</h3>
                  <p className="text-gray-600">Android (iOS 버전 계획 중)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* 다음 계획 */}
          <Card>
            <h2 className="text-2xl font-bold mb-4">다음 계획</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>구글 플레이 스토어 등록 및 출시</li>
              <li>사용자 피드백 수집 및 개선</li>
              <li>iOS 버전 개발 (App Store 출시)</li>              
              <li>리더보드 및 업적 시스템</li>
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
