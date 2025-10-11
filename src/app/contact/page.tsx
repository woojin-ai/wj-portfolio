import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: '연락하기 | 이우진 포트폴리오',
  description: '이우진에게 연락하기 - 이메일 및 SNS',
  openGraph: {
    title: '연락하기',
    description: '프로젝트 문의, 협업 제안, 채널 협찬 문의',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <Section className="py-20">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">연락하기</h1>
          <p className="text-xl text-gray-600">
            취업 제안, 채널 협찬 및 공구, 광고는 언제나 환영합니다
          </p>
        </div>

        {/* 이메일 */}
        <Card className="mb-8 text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">📧</div>
            <h2 className="text-2xl font-bold mb-2">이메일</h2>
            <p className="text-gray-600 mb-4">가장 빠르고 확실한 연락 수단</p>
          </div>
          <a 
            href="mailto:z1592z@naver.com"
            className="inline-block text-xl font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            z1592z@naver.com
          </a>
          <p className="text-sm text-gray-500 mt-3">
            평균 응답 시간: 1-2 영업일
          </p>
        </Card>

        {/* SNS & 채널 */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">쇼핑 채널</h2>
          
          {/* 홈갓템 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">홈갓템</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* 유튜브 */}
              <a
                href="https://www.youtube.com/@homegodtem"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-center group"
              >
                <div className="text-4xl mb-3">🎥</div>
                <h4 className="font-semibold mb-1 group-hover:text-red-600">YouTube</h4>
                <p className="text-xs text-gray-500">홈갓템</p>
              </a>

              {/* 인스타그램 */}
              <a
                href="https://www.instagram.com/home_godtem/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center group"
              >
                <div className="text-4xl mb-3">📸</div>
                <h4 className="font-semibold mb-1 group-hover:text-pink-600">Instagram</h4>
                <p className="text-xs text-gray-500">홈갓템</p>
              </a>

              {/* 틱톡 */}
              <a
                href="https://www.tiktok.com/@homegodtem"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-center group"
              >
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-semibold mb-1 group-hover:text-purple-600">TikTok</h4>
                <p className="text-xs text-gray-500">홈갓템</p>
              </a>
            </div>
          </div>

          {/* 핫아이템 리뷰 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">핫아이템 리뷰</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* 유튜브 */}
              <a
                href="https://www.youtube.com/@hotitem-review"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-center group"
              >
                <div className="text-4xl mb-3">🎥</div>
                <h4 className="font-semibold mb-1 group-hover:text-red-600">YouTube</h4>
                <p className="text-xs text-gray-500">핫아이템 리뷰</p>
              </a>

              {/* 인스타그램 */}
              <a
                href="https://www.instagram.com/hotitemreview/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center group"
              >
                <div className="text-4xl mb-3">📸</div>
                <h4 className="font-semibold mb-1 group-hover:text-pink-600">Instagram</h4>
                <p className="text-xs text-gray-500">핫아이템 리뷰</p>
              </a>

              {/* 틱톡 */}
              <a
                href="https://www.tiktok.com/@hotitemreview"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-center group"
              >
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-semibold mb-1 group-hover:text-purple-600">TikTok</h4>
                <p className="text-xs text-gray-500">핫아이템 리뷰</p>
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            💡 협찬 문의는 DM 또는 이메일로 부탁드립니다
          </p>
        </Card>

        {/* 문의 유형 */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold mb-4">문의 가능 내용</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="font-semibold">취업 제안</h3>
                <p className="text-gray-600 text-sm">
                  AI 자동화, 크롤링, 콘텐츠 자동화 시스템 구축,운영,기획
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-semibold">채널 협찬 및 광고제안</h3>
                <p className="text-gray-600 text-sm">
                  제품 리뷰, 브랜드 협찬, 제휴 마케팅, 광고제안
                </p>
              </div>
            </div>
            
                 
            
          </div>
        </Card>

        {/* 참고사항 */}
        <Card className="bg-gray-50">
          <h2 className="text-xl font-bold mb-4">참고사항</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• 이메일 문의 시 <strong>제목에 문의 유형</strong>을 명시해주세요 (예: [협찬 문의], [취업제안 문의])</li>
            <li>• 협찬 문의는 제품 정보와 협찬 조건을 함께 보내주시면 빠른 답변이 가능합니다</li>
            <li>• 취업제안은 JD, 면접일정, 요구사항을 구체적으로 적어주세요</li>
            <li>• 스팸/광고성 메일은 답변하지 않습니다</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
