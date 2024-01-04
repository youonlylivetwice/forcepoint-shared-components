import { TokenType, TokensType } from "../types";

export type SpacingProps = {
  widths: TokensType;
  heights: TokensType;
};

export default function Sizes({ widths, heights }: SpacingProps) {
  const renderItem = ([key, value]: [string, TokenType], index: number) => {
    const size = typeof value === 'string' ? value : '';

    return (
      <li key={index} className="flex flex-row items-center gap-md">
        <div className="flex flex-row gap-md">
          <p className="w-xxl text-md text-grey">size.{size.replace('w-', '')}</p>
          <p className="w-xl text-md text-grey">{key}</p>
        </div>
        {/* Swatch */}
        <div className={`flex gap-y-sm w-max bg-violette ${widths[key]} ${heights[key]}`}></div>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Sizes</h2>
      <ul className="flex flex-col gap-md">
        {Object.entries(widths as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
