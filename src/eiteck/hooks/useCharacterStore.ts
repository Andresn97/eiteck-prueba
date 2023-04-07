
import { BaseRest, Character } from "../interfaces";

import { 
  onClearCharacters, 
  onClearSingleCharacter, 
  onSetCharacters, 
  onSetPagination, 
  onSetSingleCharacter 
} from "../../store/slices/character";
import { getBaseFetch } from "../helpers/fetch";
import { useEiteckDispatch, useEiteckSelector } from "./useBase";


export const useCharacterStore = () => {

  const dispatch = useEiteckDispatch();
  const { characters, singleCharacter } = useEiteckSelector( state => state.character );

  const startSetGlobalData = async ( toast: any  ) => {
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

  const startSetCharacterSearched = async ( term: string ) => {
    try {
      const base_resp: Response = await getBaseFetch( `character/?name=${ term }` );
      if (base_resp.ok) {
        const { info, results }: BaseRest = await base_resp.json();
        
        dispatch( onSetCharacters( results ) );
        dispatch( onSetPagination( info ) );       
      }
    } catch (error) {
      console.error(error);
      
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
    startSetGlobalData,
    startSetCharacter,
    startSetCharacterSearched,
    startClearCharacters,
    startClearSingleCharacter,
  }

}