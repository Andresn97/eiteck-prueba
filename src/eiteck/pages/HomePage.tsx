import { useEffect, useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { MenuBarLayout } from "../layouts/MenuBarLayout";
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
        
        
import { useCharacterStore } from "../hooks/useCharacterStore";
import { FooterLayout } from "../layouts/FooterLayout";


export const HomePage = () => {

  const { 
    characters, 
    startSetCharacters, 
    startClearCharacters
  } = useCharacterStore();
  const toast = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    startSetCharacters( toast );
    return () => {
      startClearCharacters();
    }
  }, []);

  const onDetailSelect = ( id: number ) => {
    navigate({
      pathname: '/character',
      search: createSearchParams({
        id: `${id}`
      }).toString()
    });
  }
  
  const footer = ( id: number ) => (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button 
        label="Detalles" 
        icon="pi pi-align-justify" 
        className="p-button-outlined p-button-primary" 
        onClick={ () => onDetailSelect( id ) }
      />
    </div>
  );

  return (
    <>
      <Toast ref={toast} />
      <MenuBarLayout />
      <div className="grid mt-2">
        {
          characters.map( character => (
            <div 
              className="col" 
              key={ character.id }
            >
              <Card 
                title={ character.name } 
                subTitle={ character.species } 
                footer={() => footer( character.id )} 
                header={(
                  <img 
                    alt={ character.name } 
                    src={ character.image } 
                    />
                )}
                className="md:w-25rem"
              >
                <p className="m-0">
                </p>
              </Card>
            </div>
          ))
        }
      </div>
      <FooterLayout />
    </>
  )
}
