import React, { SVGProps } from 'react';

interface LogisticsServiceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const LogisticsServiceIcon: React.FC<LogisticsServiceIconProps> = ({ size = 100, color, ...props }) => {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      {...props}
    >
      <defs>
        <filter id="logistics-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="logistics-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="50%" stopColor={color || "#fb923c"} />
          <stop offset="100%" stopColor={color || "#f43f5e"} />
        </linearGradient>
      </defs>

      <g
        filter="url(#logistics-glow)"
        fill="none"
        stroke="url(#logistics-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main Delivery Truck Body */}
        <path d="M 15,35 L 60,35 L 60,65 L 15,65 Z" strokeWidth="5" />
        
        {/* Truck Cabin (Front) */}
        <path d="M 60,45 L 78,45 L 85,55 L 85,65 L 60,65" strokeWidth="5" />

        {/* Large, Clear Wheels */}
        <circle cx="30" cy="72" r="7" strokeWidth="4" />
        <circle cx="70" cy="72" r="7" strokeWidth="4" />

        {/* Thick Motion / Speed Lines (Behind the truck) */}
        <line x1="5" y1="42" x2="10" y2="42" strokeWidth="4" opacity="0.8" />
        <line x1="2" y1="50" x2="8" y2="50" strokeWidth="4" opacity="0.8" />
        <line x1="5" y1="58" x2="10" y2="58" strokeWidth="4" opacity="0.8" />
      </g>
    </svg>
  );
};

export default LogisticsServiceIcon;
