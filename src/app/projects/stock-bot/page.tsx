import type { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Metric from '@/components/Metric';

export const metadata: Metadata = {
  title: '저평가 우량주 자동매매 시스템 | 이우진',
  description: '4차원 스코어링 기반 주식 자동매매',
};

export default function StockBotPage() {
  return (
    <main className="min-h-screen py-20">
      <Section className="text-center">
        <Badge variant="warning">개발 완료 · 실전 테스트 준비중</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          저평가 우량주 자동매매 시스템
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          4차원 스코어링과 다단계 필터링으로 우량주 선별 및 포트폴리오 자동 관리
        </p>
      </Section>

      {/* 지표 */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Metric label="스코어링" value="4차원" description="각 25점씩 100점 만점" />
          <Metric label="필터링" value="4단계" description="유동성→재무→선별→최종" />
          <Metric label="종목 수" value="최대 25개" description="분산 투자" />
        </div>
      </Section>

      {/* 역할 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">내 역할</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>시스템 설계:</strong> 4차원 스코어링 및 다단계 필터링 알고리즘</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>데이터 처리:</strong> pykrx, dart-fss API 연동</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>포트폴리오 관리:</strong> 리밸런싱, 추매/익절 로직</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* 4차원 스코어링 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">4차원 스코어링</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">1. 재무 안정성 (25점)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 부채비율 · 유동비율</li>
              <li>• 이자보상배율</li>
              <li>• 영업현금흐름</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">2. 가치 지표 (25점)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• PER · PBR 분석</li>
              <li>• PEG 비율</li>
              <li>• 배당수익률</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">3. 수익성/성장성 (25점)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• ROE · 영업이익률</li>
              <li>• 매출성장률</li>
              <li>• 영업이익성장률</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">4. 모멘텀/수급 (25점)</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 주가 모멘텀</li>
              <li>• 외국인·기관 순매수</li>
              <li>• 52주 고점 대비</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            ⚠️ API 제한으로 일부 지표는 추정치 사용 (PER/PBR 기반)
          </p>
        </div>
      </Section>

      {/* 필터링 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">4단계 필터링</h2>
        <div className="space-y-4">
          <div className="bg-sky-50 p-6 rounded-xl border-l-4 border-sky-500">
            <h3 className="font-bold mb-2">1차: 유동성 (시총 500억+, 거래량 1만주+)</h3>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
            <h3 className="font-bold mb-2">2차: 재무 (PER 0~100, PBR 0.1~10)</h3>
          </div>
          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
            <h3 className="font-bold mb-2">3차: 상위 100개 선별</h3>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
            <h3 className="font-bold mb-2">4차: 최종 25개</h3>
          </div>
        </div>
      </Section>

      {/* 기술 스택 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
        <div className="bg-white rounded-xl shadow-sm p-8 border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🐍', name: 'Python', desc: '핵심 언어' },
              { icon: '📊', name: 'pykrx', desc: '시장 데이터' },
              { icon: '🐼', name: 'pandas', desc: '데이터 처리' },
              { icon: '🏦', name: 'KIS API', desc: '주문 처리' },
            ].map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-semibold">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 실행 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">실행 방법</h2>
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
          <p>python main.py --test</p>
          <p className="mt-2">python main.py --screening</p>
          <p className="mt-2">python main.py --now</p>
        </div>
      </Section>
    </main>
  );
}
