import React, { SVGProps } from 'react';

interface ConstructionSectorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ConstructionSectorIcon: React.FC<ConstructionSectorIconProps> = ({ size = 100, color, ...props }) => {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      {...props}
    >
      <defs>
        {/* Soft industrial site glow effect */}
        <filter id="construction-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gradient shifting from high-visibility construction yellow to safety orange */}
        <linearGradient id="construction-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor={color || "#eab308"} />
          <stop offset="100%" stopColor={color || "#ea580c"} />
        </linearGradient>
      </defs>

      <g
        filter="url(#construction-glow)"
        fill="none"
        stroke="url(#construction-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Heavy Machinery Base / Track (Bottom Left Anchor) */}
        <path d="M 15,80 L 45,80 L 40,68 L 20,68 Z" strokeWidth="5" />
        {/* Wheel/Track Axle Details */}
        <circle cx="23" cy="74" r="2" fill="currentColor" stroke="none" />
        <circle cx="37" cy="74" r="2" fill="currentColor" stroke="none" />

        {/* Primary Mechanical Crane / Excavator Boom Arm */}
        <polyline points="30,68 45,35 75,35" strokeWidth="5" />

        {/* Cable / Suspension Line */}
        <line x1="75" y1="35" x2="75" y2="48" strokeWidth="4" />

        {/* Structural Building Block (Being hoisted into position) */}
        <rect x="63" y="48" width="24" height="18" strokeWidth="4" />
        {/* Crossbeam structural detail inside the block */}
        <line x1="63" y1="48" x2="87" y2="66" strokeWidth="3" opacity="0.6" />

        {/* Solid Ground Line to anchor the heavy equipment */}
        <line x1="10" y1="80" x2="90" y2="80" strokeWidth="5" />
      </g>
    </svg>
  );
};

export default ConstructionSectorIcon;
