import React, { SVGProps } from 'react';
import StructuralCivilIcon from './StructuralCivilIcon';
import SandwichPanelIcon from './SandwichPanelIcon';
import WarehouseCoolingIcon from './WarehouseCoolingIcon';
import IndustrialDoorIcon from './IndustrialDoorIcon'; 
import ColdroomLightingIcon from './ColdroomLightingIcon'; 
import LoadingBayIcon from './LoadingBayIcon';
import FireSuppressionIcon from './FireSuppressionIcon';
import RackSystemIcon from './RackSystemIcon';
import ColdStorageIcon from './ColdStorageIcon'; 


interface SharedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

type IconKey = 'cold-storage-facility' |'structural-civil-works' | 'sandwich-panel' | 'warehouse-cooling-system' | 'food-processing'  | 'industrial-doors-and-shutters' | 'coldroom-and-warehouse-lighting' | 'loading-bay-facilities' | 'fire-fighting-system' | 'rack-system-equipment'; 

const iconMap: Record<IconKey, React.FC<SharedIconProps>> = {
    'cold-storage-facility' : ColdStorageIcon,
    'structural-civil-works': StructuralCivilIcon,
    'sandwich-panel': SandwichPanelIcon,
    'food-processing': SandwichPanelIcon,
    'warehouse-cooling-system': WarehouseCoolingIcon,
    'industrial-doors-and-shutters': IndustrialDoorIcon,
    'coldroom-and-warehouse-lighting': ColdroomLightingIcon,
    'loading-bay-facilities': LoadingBayIcon,
    'fire-fighting-system': FireSuppressionIcon,
    'rack-system-equipment': RackSystemIcon,
};


interface DynamicIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, size = 48, color }) => {
  const IconComponent = iconMap[name as IconKey];
  
  // Fallback gracefully if a key is misspelled or missing in the registry
  if (!IconComponent) {
    return <span className="text-xs text-slate-400">⚠️</span>;
  }

  // Properly renders the function reference into a JSX element tree
  return <IconComponent size={size} color={color} />;
};