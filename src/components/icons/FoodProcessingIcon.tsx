import React, { SVGProps } from 'react';

interface FoodProcessingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const FoodProcessingIcon: React.FC<FoodProcessingIconProps> = ({ size = 100, color, ...props }) => {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      {...props}
    >
      <defs>
        <filter id="processing-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="processing-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="50%" stopColor={color || "#34d399"} />
          <stop offset="100%" stopColor={color || "#0d9488"} />
        </linearGradient>
      </defs>

      <g
        filter="url(#processing-glow)"
        fill="none"
        stroke="url(#processing-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bold Factory Silhouette */}
        <path d="M 15,80 L 15,45 L 35,30 L 35,45 L 55,30 L 55,45 L 75,30 L 75,80 Z" />
        
        {/* Factory Smokestack Detail */}
        <line x1="25" y1="37" x2="25" y2="20" strokeWidth="6" />

        {/* Large Processing Gear (Central Action Element) */}
        <circle cx="45" cy="58" r="10" strokeWidth="4" />
        <path d="M 45,44 L 45,48 M 45,68 L 45,72 M 31,58 L 35,58 M 55,58 L 59,58" strokeWidth="4" />

        {/* Ground/Conveyor Line */}
        <line x1="10" y1="80" x2="90" y2="80" strokeWidth="5" />
      </g>
    </svg>
  );
};

export default FoodProcessingIcon;
