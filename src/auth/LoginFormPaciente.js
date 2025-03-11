import React, { useState } from "react";
import { Mail, Lock } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import agendar from "../img/agendar.webp";

export function LoginFormPaciente() {
  const [mensajeError, setMensajeError] = useState("");
  const [password, setPasswordValue] = useState("");
  const [email, setEmailValue] = useState("");

  
  const navigate = useNavigate();

  
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  //  Iniciar Sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Datos enviados: " + email + " " + password);

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:8081/auth/login", data);

      if (response.data && response.data.token) {

        
        localStorage.setItem("token", response.data.token);
        
        alert("Login exitoso");
        console.log("Token recibido:", response.data.token);

        // Redirigir 
        navigate("/dashboard");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      if (error.response) {

        // Capturar errores específicos del backend
        if (error.response.status === 401) {
          setMensajeError("Usuario o contraseña incorrectos");
        } else if (error.response.status === 500) {
          setMensajeError("Error en el servidor, intenta más tarde");
        } else {
          setMensajeError("Error desconocido");
        }
      } else {
        setMensajeError("No se pudo conectar con el servidor");
      }
    }
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full flex overflow-hidden">
        {/* Formulario */}
        <div className="w-1/2 p-10 flex flex-col justify-center h-full">
          <h4 className="text-xl font-semibold text-[#a56799]">Focus Frame</h4>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Bienvenidos!</h2>

          <form className="space-y-4">
            {/* Input de Email con Icono */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmailValue(e.target.value)}
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#a56799] focus:outline-none transition-all"
              />
            </div>

            {/* Input de Contraseña con Icono */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPasswordValue(e.target.value)}
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#a56799] focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9d7f97] text-white py-3 rounded-lg hover:bg-[#bda8b9] transition-all"
            >
              Iniciar Sesión
            </button>
            {mensajeError && (
              <p className="text-red-500 text-sm text-center mt-2">{mensajeError}</p>
            )}
          </form>
        </div>

        {/* Sección de imagen */}
        <div className="w-1/2 bg-gradient-to-r from-[#e4d9e1] via-[#9d7f97] to-[#a56799] flex flex-col items-center justify-center p-10 text-white rounded-r-3xl">
          <img
            src={agendar}
            className="w-80 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            alt="Focus Frame"
          />
          <p className="text-center text-white mt-4 text-lg">
            Con <span className="font-bold text-[#f0e1ff]">FocusFrame</span>, administra tu calendario, citas y archivos de cliente desde una interfaz unificada.
          </p>
        </div>
      </div>
    </main>
  );
}
