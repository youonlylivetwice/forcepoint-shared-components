export type ButtonProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-full bg-navy px-lg py-sm text-white hover:bg-teal disabled:bg-black"
    >
      {text}
    </button>
  );
}
