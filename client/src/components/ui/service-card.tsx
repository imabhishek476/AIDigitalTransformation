import { ArrowRight } from 'lucide-react';
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
    <div className="bg-light rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={cn("mb-4", iconColor)}>
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="text-success mt-1 mr-2 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => scrollToSection('#contact')}
        className={cn(
          "font-medium hover:underline inline-flex items-center",
          learnMoreColor
        )}
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};
