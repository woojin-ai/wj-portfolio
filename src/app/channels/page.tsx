import { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import AudioPlayer from '@/components/AudioPlayer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 쇼핑 채널 | WJ 포트폴리오',
  description: 'AI로 자동화된 쇼핑 채널 운영 - 대본, 썸네일, TTS까지 완전 자동화',
  openGraph: {
    title: 'AI 쇼핑 채널 운영',
    description: 'AI 기반 콘텐츠 제작 및 업로드 자동화',
    type: 'website',
  },
};

export default function ChannelsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWorkSeries',
    name: 'AI 쇼핑 채널',
    description: 'AI 자동화 기반 쇼핑 채널 운영',
    creator: {
      '@type': 'Person',
      name: 'WJ',
    },
  };

  // 샘플 대본 예시
  const sampleScripts = [
    {
      product: '무선 이어폰',
      script: '안녕하세요! 오늘 소개할 제품은 최신 노이즈 캔슬링 무선 이어폰입니다. 출퇴근길 지하철 소음도 완벽 차단! 배터리는 한 번 충전으로 무려 30시간 사용 가능합니다.',
    },
    {
      product: '스마트 워치',
      script: '건강 관리의 새로운 기준! 심박수, 수면 패턴, 운동량까지 24시간 모니터링. 스마트폰 알림도 실시간으로 확인하세요. 방수 기능으로 수영할 때도 착용 가능합니다.',
    },
    {
      product: '휴대용 블렌더',
      script: '집에서도, 사무실에서도, 캠핑장에서도! USB 충전으로 어디서나 신선한 스무디를 만드세요. 6개의 블레이드로 얼음도 거뜬히 분쇄합니다.',
    },
  ];

  // 샘플 썸네일 문구
  const sampleThumbnails = [
    { product: '무선 이어폰', text: '🎧 노캔 끝판왕!', subtext: '30시간 배터리' },
    { product: '스마트 워치', text: '⌚ 건강 24시간', subtext: '수면분석+심박' },
    { product: '휴대용 블렌더', text: '🥤 어디서나 스무디', subtext: 'USB 충전식' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Section className="py-20">
        <div className="max-w-5xl mx-auto">
          {/* 헤더 */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">AI 쇼핑 채널</h1>
              <Badge variant="success">운영 중</Badge>
            </div>
            <p className="text-xl text-gray-600 mb-6">
              대본, 썸네일 문구, TTS 음성까지<br/>
              <strong className="text-sky-600">AI 기반 콘텐츠 제작 자동화 쇼핑 채널</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge>AI 대본 생성</Badge>
              <Badge>AI 썸네일 문구</Badge>
              <Badge>AI TTS 음성</Badge>
              <Badge>수동 편집 & 업로드</Badge>              
            </div>
          </div>

          {/* 채널 개요 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">채널 운영 현황</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📺</span>
                  채널 정보
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 운영 채널: 2개 (쇼핑/리뷰)</li>
                  <li>• 업로드: 채널별 주 5-7회 </li>
                  <li>• 제품 카테고리: 전자기기, 생활용품, 뷰티</li>
                  <li>• 평균 조회수: 500-2,000회/영상</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  AI 자동화 범위
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>AI 자동화:</strong> GPT-5 대본, 썸네일 문구, TTS 음성</li>
                  <li>• <strong>수동 작업:</strong> 영상 편집 및 유튜브 업로드</li>
                  <li>• 영상 편집은 Capcut 사용</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* AI 자동화 프로세스 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">AI 자동화 프로세스</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                
                
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">대본 생성 (GPT-5)</h3>
                  <p className="text-gray-700 mb-2">
                    수집된 제품 정보를 GPT-5에 전달하여 쇼핑 호스트 스타일의 대본 생성 (200-300자)
                  </p>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm font-mono text-gray-600">
                    프롬프트: 쇼핑 호스트처럼 제품의 핵심 특징을 강조하고 구매욕을 자극하는 대본 작성
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">썸네일 문구 생성 (GPT-5)</h3>
                  <p className="text-gray-700">
                    제품명과 핵심 특징에서 임팩트 있는 썸네일 문구 자동 추출 (메인 문구 + 서브 문구)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">TTS 음성 합성 (Google TTS / Naver Clova)</h3>
                  <p className="text-gray-700">
                    생성된 대본을 TTS API로 변환. 자연스러운 여성 음성 선택
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                
                
              </div>
            </div>
          </Card>

          {/* 샘플 대본 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">샘플 대본 (AI 생성)</h2>
            <div className="space-y-4">
              {sampleScripts.map((sample, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2 text-sky-600">{sample.product}</h3>
                  <p className="text-gray-700">{sample.script}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              💡 실제 대본은 제품 정보를 기반으로 매번 새롭게 생성됩니다.
            </p>
          </Card>

          {/* 샘플 썸네일 문구 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">샘플 썸네일 문구 (AI 생성)</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {sampleThumbnails.map((thumb, index) => (
                <div key={index} className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg p-6 text-white text-center">
                  <div className="text-2xl font-bold mb-1">{thumb.text}</div>
                  <div className="text-sm opacity-90">{thumb.subtext}</div>
                  <div className="text-xs mt-3 opacity-75">{thumb.product}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* TTS 샘플 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">TTS 음성 샘플</h2>
            <p className="text-gray-700 mb-4">
              AI가 생성한 대본을 TTS(Text-to-Speech) 기술로 변환한 음성 샘플입니다.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">무선 이어폰 대본</h3>
                <AudioPlayer src="/audio/earphone-sample.mp3" title="무선 이어폰 대본" />
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">스마트 워치 대본</h3>
                <AudioPlayer src="/audio/watch-sample.mp3" title="스마트 워치 대본" />
              </div>
            </div>
          </Card>

          {/* 기술 스택 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Node.js</Badge>
              <Badge>Playwright</Badge>
              <Badge>Puppeteer</Badge>
              <Badge>OpenAI API (GPT-5)</Badge>
              <Badge>TTS</Badge>              
              <Badge>FFmpeg</Badge> 
              <Badge>Capcut</Badge>                          
            </div>
          </Card>

          {/* 성과 및 수익 */}
          <Card className="mb-8">
            <h2 className="text-2xl font-bold mb-4">성과 및 수익 모델</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-sky-50 rounded-lg">
                <div className="text-3xl font-bold text-sky-600">150+</div>
                <div className="text-sm text-gray-600 mt-1">제작 영상</div>
              </div>
              <div className="text-center p-4 bg-sky-50 rounded-lg">
                <div className="text-3xl font-bold text-sky-600">15만</div>
                <div className="text-sm text-gray-600 mt-1">단일 콘텐츠 최고 조회수</div>
              </div>
              <div className="text-center p-4 bg-sky-50 rounded-lg">
                <div className="text-3xl font-bold text-sky-600">90%</div>
                <div className="text-sm text-gray-600 mt-1">시간 절감 (AI 콘텐츠 제작)</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">수익 모델</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>제휴 링크:</strong> 쿠팡 파트너스, 공구, 각종 광고개제</li>
                <li>• <strong>유튜브:</strong> 애드센스 활성화</li>
                <li>• <strong>협찬:</strong> 브랜드 제품 리뷰 (유료 광고 표기)</li>
              </ul>
            </div>
          </Card>

          {/* 협찬 안내 CTA */}
          <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">채널 협찬 문의</h2>
              <p className="text-gray-700 mb-6">
                AI 자동화 쇼핑 채널에서 귀사의 제품을 소개해드립니다.<br/>
                협찬 및 제휴 마케팅에 관심이 있으시다면 문의해주세요.
              </p>
              <Link 
                href="/sponsor"
                className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
              >
                협찬 제안서 보기
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
