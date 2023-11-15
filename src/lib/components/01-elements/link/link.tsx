export type LinkProps = {
  text: string;
  url: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Link({ text, url, ...props }: LinkProps) {
  return (
    <a {...props} className="text-3xl font-bold underline" href={url}>
      {text}
    </a>
  );
}
