import { TokensType } from "../types";

export type lineHeightProps = {
  leadings: TokensType;
};

export default function lineHeight({ leadings }: lineHeightProps) {
  const renderItem = ([key, value]: [string, string], index: number) => {
    return (
      <li
        key={index}
        className="flex flex-col gap-md md:flex-row"
      >
        <div className="flex w-[14rem] flex-row gap-md">
          <p className="text-md text-grey">
            lineHeights.{key.replace('leading-', '')}
          </p>
          <p className="text-md text-grey">{value}</p>
        </div>
        {/* Swatch */}
        <span className={`text-body-3 flex-1 ${key}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          dignissim lectus nec blandit. Nulla urna orci, dictum pellentesque
          tristique vitae, mattis vitae purus. Sed rhoncus neque eget neque
          tincidunt, non ultricies urna eleifend. Maecenas ac dui quam. In
          molestie scelerisque nisl scelerisque ultricies.
        </span>
      </li>
    );
  }

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">Line Height</h2>
      <ul className="flex flex-col gap-lg">
        {Object.entries(leadings as TokensType).map(renderItem)}
      </ul>
    </div>
  );
}
