import { TokenType, TokensType } from "../types";

export type SpacingProps = {
  spacings: TokensType;
};

export default function Spacing({ spacings }: SpacingProps) {
  const renderItem = ([key, value]: [string, TokenType], index: number) => {
    const spacing = typeof value === 'string' ? value : '';

    return (
      <li key={index} className="flex flex-col md:flex-row md:items-center gap-md">
        <div className="flex flex-row gap-md">
          <p className="w-xxl text-md text-grey">spacing.{key.replace('gap-', '')}</p>
          <p className="w-xl text-md text-grey">{spacing}</p>
        </div>
        {/* Swatch */}
        <div className={`flex gap-y-sm w-max bg-sandwisp ${key}`}>
          <span className="w-xl h-xl bg-violette rounded-s"></span>
          <span className="w-xl h-xl bg-violette rounded-s"></span>
          <span className="w-xl h-xl bg-violette rounded-s hidden sm:block"></span>
          <span className="w-xl h-xl bg-violette rounded-s hidden lg:block"></span>
        </div>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Spacing</h2>
      <ul className="flex flex-col gap-md">
        {Object.entries(spacings as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
