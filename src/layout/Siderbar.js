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

  // Estilos
  const styles = {
    sidebar: "h-screen bg-white shadow-lg w-64 transition-all p-4",
    header: "p-4 border-b",
    greeting: "text-sm text-gray-500",
    userName: "text-lg font-semibold text-[#3D3A4A]",
    nav: "flex flex-col gap-2 mt-4 text-[#3D3A4A]",
    logout: "mt-8 border-t pt-4",
  };

  return (
    <aside className={styles.sidebar}>
      {/* Encabezado con usuario */}
      <div className={styles.header}>
        <p className={styles.greeting}>Hello 👋,</p>
        <h2 className={styles.userName}>{userName}</h2>
      </div>

      {/* Navegación */}
      <nav className={styles.nav}>
        <SidebarLink to="/" text="My Home" icon={<AiOutlineUser />} active={isActive("/")} />
        <SidebarLink to="/citas" text="Citas" icon={<MdDateRange />} active={isActive("/citas")} />
        <SidebarLink to="/pagos" text="Pagos" icon={<MdOutlinePaid />} active={isActive("/pagos")} />
        <SidebarLink to="/comunicacion" text="Comunicación" icon={<FaRegCommentAlt />} active={isActive("/comunicacion")} />
        <SidebarLink to="/historial" text="Historial Clínico" icon={<BsFileMedical />} active={isActive("/historial")} />
      </nav>

      {/* Cierre de sesión */}
      <div className={styles.logout}>
        <SidebarLink to="/logout" text="Sign out" icon={<IoMdLogOut />} />
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active }) => {
  const linkStyles = `flex items-center gap-3 py-3 px-4 rounded-lg transition-all text-base ${
    active ? "bg-[#F3F0FF] text-[#5603AD] font-semibold" : "hover:bg-[#F3F0FF] hover:text-[#8350e8]"
  }`;

  return (
    <Link
      to={to}
      className={linkStyles}
      aria-current={active ? "page" : undefined}
    >
      <span className="text-[#8350e8] text-xl">{icon}</span>
      {text}
    </Link>
  );
};

export default Sidebar;