import * as icons from './index';

const meta = {
  title: 'Tokens/Icons',
};

export default meta;

export const Default = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-md md:grid-cols-3 lg:grid-cols-6">
        {Object.keys(icons).map((icon) => (
          <div className="flex flex-col items-center justify-center break-all rounded-s px-md py-md shadow-md hover:shadow-lg">
            {icons[icon as keyof typeof icons]({
              className: 'h-auto mb-sm aspect-[1/1] w-xl',
            })}
            {icon}
          </div>
        ))}
      </div>
    </>
  );
};
