# 이우진 포트폴리오 웹사이트

AI 자동화 및 개발 프로젝트를 소개하는 개인 포트폴리오 사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (권장) / GitHub Pages

## 📁 프로젝트 구조

```
portfolio-woo/
├── src/
│   ├── app/                    # 페이지 라우팅
│   │   ├── about/             # 소개 페이지
│   │   ├── projects/          # 프로젝트 목록 및 상세
│   │   ├── apps/              # 앱 목록 및 상세
│   │   ├── channels/          # AI 쇼핑 채널
│   │   ├── sponsor/           # 협찬 제안
│   │   ├── contact/           # 연락하기
│   │   ├── layout.tsx         # 글로벌 레이아웃
│   │   ├── page.tsx           # 홈 페이지
│   │   ├── sitemap.ts         # 사이트맵
│   │   └── robots.ts          # robots.txt
│   └── components/            # 재사용 컴포넌트
│       ├── Header.tsx         # 헤더 네비게이션
│       ├── Footer.tsx         # 푸터
│       ├── Card.tsx           # 카드 컴포넌트
│       ├── Badge.tsx          # 배지
│       ├── Section.tsx        # 섹션 래퍼
│       └── ...
├── public/
│   ├── images/                # 이미지 파일
│   └── audio/                 # 오디오 파일 (TTS 샘플)
└── package.json
```

## 🛠️ 로컬 실행

### 1. 의존성 설치

```bash
npm install
# 또는
pnpm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
pnpm dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm run start
```

## 🌐 배포

### Vercel (권장)

1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. "New Project" 클릭
3. 이 저장소를 선택
4. 자동으로 빌드 및 배포됩니다

### GitHub Pages

1. `next.config.js`에 다음 설정 추가:

```javascript
module.exports = {
  output: 'export',
  basePath: '/portfolio-woo',
  images: {
    unoptimized: true,
  },
}
```

2. 빌드 및 배포:

```bash
npm run build
# out/ 폴더를 GitHub Pages에 배포
```

## ✏️ 콘텐츠 수정 가이드

### 1. 이미지 교체

- `public/images/` 폴더에 이미지 파일 업로드
- 각 페이지의 주석을 참고하여 경로 수정

```tsx
// 예시: src/app/projects/bitcoin-bot/page.tsx
<Image src="/images/projects/bitcoin-bot-dashboard.png" alt="..." />
```

### 2. 개인 정보 수정

#### 이메일 주소
- `src/app/contact/page.tsx`: 이메일 주소 변경
- `src/app/sponsor/page.tsx`: 이메일 주소 변경

#### SNS 링크
- `src/app/contact/page.tsx`: YouTube, Instagram, Naver Blog URL 변경

#### 도메인
- `src/app/sitemap.ts`: baseUrl 변경
- `src/app/robots.ts`: baseUrl 변경

### 3. 프로젝트 내용 수정

각 페이지의 소스 파일을 직접 수정하세요:
- 홈: `src/app/page.tsx`
- 소개: `src/app/about/page.tsx`
- 프로젝트: `src/app/projects/*/page.tsx`
- 앱: `src/app/apps/*/page.tsx`

### 4. 메타데이터 (SEO)

각 페이지 상단의 `metadata` 객체를 수정하세요:

```tsx
export const metadata: Metadata = {
  title: '페이지 제목',
  description: '페이지 설명',
  openGraph: {
    title: 'OG 제목',
    description: 'OG 설명',
  },
};
```

## 📝 체크리스트

배포 전 확인사항:

- [ ] 모든 placeholder 이미지를 실제 이미지로 교체
- [ ] 이메일 주소 및 SNS 링크 업데이트
- [ ] sitemap.ts 및 robots.ts의 도메인 변경
- [ ] Google Analytics 코드 추가 (선택)
- [ ] 오디오 파일 업로드 (채널 페이지)
- [ ] 모든 페이지 테스트 (모바일 포함)

## 🎨 디자인 커스터마이징

### 색상 변경

`tailwind.config.ts`에서 메인 색상 변경:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0EA5E9', // 현재 메인 색상
      // 원하는 색상으로 변경
    },
  },
}
```

### 폰트 변경

`src/app/layout.tsx`에서 폰트 설정 변경

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📞 문의

- 이메일: woojin.official@example.com
- GitHub: (GitHub 프로필 링크 추가)

---

Made with ❤️ by Woojin Lee
