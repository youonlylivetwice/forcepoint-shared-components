import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

interface DataTableProps {
  children: ReactNode;
}

type DataTableContextType = {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setTotalItems: Dispatch<SetStateAction<number>>;
  totalItems: number;
};

const DataTableContext = createContext<DataTableContextType>({
  currentPage: 0,
  itemsPerPage: 0,
  setCurrentPage: () => {},
  setTotalItems: () => {},
  totalItems: 0,
});

export const DataTableProvider = ({ children }: DataTableProps) => {
  const itemsPerPage = 2;
  const [totalItems, setTotalItems] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <DataTableContext.Provider
      value={{
        currentPage,
        itemsPerPage,
        setCurrentPage,
        setTotalItems,
        totalItems,
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
};

export const useDataTable = () => useContext(DataTableContext);
