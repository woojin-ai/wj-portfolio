import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = {
  title: '모바일 앱 | 이우진 포트폴리오',
  description: 'AI로 개발한 모바일 앱 4종 - 2048 게임, 타로 운세, 사주 풀이, MBTI 테스트',
  openGraph: {
    title: '모바일 앱 포트폴리오',
    description: 'AI로 개발한 모바일 앱 4종',
    type: 'website',
  },
};

const apps = [
  {
    id: '2048',
    title: '2048 게임',
    description: 'React Native로 구현한 클래식 2048 퍼즐 게임. 스와이프 제스처와 스코어 시스템 완비.',
    icon: '🎮',
    status: '개발 완료',
    tech: ['React Native', 'TypeScript', 'Expo'],
    color: 'from-violet-50 to-purple-50',
  },
  {
    id: 'tarot',
    title: '타로 운세',
    description: '22장 메이저 아르카나 기반 일일 운세 앱. Claude가 해석 텍스트 생성.',
    icon: '🔮',
    status: '개발 완료',
    tech: ['React Native', 'Claude API', 'Expo'],
    color: 'from-pink-50 to-rose-50',
  },
  {
    id: 'saju',
    title: '사주 풀이',
    description: '생년월일시 기반 사주팔자 자동 계산 및 AI 해석. 만세력 알고리즘 구현.',
    icon: '🧧',
    status: '개발 완료',
    tech: ['React Native', 'ChatGPT API', 'Expo'],
    color: 'from-amber-50 to-orange-50',
  },
  {
    id: 'mbti',
    title: 'MBTI 테스트',
    description: '20문항 심리 테스트로 16가지 성격 유형 분석. 결과 공유 기능 포함.',
    icon: '🧠',
    status: '개발 완료',
    tech: ['React Native', 'AsyncStorage', 'Expo'],
    color: 'from-sky-50 to-blue-50',
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          모바일 앱 포트폴리오
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          AI-어시스트 개발로 완성한 모바일 앱 4종 <br/>
          (개발 완료, 구글 플레이 스토어 등록 대기중)
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="success">4개 앱 개발 완료</Badge>
          <Badge variant="warning">플레이스토어 등록 대기</Badge>
        </div>
      </Section>

      {/* 앱 카드 목록 */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <Link key={app.id} href={`/apps/${app.id}`}>
              <Card
                className={`bg-gradient-to-br ${app.color} border-2 border-gray-200 hover:border-sky-400 transition-all cursor-pointer h-full`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{app.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {app.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Badge variant="success">{app.status}</Badge>
                  </div>
                </div>
                <div className="mt-4 text-sky-600 font-semibold flex items-center gap-2">
                  자세히 보기 <span>→</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* 공통 개발 환경 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">공통 개발 환경</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <div className="font-bold mb-1">React Native</div>
              <div className="text-sm text-gray-500">크로스 플랫폼</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <div className="font-bold mb-1">Expo</div>
              <div className="text-sm text-gray-500">빌드 환경</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔷</div>
              <div className="font-bold mb-1">TypeScript</div>
              <div className="text-sm text-gray-500">타입 안정성</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <div className="font-bold mb-1">Claude/ChatGPT</div>
              <div className="text-sm text-gray-500">코드 생성</div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI 활용 방식 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">AI 활용 방식</h2>
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-700">UI 컴포넌트 생성</h3>
              <p className="text-gray-700">
                Figma 디자인 스크린샷을 Claude에 제공 → 
                &quot;React Native로 이 화면을 구현해줘&quot; 요청 → 
                TypeScript + Styled Components 코드 자동 생성
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-700">비즈니스 로직 구현</h3>
              <p className="text-gray-700">
                &quot;사주팔자 계산 알고리즘&quot;, &quot;2048 게임 로직&quot; 등 복잡한 로직을 
                자연어로 설명 → Claude가 알고리즘 구현 → 
                테스트 후 엣지 케이스 보완
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-700">디버깅 및 최적화</h3>
              <p className="text-gray-700">
                에러 로그를 Claude에 붙여넣기 → 원인 분석 및 수정 코드 제안 → 
                성능 이슈 발견 시 최적화 방안 자동 생성
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 배포 현황 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-center">배포 현황 및 계획</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-bold text-green-900">앱 개발 완료</p>
                <p className="text-green-700 text-sm">4개 앱 모두 로컬 테스트 및 QA 완료</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="font-bold text-amber-900">구글 플레이 심사 진행중</p>
                <p className="text-amber-700 text-sm">앱 검토 및 품질 테스트 진행중</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">각 앱의 상세 정보 확인하기</h2>
          <p className="text-xl opacity-90 mb-8">
            AI 활용 사례, 기술 스택, 개발 과정을 앱별로 상세히 소개합니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {apps.map((app) => (
              <Link key={app.id} href={`/apps/${app.id}`}>
                <button className="bg-white text-sky-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  {app.icon} {app.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
