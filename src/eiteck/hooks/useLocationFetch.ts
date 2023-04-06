import { useEffect, useState } from "react"
import { LocationDetail } from "../interfaces/location"

export const useLocationFetch = ( url: string ) => {
  
  const emptyLocation: LocationDetail = {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [],
    url: '',
    created: '',
  } 
  const [location, setLocation] = useState<LocationDetail>(emptyLocation);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getLocation = async () => {
    try {
      const base_resp: Response = await fetch( url );
      const locationResp: LocationDetail = await base_resp.json();
      setLocation( locationResp );
      setIsLoading( false );

    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    getLocation();
  }, []);
  
  return {
    location,
    isLoading
  }

}
