import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDateRange, MdOutlinePaid } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsFileMedical } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const userName = "Vanessa Solano";

  // Componente para enlaces del sidebar
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="h-screen bg-white shadow-lg w-64 transition-all p-4">
      
      {/* Encabezado con usuario */}
      <div className="p-4 border-b">
        <p className="text-sm text-gray-500">Hello 👋,</p>
        <h2 className="text-lg font-semibold text-[#3D3A4A]">{userName}</h2>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-2 mt-4 text-[#3D3A4A]">
        <SidebarLink to="/" text="My Home" icon={<AiOutlineUser />} active={isActive("/")} />
        <SidebarLink to="/citas" text="Citas" icon={<MdDateRange />} active={isActive("/citas")} />
        <SidebarLink to="/pagos" text="Pagos" icon={<MdOutlinePaid />} active={isActive("/pagos")} />
        <SidebarLink to="/comunicacion" text="Comunicación" icon={<FaRegCommentAlt />} active={isActive("/comunicacion")} />
        <SidebarLink to="/historial" text="Historial Clínico" icon={<BsFileMedical />} active={isActive("/historial")} />
      </nav>

      {/* Cierre de sesión */}
      <div className="mt-8 border-t pt-4">
        <SidebarLink to="/logout" text="Sign out" icon={<IoMdLogOut />} />
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all text-base ${
      active ? "bg-[#F3F0FF] text-[#8350e8]" : "hover:bg-[#F3F0FF] hover:text-[#8350e8]"
    }`}
  >
    <span className="text-[#8350e8] text-xl">{icon}</span>
    {text}
  </Link>
);

export default Sidebar;
