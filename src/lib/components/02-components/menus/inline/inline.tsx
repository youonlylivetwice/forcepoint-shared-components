import { useState } from 'react';

export type MenuItemProps = {
  url: string;
  title: string;
  below?: MenuItemProps[];
};

export type MenuProps = {
  menuClass: string;
  rtlSupport?: boolean;
  items: MenuItemProps[];
  toggleMenu: (value: boolean) => void;
};

export default function Inline({
  items,
  menuClass,
  rtlSupport,
  toggleMenu,
}: MenuProps) {
  const [active, setActive] = useState<number | undefined>();

  /**
   * Handles opening/closing a submenu based on the provided index.
   * @param index - The index of the submenu to be opened or closed.
   */
  const handlerOpenSubmenu = (index: number) => {
    setActive(index !== active ? index : -1);
  };

  /**
   * Handles the blur event on an element.
   * @param {React.FocusEventHandler<Element>} e - The blur event.
   */
  const handleBlur: React.FocusEventHandler<Element> = (e) => {
    e.preventDefault();
    // Retrieves the related target element that received focus.
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    // Checks if the related target element does not exist or is not an instance of 'submenu-item'.
    if (!relatedTarget || !relatedTarget.classList.contains('submenu-item')) {
      // Deactivates the active action when losing focus.
      setActive(-1);
    }
  };

  /**
   * Handles the keydown event to react to the "Escape" key.
   * @param {React.KeyboardEventHandler<HTMLUListElement>} e - The keydown event object.
   */
  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    // Check if the pressed key is "Escape".
    if (e.key === 'Escape') {
      // Deactivate and blur the menu item upon pressing the "Escape" key.
      setActive(-1);
      e.currentTarget.blur();
    }
  };

  const renderSubmenu = (item: MenuItemProps) => {
    return (
      <div
        className="top-0 absolute z-10 flex h-screen w-screen flex-col md:top-[100%] md:h-auto md:w-[280px]"
        onBlur={handleBlur}
      >
        <div
          className={`mx-auto flex w-full items-center justify-center gap-[20px] border-b border-b-mercury bg-white p-[20px] md:border-0 ${
            rtlSupport ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <button onClick={() => handlerOpenSubmenu(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="rotate-[270deg] text-[#53575A] md:rotate-0 md:text-[#CCD2D3]"
            >
              <path
                d="M19 14L10 5L1 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p
            className={`block flex-1 text-[18px] text-[#53575A] md:hidden ${
              rtlSupport ? 'text-end' : 'text-start'
            }`}
          >
            {item.title}
          </p>
          <button
            className="block text-center md:hidden"
            onClick={() => toggleMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.5 3.5L18 18"
                stroke="#53575A"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M3 18L10.5 10.5L18 3"
                stroke="#53575A"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 rounded-lg bg-white p-[20px] shadow-lg">
          <ul className="flex flex-col gap-[20px]">
            {item.below?.map((item: MenuItemProps, index: number) => (
              <li key={`${menuClass}-subitem-${index}`}>
                <a
                  href={item.url}
                  className={`submenu-item flex ${
                    rtlSupport ? 'flex-row-reverse' : 'flex-row'
                  } items-center gap-x-[5px] text-right text-[13px] font-semibold text-black hover:text-teal`}
                >
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    className={rtlSupport ? 'rotate-180' : ''}
                  >
                    <path
                      d="M2.5 1.5L5.5 4.5L2.5 7.5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderItem = (item: MenuItemProps, index: number) => {
    const isActive = active === index;
    return (
      <li
        key={`${menuClass}-item-${index}`}
        className={`flex items-center justify-center gap-[20px] md:relative md:gap-[5px] ${
          isActive ? 'text-teal' : 'text-[#53575A]'
        } ${rtlSupport ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <a
          className={`md:py-0 w-full py-[20px] text-[12px] font-semibold uppercase md:w-full ${
            rtlSupport ? 'text-end' : 'text-start'
          }`}
          href={item.url}
        >
          {item.title}
        </a>
        {item.below && (
          <button
            className="h-full outline-offset-4"
            onClick={() => handlerOpenSubmenu(index)}
          >
            <svg
              className={`h-[16px] w-[16px] md:h-[8px] md:w-[8px] ${
                isActive ? 'md:rotate-180' : 'md:rotate-0'
              } ${rtlSupport ? 'rotate-90' : 'rotate-[270deg]'}`}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="chevron"
                d="M7 2.5L4 5.5L1 2.5"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        )}
        {isActive && renderSubmenu(item)}
      </li>
    );
  };

  return (
    <ul
      className={`${menuClass} flex flex-col gap-x-[30px] divide-y divide-brumosa md:divide-y-0 ${
        rtlSupport ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
      onKeyDown={handleKeyDown}
    >
      {items.map(renderItem)}
    </ul>
  );
}
