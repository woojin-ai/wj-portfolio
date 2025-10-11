import type { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Metric from '@/components/Metric';

export const metadata: Metadata = {
  title: '여행 블로그 자동화 시스템 | 이우진 포트폴리오',
  description: 'AI 기반 여행 블로그 콘텐츠 자동 생성 및 발행 시스템',
  openGraph: {
    title: '여행 블로그 자동화 시스템',
    description: 'Gemini AI와 Pexels API를 활용한 블로그 자동화',
    type: 'article',
  },
};

export default function BlogAutomationPage() {
  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <Section className="text-center">
        <Badge variant="success">운영 중</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          여행 블로그 자동화 시스템
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          시즌별 여행지 선정부터 콘텐츠 생성, 이미지 삽입, 자동 발행까지 완전 자동화
        </p>
      </Section>

      {/* 핵심 지표 */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Metric
            label="콘텐츠 조합"
            value="720개"
            description="12개월 × 10여행지 × 6테마"
          />
          <Metric
            label="자동 실행"
            value="매일 1-2회"
            description="node-cron 스케줄링"
          />
          <Metric
            label="이미지 처리"
            value="포스트당 5장"
            description="Pexels API 자동 검색"
          />
        </div>
      </Section>

      {/* 역할 정의 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">내 역할</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>시스템 설계:</strong> 여행지 데이터베이스 구축 및 테마별 변주 로직 설계</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>AI 프롬프트 엔지니어링:</strong> Gemini 2.5 Pro에 최적화된 콘텐츠 생성 프롬프트 개발</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>API 통합:</strong> Pexels, Blogger, OAuth 2.0 인증 연동</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>커버리지 관리:</strong> 히스토리 추적으로 모든 조합 균등 분배 보장</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* 핵심 기능 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">핵심 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-sky-600">시즌별 여행지 자동 선정</h3>
            <p className="text-gray-600">
              월별 최적 여행지 데이터베이스(일본, 태국, 유럽, 동남아 등) 구축.
              현재 월 기준 다음 1-2개월 여행지 자동 선택.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-sky-600">6가지 테마 변주</h3>
            <p className="text-gray-600">
              기본, 코스, 맛집, 가족, 커플, 가성비 테마로 동일 여행지도 
              다양한 각도로 콘텐츠 생성. 각 테마별 키워드 자동 추가.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-sky-600">Pexels 이미지 자동 수집</h3>
            <p className="text-gray-600">
              5단계 이미지 프롬프트 자동 생성 후 Pexels API로 실제 여행지 이미지 검색.
              저작권 크레딧 자동 삽입.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3 text-sky-600">Blogger API 자동 발행</h3>
            <p className="text-gray-600">
              OAuth 2.0 토큰 자동 갱신 후 Blogger API로 포스팅.
              발행 실패 시 HTML 파일로 백업 저장.
            </p>
          </div>
        </div>
      </Section>

      {/* 기술 스택 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-700">Node.js 기반 자동화</h3>
              <div className="bg-white p-4 rounded-lg text-sm text-gray-700">
                <p><strong>핵심 라이브러리:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>@google/generative-ai - Gemini 2.5 Pro API 연동</li>
                  <li>axios - Pexels API 및 Blogger API HTTP 요청</li>
                  <li>node-cron - 스케줄링 (매일 오전 1시/4시)</li>
                  <li>dotenv - 환경변수 관리</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-700">콘텐츠 생성 프롬프트 구조</h3>
              <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-mono">
                <p className="mb-2">여행지 정보(목적지, 기간, 시즌, 테마) 제공 →</p>
                <p className="mb-2">5개 섹션 구조화(계획 가이드, 명소, 맛집, 숙소/교통, 체크리스트) →</p>
                <p>각 섹션마다 IMAGE_PROMPT 자동 생성</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-700">이미지 검색 로직</h3>
              <p className="text-gray-700">
                영어 도시명 매핑(예: 도쿄→Tokyo) → 
                Pexels API 검색(나라, 도시, 랜드마크 순) → 
                landscape 이미지 20개 중 랜덤 선택 → 
                크레딧 정보 자동 추출
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 운영 환경 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">운영 환경</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🟢</div>
              <div className="font-semibold">Node.js</div>
              <div className="text-sm text-gray-500">런타임</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <div className="font-semibold">Gemini 2.5 Pro</div>
              <div className="text-sm text-gray-500">AI 콘텐츠 생성</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📸</div>
              <div className="font-semibold">Pexels API</div>
              <div className="text-sm text-gray-500">이미지 검색</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="font-semibold">Blogger API</div>
              <div className="text-sm text-gray-500">자동 발행</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⏰</div>
              <div className="font-semibold">node-cron</div>
              <div className="text-sm text-gray-500">스케줄러</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔐</div>
              <div className="font-semibold">OAuth 2.0</div>
              <div className="text-sm text-gray-500">인증</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold">링크프라이스</div>
              <div className="text-sm text-gray-500">어필리에이트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📄</div>
              <div className="font-semibold">JSON</div>
              <div className="text-sm text-gray-500">히스토리 관리</div>
            </div>
          </div>
        </div>
      </Section>

      {/* 실제 구현 내용 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">실제 구현 내용</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">📊 데이터 구조</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 12개월 × 10개 여행지 × 6개 테마 = 720개 조합</li>
              <li>• 각 월별 시즌 톤 자동 매핑 (겨울, 초봄, 봄, 여름, 가을 등)</li>
              <li>• 검색 피크 월 데이터로 항공권 예약 시기 안내</li>
              <li>• history.json으로 중복 방지 및 균등 분배</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">🎯 커버리지 보장 알고리즘</h3>
            <div className="bg-white p-4 rounded-lg text-sm">
              <code className="text-gray-700">
                오래 사용 안 한 조합 우선순위 정렬 →<br/>
                가중치 계산(시즌 적합도 × 랜덤) →<br/>
                상위 1개 선택 →<br/>
                history.json에 타임스탬프 기록
              </code>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">🔗 어필리에이트 마케팅</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 링크프라이스 숏링크 자동 삽입</li>
              <li>• 호텔 예약 카드 2개(아고다, 호텔스컴바인)</li>
              <li>• 유심 구매 카드 1개(유심사)</li>
              <li>• 반응형 디자인 + 모바일 최적화 HTML 생성</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">⚙️ 에러 핸들링</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• API 토큰 만료 시 자동 갱신(Refresh Token)</li>
              <li>• Pexels 검색 실패 시 Picsum 대체 이미지</li>
              <li>• Blogger 발행 실패 시 HTML 파일 백업</li>
              <li>• 컬러 코딩된 로그 시스템(INFO/SUCCESS/WARNING/ERROR)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 실행 예시 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">실행 방법</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="space-y-4">
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
              <p className="mb-2"># 즉시 실행</p>
              <p>node travel_blog_automation.js --now</p>
              <p className="mt-4 mb-2"># 스케줄러 시작 (매일 오전 1시/4시 자동 실행)</p>
              <p>node travel_blog_automation.js</p>
              <p className="mt-4 mb-2"># 테스트 모드</p>
              <p>node travel_blog_automation.js --test</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 개선 가능 영역 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">향후 개선 방향</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>더 많은 여행지 데이터 추가 (현재 120개 → 목표 300개)</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>다양한 블로그 플랫폼 지원 (Tistory, WordPress 등)</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>SEO 점수 자동 분석 및 최적화</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>실제 여행 후기 크롤링 및 통합</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: '여행 블로그 자동화 시스템',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            description: 'Gemini AI 기반 여행 블로그 콘텐츠 자동 생성 및 발행 시스템',
            programmingLanguage: 'JavaScript',
            author: {
              '@type': 'Person',
              name: '이우진',
            },
          }),
        }}
      />
    </main>
  );
}
