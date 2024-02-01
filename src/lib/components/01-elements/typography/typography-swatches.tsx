import Typography, { TypographyVariant } from './typography';

export type TypographySwatchesProps = {
  content: string;
  heading: string;
  items: TypographyVariant[];
};

export default function TypographySwatches({
  content,
  heading,
  items,
}: TypographySwatchesProps) {
  const renderItem = (item: TypographyVariant, index: number) => {
    return (
      <li key={index} className="flex flex-col">
        <p className="text-md mt-sm text-teal">text-{item}</p>
        <Typography variant={item}>{content}</Typography>
      </li>
    );
  };

  return (
    <div className="p-md">
      <h2 className="mb-lg text-h3">{heading}</h2>
      <ul className="flex flex-col gap-md">{items.map(renderItem)}</ul>
    </div>
  );
}
