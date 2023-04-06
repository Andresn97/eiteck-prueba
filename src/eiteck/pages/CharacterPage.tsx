import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
        

import { useCharacterStore } from "../hooks/useCharacterStore";
import { LocationLayout } from "../layouts/LocationLayout";


export const CharacterPage = () => {

  const { 
    singleCharacter,
    startSetCharacter,
    startClearSingleCharacter
  } = useCharacterStore();
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const idParam: string = searchParams.get('id') || '';
    ( idParam ) && startSetCharacter( idParam );
  
    return () => {
      startClearSingleCharacter();
    }
  }, [ searchParams ]);

  const onBackHome = async () => {
    navigate('/home');
  }

  return (
    <div className="grid">
      <div className="col">
        <Card>
          <div className="grid">
            <div className="col-3">
              <Image 
                src={ singleCharacter.image } 
                alt={ singleCharacter.name } 
                width="250"
                preview
              />
            </div>
            <div className="col">
              <h1 className="h-c">{ singleCharacter.name }</h1>
              <div className="grid">
                <div className="col-6">
                  <h4 className="h-c">Status: { singleCharacter.status }</h4>
                  <h4 className="h-c">Especie: { singleCharacter.species }</h4>
                  <h4 className="h-c">Tipo: { singleCharacter.type || 'Ninguno' }</h4>
                  <h4 className="h-c">Género: { singleCharacter.gender }</h4>
                </div>
                <div className="col-6">
                  {/* <h4 className="h-c">Origen: { singleCharacter.origin.name }</h4> */}
                  <Accordion>
                    <AccordionTab header="Origen">
                      <LocationLayout 
                        url={ singleCharacter.origin.url } 
                      />
                    </AccordionTab>
                    <AccordionTab header="Ubicación">
                      <LocationLayout 
                        url={ singleCharacter.location.url } 
                      />
                    </AccordionTab>
                  </Accordion>
                  {/* <h4 className="h-c">Ubicación: { singleCharacter.location.name }</h4> */}
                    <div className="col">
                      <h3 className="h-c">Episodios que aparece</h3>
                      {
                        singleCharacter.episode.map( (episode, index) => (
                          <Badge 
                            value={ `Episodio ${episode.slice(episode.lastIndexOf('/') + 1)}` }
                            severity="success"
                            key={index}
                            className="mr-2"
                          ></Badge>
                        ))
                      }

                    </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Button 
          label="Regresar" 
          icon='pi pi-angle-left'
          severity="secondary"
          className="mt-3"
          onClick={ onBackHome }
        ></Button>
      </div>
    </div>
  )
}
