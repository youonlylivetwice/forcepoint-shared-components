import { TokenType, TokensType } from '../types';

export type AspectRatioProps = {
  aspectRatios: TokensType;
};

export default function AspectRatio({ aspectRatios }: AspectRatioProps) {
  const renderItem = ([_key, value]: [string, TokenType], index: number) => {
    const aspectRatio = typeof value === 'string' ? value : '';

    return (
      <li key={index} className="flex flex-row items-center gap-md">
        {/* Swatch */}
        <div
          className={`flex h-3xl items-center justify-center gap-y-sm border-3 border-sol bg-white ${value}`}
        >
          <p className="text-md text-black">{aspectRatio}</p>
        </div>
      </li>
    );
  };

  return (
    <div className="p-md">
      <h2 className="mb-lg text-h3">Aspect Ratio</h2>
      <ul className="flex flex-col gap-md">
        {Object.entries(aspectRatios as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
