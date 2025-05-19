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
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">
        {quote}
      </p>
      <div className="flex items-center">
        <div className={`w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4 ${authorColor}`}>
          <span className="font-bold">{authorInitials}</span>
        </div>
        <div>
          <p className="font-bold">{authorName}</p>
          <p className="text-sm text-gray-500">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};
