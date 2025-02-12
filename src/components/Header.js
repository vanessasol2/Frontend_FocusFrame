import React from 'react';
//  iconos
import {IoIosNotifications} from "react-icons/io";
const Header = () => {
    return (
      <header className="flex justify-between items-center py-4 px-6  ">
        <div>
          <h1 className="text-3xl font-Urbanist text-[#626262]">Hola Vanessa</h1>
          <p className="text-sm text-gray-500">Home Page &gt; Dashboard</p>
        </div>
  
        <div className='flex items-center gap-6'>
        <div className="relative">
            <IoIosNotifications className="text-[#9d7f97] text-xl"/>
            <span className=" bg-purple-600 absolute rounded-full text-[10px] text-white py-[2px] px[6px] -top-2 -right-1">
              2
            </span>
        </div>
        <div>
           {/* Imagen del usuario */}
           <img
              src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
              alt="Usuario"
              className="w-10 h-10 rounded-full"
            />
        </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  