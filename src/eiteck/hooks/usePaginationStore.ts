import { useState } from "react";

import { useEiteckDispatch, useEiteckSelector } from "./useBase";
import { onClearPagination } from "../../store/slices/character";

export const usePaginationStore = () => {

  const dispatch = useEiteckDispatch();
  const { pagination } = useEiteckSelector( state => state.pagination );
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const startClearPagination = () => {
    dispatch( onClearPagination() );
  }

  return {
    pagination,
    first,
    rows,
    setFirst,
    setRows,
    startClearPagination
  }

}
