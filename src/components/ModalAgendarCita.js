const ModalAgendarCita = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-purple-50 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative inline-block bg-white rounded-lg overflow-hidden shadow-2xl sm:max-w-xl sm:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Agendar una Cita</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="date" className="block text-gray-700">
                Fecha
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-2 w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-gray-700">
                Hora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="mt-2 w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#ff6464] text-white py-2 px-4 rounded-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-[#9d7f97] hover:bg-[#6f6475] text-white py-2 px-4 rounded-lg"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAgendarCita;
