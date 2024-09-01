'use client';
import { cn } from '@/app/utils/cn';

export const Highlight = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-indigo-700/[0.2] text-indigo-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};
