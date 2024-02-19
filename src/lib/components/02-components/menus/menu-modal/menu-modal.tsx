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
  id: string;
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
  id,
}: MenuModalProps) {
  return (
    <div
      id={id}
      className={cn(
        'fixed top-0 z-10 flex h-screen w-fit flex-col overflow-scroll bg-white lg:absolute lg:top-[100%] lg:h-auto lg:overflow-visible lg:bg-transparent',
        { hidden: !isOpen },
        className,
      )}
      onBlur={onBlur}
    >
      {/* Mobile Heading */}
      <div className="mx-auto flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white lg:hidden">
        <button
          onClick={handlerCloseSubMenu}
          className="back-button p-md"
          aria-label="Go back"
        >
          <BackIcon className="rotate-0 text-grey lg:rotate-[90deg]" />
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
          <BackIcon className="hidden rotate-[90deg] text-brumosa lg:block" />
        </div>
      )}
      {children}
    </div>
  );
}
