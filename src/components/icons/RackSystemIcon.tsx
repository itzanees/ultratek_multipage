import React, { SVGProps } from 'react';

interface RackSystemIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const RackSystemIcon: React.FC<RackSystemIconProps> = ({ 
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
        <filter id="rack-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* High-durability structural steel cyan-to-indigo gradient */}
        <linearGradient id="rack-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#06b6d4"} />
          <stop offset="100%" stopColor={color || "#4f46e5"} />
        </linearGradient>
      </defs>

      <g filter="url(#rack-glow)" fill="none" stroke="url(#rack-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Heavy Civil Concrete Base Grade Line */}
        <line x1="5" y1="88" x2="95" y2="88" strokeWidth="4" />

        {/* Structural Steel Frame Upright Columns (Vertical Posts) */}
        <line x1="12" y1="12" x2="12" y2="88" strokeWidth="4.5" />
        <line x1="50" y1="12" x2="50" y2="88" strokeWidth="4.5" />
        <line x1="88" y1="12" x2="88" y2="88" strokeWidth="4.5" />

        {/* Diagonal Structural K-Bracing / Truss System (Left Bay) */}
        <g strokeWidth="2" opacity="0.4" strokeDasharray="3 3">
          <polyline points="12,16 50,36 12,56 50,76 12,84" />
          {/* Diagonal Structural K-Bracing / Truss System (Right Bay) */}
          <polyline points="50,16 88,36 50,56 88,76 50,84" />
        </g>

        {/* Tier 1 - Horizontal Load Storage Cross Beams */}
        <line x1="12" y1="52" x2="88" y2="52" strokeWidth="4" />
        {/* Tier 2 - Horizontal Load Storage Cross Beams */}
        <line x1="12" y1="16" x2="88" y2="16" strokeWidth="4" />

        {/* Tier 1 Stowed Inventory Units (Pallets / Cargo Cubes) */}
        <g id="tier-1-inventory" strokeWidth="3" fill="url(#rack-grad)" fillOpacity="0.05">
          {/* Left Bay Cargo */}
          <rect x="18" y="24" width="26" height="24" rx="2" />
          <line x1="24" y1="36" x2="38" y2="36" opacity="0.6" strokeWidth="2" />
          
          {/* Right Bay Cargo */}
          <rect x="56" y="24" width="26" height="24" rx="2" />
          <line x1="62" y1="36" x2="76" y2="36" opacity="0.6" strokeWidth="2" />
        </g>

        {/* Tier 2 Ground Floor Heavy Stowed Inventory Units */}
        <g id="ground-tier-inventory" strokeWidth="3" fill="url(#rack-grad)" fillOpacity="0.05">
          {/* Left Bay Ground Cargo */}
          <rect x="18" y="60" width="26" height="24" rx="2" />
          {/* Right Bay Ground Cargo */}
          <rect x="56" y="60" width="26" height="24" rx="2" />
        </g>

        {/* Heavy Bolt Footplates / Base Anchor Details */}
        <circle cx="12" cy="88" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="50" cy="88" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="88" cy="88" r="1.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
};

export default RackSystemIcon;
