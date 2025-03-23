import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { HomeIcon,BriefcaseMedical,CircleDollarSign,MessageSquareText,ScanHeart, LogOut, ChevronLast, ChevronFirst } from "lucide-react";
import "../layout/style/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(
    JSON.parse(localStorage.getItem("sidebarExpanded")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(expanded));
  }, [expanded]);

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
      <div>
        <div className="sidebar__header">
          {expanded && <h2 className="sidebar__title">FocusFrame</h2>}

          <button
            onClick={() => setExpanded(!expanded)}
            className="toggle-btn"
          >
            {expanded ? <ChevronLast /> : <ChevronFirst />}
          </button>
        </div>

        <nav className="sidebar__nav">
          <SidebarLink
            to="/home-paciente"
            text="Dashboard"
            icon={<HomeIcon />}
            active={isActive("/home-paciente")}
            expanded={expanded}
          />
          <SidebarLink
            to="/citas"
            text="Citas"
            icon={<BriefcaseMedical />}
            active={isActive("/citas")}
            expanded={expanded}
          />
          <SidebarLink
            to="/pagos"
            text="Pagos"
            icon={<CircleDollarSign />}
            active={isActive("/pagos")}
            expanded={expanded}
          />
          <SidebarLink
            to="/comunicacion"
            text="Comunicación"
            icon={<MessageSquareText />}
            active={isActive("/comunicacion")}
            expanded={expanded}
          />
          <SidebarLink
            to="/historial"
            text="Historial Clínico"
            icon={<ScanHeart />}
            active={isActive("/historial")}
            expanded={expanded}
          />
        </nav>
      </div>

      <div className="sidebar__logout">
        <SidebarLink
          to="/logout"
          text="Sign out"
          icon={<LogOut />}
          expanded={expanded}
        />
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active, expanded }) => {
  return (
    <Link
      to={to}
      className={`sidebar__link ${active ? "sidebar__link--active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="sidebar__link-icon">{icon}</span>
      {expanded && <span className="sidebar__link-text">{text}</span>}
    </Link>
  );
};

export default Sidebar;
