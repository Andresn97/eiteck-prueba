
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
        
        


export const MenuBarLayout = () => {

  const items: MenuItem[] = [];

  const start = <img 
    alt="logo" 
    src="public/morty.png" 
    height="40" 
    className="mr-2"
  ></img>;
  const end = <InputText 
    placeholder="Buscar Personaje" 
    type="text" 
    className="w-full" 
  />;

  return (
    <Menubar model={items} start={start} end={end} />
  )
}
