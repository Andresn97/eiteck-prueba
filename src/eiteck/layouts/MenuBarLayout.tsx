
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';

import { FormEvent, useState } from 'react';
import { useSearchCharacter } from '../hooks';
import { useCharacterStore } from '../hooks/useCharacterStore';
        
      
export const MenuBarLayout = () => {

  const items: MenuItem[] = [];
  const [term, setTerm] = useState<string>('');
  const { characters, startSetCharacterSearched } = useCharacterStore();
  const { suggestions, getSuggestions, setSuggestions } = useSearchCharacter();

  const searchTerm = (event: AutoCompleteCompleteEvent) => {
    if ( !event.query.trim().length ) setSuggestions( characters.map( item => item.name ) );
    if ( event.query.trim().length ) getSuggestions( event.query );    
  }

  const onSearchCharacter = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    startSetCharacterSearched( term );
  }
  

  const start = <img 
    alt="logo" 
    src="../../src/assets/morty.png" 
    height="40" 
    className="mr-2"
  ></img>;

  const end = (
    <form onSubmit={ onSearchCharacter }>

      <AutoComplete 
        value={term} 
        suggestions={suggestions} 
        completeMethod={ searchTerm }
        placeholder='Buscar Personaje' 
        onChange={(e) => setTerm(e.value)} 
      />
    </form>
  );

  return (
    <Menubar model={items} start={start} end={end} />
  )
}
