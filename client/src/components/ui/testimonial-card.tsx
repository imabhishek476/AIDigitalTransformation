import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  authorInitials: string;
  authorName: string;
  authorTitle: string;
  authorColor: string;
}

export const TestimonialCard = ({ 
  quote,
  authorInitials,
  authorName,
  authorTitle,
  authorColor
}: TestimonialCardProps) => {
  return (
    <div className="card-premium p-8 rounded-xl group">
      <div className="flex items-center text-secondary mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current drop-shadow-sm" />
        ))}
      </div>
      <blockquote className="text-muted-foreground italic mb-8 text-lg leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mr-4 ${authorColor}`} style={{ background: 'var(--gradient-primary)' }}>
          <span className="font-bold text-white text-lg">{authorInitials}</span>
        </div>
        <div>
          <p className="font-bold text-foreground text-lg">{authorName}</p>
          <p className="text-sm text-muted-foreground font-medium">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};
