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
    <div className="card-premium rounded-xl overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover" 
        />
      </div>
      <div className="p-6">
        <Badge variant="outline" className={cn("bg-primary/10 border-primary/20 px-3 py-1 rounded-full text-xs font-semibold text-primary", industryColor)}>
          {industry}
        </Badge>
        <h3 className="text-xl font-bold mt-4 mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Results</span>
            <span className="text-lg font-bold text-gradient-secondary">{resultValue}</span>
          </div>
          <button className="font-semibold text-primary hover:text-primary/80 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
