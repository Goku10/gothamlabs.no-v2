import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`bg-gotham-900 border border-gotham-800 rounded-gotham p-6 transition-all duration-200 hover:border-gotham-700 hover:shadow-gotham ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
