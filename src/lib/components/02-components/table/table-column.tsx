import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (column && column.current) {
      applyColumnStyles(column.current);
    }
  }, [column.current, currentPage]);

  const applyColumnStyles = useCallback(
    (columnElement: HTMLTableCellElement) => {
      const tableElement = columnElement.closest('table');
      const rowElement = columnElement.closest('tr');

      if (tableElement && rowElement) {
        // Calculate start and end indices for the current page
        const pageNumber = currentPage ? currentPage : 1;
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
        const isFirstColumn = columnIndex === 0;
        const isFirstRow = rowIndex === 0;

        // Determine if a border should be applied
        const shouldApplyBorder =
          !rowElement.cells[columnIndex + 1]?.dataset.color &&
          !(columnIndex === columnCount - 1) &&
          !bgColor;

        // Define dynamic CSS classes based on row and column conditions
        const columnClasses = cn(
          'p-md max-md:flex max-md:flex-col max-md:justify-center max-md:items-center md:max-w-[300px]',
          {
            'max-md:rounded-r-m': bgColor && (isLastVisible || isLastRow),
            'max-md:rounded-l-m':
              bgColor &&
              ((isFirstVisible && !isLastRow) || isBeforeCurrentPage),
            'max-md:items-start max-md:text-start': isFirstRow,
            'md:rounded-t-lg border-t-2 border-x-2 border-x-transparent border-y-transparent border-gradient':
              bgColor && isFirstRow,
            'md:rounded-b-lg border-b-2 border-x-2 border-x-transparent border-y-transparent border-gradient':
              bgColor && isLastRow,
            'max-md:border-b-2': shouldApplyBorder,
            'md:pl-0': isFirstColumn,
            'border-x-2 border-x-transparent border-gradient !bg-white':
              bgColor && !isFirstRow && !isLastRow,
          },
        );

        // Set the calculated classes to the current column element.
        columnElement.setAttribute('class', columnClasses);
      }
    },
    [currentPage],
  );

  return (
    <td ref={column} style={colStyles} data-color={bgColor}>
      {children}
    </td>
  );
};

export default TableColumn;
