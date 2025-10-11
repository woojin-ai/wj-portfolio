'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  // 로드된 이미지만 필터링
  const validIndices = images
    .map((_, index) => index)
    .filter(index => !failedImages.has(index));

  // 모든 이미지가 실패했을 때
  if (validIndices.length === 0 && failedImages.size === images.length) {
    return (
      <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center text-gray-500">
          <p className="text-lg mb-2">📱 앱 스크린샷</p>
          <p className="text-sm">이미지를 준비해주세요</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-100 rounded-2xl p-8 min-h-[500px] flex items-center justify-center">
      {/* 이미지 */}
      <div className="relative w-full max-w-sm mx-auto">
        <div className="relative aspect-[9/16] bg-white rounded-2xl shadow-2xl overflow-hidden">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={src}
                alt={`${alt} - ${index + 1}`}
                fill
                className="object-contain"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* 좌우 버튼 - 로드된 이미지가 2개 이상일 때만 표시 */}
        {loadedImages.size > 1 && (
          <>
            {/* 왼쪽 버튼 */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="이전 이미지"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* 오른쪽 버튼 */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="다음 이미지"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* 인디케이터 - 로드된 이미지가 2개 이상일 때만 표시 */}
      {loadedImages.size > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {validIndices.map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-sky-600 w-8'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`${index + 1}번째 이미지로 이동`}
            />
          ))}
        </div>
      )}

      {/* 이미지 카운터 */}
      {loadedImages.size > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {loadedImages.size}
        </div>
      )}
    </div>
  );
}
