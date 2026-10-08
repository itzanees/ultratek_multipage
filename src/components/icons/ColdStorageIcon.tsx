import React, { SVGProps } from 'react';

interface ColdStorageIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ColdStorageIcon: React.FC<ColdStorageIconProps> = ({ 
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
        {/* Soft frost glow effect to emphasize cooling atmosphere */}
        <filter id="cold-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Custom gradient matching standard corporate high-tech climate aesthetics */}
        <linearGradient id="cold-facility-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#38bdf8"} />
          <stop offset="100%" stopColor={color || "#4f46e5"} />
        </linearGradient>
      </defs>

      <g filter="url(#cold-glow)" fill="none" stroke="url(#cold-facility-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Industrial Warehouse Structure / Facility Frame */}
        <path d="M10,75 L10,40 L35,25 L65,25 L90,40 L90,75 Z" />
        
        {/* Foundation line */}
        <line x1="5" y1="75" x2="95" y2="75" strokeWidth="4" />

        {/* Double Loading Dock Doors */}
        <rect x="22" y="55" width="20" height="20" strokeWidth="3.5" />
        <rect x="58" y="55" width="20" height="20" strokeWidth="3.5" />
        
        {/* Loading Dock Panel Line Accents */}
        <line x1="32" y1="55" x2="32" y2="75" strokeWidth="2" opacity="0.6" />
        <line x1="68" y1="55" x2="68" y2="75" strokeWidth="2" opacity="0.6" />

        {/* Central Climate Control / Snowflake Core Emblem */}
        <g id="emblem-snowflake" strokeWidth="3.5" transform="translate(50, 38)">
          {/* Six structural axes */}
          <line x1="0" y1="-12" x2="0" y2="12" />
          <line x1="-10.4" y1="-6" x2="10.4" y2="6" />
          <line x1="-10.4" y1="6" x2="10.4" y2="-6" />
          
          {/* Chevron Ice Branch Accents */}
          <path d="M-3,-7 L0,-10 L3,-7" />
          <path d="M-3,7 L0,10 L3,7" />
          <path d="M7,-2 L9,-5 L6,-6" />
          <path d="M-7,2 L-9,5 L-6,6" />
          <path d="M6,6 L9,5 L7,2" />
          <path d="M-6,-6 L-9,-5 L-7,-2" />
        </g>
      </g>
    </svg>
  );
};

export default ColdStorageIcon;
