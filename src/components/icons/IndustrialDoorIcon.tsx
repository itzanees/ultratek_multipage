import React, { SVGProps } from 'react';

interface IndustrialDoorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const IndustrialDoorIcon: React.FC<IndustrialDoorIconProps> = ({ 
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
        <filter id="door-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <linearGradient id="door-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#38bdf8"} />
          <stop offset="100%" stopColor={color || "#0284c7"} />
        </linearGradient>
      </defs>

      <g filter="url(#door-glow)" fill="none" stroke="url(#door-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Heavy-Duty Concrete/Steel Portal Frame */}
        <path d="M 15,85 L 15,20 L 85,20 L 85,85" strokeWidth="5" />
        <line x1="5" y1="85" x2="95" y2="85" strokeWidth="4" />

        {/* Top Roll-up Hood / Shutter Storage Enclosure */}
        <rect x="20" y="24" width="60" height="12" rx="2" fill="url(#door-grad)" opacity="0.1" />

        {/* Sectional Shutter Slats (Slightly rolled up at the bottom for action) */}
        <line x1="20" y1="42" x2="80" y2="42" strokeWidth="3" />
        <line x1="20" y1="49" x2="80" y2="49" strokeWidth="3" />
        <line x1="20" y1="56" x2="80" y2="56" strokeWidth="3" />
        <line x1="20" y1="63" x2="80" y2="63" strokeWidth="3" />
        <line x1="20" y1="70" x2="80" y2="70" strokeWidth="4" /> {/* Heavy bottom bar */}

        {/* Structural Safety Tracks & Chain Guide Indicators */}
        <line x1="20" y1="36" x2="20" y2="70" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <line x1="80" y1="36" x2="80" y2="70" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

        {/* Industrial Handle / Lock Assembly */}
        <line x1="44" y1="66" x2="56" y2="66" strokeWidth="3" />

        {/* Motion/Safety Sensor Indicator Eye */}
        <circle cx="50" cy="14" r="2" fill="currentColor" stroke="none" />
        <path d="M 44,11 A 8,8 0 0,0 56,11" strokeWidth="1.5" opacity="0.7" />
      </g>
    </svg>
  );
};

export default IndustrialDoorIcon;
