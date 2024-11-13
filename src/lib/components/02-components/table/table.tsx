import React, { ReactNode, useEffect, useRef } from 'react';
import Typography from '../../01-elements/typography/typography';
import { useDataTable } from './data-table-provider';
import TablePager from './table-pager';
import { TableRowProps } from './table-row';

export interface TableProps {
  children: ReactNode;
  data?: TableRowProps[];
  description?: string;
  heading?: string;
  subheading?: string;
  containterId?: string;
}

const Table: React.FC<TableProps> = ({
  children,
  description,
  heading,
  subheading,
  containterId
}) => {
  const table = useRef<HTMLTableElement>(null);
  const { setTotalItems } = useDataTable();

  useEffect(() => {
    if (table && table.current) {
      calculateColumnHeights();
      setTotalItems(table.current.rows.length);

      window.addEventListener('resize', calculateColumnHeights);

      return () => {
        window.removeEventListener('resize', calculateColumnHeights);
      };
    }
  }, [table.current]);

  /**
   * Sets the heights of table cells based on provided column heights.
   * If columnHeights is provided, sets each cell height accordingly; otherwise, sets height to 'auto'.
   * @param columnHeights An array of column heights in pixels, or undefined if not provided.
   */
  function setColumnHeights(columnHeights?: number[]) {
    if (table && table.current) {
      const columnWidth = getColumnWidth();

      Array.from(table.current.rows).forEach((row) => {
        Array.from(row.cells).forEach((cell, index) => {
          cell.style.height = columnHeights
            ? `${columnHeights[index]}px`
            : 'auto';
          if (window.innerWidth < 950) {
            cell.style.minWidth = `${columnWidth}px`;
          } else {
            cell.style.minWidth = '160px';
          }
        });
      });
    }
  }

  function calculateColumnHeights() {
    if (table && table.current) {
      setColumnHeights();

      if (window.innerWidth < 950) {
        const columnHeights = Array.from(
          { length: table.current.rows[0].cells.length },
          () => 0,
        );

        Array.from(table.current.rows).forEach((row) => {
          Array.from(row.cells).forEach((cell, index) => {
            const cellHeight = cell?.getBoundingClientRect().height || 0;
            columnHeights[index] = Math.max(columnHeights[index], cellHeight);
          });
        });

        setColumnHeights(columnHeights);
      }
    }
  }

  function getColumnWidth() {
    const wrapper = table.current?.closest('.table-wrapper');
    const parentWidth = wrapper?.getBoundingClientRect().width || 0;
    return parentWidth / 2;
  }

  const renderHeading = heading && (
    <Typography
      variant="h2"
      component="h2"
      className="mb-md max-w-[580px] font-semibold text-navy">
      {heading}
    </Typography>
  );

  const renderSubheading = subheading && (
    <Typography className="mb-md max-w-[580px] font-normal text-grey">
      {subheading}
    </Typography>
  );

  const renderTable = (
    <div className="table-wrapper max-md:overflow-x-hidden" id={containterId}>
      <table
        className="my-md min-w-full table-auto max-md:overflow-x-auto md:mt-lg"
        ref={table}>
        <tbody className="divide-chateau max-md:flex max-md:flex-row md:divide-y-2">
          {children}
        </tbody>
      </table>
    </div>
  );

  const renderDescription = (
    <Typography variant="body-5" className="font-normal text-grey max-md:mt-md">
      {description}
    </Typography>
  );

  return (
    <div className="py-lg md:mx-auto md:max-w-screen-lg md:py-xl">
      {renderHeading}
      {renderSubheading}
      {renderTable}
      <TablePager />
      {renderDescription}
    </div>
  );
};

export default Table;
