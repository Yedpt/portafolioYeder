import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  ...props 
}: ButtonProps) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
