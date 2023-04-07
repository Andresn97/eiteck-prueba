
import { useEffect, useState } from 'react';
import { 
  Paginator, 
  PaginatorCurrentPageReportOptions, 
  PaginatorPageChangeEvent,
  PaginatorRowsPerPageDropdownOptions 
} from 'primereact/paginator';

import { usePaginationStore } from '../hooks/usePaginationStore';


export const FooterLayout = () => {
  
  const {
    pagination,
    startChangePage,
    startClearPagination
  } = usePaginationStore();
  const [first, setFirst] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
  
    return () => {
      startClearPagination();
    }
  }, []);

  const onPageChange = (paginator: PaginatorPageChangeEvent) => {  
    setFirst(paginator.first);
    
    if ( page < paginator.page ) {
      startChangePage( pagination.next || '' );
    }
    if ( page > paginator.page ) {
      startChangePage( pagination.prev || '' );
    }
    setPage( paginator.page );
  };

  const  paginationTemplate  = {
    layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
    RowsPerPageDropdown: (
      options: PaginatorRowsPerPageDropdownOptions
    ) => {
      return (<></>);
    },
    CurrentPageReport: (
      options: PaginatorCurrentPageReportOptions
    ) => {
      return (
        <span style={{ 
              color: 'var(--text-color)', 
              userSelect: 'none', 
              width: '120px', 
              textAlign: 'center' 
            }}>
          {options.first} - {options.last} de {options.totalRecords}
        </span>
      );
    }
  };

  return (
    <div className="card mt-3">
      <div 
        className="flex justify-content-center flex-wrap card-container"
      >
        <Paginator 
          first={first}
          rows={20}
          totalRecords={pagination.count} 
          template={ paginationTemplate }
          onPageChange={ onPageChange } 
        />
      </div>
    </div>
  );
}
