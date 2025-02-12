const ModalDetallesCita = ({ isOpen, onClose, appointment }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-purple-50 bg-opacity-50"
        onClick={onClose}
      >
        <div
          className="relative inline-block bg-gray-100 rounded-lg overflow-hidden shadow-2xl sm:max-w-xl sm:w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="items-center w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Detalles de la Cita</h2>
            <hr className="border-t-1 border-gray-300 my-2" />
            <p>
              <strong>Cliente:</strong> {appointment?.client}
            </p>
            <p>
              <strong>Fecha:</strong> {appointment?.date}
            </p>
            <p>
              <strong>Hora:</strong> {appointment?.time}
            </p>
            <p>
              <strong>Estado:</strong> {appointment?.status}
            </p>
            <button
              className="mt-4 bg-[#9d7f97] hover:bg-[#6f6475] text-white py-2 px-4 rounded-lg"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalDetallesCita;
  