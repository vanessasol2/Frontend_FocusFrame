import { useState } from "react";
import { CalendarDays, XCircle, CheckCircle, Clock3 } from "lucide-react";
import MainLayout from "../../layout/MainLayout";
import Filter from "../../components/cita/Filter";
import { Dialog } from "@headlessui/react";
const CitasPaciente = () => {
  const [open, setOpen] = useState(false);
  const [appointments] = useState([
    {
      id: 1,
      name: "Sara Mateus",
      date: "October 15, 2023",
      time: "9:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Juan Pérez",
      date: "October 16, 2023",
      time: "10:00 AM",
      status: "Cancelled",
    },
    {
      id: 3,
      name: "Ana Gómez",
      date: "October 17, 2023",
      time: "11:00 AM",
      status: "Confirmed",
    },
  ]);

  return (
    <MainLayout>
      {/* Contenedor principal */}
      <div className="p-4">
        <div className="flex justify-end mb-2">
          <button
            className="bg-[#5603ad] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#47038C] transition-all duration-300 flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <CalendarDays className="w-5 h-5" /> Agendar una cita
          </button>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="text-gray-800 font-semibold whitespace-nowrap">
            Próximas Citas
          </h2>
          <Filter />
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
      </div>

      {/* Modal para Agendar Cita */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-gray-400/75 " />
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              <XCircle className="w-6 h-6" />
            </button>
            <div className="sm:flex sm:items-center gap-3 mb-4">
              <div className="flex items-center justify-center rounded-full bg-[#cab0e5] p-2">
                <CalendarDays className="h-6 w-6 text-[#5603ad]" />
              </div>
              <h2 className="text-xl font-semibold text-[#5603ad]  ">
                Agendar Cita
              </h2>
            </div>

            <p className="text-gray-600 mt-2">
              Selecciona la fecha y hora para tu cita.
            </p>

            <div className="mt-4">
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8350E8]"
              />
              <input
                type="time"
                className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8350E8]"
              />
            </div>

            <div className="flex justify-between mt-5">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-[#5603ad] text-white rounded-lg hover:bg-[#47038C] transition-all duration-300"
                onClick={() => alert("Cita Agendada")}
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Tarjetas de Citas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col space-y-4 hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-gray-800 text-lg font-semibold">Psicólogo:</h3>
            <h2 className="text-gray-600 text-lg">{appointment.name}</h2>

            <div className="flex justify-between items-center text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-[#5603ad]" />
                <h2 className="text-sm">{appointment.date}</h2>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="h-5 w-5 text-[#5603ad]" />
                <p className="text-sm">{appointment.time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {appointment.status === "Confirmed" ? (
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle className="h-5 w-5 mr-1" /> Confirmada
                </div>
              ) : (
                <div className="flex items-center text-red-600 font-medium">
                  <XCircle className="h-5 w-5 mr-1" /> Cancelada
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
