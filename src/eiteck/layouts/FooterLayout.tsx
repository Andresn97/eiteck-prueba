
import { Paginator } from 'primereact/paginator';

import { usePaginationStore } from '../hooks/usePaginationStore';
import { useEffect } from 'react';


export const FooterLayout = () => {
  
  const {
    pagination,
    first,
    rows,
    setFirst,
    setRows,
    startClearPagination
  } = usePaginationStore();

  const onPageChange = (event: any) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  useEffect(() => {
    return () => {
      startClearPagination();
    }
  }, []);

  return (
    <div className="card mt-3">
      <div 
        className="flex justify-content-center flex-wrap card-container"
      >
        <Paginator 
          first={first} 
          rows={rows} 
          totalRecords={120} 
          onPageChange={onPageChange} 
        />
      </div>
    </div>
  );
}
