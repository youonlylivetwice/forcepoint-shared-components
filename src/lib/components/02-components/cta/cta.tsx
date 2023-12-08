type CtaProps = {
  text: string;
};

export default function Cta({ text }: CtaProps) {
  return (
    <div className="rounded-lg bg-white px-lg py-lg shadow-lg hover:shadow-xl">
      <h3>{text}</h3>
    </div>
  );
}
