type CardProps = {
  title: string;
};

export default function Card({ title }: CardProps) {
  return (
    <div className="rounded-lg bg-white px-lg py-lg shadow-lg hover:shadow-xl">
      <h3>{title}</h3>
    </div>
  );
}
