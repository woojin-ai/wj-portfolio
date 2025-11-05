import { Metadata } from 'next';
import Section from '@/components/Section';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '협찬 제안 | 이우진 포트폴리오',
  description: 'AI 자동화 채널 협찬 및 제휴 제안 안내',
  openGraph: {
    title: '협찬 제안',
    description: 'AI 쇼핑 채널 협찬 및 브랜드 제휴 안내',
    type: 'website',
  },
};

export default function SponsorPage() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">협찬 제안</h1>
          <p className="text-xl text-gray-600">
            쇼핑 채널에서<br/>
            귀사의 제품을 효과적으로 소개해드립니다
          </p>
        </div>

        {/* 채널 개요 */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold mb-4">채널 현황</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-sky-600">📺 운영 채널</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 쇼핑 리뷰 채널 2개 운영(유튜브, 인스타그램, 틱톡)</li>
                <li>• 주 5-7회 정기 업로드</li>
                <li>• 전체 채널 누적 구독자: 약 6,000명</li>
                <li>• 평균 조회수: 500-2,000회/영상</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-sky-600">🎯 주요 시청자</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 연령대: 25-45세</li>
                <li>• 관심사: 전자기기, 생활용품</li>
                <li>• 구매력: 중상위</li>
                <li>• 특징: 실용적 소비 성향</li>
              </ul>
            </div>
          </div>
        </Card>

        

        {/* 제공물 */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold mb-4">필요한 제공물</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">✅ 필수 제공물</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>제품 실물 사진 또는 영상</li>
                <li>제품 스펙 및 공식 설명 자료</li>
                <li>제휴 링크 또는 할인 쿠폰</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⭐ 선택 제공물 (권장)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>브랜드 소개 자료 (CI, 로고 등)</li>
                <li>제품 사용 시연 영상</li>
                <li>시청자 이벤트용 제품 (경품)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* 타임라인 */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold mb-4">작업 타임라인</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600 text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold">문의 및 협의</h3>
                <p className="text-gray-600 text-sm">제품 정보 확인 및 협찬 조건 협의</p>
              </div>
            </div>
            
            
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600 text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold">콘텐츠 제작 (3-7일)</h3>
                <p className="text-gray-600 text-sm">대본 작성, 편집</p>
              </div>
            </div>          
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600 text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold">업로드 및 프로모션</h3>
                <p className="text-gray-600 text-sm">유튜브 업로드 + SNS 공유</p>
              </div>
            </div>
          </div>
        </Card>

        {/* 유료광고 표기 원칙 */}
        <Card className="mb-8 border-2 border-amber-200 bg-amber-50">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h2 className="text-xl font-bold mb-3">유료광고 표기 원칙</h2>
              <p className="text-gray-700 mb-4">
                공정거래위원회 및 유튜브 정책에 따라 <strong>모든 협찬 콘텐츠는 유료광고임을 명확히 표기</strong>합니다.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 영상 도입부: &quot;본 영상은 [브랜드]로부터 제품을 협찬받아 제작되었습니다&quot;</li>
                <li>• 썸네일: [협찬] 또는 [AD] 표기</li>
                <li>• 유튜브 설명란: 협찬 고지 문구 삽입</li>
                <li>• 유튜브 유료 프로모션 기능 활성화</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                💡 투명한 광고 표기는 시청자 신뢰를 높이고 브랜드 이미지에도 긍정적입니다.
              </p>
            </div>
          </div>
        </Card>

        {/* 문의하기 CTA */}
        <Card className="bg-gradient-to-r from-sky-500 to-blue-600 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">협찬 문의</h2>
            <p className="mb-6 opacity-90">
              제품 협찬, 브랜드 제휴, 기타 협업 문의는<br/>
              아래 연락처로 언제든지 연락주세요!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              문의하기
            </Link>
            <div className="mt-6 text-sm opacity-75">
              <p>📧 z1592z@naver.com</p>
              <p className="mt-1">평균 응답 시간: 1-2 영업일</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
