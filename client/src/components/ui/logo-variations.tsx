interface LogoVariationProps {
  className?: string;
  width?: number;
  height?: number;
  variant: 'option1' | 'option2' | 'option3' | 'option4';
}

export function LogoVariation({ className = "", width = 200, height = 60, variant }: LogoVariationProps) {
  const renderVariant = () => {
    switch (variant) {
      case 'option1':
        return (
          <g transform="translate(8, 16)">
            {/* Background circle for contrast */}
            <circle cx="13" cy="14" r="16" fill="#2D3748" opacity="0.05" />
            
            {/* First N with angled cuts */}
            <path
              d="M2 6 L2 22 L5 22 L5 12 L9 20 L12 20 L12 6 L9 6 L9 16 L5 8 L2 8 Z"
              fill="#2D3748"
            />
            
            {/* Second N with color accent */}
            <path
              d="M14 6 L14 22 L17 22 L17 12 L21 20 L24 20 L24 6 L21 6 L21 16 L17 8 L14 8 Z"
              fill="#34D399"
              opacity="0.9"
            />
            
            {/* Connecting element */}
            <rect x="11" y="13" width="4" height="2" fill="#2D3748" opacity="0.3" />
          </g>
        );

      case 'option2':
        return (
          <g transform="translate(10, 18)">
            {/* Hexagonal background */}
            <path
              d="M8 4 L18 4 L23 12 L18 20 L8 20 L3 12 Z"
              fill="#2D3748"
              opacity="0.08"
            />
            
            {/* Stylized double N with modern cuts */}
            <path
              d="M5 7 L5 17 L7 17 L7 11 L10 16 L12 16 L12 7 L10 7 L10 13 L7 8 L5 8 Z"
              fill="#2D3748"
            />
            <path
              d="M14 7 L14 17 L16 17 L16 11 L19 16 L21 16 L21 7 L19 7 L19 13 L16 8 L14 8 Z"
              fill="#2D3748"
            />
            
            {/* Modern connecting arc */}
            <path
              d="M12 10 Q13 12 14 10"
              stroke="#E2725B"
              strokeWidth="2"
              fill="none"
            />
          </g>
        );

      case 'option3':
        return (
          <g transform="translate(8, 16)">
            {/* Overlapping squares for tech feel */}
            <rect x="0" y="6" width="14" height="14" fill="#2D3748" opacity="0.05" />
            <rect x="12" y="8" width="14" height="14" fill="#E2725B" opacity="0.05" />
            
            {/* Bold N with cut-out effect */}
            <path
              d="M3 8 L3 20 L6 20 L6 13 L9 18 L12 18 L12 8 L9 8 L9 15 L6 10 L3 10 Z"
              fill="#2D3748"
            />
            
            {/* Second N with negative space effect */}
            <path
              d="M15 8 L15 20 L18 20 L18 13 L21 18 L24 18 L24 8 L21 8 L21 15 L18 10 L15 10 Z"
              fill="#2D3748"
            />
            
            {/* Tech dots for connection */}
            <circle cx="12" cy="12" r="1" fill="#E2725B" />
            <circle cx="15" cy="16" r="1" fill="#E2725B" />
          </g>
        );

      case 'option4':
        return (
          <g transform="translate(8, 16)">
            {/* Circular container with gradient */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D3748" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="13" cy="14" r="15" fill="url(#logoGradient)" />
            
            {/* Mirrored N design */}
            <path
              d="M4 8 L4 20 L7 20 L7 12 L10 18 L13 18 L13 8 L10 8 L10 16 L7 10 L4 10 Z"
              fill="#2D3748"
            />
            <path
              d="M13 8 L16 8 L19 14 L22 8 L22 20 L19 20 L19 12 L16 18 L13 18 Z"
              fill="#2D3748"
            />
            
            {/* Central divider with accent */}
            <line x1="13" y1="8" x2="13" y2="20" stroke="#34D399" strokeWidth="1" opacity="0.5" />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        {variant === 'option1' && 'Option 1: Interlocked with Color Accent'}
        {variant === 'option2' && 'Option 2: Hexagonal Frame with Connecting Arc'}
        {variant === 'option3' && 'Option 3: Layered Squares with Tech Dots'}
        {variant === 'option4' && 'Option 4: Circular Container with Mirrored Design'}
      </h3>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 200 60" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderVariant()}
        
        {/* NEXIFRONT text */}
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
        
        {/* Underline accent */}
        <line
          x1="45"
          y1="38"
          x2="140"
          y2="38"
          stroke="#059669"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}