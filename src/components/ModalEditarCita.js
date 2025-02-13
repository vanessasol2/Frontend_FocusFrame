import { useState, useEffect } from "react";

const ModalEditarCita = ({ isOpen, onClose, appointment, onSave }) => {
  const [editedAppointment, setEditedAppointment] = useState(appointment || {});

  useEffect(() => {
    setEditedAppointment(appointment || {});
  }, [appointment]);

  if (!isOpen || !appointment) return null;

  const handleChange = (e) => {
    setEditedAppointment({ ...editedAppointment, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Editar Cita :</h2>

        <label>Fecha:</label>
        <input type="date" name="date" value={editedAppointment.date || ""} onChange={handleChange} className="border p-2 w-full mb-2" />

        <label>Hora:</label>
        <input type="time" name="time" value={editedAppointment.time || ""} onChange={handleChange} className="border p-2 w-full mb-4" />

        <button className=" bg-[#9d7f97] hover:bg-[#6f6475] text-white px-4 py-2 rounded-lg mr-2" onClick={() => onSave(editedAppointment)}>Guardar</button>
        <button className="bg-[#ff6464] text-white py-2 px-4 rounded-lg" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default ModalEditarCita;
