import React, { useEffect, useState } from 'react';
import Typography from '../../01-elements/typography/typography';
import { cn } from '../../../utils/tailwind-merge';

const accordionItems = [
  {
    id: '1',
    title: 'Accordion item 1',
    content:
      'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
    img: 'https://placehold.co/600x400/FFFF33/000000/png',
  },
  {
    id: '2',
    title: 'Accordion item 2',
    content:
      'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
    img: 'https://placehold.co/600x400/FF33FF/000000/png',
  },
  {
    id: '3',
    title: 'Accordion item 3',
    content:
      'Seamlessly extend Zero Trust to private applications in internal data centers and private clouds and limit user access to only the apps and data they need.',
    img: 'https://placehold.co/600x400/33FFFF/000000/png',
  },
];

export default function AccordionSlider() {
  const [active, setActive] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const handleClick = (index: number) => {
    setActive(index);
  };
  const activeTime = 10000;

  useEffect(() => {
    if (isMouseOver) return;
    setTimeout(() => {
      if (active === accordionItems.length - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }, activeTime);
  }, [active, isMouseOver]);
  return (
    <div>
      <Typography variant="display" className="w-full">
        Some title
      </Typography>
      <div className="flex gap-[120px]">
        <div>
          {accordionItems.map((item, index) => (
            <div
              key={item.id}
              onMouseOver={() => setIsMouseOver(true)}
              onMouseLeave={() => setIsMouseOver(false)}
            >
              <AccortionItem
                title={item.title}
                content={item.content}
                active={active === index}
                isMouseOver={isMouseOver}
                onClick={() => handleClick(index)}
              >
                <Typography variant="body-2">{item.content}</Typography>
                <img className="inline sm:hidden" src={item.img} alt="" />
              </AccortionItem>
            </div>
          ))}
        </div>
        <div className="hidden sm:inline">
          {accordionItems.map((item, index) => (
            <img
              key={index}
              className={cn(
                'transition-[opacity] delay-100 duration-500 ease-in-out',
                active !== index ? 'h-0 opacity-0' : 'h-[100%] opacity-100',
              )}
              src={item.img}
              alt={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type AccortionItemProps = {
  title: string;
  content: string;
  children: React.ReactNode;
  active: boolean;
  isMouseOver: boolean;
  onClick: () => void;
};

function AccortionItem({
  title,
  active,
  onClick,
  children,
  isMouseOver,
}: AccortionItemProps) {
  return (
    <div className="max-w-[480px]">
      {active && (
        <div className="relative my-4 h-1 w-full bg-brumosa">
          {!isMouseOver && (
            <div
              className={`t-0 l-0 absolute h-1 animate-[progress-bar_10000ms_ease-in-out_1] bg-teal`}
            />
          )}
        </div>
      )}
      <button
        className={cn('mt-4 w-full border-t-2 border-brumosa py-4 text-left', {
          'mt-0 border-none pt-0': active,
        })}
        onClick={() => onClick()}
      >
        <Typography
          variant="h3"
          className={cn(
            'mb-0 font-semibold',
            active ? 'text-navy' : 'text-grey',
          )}
        >
          {title}
        </Typography>
      </button>

      {active && <div>{children}</div>}
    </div>
  );
}
