const Pendientes = () => {
    const pagosPendientes = [
      { id: 1, tipo: "Sesión en vivo", año: "2024", mes: "Julio", fecha: "15/06/2024", valor: "314,300" },
      { id: 2, tipo: "Sesión en Chat", año: "2024", mes: "Julio", fecha: "15/06/2024", valor: "314,300" },
    ];
  
    return (
      <div>
        <h2 className="mt-4 text-lg font-semibold text-gray-800">Pendiente</h2>
        {/* Encabezado de la tabla */}
        <div className="grid grid-cols-6 items-center bg-[#E9E5FF] p-3 rounded-t-lg mt-4 font-semibold text-gray-800">
          <p>Tipo</p>
          <p>Año</p>
          <p>Mes</p>
          <p>Fecha</p>
          <p>Valor</p>
          <p className="text-right">Acciones</p>
        </div>
  
        {/* Tarjetas de pago */}
        <div className="space-y-4">
          {pagosPendientes.map((pago) => (
            <div key={pago.id} className="grid grid-cols-6 items-center bg-[#f3f0ff] p-4 rounded-xl shadow-sm">
              <p className="text-gray-700">{pago.tipo}</p>
              <p className="text-gray-700">{pago.año}</p>
              <p className="text-gray-700">{pago.mes}</p>
              <p className="text-gray-700">{pago.fecha}</p>
              <p className="text-gray-700">{pago.valor}</p>
  
              {/* Botones */}
              <div className="flex justify-end gap-2">
                <button className="bg-[#8350E8] text-white px-4 py-1 rounded-lg">Pagar</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded-lg">Ver Detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Pendientes;
  