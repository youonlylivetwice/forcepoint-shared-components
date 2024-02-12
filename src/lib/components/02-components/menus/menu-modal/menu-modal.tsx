import { ReactNode } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import BackIcon from '../../../00-tokens/icons/back-icon';
import CloseIcon from '../../../00-tokens/icons/close-icon';

export type MenuModalProps = {
  children: ReactNode;
  className?: string;
  handlerCloseMenu: () => void;
  handlerCloseSubMenu: () => void;
  hideHeaderOnDesktop?: boolean;
  isOpen?: boolean;
  onBlur?: React.FocusEventHandler<Element>;
  title: string;
};

export default function MenuModal({
  children,
  className,
  handlerCloseMenu,
  handlerCloseSubMenu,
  hideHeaderOnDesktop,
  isOpen,
  onBlur,
  title,
}: MenuModalProps) {
  return (
    <div
      className={cn(
        'menu:top-[100%] menu:h-auto menu:absolute menu:bg-transparent menu:overflow-visible fixed top-0 z-10 flex h-screen w-fit flex-col overflow-scroll bg-white',
        { hidden: !isOpen },
        className,
      )}
      onBlur={onBlur}
    >
      {/* Mobile Heading */}
      <div className="menu:hidden menu:pr-0 mx-auto flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white pr-md">
        <button
          onClick={handlerCloseSubMenu}
          className="back-button p-md"
          aria-label="Go back"
        >
          <BackIcon className="menu:rotate-[90deg] rotate-0 text-grey" />
        </button>
        <span className="block flex-1 text-start text-body-2 text-grey rtl:text-right">
          {title}
        </span>
        <button
          className="block p-md text-center"
          onClick={handlerCloseMenu}
          aria-label="Close menu"
        >
          <CloseIcon className="text-grey" />
        </button>
      </div>
      {/* Desktop Heading */}
      {!hideHeaderOnDesktop && (
        <div className="flex w-full justify-center">
          <BackIcon className="menu:block hidden rotate-[90deg] text-brumosa" />
        </div>
      )}
      {children}
    </div>
  );
}
