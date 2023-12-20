import { TokensType } from "../types";

export type RadiusProps = {
  radius: TokensType;
};

export default function Radius({ radius }: RadiusProps) {
  const renderItem = ([key, value]: [string, string], index: number) => {
    return (
      <li key={index} className="flex items-center gap-md md:gap-lg">
        <div className="flex flex-row gap-md w-[8rem]">
          <p className="text-md text-grey">{key}</p>
          <p className="text-md text-grey">{value}</p>
        </div>
        {/* Swatch */}
        <div className={`w-[4rem] h-[4rem] bg-violette ${key}`}></div>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Radius</h2>
      <ul className="flex flex-col gap-md sm:gap-lg">
        {Object.entries(radius as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
