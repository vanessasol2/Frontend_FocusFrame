import { useLocation } from "react-router-dom";
import Notificaciones from "../components/header/Notificaciones"; 
import PageTitle from "../components/header/PageTitle"; 


const Header = () => {
 
  const location = useLocation();
 
 
  const pageTitles = {
    "/home": "My Home",
    "/citas": "Citas",
    "/pagos": "Pagos",
    "/historial": "Historial Clínico",
    "/comunicacion": "Comunicación",
  };

  
  return (
    <>

      {/* Header principal */}
      <header className="flex justify-between items-center py-4 px-6 ">
        <PageTitle title={pageTitles[location.pathname] || "My Home"} />

        <div className="flex items-center gap-4">
          <Notificaciones /> 
        </div>
      </header>
    </>
  );
};

export default Header;
