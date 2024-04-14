import { extractDataNumber, setContrastTextColor } from './table-utils';
import React, { ReactNode, useEffect, useRef } from 'react';
import useMediaQuery from '../../../hooks/use-media-query';

export interface TableRowProps {
  bgColor?: string;
  children: ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ bgColor, children }) => {
  let rowStyles: React.CSSProperties = {};
  const row = useRef<HTMLTableRowElement>(null);
  const isMobile = useMediaQuery('(max-width: 59.374rem)');

  useEffect(() => {
    if (row && row.current && isMobile) {
      const table = row.current.closest('table');

      if (table) {
        const observer = new MutationObserver((mutationsList) => {
          mutationsList.forEach((mutation) => {
            if (mutation.attributeName === 'data-current-page') {
              currentPageHandler(table);
            }
          });
        });

        observer.observe(table, { attributes: true });
        currentPageHandler(table);

        return () => {
          observer.disconnect();
        };
      }
    }
  }, [row.current]);

  function currentPageHandler(table: HTMLTableElement) {
    if (row && row.current) {
      const tableElement = row.current.closest('table');

      if (tableElement) {
        const itemsPerPage = extractDataNumber(table, 'itemsPerPage');
        const currentPageNumber = extractDataNumber(table, 'currentPage');

        // Trying to retrieve the target element for the current page.
        const targetElementIndex = (currentPageNumber - 1) * itemsPerPage;
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
