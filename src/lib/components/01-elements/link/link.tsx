export type LinkProps = {
  text: string;
  url: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Link({ text, url, ...props }: LinkProps) {
  return (
    <a {...props} className="text-crimson text-3xl font-bold" href={url}>
      {text}
    </a>
  );
}
