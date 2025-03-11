import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { User, Lock } from "lucide-react"; 
import agendar from "../img/agendar.webp";

export function RegisterFormPaciente() {
  const { pacienteId} = useParams();
  
    

  console.log("pacienteId:", pacienteId);
  const [mensajeError, setMensajeError] = useState("");
  const [register, setRegister] = useState({
    username: "",  
    password: "",
  });



  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
   /*  const pacienteId = localStorage.getItem("pacienteId"); */
    if (!pacienteId) {
      alert("No tienes permiso para completar el perfil");
      return;
    }
    setMensajeError("");

    console.log("Datos a enviar:", register);

    
    
    try {
      const response = await axios.post(
        `http://localhost:8081/paciente/completar-perfil/${pacienteId}`,
        register,
        { headers: { "Content-Type": "application/json" } }
      );
      

      console.log("Perfil completado con éxito:", response.data);
      alert("Perfil completado con éxito!");
      setRegister({ username: "", password: "" });
    } catch (error) {
      console.error("Error al completar perfil", error);
      setMensajeError(
        error.response?.data || "Hubo un error al completar el perfil"
      );
    }
  };


  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full flex overflow-hidden">
        {/* Formulario */}
        <div className="w-1/2 p-10 flex flex-col justify-center h-full">
          <h4 className="text-xl font-semibold text-[#a56799]">Focus Frame</h4>
          <h2 className="text-2xl font-bold text-gray-900">Completar Perfil</h2>
          <p className="text-gray-500 mb-6">Registra tu cuenta para acceder</p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Input de Nombre de Usuario con Icono */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={register.username}
                onChange={handleChange}
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#a56799] focus:outline-none transition-all"
              />
            </div>

            {/* Input de Contraseña con Icono */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={register.password}
                onChange={handleChange}
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#a56799] focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9d7f97] text-white py-3 rounded-lg hover:bg-[#bda8b9] transition-all"
            >
              Guardar
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
