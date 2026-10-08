import React, { SVGProps } from 'react';

interface LoadingBayIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const LoadingBayIcon: React.FC<LoadingBayIconProps> = ({ 
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
        {/* Soft industrial-glow outline effect */}
        <filter id="bay-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* High-visibility logistics indigo-to-cyan gradient */}
        <linearGradient id="bay-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#38bdf8"} />
          <stop offset="100%" stopColor={color || "#4f46e5"} />
        </linearGradient>
      </defs>

      <g filter="url(#bay-glow)" fill="none" stroke="url(#bay-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Main Civil/Concrete Foundation Grade Line */}
        <line x1="5" y1="85" x2="95" y2="85" strokeWidth="4" />

        {/* Concrete Warehouse Loading Dock Platform Edge (Step Down) */}
        <path d="M 5,55 L 45,55 L 45,85" strokeWidth="4" />
        
        {/* Dock Pit Concrete Cross Hatching */}
        <line x1="38" y1="63" x2="45" y2="70" strokeWidth="2" opacity="0.3" />
        <line x1="38" y1="73" x2="45" y2="80" strokeWidth="2" opacity="0.3" />

        {/* Industrial Dock Compression Bumper Guards */}
        <rect x="45" y="58" width="4" height="10" fill="url(#bay-grad)" rx="1" strokeWidth="2" />

        {/* Compression Dock Seal Shelter Frame Outline (Airtight Envelope) */}
        <path d="M 12,55 L 12,20 L 45,20" strokeWidth="3" strokeDasharray="1 3" opacity="0.7" />

        {/* Dynamic Adjustable Hydraulic Dock Leveler Lip (Tilted Action Link) */}
        <polygon points="20,55 45,48 48,51 20,55" fill="url(#bay-grad)" opacity="0.15" strokeWidth="3" />
        <line x1="45" y1="48" x2="56" y2="48" strokeWidth="4" /> {/* Extended Leveler Lip resting on truck */}

        {/* Heavy Commercial Supply Chain Logistics Vehicle (Rear Chassis Section) */}
        <g id="truck-trailer-chassis">
          {/* Main Cargo Bed Floor Profile */}
          <line x1="55" y1="52" x2="92" y2="52" strokeWidth="5" />
          
          {/* Rear Protective Rubber Impact Guard Guard */}
          <line x1="55" y1="52" x2="55" y2="65" strokeWidth="4" />
          
          {/* Heavy-Duty Tandem Axle Wheels & Mud Guards */}
          <circle cx="70" cy="74" r="8" strokeWidth="3" />
          <circle cx="70" cy="74" r="2" fill="currentColor" stroke="none" />
          
          <circle cx="88" cy="74" r="8" strokeWidth="3" />
          <circle cx="88" cy="74" r="2" fill="currentColor" stroke="none" />
          
          {/* Under-Chassis Mechanical Frame Details */}
          <line x1="62" y1="62" x2="92" y2="62" strokeWidth="2" opacity="0.5" />
        </g>
      </g>
    </svg>
  );
};

export default LoadingBayIcon;
