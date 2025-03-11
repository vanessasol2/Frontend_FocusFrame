import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Notificaciones from "../components/header/Notificaciones"; 
import PageTitle from "../components/header/PageTitle"; 

const Header = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const location = useLocation();
  const userName = "Vanessa";

  const pageTitles = {
    "/home":"My Home" ,
    "/citas": "Citas",
    "/pagos": "Pagos",
    "/historial": "Historial Clínico",
    "/comunicacion": "Comunicación",
  };

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setShowWelcome(true);
    }
  }, []);

  const closeWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("hasSeenWelcome", "true");
  };

  return (
    <>
      {/* Modal de bienvenida */}
      {showWelcome && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-80 text-center transform transition-all scale-95 animate-fadeIn">
            <h2 className="text-xl font-semibold text-[#5A3EBA]">
              ¡Bienvenida, {userName}! 🎉
            </h2>
            <p className="text-gray-600 mt-2">
              Esperamos que tengas un gran día. Explora tu dashboard y mantente organizada.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-[#5A3EBA] text-white rounded-lg hover:bg-[#4A32A8] transition-all"
              onClick={closeWelcome}
            >
              ¡Gracias!
            </button>
          </div>
        </div>
      )}

      {/* Header principal */}
      <header className="flex justify-between items-center py-4 px-6 border-b border-gray-300 bg-white shadow-sm">
        <PageTitle title={pageTitles[location.pathname] || "My Home"} />

        <div className="flex items-center gap-4">
          <Notificaciones /> 
        </div>
      </header>
    </>
  );
};

export default Header;
