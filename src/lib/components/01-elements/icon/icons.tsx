import React from 'react';
import Icon from './icon';

interface IconsProps {
  icons: string[];
}

const Icons: React.FC<IconsProps> = ({ icons }) => {
  return (
    <ul className="flex flex-wrap gap-lg p-md">
      {icons.map((icon) => (
        <li key={icon} className="flex flex-col items-center">
          <Icon name={icon} className="w-xxl h-xxl text-black" />
          <span className="mt-sm text-sm text-black">{icon}</span>
        </li>
      ))}
    </ul>
  );
};

export default Icons;
