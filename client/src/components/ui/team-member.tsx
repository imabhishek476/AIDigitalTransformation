import { Linkedin, Twitter, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLink {
  type: 'linkedin' | 'twitter' | 'github';
  url: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  titleColor: string;
  description: string;
  socials: SocialLink[];
}

export const TeamMember = ({ 
  image,
  name,
  title,
  titleColor,
  description,
  socials
}: TeamMemberProps) => {
  const renderSocialIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      case 'github':
        return <Github className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center">
      <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${title}`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className={cn("font-medium mb-2", titleColor)}>{title}</p>
      <p className="text-gray-600 text-sm mb-3">
        {description}
      </p>
      <div className="flex justify-center space-x-3">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            className={`text-gray-400 hover:${titleColor} transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderSocialIcon(social.type)}
          </a>
        ))}
      </div>
    </div>
  );
};
