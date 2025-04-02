import React, { useState, useEffect } from "react";
import { logout } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HomeIcon, BriefcaseMedical, CircleDollarSign, MessageSquareText, ScanHeart, LogOut, ChevronLast, ChevronFirst } from "lucide-react";
import "../layout/style/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    sessionStorage.removeItem("token");
    dispatch(logout()); 
    navigate("/login"); 
  };

  const [expanded, setExpanded] = useState(
    JSON.parse(localStorage.getItem("sidebarExpanded")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(expanded));
  }, [expanded]);

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`sidebar ${expanded ? "expanded" : "collapsed"} w-16 md:w-64 bg-gray-800 text-white p-4`}>
      <div className="flex flex-col h-full">
        <div className="sidebar__header flex justify-between items-center mb-6">
          {expanded && <h2 className="sidebar__title text-lg font-bold">FocusFrame</h2>}
          <button
            onClick={() => setExpanded(!expanded)}
            className="toggle-btn text-white"
          >
            {expanded ? <ChevronLast /> : <ChevronFirst />}
          </button>
        </div>

        <nav className="sidebar__nav flex flex-col space-y-4">
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

      <div className="sidebar__logout mt-auto">
        <button onClick={handleLogout} className="logout-button flex items-center space-x-2">
          <LogOut className="logout-icon" />
          {expanded && <span className="logout-text">Sign out</span>}
        </button>
      </div>
    </aside>
  );
};

const SidebarLink = ({ to, text, icon, active, expanded }) => {
  return (
    <Link
      to={to}
      className={`sidebar__link flex items-center space-x-4 p-2 rounded-md hover:bg-gray-700 ${active ? "sidebar__link--active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="sidebar__link-icon text-xl">{icon}</span>
      {expanded && <span className="sidebar__link-text">{text}</span>}
    </Link>
  );
};

export default Sidebar;
