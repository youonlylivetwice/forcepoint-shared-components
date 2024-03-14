import { useState } from "react";
import Typography from "../../01-elements/typography/typography";

const accordionItems = [{
  id: '1',
  title: 'Accordion item 1',
  content: 'Content for accordion item 1'
}, {
  id: '2',
  title: 'Accordion item 2',
  content: 'Content for accordion item 2'
}, {
  id: '3',
  title: 'Accordion item 3',
  content: 'Content for accordion item 3'
}];

export default function AccordionSlider() {
  const [active, setActive] = useState<string | null>(null);
  const handleClick = (id: string) => {
    setActive(id);
  };
  return (
    <div>
      <h2>Some title</h2>
      <div>
        {accordionItems.map((item) => (
          <AccortionItem key={item.id} id={item.id} title={item.title} content={item.content} active={active === item.id} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

type AccortionItemProps = {
  title: string;
  content: string;
  id: string;
  active: boolean;
  onClick: (id: string) => void;
};

function AccortionItem({title, content, active, onClick, id}: AccortionItemProps) {
  return (
    <div >
      <button onClick={() => onClick(id)}>
        <Typography component="h4">{title}</Typography>
      </button>
      {active && <div>{content}</div>}
    </div>
  );
}