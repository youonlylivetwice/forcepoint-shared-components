import { CSSProperties, ReactNode, useState } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import useMediaQuery from '../../../hooks/use-media-query';
import Typography from '../../01-elements/typography/typography';

export interface TableRowProps {
  bgColor?: string;
  columns: TableColumnProps[];
}

export interface TableColumnProps {
  text?: string;
  bgColor?: string;
  renderedContentComponent?: ReactNode;
}

export type TableProps = {
  heading?: string;
  description?: string;
  renderedDescriptionComponent?: ReactNode;
  data: TableRowProps[];
};

export default function Table({
  data,
  description,
  heading,
  renderedDescriptionComponent,
}: TableProps) {
  // Table variables
  const isMobile = useMediaQuery('(max-width: 59.374rem)');
  const rows = extractTableDataByDevice();

  // Pager variables
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  function handlePageClick(page: number) {
    setCurrentPage(page);
  }

  function extractTableDataByDevice() {
    if (isMobile) {
      const items: TableRowProps[] = [];
      data.forEach((row: TableRowProps) => {
        row.columns.forEach((column: TableColumnProps, index: number) => {
          items[index] = items[index] || { columns: [] };
          items[index].columns.push(column);
        });
      });
      return items;
    } else {
      return data;
    }
  }

  const renderColumn = (
    column: TableColumnProps,
    colIndex: number,
    columns: number,
    rowIndex: number,
  ) => {
    const colStyles: CSSProperties = {};

    const isLastRow = rowIndex === data.length - 1;
    const isLastColumn = colIndex === columns - 1;
    const isFirstPage = currentPage === 1;
    const isFirstColumn = colIndex === 0;
    const isFirstRow = rowIndex === 0;

    if (column && column.bgColor) {
      colStyles.backgroundColor = column.bgColor;
    }

    if (
      isMobile &&
      !column.bgColor &&
      rows[rowIndex + 1] &&
      rows[rowIndex + 1].columns[colIndex] &&
      !rows[rowIndex + 1].columns[colIndex].bgColor
    ) {
      colStyles.borderBottom = `solid 2px #ccd2d3`;
    }

    return (
      <th
        key={colIndex}
        style={colStyles}
        className={cn('z-0 p-md text-start font-normal max-md:align-top', {
          'max-md:rounded-l-m md:pl-0': isFirstColumn,
          'max-md:rounded-r-m': isLastColumn,
          'max-md:w-[50%]': !isFirstPage,
          'md:rounded-t-m': isFirstRow,
          'md:rounded-b-m': isLastRow,
        })}
      >
        {column.renderedContentComponent ? (
          column.renderedContentComponent
        ) : column.text ? (
          <div dangerouslySetInnerHTML={{ __html: column.text }} />
        ) : null}
      </th>
    );
  };

  const renderRow = (row: TableRowProps, rowIndex: number) => {
    let columns = row.columns;
    const rowStyles: CSSProperties = {};

    if (row && row.bgColor) {
      rowStyles.backgroundColor = row.bgColor;
    }

    if (isMobile) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      columns = row.columns.slice(startIndex, endIndex);
    }

    return (
      <tr
        key={rowIndex}
        style={rowStyles}
        className="bg-white max-md:divide-x-2 max-md:divide-chateau"
      >
        {columns.map((column: TableColumnProps, colIndex: number) =>
          renderColumn(column, colIndex, columns.length, rowIndex),
        )}
      </tr>
    );
  };

  const renderTable = (): JSX.Element => {
    return (
      <table className="my-lg min-w-full table-auto divide-chateau max-md:overflow-x-auto max-md:pb-md md:divide-y-2">
        {rows.map(renderRow)}
      </table>
    );
  };

  const renderPager = (): JSX.Element => {
    const pager = [];
    for (let i = 1; i <= totalPages; i++) {
      pager.push(
        <button className="group mb-md" onClick={() => handlePageClick(i)}>
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
    return (
      <div className="mt-md flex items-center justify-center gap-sm md:hidden">
        {pager}
      </div>
    );
  };

  return (
    <div className="py-lg md:py-xl">
      {heading && (
        <Typography
          variant="h2"
          component="h2"
          className="mb-md max-w-[580px] font-semibold text-navy"
        >
          {heading}
        </Typography>
      )}
      {renderedDescriptionComponent ? (
        renderedDescriptionComponent
      ) : description ? (
        <Typography className="mb-md max-w-[580px] font-normal text-grey">
          {description}
        </Typography>
      ) : null}
      {renderTable()}
      {renderPager()}
    </div>
  );
}
