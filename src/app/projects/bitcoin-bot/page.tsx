import type { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Metric from '@/components/Metric';

export const metadata: Metadata = {
  title: '비트코인 자동매매 봇 | 이우진',
  description: 'RSI + 볼린저 밴드 기반 비트코인 자동매매',
};

export default function BitcoinBotPage() {
  return (
    <main className="min-h-screen py-20">
      <Section className="text-center">
        <Badge variant="success">운영 중</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          비트코인 자동매매 봇
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          RSI와 볼린저 밴드를 결합한 시장 상태 적응형 자동매매 시스템
        </p>
      </Section>

      {/* 핵심 지표 */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          <Metric 
            label="운영 기간" 
            value="11개월" 
            description="2024년 11월~2025년 10월" 
          />
          <Metric 
            label="수익률" 
            value="+8.2%" 
            description="실제 운영 성과" 
          />
          <Metric 
            label="거래 빈도" 
            value="시장 상태별" 
            description="25초 간격 모니터링" 
          />
        </div>
      </Section>

      {/* 역할 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">내 역할</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>전략 설계:</strong> RSI + 볼린저 밴드 조합 알고리즘 개발</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>시장 분석:</strong> 5가지 시장 상태 분류 및 적응형 매매 로직</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>리스크 관리:</strong> 분할 매수, 긴급 손절 시스템 구현</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3 mt-1">▸</span>
              <span><strong>모니터링:</strong> 텔레그램 실시간 알림 및 엑셀 로그 자동 기록</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* 핵심 전략 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">핵심 전략</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">RSI + 볼린저 밴드</h3>
            <p className="text-gray-600 text-sm mb-3">
              과매수/과매도 구간을 이중으로 확인하여 진입 신뢰도 향상
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• RSI 14 기간 사용</li>
              <li>• 볼린저 밴드 20일 이동평균 ±2 표준편차</li>
              <li>• 양봉/음봉 확인 후 진입</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">시장 상태 적응</h3>
            <p className="text-gray-600 text-sm mb-3">
              5가지 시장 상태에 따라 매매 조건 자동 조정
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 급등장: RSI ≥ 90 매도</li>
              <li>• 상승장: RSI ≥ 75 매도</li>
              <li>• 횡보장: RSI 25~73 범위</li>
              <li>• 하락장: RSI ≤ 20 매수</li>
              <li>• 급락장: RSI ≤ 9 매수 또는 긴급 매도(-2%)</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">AI 예측 시스템</h3>
            <p className="text-gray-600 text-sm mb-3">
              장기/중기/단기 분석을 종합하여 시장 방향 예측
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 장기 분석: 720개 데이터 (약 12시간) - 25%</li>
              <li>• 중기 분석: 100개 데이터 (약 100분) - 35%</li>
              <li>• 단기 분석: 20개 데이터 (약 20분) - 40%</li>
              <li>• 강한 하락 감지 시 매수 신호 9회 스킵</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">분할 매수 전략</h3>
            <p className="text-gray-600 text-sm mb-3">
              초기 10%부터 시작해 이전 비율의 절반씩 추가 매수
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1차: 잔고의 10%</li>
              <li>• 2차: 잔고의 15% (10% + 5%)</li>
              <li>• 3차: 잔고의 22.5% (15% + 7.5%)</li>
              <li>• 잔고 5,003원 미만 시 전액 매수</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 리스크 관리 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">리스크 관리</h2>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-red-700">긴급 매도 조건</h3>
              <p className="text-gray-700">
                <strong>2% 이상 급락 감지 시</strong> 즉시 전량 매도 (손절 우선)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-orange-700">API 자동 복구</h3>
              <p className="text-gray-700">
                연속 실패 시 30초 간격으로 최대 5회 자동 복구 시도. 
                실패 시 텔레그램 알림 후 프로그램 재시작
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-yellow-700">최소 거래 금액</h3>
              <p className="text-gray-700">
                수수료 포함 5,003원 미만 잔고 시 자동 매수 중단
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 모니터링 시스템 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">모니터링 시스템</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">📱 텔레그램 실시간 알림</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 매수/매도 주문 전송 즉시 알림</li>
              <li>• 체결 완료 상세 정보 (수량, 가격, 수익률)</li>
              <li>• API 연결 실패 및 복구 상태</li>
              <li>• 강한 하락 사인 감지 알림</li>
              <li>• 프로그램 시작/종료 알림</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-sky-600">📊 엑셀 자동 로그</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 25초마다 모든 지표 자동 기록</li>
              <li>• API 상태, RSI, 볼린저 밴드</li>
              <li>• 시장 상태, 이동평균선 기울기</li>
              <li>• 수익률, 보유 잔고, 매매 신호</li>
              <li>• AI 예측 점수 및 메시지</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 기술 스택 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
        <div className="bg-white rounded-xl p-8 border shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🐍', name: 'Python', desc: '핵심 언어' },
              { icon: '📊', name: 'pyupbit', desc: '업비트 API' },
              { icon: '📈', name: 'pandas', desc: '데이터 분석' },
              { icon: '📝', name: 'openpyxl', desc: '엑셀 로그' },
              { icon: '💬', name: 'Telegram', desc: '실시간 알림' },
              { icon: '🔢', name: 'numpy', desc: '수치 계산' },
              { icon: '📁', name: 'dotenv', desc: '환경 변수' },
              { icon: '⏰', name: 'time', desc: '스케줄링' },
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

      {/* 실제 운영 증빙 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">실제 운영 내용</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">📊 운영 성과 (2024.11~2025.10)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 운영 기간: 약 11개월 (거의 1년)</li>
              <li>• 총 수익률: +8.2%</li>
              <li>• 모니터링 주기: 25초마다 자동 분석</li>
              <li>• 거래 방식: 시장 상태 적응형 자동 매매</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">🔧 핵심 기능</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 5가지 시장 상태 자동 분류 (급등/상승/횡보/하락/급락)</li>
              <li>• 4개 이동평균선(5/20/60/120) 기울기 분석</li>
              <li>• 장중/단기/단기 종합 예측 시스템</li>
              <li>• 강한 하락 추세 감지 시 보수적 매수 전환</li>
              <li>• 양봉/음봉 확인 후 안전한 진입</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-3">⚙️ 안정성 기능</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 주문 체결 최대 25초 대기 후 자동 취소</li>
              <li>• API 장애 시 자동 복구 (최대 5회)</li>
              <li>• 모든 거래 내역 엑셀 자동 백업</li>
              <li>• 예외 발생 시 30초 후 자동 재시작</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 주요 코드 로직 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">핵심 구현 내용</h2>
        <div className="bg-white rounded-2xl p-8 border shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-sky-600">매수 조건</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs">
                <p>1. 시장 상태별 RSI 과매도 확인</p>
                <p>2. 볼린저 밴드 하단 돌파 확인</p>
                <p>3. 양봉 출현 대기</p>
                <p>4. 강한 하락 추세 시 9회 신호 스킵</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-orange-600">매도 조건</h3>
              <div className="bg-gray-900 text-red-400 p-4 rounded-lg font-mono text-xs">
                <p>1. 시장 상태별 RSI 과매수 확인</p>
                <p>2. 볼린저 밴드 상단 돌파 확인</p>
                <p>3. 음봉 출현 대기 + 수익률 0.2% 이상</p>
                <p>4. 2% 이상 급락 시 즉시 긴급 매도</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 향후 계획 */}
      <Section>
        <h2 className="text-3xl font-bold mb-8">향후 개선 방향</h2>
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>거래량 분석 추가 (대량 거래 감지)</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>다중 코인 동시 운영 (이더리움 등)</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>백테스팅 시스템 구축</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-500 mr-3">📍</span>
              <span>웹 대시보드 개발 (실시간 모니터링)</span>
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
            name: '비트코인 자동매매 봇',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Any',
            description: 'RSI + 볼린저 밴드 기반 비트코인 자동매매 시스템',
            programmingLanguage: 'Python',
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
