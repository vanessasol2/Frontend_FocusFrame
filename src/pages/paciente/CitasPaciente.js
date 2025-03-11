import { useState } from "react";
import { CalendarDays, XCircle, CheckCircle, Clock3 } from "lucide-react";
import MainLayout from "../../layout/MainLayout";
import Filter from "../../components/cita/Filter";

const CitasPaciente = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Sara Mateus", date: "October 15, 2023", time: "9:00 AM", status: "Confirmed" },
    { id: 2, name: "Juan Pérez", date: "October 16, 2023", time: "10:00 AM", status: "Cancelled" },
    { id: 3, name: "Ana Gómez", date: "October 17, 2023", time: "11:00 AM", status: "Confirmed" },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      {/* Contenedor del filtro y el botón */}
      <div className="flex justify-end items-center gap-4 p-4">
        {/* Filtro */}
        <Filter />

        {/* Botón Agendar Cita */}
        <button
          className="bg-[#8350E8] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6D3DBD] transition-all duration-300 flex items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <CalendarDays className="w-5 h-5" /> Agendar una cita
        </button>
      </div>

      {/* Ventana Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative text-center">
            {/* Botón de Cerrar */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              <XCircle className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold text-[#8350E8]">Agendar Cita</h2>
            <p className="text-gray-600 mt-2">Selecciona la fecha y hora para tu cita.</p>

            {/* Campos del formulario */}
            <input
              type="date"
              className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8350E8]"
            />
            <input
              type="time"
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8350E8]"
            />

            {/* Botones */}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all duration-300"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-[#8350E8] text-white rounded-lg hover:bg-[#6D3DBD] transition-all duration-300"
                onClick={() => alert("Cita Agendada")}
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tarjetas de Citas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col space-y-4 hover:shadow-xl transition-all duration-300"
          >
            {/* Nombre del Psicólogo */}
            <div className="flex flex-col">
              <h3 className="text-gray-800 text-lg font-semibold">Psicólogo:</h3>
              <h2 className="text-gray-600 text-lg">{appointment.name}</h2>
            </div>

            {/* Fecha y Hora */}
            <div className="flex justify-between items-center text-gray-600">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-5 w-5 text-[#8350E8]" />
                <h2 className="text-sm">{appointment.date}</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Clock3 className="h-5 w-5 text-[#8350E8]" />
                <p className="text-sm">{appointment.time}</p>
              </div>
            </div>

            {/* Estado de la Cita */}
            <div className="flex items-center space-x-2">
              {appointment.status === "Confirmed" ? (
                <div className="flex items-center text-[#8350E8] font-medium">
                  <CheckCircle className="h-5 w-5 mr-1" />
                  Confirmada
                </div>
              ) : (
                <div className="flex items-center text-red-600 font-medium">
                  <XCircle className="h-5 w-5 mr-1" />
                  Cancelada
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default CitasPaciente;
