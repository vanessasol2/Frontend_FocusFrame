import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5"; 

const PageTitle = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      {/* Título Principal */}
      <h1 className="text-3xl font-bold font-urbanist text-[#8350e8] tracking-wide">
        {title}
      </h1>

      {/* Miga de Pan debajo del título */}
      <nav className="text-sm text-gray-500 flex items-center space-x-1 mt-1">
        <Link to="/" className="hover:text-[#8350e8] transition">
          Inicio
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={to}>
              <IoChevronForward className="text-gray-400 text-xs" />
              <Link to={to} className="hover:text-[#8350e8] transition capitalize">
                {value}
              </Link>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default PageTitle;
