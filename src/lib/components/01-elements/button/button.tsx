export type ButtonProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
};

export default function Button({ text, ...props }: ButtonProps) {
  return (
    <button {...props} className="text-3xl font-bold text-slate-500 underline">
      {text}
    </button>
  );
}
