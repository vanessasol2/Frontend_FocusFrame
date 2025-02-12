import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdDateRange, MdOutlinePaid } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { BsFileMedical } from "react-icons/bs"; 

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  // Componente para enlaces del sidebar
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`h-screen bg-[#e5dae2] shadow-lg ${expanded ? "w-64" : "w-20"} transition-all`}>

      {/* Encabezado */}
      <div className="p-4 pb-2 flex justify-between items-center">
        <h2 className={`overflow-hidden transition-all font-Urbanist ${expanded ? "w-32" : "w-0"}`}>
          Focus Frame
        </h2>

        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ? <SlArrowRight /> : <SlArrowLeft />}
        </button>
      </div>

      {/* Navegación */}
      {/**la barra lateral muestra los íconos + texto. */}
      <nav className="flex flex-col gap-5 mt-4 px-3">
        <SidebarLink to="/" text="Inicio" icon={<GoHome  className="w-5 h-5"/>} active={isActive("/")} expanded={expanded} />
        <SidebarLink to="/citas" text="Citas" icon={<MdDateRange  className="w-5 h-5"/>} active={isActive("/citas")} expanded={expanded} />
        <SidebarLink to="/pagos" text="Pagos" icon={<MdOutlinePaid className="w-5 h-5"/>} active={isActive("/pagos")} expanded={expanded} />
        <SidebarLink to="/comunicacion" text="Comunicación"icon={<FaRegCommentAlt className="w-5 h-5"/>} active={isActive("/comunicacion")}expanded={expanded}/>
        <SidebarLink to="/personalizacion"text="Personalizacion" icon={<IoPersonSharp className="w-5 h-5"/>} active={isActive("/personalizacion")}expanded={expanded}/>
        <SidebarLink to="/historialClinico" text="HistorialClinico" icon={<BsFileMedical className="w-5 h-5"/>} active={isActive("/historialClinico")}expanded={expanded}/>
      </nav>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active, expanded }) => (
  <Link
    to={to}
    className={`relative flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
      active ? "bg-white text-[#26221f]" : "text-[#26221f] hover:bg-[#ae92ab]"
    }`}
  >
    {icon}
    <span className={`transition-all ${expanded ? "w-auto" : "w-0 overflow-hidden"}`}>{text}</span>
    {active && <div className="absolute right-2 w-2 h-2 rounded bg-[#26221f]" />}
  </Link>
);

export default Sidebar;
