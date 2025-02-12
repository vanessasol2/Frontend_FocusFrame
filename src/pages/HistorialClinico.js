import Header from "../components/Header";
import FilterHisto from "../components/FilterHisto";
import Accordion from "../components/Accordion";

const HistorialClinico = () => {
    return (
      <div className="xl:col-span-5 p-14 h-[100vh] overflow-y-scroll lg:ml-4 xl:ml-10 2xl:ml-12">
           <Header />
          {/* Contenido principal */}
          <div className="flex gap-8">
            {/* Columna izquierda */}
            <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
              <div className="text-center mb-6">
                <img
                  src="https://img.freepik.com/foto-gratis/chico-caucasico-atractivo-seguro-beige-pullon-sonriendo-ampliamente-mientras-esta-pie-contra-gris_176420-44508.jpg"
                  alt="Vanessa Solano"
                  className="rounded-full  w-20 h-20 mx-auto mb-4"
                />
                <h2 className="text-lg  font-Urbanist font-medium">Vanessa Solano</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Datos personales</h3>
                  <ul className="space-y-2 mt-2">
                    <li>
                      <span className="block text-sm text-gray-500">Edad:</span>
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2 text-gray-600"
                        placeholder="Edad"
                      />
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Género:</span>
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2 text-gray-600"
                        placeholder="Género"
                      />
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Hobbies:</span>
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2 text-gray-600"
                        placeholder="Hobbies"
                      />
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Ocupación:</span>
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2 text-gray-600"
                        placeholder="Ocupación"
                      />
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Teléfono:</span>
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2 text-gray-600"
                        placeholder="Teléfono"
                      />
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500">Contacto de emergencia:</span>
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2 text-gray-600"
                        placeholder="Contacto de emergencia"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            {/* Columna derecha */}
            <div className="bg-white rounded-lg shadow-lg w-2/3 p-6">
          <h3 className="text-xl font-Urbanist font-medium mb-4 text-[#4a4a4a]">Antecedentes</h3>
          <div><FilterHisto/> </div>
          <div className="mb-6 text-right relative px-2 ">
            <span className="text-gray-600 text-sm ">Terapia de pareja</span>
          </div>

          {/*Accordion contenido*/}
          <div className="p-4  rounded-lg ">
          <Accordion title="Medicamentos Activos" answer="loremmmmmm." />
          <Accordion title="Enfermedades" answer="loremmmmm." />
          <Accordion title="Sintomas" answer="loremmmmm." />
          </div>
          

          {/* Botón de guardar */}
          <div className="mt-6 text-right">
            <button className="bg-[#9d7f97] text-white px-6 py-2 rounded-lg shadow hover:bg-[#6f6475]">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
      );

};

export default HistorialClinico;
