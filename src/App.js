import { Routes, Route } from "react-router-dom";
import { LoginFormPaciente } from "./auth/LoginFormPaciente";
import { RegisterFormPaciente } from "./auth/RegisterFormPaciente";
import HomePaciente from "./pages/paciente/HomePaciente";
import CitasPaciente from "./pages/paciente/CitasPaciente";
import PagosPaciente from "./pages/paciente/PagosPaciente";
import HistorialPaciente from "./pages/paciente/HistorialPaciente";
import ComunicacionPaciente from "./pages/paciente/ComunicacionPaciente";

function App() {
  return (
    <Routes>
      {/* Ruta de login y registro */}
      <Route path="/login" element={<LoginFormPaciente />} />
      <Route path="/register" element={<RegisterFormPaciente />} />
      <Route path="/register/:pacienteId" element={<RegisterFormPaciente />} />

       

     
      <Route path="/" element={<HomePaciente />} />
      <Route path="/citas" element={<CitasPaciente />} />
      <Route path="/pagos" element={<PagosPaciente />} />
      <Route path="/historial" element={<HistorialPaciente />} />
      <Route path="/comunicacion" element={<ComunicacionPaciente />} />


    </Routes>
  );
}

export default App;
