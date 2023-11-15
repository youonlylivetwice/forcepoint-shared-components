export type LinkProps = {
  text: string;
  url: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Link({ text, url, ...props }: LinkProps) {
  return (
    <a {...props} className="text text-3xl font-bold text-red-100" href={url}>
      {text}
    </a>
  );
}
