import React, { SVGProps } from 'react';

interface SnowflakeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SnowflakeIcon: React.FC<SnowflakeIconProps> = ({ 
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
        <filter id="frosty-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <linearGradient id="snowflake-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#80d8ff"} />
          <stop offset="100%" stopColor={color || "#00b0ff"} />
        </linearGradient>
      </defs>

      <g filter="url(#frosty-glow)">
        {/* Central Hexagonal Core */}
        <polygon points="50,42 57,46 57,54 50,58 43,54 43,46" fill="none" stroke="#e0f7ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="50,38 60,44 60,56 50,62 40,56 40,44" fill="none" stroke="#e0f7ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />

        {/* Master Branch (Pointing Up) */}
        <g id="single-branch">
          <line x1="50" y1="42" x2="50" y2="10" stroke="url(#snowflake-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="28" x2="38" y2="18" stroke="url(#snowflake-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="28" x2="62" y2="18" stroke="url(#snowflake-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="18" x2="42" y2="11" stroke="url(#snowflake-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="50" y1="18" x2="58" y2="11" stroke="url(#snowflake-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="50,5 53,10 50,13 47,10" fill="#ffffff" opacity="0.7" />
        </g>

        {/* 6-Fold Rotational Symmetry */}
        <use href="#single-branch" transform="rotate(60, 50, 50)" />
        <use href="#single-branch" transform="rotate(120, 50, 50)" />
        <use href="#single-branch" transform="rotate(180, 50, 50)" />
        <use href="#single-branch" transform="rotate(240, 50, 50)" />
        <use href="#single-branch" transform="rotate(300, 50, 50)" />

        {/* Intermediate Sparks */}
        <g id="intermediate-spark">
          <circle cx="50" cy="67" r="2" fill={color || "#80d8ff"} />
          <line x1="50" y1="58" x2="50" y2="64" stroke={color || "#80d8ff"} strokeWidth="2" strokeLinecap="round" />
        </g>
        <use href="#intermediate-spark" transform="rotate(30, 50, 50)" />
        <use href="#intermediate-spark" transform="rotate(90, 50, 50)" />
        <use href="#intermediate-spark" transform="rotate(150, 50, 50)" />
        <use href="#intermediate-spark" transform="rotate(210, 50, 50)" />
        <use href="#intermediate-spark" transform="rotate(270, 50, 50)" />
        <use href="#intermediate-spark" transform="rotate(330, 50, 50)" />
      </g>
    </svg>
  );
};

export default SnowflakeIcon;
