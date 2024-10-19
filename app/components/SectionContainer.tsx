import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  children,
  className = ''
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative px-4 pt-32 pb-16 lg:py-32 overflow-hidden ${className}`}
      data-scroll-section
    >
      {children}
    </section>
  );
}
