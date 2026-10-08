import React, { SVGProps } from 'react';

interface FireSuppressionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const FireSuppressionIcon: React.FC<FireSuppressionIconProps> = ({ 
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
        {/* Soft high-pressure dispersion glow effect */}
        <filter id="suppression-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* High-visibility protection gradient shifting from ice-blue to safety cyan */}
        <linearGradient id="suppression-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor={color || "#38bdf8"} />
          <stop offset="100%" stopColor={color || "#2563eb"} />
        </linearGradient>
      </defs>

      <g filter="url(#suppression-glow)" fill="none" stroke="url(#suppression-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Main High-Pressure Suppressant Feed Pipeline */}
        <line x1="10" y1="15" x2="90" y2="15" strokeWidth="5" />
        
        {/* Threaded Sprinkler Drop Fitting */}
        <rect x="42" y="15" width="16" height="10" rx="1" fill="url(#suppression-grad)" opacity="0.1" />

        {/* Industrial Sprinkler Framework Frame / Deflector Arms */}
        <path d="M 44,25 L 44,38 L 50,44 L 56,38 L 56,25" strokeWidth="3.5" />
        
        {/* Central Thermal Sensitive Glass Bulb (Actuator Trigger) */}
        <line x1="50" y1="25" x2="50" y2="37" strokeWidth="4" stroke="#ef4444" /> {/* Red core trigger bulb */}

        {/* Fine-Atomization Spray Deflector Plate */}
        <line x1="42" y1="44" x2="58" y2="44" strokeWidth="4" />
        <line x1="45" y1="47" x2="55" y2="47" strokeWidth="2" />

        {/* High-Velocity Conical Suppressant Spray Rays */}
        <g opacity="0.85" strokeWidth="2.5">
          <line x1="42" y1="46" x2="15" y2="68" />
          <line x1="46" y1="48" x2="32" y2="74" />
          <line x1="50" y1="48" x2="50" y2="76" />
          <line x1="54" y1="48" x2="68" y2="74" />
          <line x1="58" y1="46" x2="85" y2="68" />
        </g>

        {/* Mitigated Hazard Element (Subtle, suppressed flame profile at bottom right) */}
        <g transform="translate(68, 68)" strokeWidth="2.5" opacity="0.4">
          <path d="M 12,14 C 12,6 6,4 6,0 C 6,6 0,8 0,14 C 0,19 5,22 9,22 C 14,22 12,17 12,14 Z" strokeDasharray="3 2" />
        </g>
        
        {/* Mitigated Hazard Element (Left Flame Profile being suppressed) */}
        <g transform="translate(14, 68)" strokeWidth="2.5" opacity="0.4">
          <path d="M 12,14 C 12,6 6,4 6,0 C 6,6 0,8 0,14 C 0,19 5,22 9,22 C 14,22 12,17 12,14 Z" strokeDasharray="3 2" />
        </g>
      </g>
    </svg>
  );
};

export default FireSuppressionIcon;
