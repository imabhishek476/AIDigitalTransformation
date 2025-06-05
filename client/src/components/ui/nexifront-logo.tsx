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
      {/* Option 1: Interlocked N symbols with modern twist */}
      <g transform="translate(8, 16)">
        {/* Background circle for contrast */}
        <circle cx="13" cy="14" r="16" fill="#2D3748" opacity="0.05" />
        
        {/* First N with angled cuts */}
        <path
          d="M2 6 L2 22 L5 22 L5 12 L9 20 L12 20 L12 6 L9 6 L9 16 L5 8 L2 8 Z"
          fill="#2D3748"
        />
        
        {/* Second N with slight offset and gradient effect */}
        <path
          d="M14 6 L14 22 L17 22 L17 12 L21 20 L24 20 L24 6 L21 6 L21 16 L17 8 L14 8 Z"
          fill="#E2725B"
          opacity="0.9"
        />
        
        {/* Connecting element between N's */}
        <rect x="11" y="13" width="4" height="2" fill="#2D3748" opacity="0.3" />
      </g>
      
      {/* NEXIFRONT text with smaller, balanced typography */}
      <text 
        x="45" 
        y="32" 
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
        fontSize="16" 
        fontWeight="400" 
        letterSpacing="0.8px" 
        fill="#2D3748"
      >
        NEXIFRONT
      </text>
      
      {/* Simple underline accent */}
      <line
        x1="45"
        y1="38"
        x2="140"
        y2="38"
        stroke="#E2725B"
        strokeWidth="1"
      />
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