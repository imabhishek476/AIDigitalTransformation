import { LogoVariation } from '@/components/ui/logo-variations';

export default function LogoDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
            NexiFront Logo Variations
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Current Design</h2>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(8, 16)">
                  <circle cx="13" cy="14" r="16" fill="#2D3748" opacity="0.05" />
                  <path
                    d="M2 6 L2 22 L5 22 L5 12 L9 20 L12 20 L12 6 L9 6 L9 16 L5 8 L2 8 Z"
                    fill="#2D3748"
                  />
                  <path
                    d="M14 6 L14 22 L17 22 L17 12 L21 20 L24 20 L24 6 L21 6 L21 16 L17 8 L14 8 Z"
                    fill="#E2725B"
                    opacity="0.9"
                  />
                  <rect x="11" y="13" width="4" height="2" fill="#2D3748" opacity="0.3" />
                </g>
                <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                  NEXIFRONT
                </text>
                <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Option A: Bold Geometric Stack</h3>
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(8, 16)">
                    <rect x="2" y="6" width="22" height="16" fill="#2D3748" opacity="0.05" rx="2" />
                    <path
                      d="M4 8 L4 20 L7 20 L7 12 L11 18 L14 18 L14 8 L11 8 L11 16 L7 10 L4 10 Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M16 8 L16 20 L19 20 L19 12 L23 18 L26 18 L26 8 L23 8 L23 16 L19 10 L16 10 Z"
                      fill="#2D3748"
                    />
                    <rect x="13" y="12" width="4" height="4" fill="#E2725B" opacity="0.8" />
                  </g>
                  <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                    NEXIFRONT
                  </text>
                  <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-4">Bold geometric design with central connecting square element</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Option B: Diamond Frame</h3>
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(8, 16)">
                    <path
                      d="M13 2 L24 13 L13 24 L2 13 Z"
                      fill="none"
                      stroke="#E2725B"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <path
                      d="M5 8 L5 18 L7.5 18 L7.5 12 L10.5 16 L13 16 L13 8 L10.5 8 L10.5 14 L7.5 10 L5 10 Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M13 8 L13 18 L15.5 18 L15.5 12 L18.5 16 L21 16 L21 8 L18.5 8 L18.5 14 L15.5 10 L13 10 Z"
                      fill="#2D3748"
                    />
                  </g>
                  <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                    NEXIFRONT
                  </text>
                  <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-4">Diamond frame with interlocked N letters for dynamic feel</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Option C: Overlapping Circles</h3>
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(8, 16)">
                    <circle cx="8" cy="13" r="10" fill="#2D3748" opacity="0.05" />
                    <circle cx="18" cy="13" r="10" fill="#E2725B" opacity="0.05" />
                    <path
                      d="M3 8 L3 18 L5.5 18 L5.5 12 L8.5 16 L11 16 L11 8 L8.5 8 L8.5 14 L5.5 10 L3 10 Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M15 8 L15 18 L17.5 18 L17.5 12 L20.5 16 L23 16 L23 8 L20.5 8 L20.5 14 L17.5 10 L15 10 Z"
                      fill="#2D3748"
                    />
                  </g>
                  <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                    NEXIFRONT
                  </text>
                  <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-4">Overlapping circles create visual connection between the N letters</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Option D: Tech Grid</h3>
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(8, 16)">
                    <rect x="0" y="6" width="26" height="16" fill="none" stroke="#E2725B" strokeWidth="0.5" opacity="0.3" />
                    <rect x="4" y="8" width="6" height="2" fill="#2D3748" opacity="0.1" />
                    <rect x="16" y="8" width="6" height="2" fill="#2D3748" opacity="0.1" />
                    <path
                      d="M4 8 L4 18 L6.5 18 L6.5 12 L9.5 16 L12 16 L12 8 L9.5 8 L9.5 14 L6.5 10 L4 10 Z"
                      fill="#2D3748"
                    />
                    <path
                      d="M14 8 L14 18 L16.5 18 L16.5 12 L19.5 16 L22 16 L22 8 L19.5 8 L19.5 14 L16.5 10 L14 10 Z"
                      fill="#2D3748"
                    />
                    <circle cx="12" cy="12" r="1" fill="#E2725B" />
                    <circle cx="14" cy="14" r="1" fill="#E2725B" />
                  </g>
                  <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                    NEXIFRONT
                  </text>
                  <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                </svg>
              </div>
              <p className="text-sm text-gray-600 mt-4">Tech-inspired grid pattern with connecting dots for digital feel</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Refined Double-N Logo Concepts
            </h2>
            
            <div className="grid gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option E: Bold Interlocked N's</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <path
                        d="M2 4 L6 4 L6 14 L14 4 L18 4 L18 24 L14 24 L14 14 L6 24 L2 24 Z"
                        fill="#2D3748"
                      />
                      <path
                        d="M10 4 L14 4 L14 14 L22 4 L26 4 L26 24 L22 24 L22 14 L14 24 L10 24 Z"
                        fill="#E2725B"
                        opacity="0.8"
                      />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="300" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="130" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Bold overlapping N letters with strong weight contrast and clean lines</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option F: Geometric N Stack</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <rect x="2" y="4" width="3" height="20" fill="#2D3748" />
                      <rect x="17" y="4" width="3" height="20" fill="#2D3748" />
                      <rect x="5" y="12" width="12" height="3" fill="#2D3748" transform="rotate(25 11 13.5)" />
                      
                      <rect x="8" y="7" width="3" height="14" fill="#E2725B" />
                      <rect x="20" y="7" width="3" height="14" fill="#E2725B" />
                      <rect x="11" y="12.5" width="9" height="2" fill="#E2725B" transform="rotate(25 15.5 13.5)" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="300" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="130" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Layered geometric N forms with bold structural elements</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option G: Mirrored N Frame</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <path
                        d="M2 4 L5 4 L5 13 L11 4 L14 4 L14 24 L11 24 L11 15 L5 24 L2 24 Z"
                        fill="#2D3748"
                      />
                      <path
                        d="M26 4 L23 4 L23 13 L17 4 L14 4 L14 24 L17 24 L17 15 L23 24 L26 24 Z"
                        fill="#E2725B"
                        transform="scale(-1,1) translate(-28,0)"
                      />
                      <rect x="13" y="13" width="2" height="2" fill="#2D3748" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="300" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="130" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Mirrored N letters creating balanced symmetrical frame design</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option H: Stepped N Duo</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <path
                        d="M2 4 L5 4 L5 11 L8 11 L8 8 L11 8 L11 15 L14 15 L14 24 L11 24 L11 17 L8 17 L8 20 L5 20 L5 24 L2 24 Z"
                        fill="#2D3748"
                      />
                      <path
                        d="M12 8 L15 8 L15 15 L18 15 L18 12 L21 12 L21 19 L24 19 L24 28 L21 28 L21 21 L18 21 L18 24 L15 24 L15 28 L12 28 Z"
                        fill="#E2725B"
                        transform="translate(2,-4)"
                      />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="300" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="130" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Stepped geometric N forms with offset positioning for dynamic balance</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option I: Minimal N Bridge</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <rect x="2" y="4" width="4" height="20" fill="#2D3748" />
                      <rect x="18" y="4" width="4" height="20" fill="#2D3748" />
                      <rect x="6" y="12" width="12" height="4" fill="#E2725B" transform="rotate(22 12 14)" />
                      
                      <rect x="6" y="6" width="3" height="16" fill="#E2725B" opacity="0.7" />
                      <rect x="15" y="6" width="3" height="16" fill="#E2725B" opacity="0.7" />
                      <rect x="9" y="13" width="6" height="2" fill="#2D3748" transform="rotate(22 12 14)" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="300" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="130" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Clean minimal design with strong N bridge connection and subtle layering</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <p className="text-center text-gray-600">
                These refined double-N concepts focus on bolder symbol weight with lighter text treatment.
                Each design maintains clean geometry, proper alignment, and sophisticated balance for professional branding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}