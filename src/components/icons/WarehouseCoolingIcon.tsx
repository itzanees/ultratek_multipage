import React, { SVGProps } from 'react';

interface WarehouseCoolingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const WarehouseCoolingIcon: React.FC<WarehouseCoolingIconProps> = ({ 
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
        {/* Soft aerodynamic cooling glow */}
        <filter id="cooling-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Arctic climate control gradient layout */}
        <linearGradient id="cooling-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#06b6d4"} />
          <stop offset="100%" stopColor={color || "#3b82f6"} />
        </linearGradient>
      </defs>

      <g filter="url(#cooling-glow)" fill="none" stroke="url(#cooling-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Heavy Commercial HVAC Shroud / Housing Unit */}
        <circle cx="45" cy="50" r="32" strokeWidth="4" />
        <circle cx="45" cy="50" r="6" fill="currentColor" stroke="none" />
        
        {/* Heavy-Duty Outer Mount Framework Mounts */}
        <path d="M 18,32 L 8,32 L 8,68 L 18,68" strokeWidth="3" opacity="0.7" />

        {/* Industrial Compressor Fan Blade Assembly */}
        <g id="fan-blades">
          {/* Top & Bottom Blades */}
          <path d="M 45,44 C 41,35 41,24 45,18 C 49,24 49,35 45,44 Z" fill="url(#cooling-grad)" opacity="0.15" />
          <path d="M 45,56 C 49,65 49,76 45,82 C 41,76 41,65 45,56 Z" fill="url(#cooling-grad)" opacity="0.15" />
          
          {/* Diagonal Blades - Clockwise Offset */}
          <path d="M 49,47 C 57,41 66,38 72,44 C 66,50 57,47 49,47 Z" fill="url(#cooling-grad)" opacity="0.15" />
          <path d="M 41,53 C 33,59 24,62 18,56 C 24,50 33,53 41,53 Z" fill="url(#cooling-grad)" opacity="0.15" />
          
          <path d="M 49,53 C 55,60 60,68 56,74 C 50,70 47,61 49,53 Z" fill="url(#cooling-grad)" opacity="0.15" />
          <path d="M 41,47 C 35,40 30,32 34,26 C 40,30 43,39 41,47 Z" fill="url(#cooling-grad)" opacity="0.15" />
        </g>

        {/* High-Velocity Airflow / Cold Vent Discharge Vectors */}
        <g id="airflow-lines" strokeWidth="3" opacity="0.8">
          <path d="M 77,35 L 85,35 C 89,35 91,38 93,42" />
          <path d="M 81,50 L 93,50" />
          <path d="M 77,65 L 85,65 C 89,65 91,62 93,58" />
        </g>

        {/* Small Climate Spark Micro-Emblems */}
        <g id="climate-spark" strokeWidth="2" opacity="0.9">
          <line x1="88" y1="23" x2="88" y2="29" />
          <line x1="85" y1="26" x2="91" y2="26" />
        </g>
      </g>
    </svg>
  );
};

export default WarehouseCoolingIcon;
