import { TokensType } from "../types";

export type OpacityProps = {
  opacities: TokensType;
};

export default function Opacity({ opacities }: OpacityProps) {
  const renderItem = ([key, value]: [string, string], index: number) => {
    return (
      <li key={index} className="flex flex-row items-center gap-md">
        <p className="w-3xl text-md text-grey">{key}</p>
        <p className="w-xl text-md text-grey">{parseFloat(value) * 100}%</p>
        {/* Swatch */}
        <div className={`flex gap-y-sm w-xxl h-xxl bg-veridian ${key}`}></div>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Opacity</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {Object.entries(opacities as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
