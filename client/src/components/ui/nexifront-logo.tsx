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
      {/* Clean geometric N symbols */}
      <g transform="translate(10, 18)">
        {/* First N - clean design */}
        <path
          d="M0 4 L0 20 L3 20 L3 10 L7 18 L10 18 L10 4 L7 4 L7 14 L3 6 L0 6 Z"
          fill="#2D3748"
        />
        {/* Second N overlapping - clean design */}
        <path
          d="M12 4 L12 20 L15 20 L15 10 L19 18 L22 18 L22 4 L19 4 L19 14 L15 6 L12 6 Z"
          fill="#2D3748"
        />
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