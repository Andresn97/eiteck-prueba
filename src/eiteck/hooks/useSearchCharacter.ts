import { useState } from "react";

import { BaseRest } from "../interfaces";


export const useSearchCharacter = () => {
  
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiRoot: string = 'https://rickandmortyapi.com/api';

  const getSuggestions = async ( term: string ) => {
    try {
      const base_resp: Response = await fetch( `${apiRoot}/character/?name=${ term }` );
      if (base_resp.ok) {
        const baseData: BaseRest = await base_resp.json();
        const nameResults: string[] = baseData.results.map( character => {
          return character.name
        });

        setSuggestions(nameResults );
      }
      if ( !base_resp.ok ) setSuggestions([]);
      setIsLoading( false );        
    } catch (error) {
      console.error(error);
      
    }
  }

  return {
    suggestions,
    isLoading,
    getSuggestions,
    setSuggestions
  }

}
