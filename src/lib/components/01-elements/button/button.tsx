export type ButtonProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-navy hover:bg-teal rounded-full px-lg py-sm text-white disabled:bg-black"
    >
      {text}
    </button>
  );
}
