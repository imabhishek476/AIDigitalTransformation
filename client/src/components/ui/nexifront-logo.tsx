interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function NexiFrontLogo({ className = "", width = 200, height = 60 }: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 60" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A9AD9" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#1B365D" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3A9AD9" />
          <stop offset="100%" stopColor="#1B365D" />
        </linearGradient>
      </defs>
      
      {/* Logo mark - geometric design */}
      <g transform="translate(10, 10)">
        {/* Main circle */}
        <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
        
        {/* Inner geometric design - representing digital transformation */}
        <g fill="white">
          {/* Forward arrow/chevron pattern */}
          <path d="M12 12 L20 20 L12 28 L16 28 L24 20 L16 12 Z" opacity="0.9" />
          {/* Tech dots pattern */}
          <circle cx="8" cy="15" r="1.5" />
          <circle cx="8" cy="20" r="1.5" />
          <circle cx="8" cy="25" r="1.5" />
          <circle cx="32" cy="15" r="1.5" />
          <circle cx="32" cy="20" r="1.5" />
          <circle cx="32" cy="25" r="1.5" />
        </g>
      </g>
      
      {/* Company name */}
      <g transform="translate(55, 15)">
        <text 
          x="0" 
          y="20" 
          fontFamily="Arial, sans-serif" 
          fontSize="24" 
          fontWeight="bold" 
          fill="url(#textGradient)"
        >
          NexiFront
        </text>
        <text 
          x="0" 
          y="38" 
          fontFamily="Arial, sans-serif" 
          fontSize="9" 
          fill="#6B7280"
          letterSpacing="1px"
        >
          DIGITAL TRANSFORMATION
        </text>
      </g>
    </svg>
  );
}

export function NexiFrontIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A9AD9" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#1B365D" />
        </linearGradient>
      </defs>
      
      {/* Main circle */}
      <circle cx="20" cy="20" r="18" fill="url(#iconGradient)" />
      
      {/* Inner geometric design */}
      <g fill="white">
        {/* Forward arrow/chevron pattern */}
        <path d="M12 12 L20 20 L12 28 L16 28 L24 20 L16 12 Z" opacity="0.9" />
        {/* Tech dots pattern */}
        <circle cx="8" cy="15" r="1.5" />
        <circle cx="8" cy="20" r="1.5" />
        <circle cx="8" cy="25" r="1.5" />
        <circle cx="32" cy="15" r="1.5" />
        <circle cx="32" cy="20" r="1.5" />
        <circle cx="32" cy="25" r="1.5" />
      </g>
    </svg>
  );
}