import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" rounded-lg p-4 mb-4 shadow-sm bg-[#e5dae2] ">
      {/* Botón del Acordeón */}
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center"
      >
        <span className="text-gray-700 font-medium">{title}</span>

        {/* Ícono con animación */}
        <svg
          className={`shrink-0 ml-4 transition-transform duration-200 ease-out fill-purple-500 ${
            accordionOpen ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Línea horizontal (siempre visible) */}
          <rect y="7" width="16" height="2" rx="1" />
          
          {/* Línea vertical (se oculta cuando está abierto) */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`rotate-90 transition-opacity duration-200 ${
              accordionOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </svg>
      </button>

      {/* Contenido desplegable con animación */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-gray-900">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
