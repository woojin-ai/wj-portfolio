import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto max-w-[1200px] px-6 py-12 md:px-8 ${className}`}>
      {children}
    </section>
  );
}
