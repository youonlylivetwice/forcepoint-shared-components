import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface DataTableProps {
  children: ReactNode;
}

type DataTableContextType = {
  currentPage: number | null;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number | null>>;
  setTotalItems: Dispatch<SetStateAction<number>>;
  totalItems: number;
};

const DataTableContext = createContext<DataTableContextType>({
  currentPage: null,
  itemsPerPage: 0,
  setCurrentPage: () => {},
  setTotalItems: () => {},
  totalItems: 0,
});

export const DataTableProvider = ({ children }: DataTableProps) => {
  const itemsPerPage = 2;
  const [totalItems, setTotalItems] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  return (
    <DataTableContext.Provider
      value={{
        currentPage,
        itemsPerPage,
        setCurrentPage,
        setTotalItems,
        totalItems,
      }}>
      {children}
    </DataTableContext.Provider>
  );
};

export const useDataTable = () => useContext(DataTableContext);
