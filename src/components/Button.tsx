
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative overflow-hidden font-medium rounded-lg transition-all duration-300 focus:outline-none',
        // Variants
        variant === 'primary' && 'bg-cosmic-gradient text-white shadow-cosmic hover:shadow-lg',
        variant === 'secondary' && 'bg-white text-cosmic-dark border border-cosmic-light hover:bg-cosmic-light/10',
        variant === 'outline' && 'bg-transparent border border-cosmic-light text-cosmic-dark hover:bg-cosmic-light/10',
        // Sizes
        size === 'sm' && 'px-4 py-1 text-sm',
        size === 'md' && 'px-6 py-2',
        size === 'lg' && 'px-8 py-3 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
