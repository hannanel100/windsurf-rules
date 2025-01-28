import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg transition-colors duration-200 font-medium';
  
  const variants = {
    primary: 'bg-[#00DDB3] text-white hover:bg-[#00B392]',
    secondary: 'border text-[#00DDB3] hover:bg-opacity-10 hover:bg-[#00DDB3] dark:border-[#2A2A2A] dark:hover:bg-[#2A2A2A]'
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
