import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import useMediaQuery from '../../../hooks/use-media-query';
import { cn } from '../../../utils/tailwind-merge';
import { setContrastTextColor } from '../../00-tokens/color/color-shared';
import { useDataTable } from './data-table-provider';

export interface TableColumnProps {
  bgColor?: string;
  children: ReactNode;
}

const TableColumn = ({ bgColor, children }: TableColumnProps) => {
  const { currentPage, itemsPerPage } = useDataTable();
  let colStyles: React.CSSProperties = {};
  const column = useRef<HTMLTableCellElement>(null);

  if (bgColor) {
    colStyles = setContrastTextColor(bgColor);
  }

  const isMobile = useMediaQuery('(max-width: 59.374rem)');

  const applyColumnStyles = useCallback(
    (columnElement: HTMLTableCellElement) => {
      const tableElement = columnElement.closest('table');
      const rowElement = columnElement.closest('tr');

      if (tableElement && rowElement) {
        // Calculate start and end indices for the current page
        const pageNumber = currentPage ? currentPage : 1;
        const lastPage = Math.ceil(tableElement.rows.length / itemsPerPage);
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = pageNumber * itemsPerPage - 1;

        // Get information about the row and column
        const columnCount = rowElement?.cells.length;
        const columnIndex = columnElement.cellIndex;
        const rowCount = tableElement?.rows.length;
        const rowIndex = rowElement?.rowIndex;

        // Determine specific row and column conditions
        const isBeforeCurrentPage = rowIndex < startIndex;
        const isFirstVisible = rowIndex === startIndex;
        const isLastVisible = rowIndex === endIndex;
        const isLastRow = rowIndex === rowCount - 1;
        const isBeforeLastRow = rowIndex === rowCount - 2;
        const isFirstColumn = columnIndex === 0;
        const isFirstRow = rowIndex === 0;
        const isEven = rowIndex % 2 === 0;
        const isOdd = rowIndex % 2 !== 0;
        const isLastPage = pageNumber === lastPage;

        // Determine if a border should be applied
        const shouldApplyBorder =
          !rowElement.cells[columnIndex + 1]?.dataset.color &&
          !(columnIndex === columnCount - 1) &&
          !bgColor;

        // Define dynamic CSS classes based on row and column conditions
        const columnClasses = cn(
          'p-md max-md:flex max-md:flex-col max-md:justify-center max-md:items-center md:max-w-[300px]',
          {
            'rounded-r-m sm:rounded-r-[0] border-r-2 border-x-transparent':
              bgColor && (isLastVisible || isLastRow),
            'border-x-transparent':
              bgColor && (!isLastVisible || !isLastRow || !isLastRow),
            'max-md:rounded-l-m':
              bgColor &&
              ((isFirstVisible && !isLastRow) || isBeforeCurrentPage),
            'max-md:items-start max-md:text-start': isFirstRow,
            'md:rounded-t-lg border-l-2 md:border-l-[0] border-x-transparent border-y-2 md:border-t-2 md:border-b-[0] md:border-x-2 md:border-x-transparent border-y-transparent border-gradient':
              bgColor && isFirstRow,
            'md:rounded-b-lg border-y-2 md:border-b-2 md:border-t-[0] md:border-x-2 md:border-x-transparent border-y-transparent border-gradient':
              bgColor && isLastRow,
            'max-md:border-b-2 border-b-chateau': shouldApplyBorder,
            'md:pl-0': isFirstColumn,
            'border-y-2 border-y-transparent md:border-y-[0] border-r-transparent border-r-transparent md:border-x-2 border-x-transparent border-gradient':
              bgColor && !isFirstRow && !isLastRow,
            '!bg-white': bgColor,
            // 'border-l-2': isMobile && bgColor && isFirstVisible,
            // 'border-l-2 border-l-chateau':
            //   isMobile && !isFirstRow && !isLastRow && isLastVisible,
            'border-r-2 border-x-chateau':
              (isMobile && isEven && !isLastPage) ||
              (isMobile && isLastPage && isBeforeLastRow),
            'border-l-2':
              (isMobile && bgColor && isEven && !isLastPage) ||
              (isMobile && bgColor && isLastPage && isBeforeLastRow),
            'border-r-2':
              isMobile && bgColor && isOdd && !isBeforeLastRow && !isLastPage,
            // 'border-l-viola border-l-2': isLastPage && isBeforeLastRow,
          },
        );

        // Set the calculated classes to the current column element.
        columnElement.setAttribute('class', columnClasses);
      }
    },
    [currentPage, bgColor, itemsPerPage, isMobile],
  );

  useEffect(() => {
    if (column && column.current) {
      applyColumnStyles(column.current);
    }
  }, [currentPage, applyColumnStyles]);

  return (
    <td ref={column} style={colStyles} data-color={bgColor}>
      {children}
    </td>
  );
};

export default TableColumn;

