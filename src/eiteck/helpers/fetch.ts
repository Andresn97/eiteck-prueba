
import { getEnvVariables } from "../helpers/";


const { VITE_RICK_AND_MORTY_API } = getEnvVariables();


const getBaseFetch = ( endpoint: string  ) => {
  
  const url = `${ VITE_RICK_AND_MORTY_API }/${ endpoint}`;

  return fetch( url );

}

export {
  getBaseFetch
}