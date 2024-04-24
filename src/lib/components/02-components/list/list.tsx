import { ReactNode } from 'react';

export type ListProps = {
  title?: string;
  subtitle?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  multicol?: boolean;
  children: ReactNode;
};

export default function List({
  title,
  subtitle,
  headingLevel: HeadingLevel = 'h2',
  multicol = false,
  children,
}: ListProps) {
  return (
    <div className="px-xxl py-xl">
      {subtitle && (
        <p className="mb-md text-h5 font-semibold uppercase text-violette">
          {subtitle}
        </p>
      )}
      {title && (
        <HeadingLevel className="mb-lg text-h1 font-semibold text-navy">
          {title}
        </HeadingLevel>
      )}
      <ul className="list-none">{children}</ul>
    </div>
  );
}
