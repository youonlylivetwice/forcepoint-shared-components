import { DataTableProvider } from './data-table-provider';
import Table, { TableProps } from './table';

const TableWrapper = ({ children, ...rest }: TableProps) => {
  return (
    <DataTableProvider>
      <Table {...rest}>{children}</Table>
    </DataTableProvider>
  );
};

export default TableWrapper;
