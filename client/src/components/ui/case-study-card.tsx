import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  image: string;
  industry: string;
  industryColor: string;
  title: string;
  description: string;
  resultValue: string;
  linkColor: string;
}

export const CaseStudyCard = ({ 
  image,
  industry,
  industryColor,
  title,
  description,
  resultValue,
  linkColor
}: CaseStudyCardProps) => {
  return (
    <div className="bg-light rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <Badge variant="outline" className={cn("bg-opacity-10 px-3 py-1 rounded-full text-xs font-semibold", industryColor)}>
          {industry}
        </Badge>
        <h3 className="text-xl font-bold mt-3 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Results: <span className="text-success font-semibold">{resultValue}</span>
          </span>
          <a href="#" className={cn("font-medium hover:underline", linkColor)}>
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
};
