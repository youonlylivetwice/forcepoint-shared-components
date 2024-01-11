import Typography from './typography';

export type TypographySwatchesProps = {
  heading: string;
  items: string[];
};

export default function TypographySwatches({
  heading,
  items,
}: TypographySwatchesProps) {
  const renderItem = (item: string, index: number) => {
    const content = item.includes('body')
      ? 'Extensive APIs exchange information with external systems such as identity and access management, physical security, SIEMs, and HR apps to provide behavioral context and send data out to third-party tools and policy enforcement points.'
      : 'Forcepoint Converged';
    return (
      <li key={index} className="flex flex-col">
        <p className="text-md mt-sm text-teal">text-{item}</p>
        <Typography variant={item}>{content}</Typography>
      </li>
    );
  };

  return (
    <div className="p-md">
      <h2 className="text-h3 mb-lg">{heading}</h2>
      <ul className="flex flex-col gap-md">{items.map(renderItem)}</ul>
    </div>
  );
}
