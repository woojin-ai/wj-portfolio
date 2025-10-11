export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8">
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} WJ. All rights reserved.</p>
          <p className="mt-2">
            AI-어시스트 개발로 자동화와 효율을 설계합니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
