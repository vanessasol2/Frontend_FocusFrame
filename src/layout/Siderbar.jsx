import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdDateRange, MdOutlinePaid } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsFileMedical, BsBoxArrowRight } from "react-icons/bs";
import "../layout/style/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__header">
          <h2 className="sidebar__title">FocusFrame</h2>
        </div>

        <nav className="sidebar__nav">
          <SidebarLink
            to="/home-paciente"
            text="Dashboard"
            icon={<AiOutlineUser />}
            active={isActive("/home-paciente")}
          />
          <SidebarLink
            to="/citas"
            text="Citas"
            icon={<MdDateRange />}
            active={isActive("/citas")}
          />
          <SidebarLink
            to="/pagos"
            text="Pagos"
            icon={<MdOutlinePaid />}
            active={isActive("/pagos")}
          />
          <SidebarLink
            to="/comunicacion"
            text="Comunicación"
            icon={<FaRegCommentAlt />}
            active={isActive("/comunicacion")}
          />
          <SidebarLink
            to="/historial"
            text="Historial Clínico"
            icon={<BsFileMedical />}
            active={isActive("/historial")}
          />
        </nav>
      </div>

      <div className="sidebar__logout">
        <SidebarLink
          to="/logout"
          text="Sign out"
          icon={<BsBoxArrowRight />}
        />
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active }) => {
  return (
    <Link
      to={to}
      className={`sidebar__link ${active ? "sidebar__link--active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="sidebar__link-icon">{icon}</span>
      <span className="sidebar__link-text">{text}</span>
    </Link>
  );
};

export default Sidebar;
