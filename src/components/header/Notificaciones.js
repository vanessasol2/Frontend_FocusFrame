import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Notifications = () => {
  return (
    <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-200 transition duration-300">
      <IoIosNotificationsOutline className="text-[#8350E8] text-2xl" />
      <span className="absolute -top-0.5 -right-0.5 bg-[#8350E8] text-white text-[9px] font-medium rounded-full w-4 h-4 flex items-center justify-center shadow-md">
        2
      </span>
    </div>
  );
};

export default Notifications;
