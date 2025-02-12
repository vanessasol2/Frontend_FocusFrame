
import Navbar from "./components/Navbar";
import Citas from "./pages/Citas";
import Pagos from "./pages/Pagos"; 
import Comunicacion from './pages/Comunicacion';
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import HistorialClinico from './pages/HistorialClinico';


function App() {
  
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/comunicacion" element={<Comunicacion />} />
        <Route path="/historialClinico" element={<HistorialClinico />} />

      </Routes>

      
    </div>
  );
}

export default App;
