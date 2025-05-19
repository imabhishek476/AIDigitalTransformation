interface ClientLogoProps {
  name: string;
  logoUrl: string;
  industry: string;
}

export function ClientLogo({ name, logoUrl, industry }: ClientLogoProps) {
  return (
    <div className="flex flex-col items-center p-6">
      <img 
        src={logoUrl} 
        alt={`${name} logo`} 
        className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
      <span className="mt-3 text-sm text-muted-foreground">{industry}</span>
    </div>
  );
}