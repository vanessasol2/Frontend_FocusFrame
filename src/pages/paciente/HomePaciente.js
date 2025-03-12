import React from "react";
import MainLayout from "../../layout/MainLayout";
import totalCita from "../../img/totalCita.svg";
import cancelarCita from "../../img/cancelarCita.svg";
import citasPendientes from "../../img/citasPendientes.svg";

import completadasCita from "../../img/completadasCita.svg";

const HomePaciente = () => {
  const appointments = [
    {
      client: "Sara Mateus",
      status: "Completada",
      time: "1:00pm - 2:30pm",
      date: "23 Nov 2024",
    },
    {
      client: "Sara Mateus",
      status: "Pendiente",
      time: "3:00pm - 4:00pm",
      date: "24 Nov 2024",
    },
    {
      client: "Sara Mateus",
      status: "Cancelada",
      time: "10:00am - 11:30am",
      date: "25 Nov 2024",
    },
  ];

  const resumenData = [
    {
      title: "Total Citas",
      value: 15,
      color: "text-gray-700",
      bg: "bg-[#f3f0ff]",
      icon: totalCita,
    },
    {
      title: "Citas Completadas",
      value: 1,
      color: "text-green-800",
      bg: "bg-green-100",
      icon: completadasCita,
    },
    {
      title: "Citas Pendientes",
      value: 4,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: citasPendientes,
    },
    {
      title: "Citas Canceladas",
      value: 1,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: cancelarCita,
    },
  ];

  return (
    <MainLayout>
      
      {/* Sección de Resumen */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6">
        {resumenData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between`}
          >
            <div>
              <h4 className="font-semibold text-gray-600 text-lg">
                {item.title}
              </h4>
              <span className={`text-4xl font-bold ${item.color}`}>
                {item.value}
              </span>
            </div>
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </section>

      {/* Sección de Citas Recientes y Notas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-6">
        {/* Citas Recientes */}
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mb-6">
            Citas Recientes
          </h1>
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {appointment.client}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {appointment.date} | {appointment.time}
                  </p>
                </div>
                <span
                  className={`py-1 px-4 rounded-full text-sm font-medium ${
                    appointment.status === "Pendiente"
                      ? "bg-yellow-100 text-yellow-800"
                      : appointment.status === "Completada"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notas */}
        <div>
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Notas</h1>
          <div className="bg-white p-6 rounded-xl shadow-inner overflow-y-auto max-h-96">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="bg-[#f3f0ff] p-4 rounded-lg shadow mb-4 last:mb-0"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Nota {index + 1}
                </h3>
                <p className="text-sm text-gray-600">
                  Esta es la nota número {index + 1}. Muy bien
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePaciente;
