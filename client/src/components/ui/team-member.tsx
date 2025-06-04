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
    <div className="card-premium p-8 rounded-xl text-center group">
      <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/50 shadow-lg">
        <img 
          src={image} 
          alt={`${name} - ${title}`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
      <p className={cn("font-semibold mb-4 text-gradient-primary", titleColor)}>{title}</p>
      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex justify-center space-x-4">
        {socials.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
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
