import { TokensType } from "../types";

export type AspectRatioProps = {
  aspectRatios: TokensType;
};

export default function AspectRatio({ aspectRatios }: AspectRatioProps) {
  const renderItem = ([_key, value]: [string, string], index: number) => {
    return (
      <li key={index} className="flex flex-row items-center gap-md">
        {/* Swatch */}
        <div className={`flex items-center justify-center gap-y-sm h-3xl border-3 border-sol bg-white ${value}`}>
          <p className="text-md text-black">{value}</p>
        </div>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Aspect Ratio</h2>
      <ul className="flex flex-col gap-md">
        {Object.entries(aspectRatios as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
