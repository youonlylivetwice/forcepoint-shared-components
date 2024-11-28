import React, { ReactNode, useEffect, useRef } from 'react';
import useMediaQuery from '../../../hooks/use-media-query';
import { setContrastTextColor } from '../../00-tokens/color/color-shared';
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

  if (bgColor) {
    rowStyles = setContrastTextColor(bgColor);
  }
  useEffect(() => {
    if (isMobile) {
      const tableElement = row.current?.closest('table');

      if (tableElement && currentPage) {
        // Trying to retrieve the target element for the current page.
        const targetElementIndex = (currentPage - 1) * itemsPerPage;
        const targetElement = tableElement.rows[targetElementIndex];
        targetElement?.scrollIntoView({
          inline: 'start',
          block: 'nearest',
        });
      }
    }
  }, [isMobile, currentPage, itemsPerPage]);

  return (
    <tr className="max-md:flex max-md:flex-col" style={rowStyles} ref={row}>
      {children}
    </tr>
  );
};

export default TableRow;
