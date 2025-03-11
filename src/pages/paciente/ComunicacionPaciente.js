import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";
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
      <main className="h-screen md:h-[90vh] grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {/* Contactos */}
        <section className="md:col-span-1 bg-white shadow-md rounded-lg p-4 overflow-hidden">
          <h2 className="font-semibold text-lg text-gray-800 mb-3">Contactos</h2>
          {/* Barra de búsqueda */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Buscar contacto"
              className="w-full p-2 border rounded-lg focus:outline-none pr-8"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          {/* Lista de contactos */}
          <ul className="space-y-3">
            {contacts.map((contact) => (
              <li
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition text-gray-800 ${
                  selectedContact?.id === contact.id ? "bg-gray-200" : ""
                }`}
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt={contact.name}
                  className="w-10 h-10 object-cover rounded-full border border-gray-300"
                />
                <div className="ml-3 flex-1">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-400">{contact.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Chat */}
        <section className="md:col-span-3 bg-white shadow-md rounded-lg flex flex-col">
          {selectedContact ? (
            <>
              {/* Encabezado del chat */}
              <header className="p-4 bg-gray-100 border-b flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt={selectedContact.name}
                  className="rounded-full w-11 h-10 mr-3"
                />
                <h2 className="text-lg font-medium">{selectedContact.name}</h2>
              </header>

              {/* Mensajes */}
              <div ref={chatRef} className="flex-1 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sentByUser ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sentByUser
                          ? "bg-[#e5dae2] text-right"
                          : "bg-gray-200"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input de mensaje */}
              <footer className="p-4 border-t flex items-center bg-white">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none"
                />
                <button className="ml-2 bg-[#9d7f97] text-white p-3 rounded-full">
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
