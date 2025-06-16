import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  features: string[];
  learnMoreColor: string;
}

export const ServiceCard = ({ 
  icon: Icon,
  iconColor,
  title,
  description,
  features,
  learnMoreColor
}: ServiceCardProps) => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="card-premium rounded-xl p-8 group">
      <div className="mb-6 p-4 rounded-xl w-fit" style={{ background: 'var(--gradient-primary)' }} aria-hidden="true">
        <Icon className={cn("h-8 w-8 text-white drop-shadow-sm")} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="rounded-full bg-emerald-500 p-1.5 mt-0.5 mr-3 flex-shrink-0 w-5 h-5 flex items-center justify-center">
              <svg 
                className="text-white h-3 w-3" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => scrollToSection('#contact')}
        className="font-semibold text-primary hover:text-primary/80 transition-colors"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
      </button>
    </article>
  );
};
