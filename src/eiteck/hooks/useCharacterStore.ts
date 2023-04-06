
import { BaseRest, Character } from "../interfaces";

import { 
  onClearCharacters, 
  onClearSingleCharacter, 
  onSetCharacters, 
  onSetSingleCharacter 
} from "../../store/slices/character";
import { onSetPagination } from "../../store/slices/character/paginationSlice";
import { getBaseFetch } from "../helpers/fetch";
import { useEiteckDispatch, useEiteckSelector } from "./useBase";


export const useCharacterStore = () => {

  const dispatch = useEiteckDispatch();
  const { characters, singleCharacter } = useEiteckSelector( state => state.character );

  const startSetCharacters = async ( toast: any ) => {
    try {
      const base_resp: Response = await getBaseFetch( 'character' );
      const { info, results }: BaseRest = await base_resp.json();
      
      dispatch( onSetCharacters( results ) );
      dispatch( onSetPagination( info ) );

    } catch (error) {
      toast.current?.show({ 
        severity: 'error', 
        summary: 'Ocurrió un error', 
        detail: error 
      });
    }
  }

  const startSetCharacter = async ( id: string ) => {
    try {
      
      const base_resp: Response = await getBaseFetch( `character/${ id }` );
      const characterDetail: Character = await base_resp.json();
      
      dispatch( onSetSingleCharacter( characterDetail ) );

    } catch (error) {
      console.log(error);
      
    }
  }

  const startClearCharacters = () => {
    dispatch( onClearCharacters() );
  }

  const startClearSingleCharacter = () => {
    dispatch( onClearSingleCharacter() );
  }

  return {
    characters,
    singleCharacter,
    startSetCharacters,
    startSetCharacter,
    startClearCharacters,
    startClearSingleCharacter,
  }

}