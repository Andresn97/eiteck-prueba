import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../eiteck/pages/HomePage";
import { CharacterPage } from "../eiteck/pages/CharacterPage";


export const AppRouter = () => {
  return (
    <Routes>
      <Route 
        path="home"
        element={ <HomePage /> }
      />
      <Route 
        path="character"
        element={ <CharacterPage /> }
      />
      <Route 
        path="/*"
        element={ <Navigate to='/home' /> }
      />
    </Routes>
  )
}
