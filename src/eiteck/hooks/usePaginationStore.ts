
import { BaseRest } from "../interfaces";
import { onClearPagination, onSetCharacters, onSetPagination } from "../../store/slices/character";
import { useEiteckDispatch, useEiteckSelector } from "./useBase";


export const usePaginationStore = () => {

  const dispatch = useEiteckDispatch();
  const { pagination } = useEiteckSelector( state => state.pagination );

  const startChangePage = async ( urlPage: string ) => {
    try {
      const base_resp: Response = await fetch( urlPage );
      const { info, results }: BaseRest = await base_resp.json();
      
      dispatch( onSetCharacters( results ) );
      dispatch( onSetPagination( info ) );

    } catch (error) {
      console.error(error);
    }
  }

  const startClearPagination = () => {
    dispatch( onClearPagination() );
  }


  return {
    pagination,
    startClearPagination,
    startChangePage
  }

}
