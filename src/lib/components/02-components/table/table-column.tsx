import { cn } from '../../../utils/tailwind-merge';
import { setContrastTextColor } from './table-utils';
import React, { ReactNode, useEffect, useRef } from 'react';

export interface TableColumnProps {
  bgColor?: string;
  children: ReactNode;
}

const TableColumn: React.FC<TableColumnProps> = ({ bgColor, children }) => {
  let colStyles: React.CSSProperties = {};
  const column = useRef<HTMLTableCellElement>(null);

  if (bgColor) {
    colStyles = setContrastTextColor(bgColor);
  }

  useEffect(() => {
    if (column && column.current) {
      applyColumnStyles(column.current);
    }
  }, [column.current]);

  function applyColumnStyles(columnElement: HTMLTableCellElement) {
    const tableElement = columnElement.closest('table');
    const rowElement = columnElement.closest('tr');

    if (tableElement && rowElement) {
      // Get current column information.
      const columnCount = rowElement?.cells.length;
      const columnIndex = columnElement.cellIndex;
      const rowCount = tableElement?.rows.length;
      const rowIndex = rowElement?.rowIndex;

      // Check if a border should be applied based on column and row conditions.
      const shouldApplyBorder =
        !rowElement.cells[columnIndex + 1]?.dataset.color &&
        !(columnIndex === columnCount - 1) &&
        !bgColor;

      // Determine specific row and column conditions.
      // const isLastCol = columnIndex === columnCount - 1;
      const isLastRow = rowIndex === rowCount - 1;
      const isFirstColumn = columnIndex === 0;
      const isIndexEven = rowIndex % 2 === 0;
      const isFirstRow = rowIndex === 0;

      // Define CSS classes based on column position and row conditions.
      let columnClasses = cn(
        'p-md max-md:flex max-md:flex-col max-md:justify-center max-md:items-center md:max-w-[300px]',
        {
          'max-md:border-b-2 max-md:border-brumosa': shouldApplyBorder,
          'md:rounded-t-m max-md:rounded-l-m': isIndexEven && bgColor,
          // 'max-md:text-center': !isFirstColumn && !isFirstRow,
          'max-md:border-brumosa max-md:border-l-2': !isFirstRow,
          'max-md:items-start max-md:text-start': isFirstRow,
          'max-md:rounded-r-m': !isIndexEven && bgColor,
          // 'md:text-center': !isFirstColumn,
          'md:rounded-b-m': isLastRow,
          'md:pl-0': isFirstColumn,
        },
      );

      // Set the calculated classes to the current column element.
      columnElement.setAttribute('class', columnClasses);
    }
  }

  return (
    <td ref={column} style={colStyles} data-color={bgColor}>
      {children}
    </td>
  );
};

export default TableColumn;
