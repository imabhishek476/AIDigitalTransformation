import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  children: ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
}

export const SocialIcon = ({ 
  children, 
  className,
  href = "#",
  ariaLabel
}: SocialIconProps) => {
  return (
    <a 
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
};
