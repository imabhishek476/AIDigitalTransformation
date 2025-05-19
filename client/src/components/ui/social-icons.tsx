import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  children: ReactNode;
  className?: string;
}

export const SocialIcon = ({ 
  children, 
  className 
}: SocialIconProps) => {
  return (
    <a 
      href="#" 
      className={cn(
        "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
};
