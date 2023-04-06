import { FC, useEffect, useState } from "react";
import { useLocationFetch } from "../hooks/useLocationFetch";


interface LocationType {
  url: string;
}

export const LocationLayout: FC<LocationType> = ({ url }) => {

  const { location, isLoading } = useLocationFetch( url );

  if ( isLoading ) return ( 
    <i 
      className="pi pi-spin pi-spinner" 
      style={{ fontSize: '2rem' }}
    ></i> 
  )

  return (
    <div className="grid">
      <div className="col">
        <h5 className="h-c">Nombre: { location.name }</h5>
        <h5 className="h-c">Tipo: { location.type }</h5>
        <h5 className="h-c">Dimensión: { location.dimension }</h5>
      </div>
    </div>
  )
}
