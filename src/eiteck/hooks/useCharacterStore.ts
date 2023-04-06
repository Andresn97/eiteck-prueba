
import { Character } from "../interfaces";

import { 
  onClearCharacters, 
  onClearSingleCharacter, 
  onSetCharacters, 
  onSetSingleCharacter 
} from "../../store/slices/character";
import { getBaseFetch } from "../helpers/fetch";
import { useEiteckDispatch, useEiteckSelector } from "./useBase";
import { usePaginationStore } from "./usePaginationStore";


export const useCharacterStore = () => {

  const dispatch = useEiteckDispatch();
  const { characters, singleCharacter } = useEiteckSelector( state => state.character );

  const startSetCharactersToStore = ( characters: Character[] ) => {
    dispatch( onSetCharacters( characters ) );
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
    startSetCharactersToStore,
    startSetCharacter,
    startClearCharacters,
    startClearSingleCharacter,
  }

}