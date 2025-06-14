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
      {/* Option E: Bold Interlocked N's */}
      <g transform="translate(8, 16)">
        <path
          d="M2 4 L6 4 L6 14 L14 4 L18 4 L18 24 L14 24 L14 14 L6 24 L2 24 Z"
          fill="#2D3748"
        />
        <path
          d="M10 4 L14 4 L14 14 L22 4 L26 4 L26 24 L22 24 L22 14 L14 24 L10 24 Z"
          fill="#34D399"
          opacity="0.8"
        />
      </g>
      
      {/* NEXIFRONT text with lighter weight */}
      <text 
        x="45" 
        y="32" 
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
        fontSize="16" 
        fontWeight="300" 
        letterSpacing="0.8px" 
        fill="#2D3748"
      >
        NEXIFRONT
      </text>
      
      {/* Simple underline accent */}
      <line
        x1="45"
        y1="38"
        x2="130"
        y2="38"
        stroke="#34D399"
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