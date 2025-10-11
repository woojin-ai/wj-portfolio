import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm transition-all ${
        hover ? 'hover:-translate-y-0.5 hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
