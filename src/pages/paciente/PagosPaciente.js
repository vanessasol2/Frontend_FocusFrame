import React from "react";
import MainLayout from "../../layout/MainLayout";

const Pagos = () => {
  return (
    <MainLayout>
      <div className="flex items-center">
        <div>
          <h3 className="font-Urbanist text-lg text-gray-900  py-4 px-6  ">
            Pagos pendientes
          </h3>
        </div>
      </div>
      <div className="bg-[#e4d9e1] rounded-lg  p-5">
        <h4 className="font-medium text-sm text-gray-700">Pagos pendientes</h4>
      </div>
    </MainLayout>
  );
};

export default Pagos;
