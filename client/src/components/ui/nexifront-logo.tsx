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
      {/* Modern geometric N symbols inspired by the reference */}
      <g transform="translate(8, 15)">
        {/* First N - bolder design */}
        <path
          d="M0 6 L0 24 L3.5 24 L3.5 12 L8 20 L11.5 20 L11.5 6 L8 6 L8 18 L3.5 10 L0 10 Z"
          fill="#2D3748"
          stroke="#2D3748"
          strokeWidth="1"
        />
        {/* Second N overlapping - bolder design */}
        <path
          d="M12 6 L12 24 L15.5 24 L15.5 12 L20 20 L23.5 20 L23.5 6 L20 6 L20 18 L15.5 10 L12 10 Z"
          fill="#2D3748"
          stroke="#2D3748"
          strokeWidth="1"
        />
      </g>
      
      {/* NEXIFRONT text with lighter typography */}
      <text 
        x="42" 
        y="28" 
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif" 
        fontSize="21" 
        fontWeight="400" 
        letterSpacing="1.1px" 
        fill="#2D3748"
      >
        NEXIFRONT
      </text>
      
      {/* Simple underline accent */}
      <line
        x1="42"
        y1="35"
        x2="170"
        y2="35"
        stroke="#E2725B"
        strokeWidth="1.5"
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