import Button from "../../01-elements/button/button";
import ArrowRight from "../../../assets/img/icons/arrow-right.svg?react";
import Link from "../../01-elements/link/link";

export type ForegroundBackgroundProps = {
  color: 'navy' | 'viola' | 'white' | 'sandwisp';
  background: 'white' | 'black' | 'violette' | 'viola' | 'navy';
};

export default function ForegroundBackground({ color, background }: ForegroundBackgroundProps) {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'black':
        return 'bg-black';
      case 'violette':
        return 'bg-violette';
      case 'viola':
        return 'bg-viola';
      case 'navy':
        return 'bg-navy';
      default:
        return 'bg-white';
    }
  };

  const bgClasses = getBackgroundClasses();

  return (
    <div className={`p-md pb-xl h-full ${bgClasses}`}>
      <h2 className={`text-h3 mb-lg ${background === 'white' ? 'text-black' : 'text-white'}`}>Foreground Background</h2>
      <div className="flex flex-row gap-lg">
        <Button size="medium" color={color}>
          <span>Large Button</span>
          <ArrowRight />
        </Button>
        <Button size="medium" variant="outline" color={color}>
          <span>Large Button</span>
          <ArrowRight />
        </Button>
        <Link url="/" color={color} size="small">
          <span>Default link</span>
          <ArrowRight />
        </Link>
        <Link url="/" color={color} size="small" variant="underline">
          <span>Default link</span>
        </Link>
      </div>
    </div>
  );
}
