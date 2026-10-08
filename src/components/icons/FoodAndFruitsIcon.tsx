import React, { SVGProps } from 'react';

interface FoodAndFruitsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const FoodAndFruitsIcon: React.FC<FoodAndFruitsIconProps> = ({ size = 100, color, ...props }) => {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      {...props}
    >
      <defs>
        {/* Soft appetizing glow effect */}
        <filter id="food-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gradient shifting from fresh organic lime to vibrant food orange */}
        <linearGradient id="food-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fefce8" />
          <stop offset="50%" stopColor={color || "#84cc16"} />
          <stop offset="100%" stopColor={color || "#f97316"} />
        </linearGradient>
      </defs>

      <g
        filter="url(#food-glow)"
        fill="none"
        stroke="url(#food-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Packaged Food Product (Classic Milk/Juice Carton Profile) */}
        <path d="M 20,78 L 20,42 L 32,30 L 45,42 L 45,78 Z" strokeWidth="5" />
        {/* Gable Top Fold Detail on the carton */}
        <line x1="32" y1="30" x2="32" y2="42" strokeWidth="4" opacity="0.8" />
        {/* Simple decorative product label line */}
        <line x1="27" y1="58" x2="38" y2="58" strokeWidth="4" opacity="0.6" />

        {/* Fresh Fruit (Bold Apple / Tomato Silhouette) */}
        {/* Left side curve */}
        <path d="M 68,48 C 53,48 50,60 53,70 C 56,80 62,82 68,80 C 74,82 80,80 83,70 C 86,60 83,48 68,48 Z" strokeWidth="5" />
        
        {/* Fruit Stem */}
        <path d="M 68,48 Q 70,40 74,36" strokeWidth="4" />
        
        {/* Small Fresh Leaf */}
        <path d="M 74,36 Q 82,36 80,44 Q 72,44 74,36 Z" strokeWidth="3" fill="none" />

        {/* Solid Ground Line to tie the products together */}
        <line x1="10" y1="78" x2="90" y2="78" strokeWidth="5" />
      </g>
    </svg>
  );
};

export default FoodAndFruitsIcon;
