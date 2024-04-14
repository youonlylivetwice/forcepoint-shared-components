import React from 'react';
import { cn } from '../../../utils/tailwind-merge';

export interface TablePagerProps {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
}

const TablePager: React.FC<TablePagerProps> = ({
  totalPages,
  currentPage,
  handlePageClick,
}) => {
  const generatePagerButtons = (): JSX.Element[] => {
    const pagerButtons: JSX.Element[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pagerButtons.push(
        <button
          key={i}
          className="group py-md"
          onClick={() => handlePageClick(i)}
        >
          <span
            className={cn(
              'block cursor-pointer rounded-m transition-all duration-300 group-hover:h-[4px] group-hover:w-[50px]',
              {
                'h-[4px] w-[50px] bg-teal shadow-md': i === currentPage,
                'h-[2px] w-[30px] bg-mercury': i !== currentPage,
              },
            )}
          ></span>
        </button>,
      );
    }

    return pagerButtons;
  };

  return (
    <div className="mt-md flex items-center justify-center gap-sm md:hidden">
      {generatePagerButtons()}
    </div>
  );
};

export default TablePager;
