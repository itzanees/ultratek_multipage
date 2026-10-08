import React, { SVGProps } from 'react';

interface SandwichPanelIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SandwichPanelIcon: React.FC<SandwichPanelIconProps> = ({ 
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
        {/* Soft atmospheric construction glow */}
        <filter id="panel-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Modern corporate technical gradient */}
        <linearGradient id="panel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f7ff" />
          <stop offset="50%" stopColor={color || "#06b6d4"} />
          <stop offset="100%" stopColor={color || "#4f46e5"} />
        </linearGradient>
      </defs>

      <g filter="url(#panel-glow)" fill="none" stroke="url(#panel-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground Baseline Grid */}
        <line x1="5" y1="85" x2="95" y2="85" strokeWidth="4" />
        <line x1="20" y1="85" x2="20" y2="92" strokeWidth="2" opacity="0.3" />
        <line x1="50" y1="85" x2="50" y2="92" strokeWidth="2" opacity="0.3" />
        <line x1="80" y1="85" x2="80" y2="92" strokeWidth="2" opacity="0.3" />

        {/* LEFT PANEL: Static, anchored wall section */}
        <g id="left-panel-section">
          {/* Top Sheet Metal Profiling Outer Layer */}
          <path d="M 10,25 L 20,25 L 23,20 L 29,20 L 32,25 L 42,25" strokeWidth="3" />
          
          {/* Insulated Foam Core Profile Texture Hatching */}
          <line x1="15" y1="33" x2="25" y2="33" strokeWidth="2" opacity="0.4" strokeDasharray="2 4" />
          <line x1="20" y1="41" x2="35" y2="41" strokeWidth="2" opacity="0.4" strokeDasharray="2 4" />
          <line x1="12" y1="49" x2="27" y2="49" strokeWidth="2" opacity="0.4" strokeDasharray="2 4" />
          
          {/* Bottom Sheet Metal Profiling Outer Layer */}
          <path d="M 10,57 L 20,57 L 23,52 L 29,52 L 32,57 L 42,57" strokeWidth="3" />
          
          {/* Tongue/Female interlocking receiving joint block */}
          <path d="M 42,25 L 42,33 L 38,37 L 38,45 L 42,49 L 42,57" strokeWidth="4" />
        </g>

        {/* RIGHT PANEL: Slide-in interlocking action section */}
        <g id="right-panel-section" transform="translate(4, 0)">
          {/* Groove/Male interlocking joint key extending out */}
          <path d="M 50,25 L 50,33 L 46,37 L 46,45 L 50,49 L 50,57" strokeWidth="4" />

          {/* Top Sheet Metal Profiling Outer Layer */}
          <path d="M 50,25 L 60,25 L 63,20 L 69,20 L 72,25 L 85,25" strokeWidth="3" />
          
          {/* Insulated Foam Core Profile Texture Hatching */}
          <line x1="58" y1="33" x2="73" y2="33" strokeWidth="2" opacity="0.4" strokeDasharray="2 4" />
          <line x1="63" y1="41" x2="78" y2="41" strokeWidth="2" opacity="0.4" strokeDasharray="2 4" />
          <line x1="55" y1="49" x2="70" y2="49" strokeWidth="2" opacity="0.4" strokeDasharray="2 4" />

          {/* Bottom Sheet Metal Profiling Outer Layer */}
          <path d="M 50,57 L 60,57 L 63,52 L 69,52 L 72,57 L 85,57" strokeWidth="3" />
          
          {/* Outer End Edge Closing */}
          <line x1="85" y1="25" x2="85" y2="57" strokeWidth="4" />
        </g>

        {/* Action Indicators (Alignment/Assembly dynamic vectors) */}
        <g opacity="0.7">
          {/* Left indicator arrow */}
          <path d="M 59,12 L 51,12 M 55,8 L 51,12 L 55,16" strokeWidth="3" />
          {/* Right indicator arrow */}
          <path d="M 33,12 L 41,12 M 37,8 L 41,12 L 37,16" strokeWidth="3" />
        </g>
      </g>
    </svg>
  );
};

export default SandwichPanelIcon;
