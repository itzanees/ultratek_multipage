import React, { SVGProps } from 'react';

interface ColdroomLightingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ColdroomLightingIcon: React.FC<ColdroomLightingIconProps> = ({ 
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
        <filter id="light-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <linearGradient id="light-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor={color || "#22d3ee"} />
          <stop offset="100%" stopColor={color || "#4f46e5"} />
        </linearGradient>
      </defs>

      <g filter="url(#light-glow)" fill="none" stroke="url(#light-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Ceiling Mount / Unistrut Support Channel */}
        <line x1="30" y1="12" x2="70" y2="12" strokeWidth="3" opacity="0.5" />
        <line x1="40" y1="12" x2="40" y2="20" strokeWidth="2" />
        <line x1="60" y1="12" x2="60" y2="20" strokeWidth="2" />

        {/* Heavy-Duty IP65 Vapor-Proof Luminaire Enclosure Housing */}
        <rect x="25" y="20" width="50" height="12" rx="4" strokeWidth="4" fill="url(#light-grad)" opacity="0.05" />
        
        {/* Inner High-Efficiency LED Matrix Strip Line */}
        <line x1="32" y1="26" x2="68" y2="26" strokeWidth="3" strokeDasharray="5 3" />

        {/* High-Lumen Projected Dynamic Light Rays */}
        <g opacity="0.75" strokeWidth="2.5">
          <line x1="30" y1="40" x2="15" y2="70" />
          <line x1="40" y1="40" x2="35" y2="75" />
          <line x1="50" y1="40" x2="50" y2="78" />
          <line x1="60" y1="40" x2="65" y2="75" />
          <line x1="70" y1="40" x2="85" y2="70" />
        </g>

        {/* Micro Frost / Low-Temperature Compliance Elements */}
        <g strokeWidth="2" opacity="0.9" transform="translate(50, 62)">
          {/* Subtle ice flake symbol confirming climate rating */}
          <line x1="0" y1="-6" x2="0" y2="6" />
          <line x1="-5" y1="-3" x2="5" y2="3" />
          <line x1="-5" y1="3" x2="5" y2="-3" />
          <circle cx="0" cy="0" r="1.5" fill="currentColor" stroke="none" />
        </g>
      </g>
    </svg>
  );
};

export default ColdroomLightingIcon;
