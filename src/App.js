import { Routes, Route } from "react-router-dom";
import { LoginFormPaciente } from "./auth/paciente/LoginFormPaciente";
import { RegisterFormPaciente } from "./auth/paciente/RegisterFormPaciente";
import { RegisterFormPsicologo } from "./auth/psicologo/RegisterFormPsicologo";
import HomePaciente from "./pages/paciente/HomePaciente";
import CitasPaciente from "./pages/paciente/CitasPaciente";
import PagosPaciente from "./pages/paciente/PagosPaciente";
import HistorialPaciente from "./pages/paciente/HistorialPaciente";
import ComunicacionPaciente from "./pages/paciente/ComunicacionPaciente";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<LoginFormPaciente />} />
      <Route path="/register" element={<RegisterFormPaciente />} />
      <Route path="/register/:pacienteId" element={<RegisterFormPaciente />} />
      <Route path="/register-psicologo" element={<RegisterFormPsicologo />} />

      {/* Rutas protegidas */}
      <Route 
        path="/home-paciente" 
        element={
          <ProtectedRoute allowedRoles={["PACIENTE"]}>
            <HomePaciente />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/citas" 
        element={
          <ProtectedRoute allowedRoles={["PACIENTE"]}>
            <CitasPaciente />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/pagos" 
        element={
          <ProtectedRoute allowedRoles={["PACIENTE"]}>
            <PagosPaciente />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/historial" 
        element={
          <ProtectedRoute allowedRoles={["PACIENTE"]}>
            <HistorialPaciente />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/comunicacion" 
        element={
          <ProtectedRoute allowedRoles={["PACIENTE"]}>
            <ComunicacionPaciente />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;
