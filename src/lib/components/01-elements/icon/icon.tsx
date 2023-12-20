import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg {...props} aria-hidden="true" >
      <use href={`/dist/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
