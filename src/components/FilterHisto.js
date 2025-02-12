import { Menu } from "@headlessui/react";
import { HiMiniChevronDown } from "react-icons/hi2";


export default function FilterHisto() {
  return (
    <div className="flex gap-4"> {/* Contenedor flex para alinear los filtros */}
      {/* Filtro 1 */}
      <Menu as="div" className="relative inline-block text-left py-4 px-2">
        <div>
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
            Terapias
            <HiMiniChevronDown className="ml-2 h-4 w-4 text-gray-500" />
          </Menu.Button>
        </div>

        <Menu.Items
          as="div"
          className="absolute left-0 z-50 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  Hoy
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  Mañana
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>

      {/*  otro filtro */}
      <Menu as="div" className="relative inline-block text-left py-4 px-3">
        <div>
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
            Sesiones 
            <HiMiniChevronDown className="ml-2 h-4 w-4 text-gray-500" />
          </Menu.Button>
        </div>

        <Menu.Items
          as="div"
          className="absolute left-0 z-50 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  Opción 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  Opción 2
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
 
  );
}
