import { setContrastTextColor } from '../../00-tokens/color/color-shared';
import React, { ReactNode, useRef } from 'react';
import useMediaQuery from '../../../hooks/use-media-query';
import { useDataTable } from './data-table-provider';

export interface TableRowProps {
  bgColor?: string;
  children: ReactNode;
}

const TableRow = ({ bgColor, children }: TableRowProps) => {
  let rowStyles: React.CSSProperties = {};
  const row = useRef<HTMLTableRowElement>(null);
  const { currentPage, itemsPerPage } = useDataTable();
  const isMobile = useMediaQuery('(max-width: 59.374rem)');

  function currentPageAnimation() {
    if (row && row.current) {
      const tableElement = row.current.closest('table');

      if (tableElement) {
        // Trying to retrieve the target element for the current page.
        const targetElementIndex = (currentPage - 1) * itemsPerPage;
        const targetElement = tableElement.rows[targetElementIndex];

        targetElement?.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }
  }

  if (bgColor) {
    rowStyles = setContrastTextColor(bgColor);
  }

  if (isMobile) {
    currentPageAnimation();
  }

  return (
    <tr
      className="bg-white max-md:flex max-md:flex-col"
      style={rowStyles}
      ref={row}
    >
      {children}
    </tr>
  );
};

export default TableRow;
