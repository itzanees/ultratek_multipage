import React, { SVGProps } from 'react';

interface StructuralCivilIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const StructuralCivilIcon: React.FC<StructuralCivilIconProps> = ({ 
  size = 100, 
  color, 
  ...props 
}) => {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      {...props}
    >
      <defs>
        {/* Soft engineering-blueprint glow effect */}
        <filter id="structural-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Gradient shifting from high-visibility cyan to structural indigo */}
        <linearGradient id="structural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#22d3ee"} />
          <stop offset="100%" stopColor={color || "#6366f1"} />
        </linearGradient>
      </defs>

      <g filter="url(#structural-glow)" fill="none" stroke="url(#structural-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Foundation Grid Lines (Civil Blueprint Baseline) */}
        <line x1="10" y1="80" x2="90" y2="80" strokeWidth="4" />
        <line x1="20" y1="80" x2="20" y2="90" strokeWidth="2" opacity="0.4" />
        <line x1="40" y1="80" x2="40" y2="90" strokeWidth="2" opacity="0.4" />
        <line x1="60" y1="80" x2="60" y2="90" strokeWidth="2" opacity="0.4" />
        <line x1="80" y1="80" x2="80" y2="90" strokeWidth="2" opacity="0.4" />

        {/* Civil Engineering Survey/Compass Arc */}
        <path d="M 25,65 A 35,35 0 0,1 75,65" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />

        {/* Diagonal Structural Support Truss/Trusswork */}
        <polyline points="15,80 32,45 50,80 68,45 85,80" strokeWidth="3.5" />

        {/* Heavy Heavy-Duty Industrial Structural I-Beam (Upper Layer) */}
        <g id="i-beam" transform="translate(0, -5)">
          {/* Top Flange */}
          <line x1="15" y1="35" x2="85" y2="35" strokeWidth="5" />
          
          {/* Main Structural Web Connector */}
          <line x1="50" y1="35" x2="50" y2="45" strokeWidth="6" />
          
          {/* Bottom Flange */}
          <line x1="25" y1="45" x2="75" y2="45" strokeWidth="5" />
          
          {/* Structural Bolt Details */}
          <circle cx="35" cy="35" r="1" fill="currentColor" stroke="none" />
          <circle cx="65" cy="35" r="1" fill="currentColor" stroke="none" />
        </g>

        {/* Crane Tower / Vertical Column Element */}
        <line x1="15" y1="80" x2="15" y2="30" strokeWidth="4" />
        <line x1="85" y1="80" x2="85" y2="30" strokeWidth="4" />
      </g>
    </svg>
  );
};

export default StructuralCivilIcon;
