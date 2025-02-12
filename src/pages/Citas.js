import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import Header from "../components/Header";
import Filter from "../components/Filter";
import ModalAgendarCita from "../components/ModalAgendarCita"; 
import ModalDetallesCita from "../components/ModalDetallesCita"; 

const Citas = () => {
  // Estado para los modales
  const [isAgendarModalOpen, setIsAgendarModalOpen] = useState(false);
  const [isDetallesModalOpen, setIsDetallesModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Datos de las citas
  const appointments = [
    {
      name: "Sara Mateus",
      date: "October 15, 2023",
      time: "9:00",
      status: "Confirmed",
    },
    {
      name: "Sara Mateus",
      date: "October 15, 2023",
      time: "9:00",
      status: "Cancelled",
    },
    {
      name: "Sara Mateus",
      date: "October 15, 2023",
      time: "9:00",
      status: "Confirmed",
    },
  ];

  // Función para abrir el modal de detalles
  const openDetallesModal = (appointment) => {
    setSelectedAppointment(appointment);
    setIsDetallesModalOpen(true);
  };

  return (
    <div className="xl:col-span-5 p-14 h-[100vh] overflow-y-scroll lg:ml-4 xl:ml-10 2xl:ml-12">
      <Header />
      <div className="flex justify-end">
        
        {/* Botón para abrir el Modal de Agendamiento */}
        <button
          className="mt-4 bg-[#9d7f97] text-white py-2 px-4 rounded-lg hover:bg-[#6f6475] transition-colors"
          onClick={() => setIsAgendarModalOpen(true)}
        >
          Agendar una cita
        </button>
      </div>
      <div className="grid grid-cols-1">
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col cursor-pointer"
            onClick={() => openDetallesModal(appointment)} // Abrir modal al hacer clic
          >
            <div className="flex flex-col justify-end  mb-5">
              <h3 className="font-Urbanist text-lg text-gray-900">
                Psicólogo:{" "}
              </h3>
              <h2 className="font-Urbanist text-lg text-gray-600">
                {appointment.name}
              </h2>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="h-5 w-5 text-gray-500" />
                <h2 className="font-Urbanist text-sm">{appointment.date}</h2>
              </div>
              <div className="flex items-center space-x-2">
                <CiClock1 className="h-5 w-5 text-gray-700" />
                <p className="text-base font-Urbanist text-black">
                  {appointment.time}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {appointment.status === "Confirmed" ? (
                  <>
                    <FaCircleCheck className="h-5 w-5 text-green-600" />
                    <span className="text-green-600">{appointment.status}</span>
                  </>
                ) : (
                  <>
                    <IoCloseCircleSharp className="h-5 w-5 text-red-600" />
                    <span className="text-red-600">{appointment.status}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Agendamiento */}
      <ModalAgendarCita
        isOpen={isAgendarModalOpen}
        onClose={() => setIsAgendarModalOpen(false)}
      />

      {/* Modal de Detalles */}
      <ModalDetallesCita
        isOpen={isDetallesModalOpen}
        onClose={() => setIsDetallesModalOpen(false)}
        appointment={selectedAppointment} // Pasar los detalles de la cita
      />
    </div>
  );
};

export default Citas;
