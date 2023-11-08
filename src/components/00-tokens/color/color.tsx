import React from "react";

export type ColorProps = {
  color?: string;
  name?: string;
  hex?: string;
};

export default function Color({
  color,
  name,
  hex,
}: ColorProps) {


  return (
    <div>Color</div>
  );
}
