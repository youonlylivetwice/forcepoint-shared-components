import { TokenType, TokensType } from '../types';

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
          <p className="text-md w-xxl text-grey">
            size.{size.replace('w-', '')}
          </p>
          <p className="text-md w-xl text-grey">{key}</p>
        </div>
        {/* Swatch */}
        <div
          className={`flex gap-y-sm bg-violette ${widths[key]} ${heights[key]}`}
        ></div>
      </li>
    );
  };

  return (
    <div className="p-md">
      <h2 className="mb-lg text-h3">Sizes</h2>
      <ul className="flex flex-col gap-md">
        {Object.entries(widths as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
