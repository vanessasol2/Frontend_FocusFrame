import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"; 
import agendar from "../../img/agendar.webp";

export function RegisterFormPsicologo() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8081";
  const navigate = useNavigate();

  const [mensajeError, setMensajeError] = useState("");
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMensajeError("");

    console.log("Datos a enviar:", register);

    try {
      const response = await axios.post(
        `${API_URL}/psicologo/registro`,
        register,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Registro exitoso psicologo :", response.data);
      alert("Registro exitoso Psicologo!");
      setRegister({ username: "", email: "", password: "" });

      navigate("/login");
    } catch (error) {
      console.error("Error en el registro", error);
      setMensajeError(error.response?.data || "Hubo un error en el registro");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full flex overflow-hidden">
        <div className="w-1/2 p-10 flex flex-col justify-center h-full">
          <h4 className="text-xl font-semibold text-[#5603AD]">Focus Frame</h4>
          <h2 className="text-2xl font-bold text-gray-900">Registro de Psicólogo</h2>
          <p className="text-gray-500 mb-6 ">Crea tu cuenta para acceder</p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Input de Nombre de usuario */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={register.username}
                onChange={handleChange}
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5603AD] focus:outline-none transition-all"
              />
            </div>

            {/* Input de Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={register.email}
                onChange={handleChange}
                required
                className="w-full p-3 pl-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5603AD] focus:outline-none transition-all"
              />
            </div>

            {/* Input de Contraseña con botón para mostrar/ocultar */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                value={register.password}
                onChange={handleChange}
                required
                className="w-full p-3 pl-12 pr-12 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#5603AD] focus:outline-none transition-all"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full button-primary text-white py-3 rounded-lg transition-all"
            >
              Registrarse
            </button>
            {mensajeError && (
              <p className="text-red-500 text-sm text-center mt-2">{mensajeError}</p>
            )}
          </form>
        </div>

        <div className="w-1/2 button-primary flex flex-col items-center justify-center p-10 text-white rounded-r-3xl transition-all">
          <img src={agendar} className="w-80 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform" alt="Focus Frame" />
          <p className="text-center text-white mt-4 text-lg">
            Con <span className="font-bold text-[#f0e1ff]">FocusFrame</span>, administra tu calendario, citas y archivos de cliente desde una interfaz unificada.
          </p>
        </div>
      </div>
    </main>
  );
}
