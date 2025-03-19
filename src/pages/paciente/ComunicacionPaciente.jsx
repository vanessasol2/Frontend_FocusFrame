import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaPaperPlane, FaCircle } from "react-icons/fa";
import MainLayout from "../../layout/MainLayout";

const ComunicacionPaciente = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const chatRef = useRef(null);

  const contacts = [
    { id: 1, name: "Sara Mateus", lastMessage: "Buenas tardes doctor...", status: "online", time: "15min" },
    { id: 2, name: "Juan Pablo", lastMessage: "Encantado de verte ayer.", status: "offline", time: "1h" },
    { id: 3, name: "Pedro Julio", lastMessage: "Hola, ¿cómo estás?", status: "online", time: "5min" },
  ];

  const messages = [
    { sender: "Sara Mateus", text: "Hola, doctor, ¿cómo está?", time: "12:30", sentByUser: false },
    { sender: "Tú", text: "Hola, Sara. Estoy bien, gracias. ¿En qué puedo ayudarte?", time: "12:31", sentByUser: true },
    { sender: "Sara Mateus", text: "Quería confirmar nuestra cita para la próxima semana.", time: "12:33", sentByUser: false },
    { sender: "Tú", text: "Claro que sí, está confirmada. ¿Algo más?", time: "12:35", sentByUser: true },
  ];

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <MainLayout>
      <main className="h-screen md:h-[90vh] grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50">
        {/* Contactos */}
        <section className="md:col-span-1 bg-white shadow-lg rounded-xl p-4 overflow-hidden">
  <h2 className="font-semibold text-lg text-gray-800 mb-4">Contactos</h2>

  {/* Barra de búsqueda */}
  <div className="relative mb-4">
    <input
      type="text"
      placeholder="Buscar contacto"
      className="w-full p-2 border rounded-lg focus:outline-none pr-8"
    />
    <FaSearch className="absolute right-3 top-3 text-gray-400" />
  </div>

  {/* Lista de contactos */}
  <ul className="space-y-3">
    {contacts.map((contact) => (
      <li
        key={contact.id}
        onClick={() => setSelectedContact(contact)}
        className={`flex items-center p-3 rounded-lg cursor-pointer transition text-gray-800 bg-[#F5F2FA] hover:bg-[#E6E1FA] 
        ${selectedContact?.id === contact.id ? "border-2 border-[#8367C7]" : ""}`}
      >
        {/* Imagen del contacto */}
        <div className="relative min-w-12">
          <img
            src="https://images.pexels.com/photos/31093995/pexels-photo-31093995/free-photo-of-smiling-woman-in-stylish-restaurant-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt={contact.name}
            className="w-12 h-12 object-cover rounded-full border border-gray-300"
          />
          {/* Estado en línea */}
          {contact.status === "online" && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
          )}
        </div>

        {/* Información del contacto */}
        <div className="ml-3 flex-1 min-w-0">
          <p className="font-medium">{contact.name}</p>
          <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
        </div>

        {/* Tiempo y notificación */}
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-500">{contact.time}</span>
          <div className="w-5 h-5 bg-[#8367C7] text-white text-xs font-semibold flex items-center justify-center rounded-full mt-1">
            2
          </div>
        </div>
      </li>
    ))}
  </ul>
</section>


        {/* Chat */}
        <section className="md:col-span-3 bg-white shadow-lg rounded-xl flex flex-col">
          {selectedContact ? (
            <>
            {/* Encabezado del chat */}
              <header className="p-4 bg-[#f3f0ff] border-b flex items-center rounded-t-xl">
                <h2 className="text-lg font-medium">{selectedContact.name}</h2>
              </header>

              {/* Mensajes */}
              <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sentByUser ? "justify-end" : "justify-start"} mb-2`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg shadow-md  ${
                        message.sentByUser ? "bg-[#8367C7] text-white" : "bg-[#F5F2FA]"
                      }`}
                    >
                      <p className="text-sm ">{message.text}</p>
                      <span className="text-xs text-gray-400 block mt-1">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Input de mensaje */}
              <footer className="p-4 border-t flex items-center bg-white rounded-b-xl">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none"
                />
                <button className="ml-2 bg-[#6D3DBD] text-white p-3 rounded-full hover:bg-[#8350E8] transition">
                  <FaPaperPlane />
                </button>
              </footer>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <p>Selecciona un contacto para empezar a chatear</p>
            </div>
          )}
        </section>
      </main>
    </MainLayout>
  );
};

export default ComunicacionPaciente;
