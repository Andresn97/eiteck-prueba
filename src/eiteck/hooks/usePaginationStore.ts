
import { BaseRest, Information } from "../interfaces";
import { onClearPagination, onSetPagination } from "../../store/slices/character";
import { useEiteckDispatch, useEiteckSelector } from "./useBase";
import { useCharacterStore } from "./useCharacterStore";
import { getBaseFetch } from "../helpers";


export const usePaginationStore = () => {

  const dispatch = useEiteckDispatch();
  const { pagination } = useEiteckSelector( state => state.pagination );
  const { startSetCharactersToStore } = useCharacterStore();

  const startSetGlobalData = async ( toast: any ) => {
    try {
      const base_resp: Response = await getBaseFetch( 'character' );
      const { info, results }: BaseRest = await base_resp.json();
      
      startSetCharactersToStore( results );
      startSetPagination( info );

    } catch (error) {
      toast.current?.show({ 
        severity: 'error', 
        summary: 'Ocurrió un error', 
        detail: error 
      });
    }
  }

  const startChangePage = async ( urlPage: string ) => {
    try {
      const base_resp: Response = await fetch( urlPage );
      const { info, results }: BaseRest = await base_resp.json();
      
      startSetCharactersToStore( results );
      startSetPagination( info );

    } catch (error) {
      console.error(error);
    }
  }

  const startSetPagination = ( paginator: Information ) => {
    dispatch( onSetPagination( paginator ) );
  }

  const startClearPagination = () => {
    dispatch( onClearPagination() );
  }


  return {
    pagination,
    startSetGlobalData,
    startSetPagination,
    startClearPagination,
    startChangePage
  }

}
