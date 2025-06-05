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
              Single Character Abstract Designs
            </h2>
            
            <div className="grid gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option E: Crystalline Prism</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <path
                        d="M13 4 L22 10 L22 18 L13 24 L4 18 L4 10 Z"
                        fill="#2D3748"
                        stroke="#E2725B"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M13 4 L13 24 M4 10 L22 18 M22 10 L4 18"
                        stroke="#E2725B"
                        strokeWidth="0.5"
                        opacity="0.6"
                      />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Crystalline hexagonal prism with internal facets for sophistication and depth</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option F: Infinity Node</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <path
                        d="M6 14 Q13 8 20 14 Q13 20 6 14 Z"
                        fill="none"
                        stroke="#2D3748"
                        strokeWidth="3"
                      />
                      <circle cx="6" cy="14" r="3" fill="#2D3748" />
                      <circle cx="20" cy="14" r="3" fill="#E2725B" />
                      <circle cx="13" cy="14" r="1.5" fill="#2D3748" opacity="0.6" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Infinity symbol with nodes representing endless possibilities and connections</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option G: Spiral Convergence</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <path
                        d="M13 4 Q20 4 20 11 Q20 18 13 18 Q6 18 6 11 Q6 8 9 8"
                        fill="none"
                        stroke="#2D3748"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 24 Q6 24 6 17 Q6 10 13 10 Q20 10 20 17 Q20 20 17 20"
                        fill="none"
                        stroke="#E2725B"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="13" cy="14" r="2" fill="#2D3748" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Dual spirals converging at center point representing growth and transformation</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option H: Quantum Gate</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <rect x="4" y="6" width="18" height="16" rx="2" fill="none" stroke="#2D3748" strokeWidth="2" />
                      <rect x="8" y="10" width="10" height="8" rx="1" fill="#E2725B" opacity="0.3" />
                      <circle cx="7" cy="14" r="1.5" fill="#2D3748" />
                      <circle cx="19" cy="14" r="1.5" fill="#2D3748" />
                      <line x1="9" y1="14" x2="17" y2="14" stroke="#E2725B" strokeWidth="2" strokeDasharray="2,2" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Quantum gate symbol representing digital transformation and advanced technology</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Option I: Vortex Matrix</h3>
                <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(8, 16)">
                      <defs>
                        <radialGradient id="vortexGradient" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#E2725B" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#2D3748" stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      <circle cx="13" cy="14" r="12" fill="url(#vortexGradient)" />
                      <path
                        d="M13 6 L17 10 L13 14 L17 18 L13 22 L9 18 L13 14 L9 10 Z"
                        fill="#2D3748"
                        stroke="#E2725B"
                        strokeWidth="1"
                      />
                      <circle cx="13" cy="14" r="3" fill="none" stroke="#E2725B" strokeWidth="1.5" />
                    </g>
                    <text x="45" y="32" fontFamily="system-ui" fontSize="16" fontWeight="400" letterSpacing="0.8px" fill="#2D3748">
                      NEXIFRONT
                    </text>
                    <line x1="45" y1="38" x2="140" y2="38" stroke="#E2725B" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-4">Dynamic vortex with geometric star center representing energy and innovation</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <p className="text-center text-gray-600">
                Each single character design maintains sophistication while providing unique geometric abstraction.
                These designs emphasize balance, boldness, and modern aesthetics suitable for digital transformation branding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}