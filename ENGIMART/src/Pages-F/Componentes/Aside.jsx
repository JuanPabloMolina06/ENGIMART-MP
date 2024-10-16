import { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [activeItem, setActiveItem] = useState("Dashboards");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <aside className="flex flex-col bg-white justify-start min-h-screen w-64 md:w-72 lg:w-80">
        {/* Logo Responsiva */}
        <img
          src={"/Logo-Vendas.png"}
          alt="Logo"
          className="w-32 md:w-48 lg:w-60 p-5 self-center md:self-start"
        />

        <nav className="mt-10 mb-5">
          <ul className="space-y-4">
            {/* Dashboard Link */}
            <li>
              <div
                className={`flex items-center space-x-3 w-full md:w-56 lg:w-48 rounded-tr-lg rounded-br-lg h-12 md:h-14 p-4 md:p-5 ${
                  activeItem === "Dashboards" ? "bg-zinc-400" : "bg-white"
                } hover:bg-zinc-500 transition duration-300`}
                onClick={() => handleItemClick("Dashboards")}
              >
                <img
                  src={"/dashboard-vendas.png"}
                  alt="Dashboard"
                  className="w-5 h-5"
                />
                <Link
                  to=""
                  className="font-semibold text-base md:text-lg text-cinza transition duration-300"
                >
                  Dashboards
                </Link>
              </div>
            </li>

            {/* Produtos Link */}
            <li>
              <div
                className={`flex items-center space-x-3 w-full md:w-56 lg:w-48 rounded-tr-lg rounded-br-lg h-12 md:h-14 p-4 md:p-5 ${
                  activeItem === "Produtos" ? "bg-zinc-400" : "bg-white"
                } hover:bg-zinc-500 transition duration-300`}
                onClick={() => handleItemClick("Produtos")}
              >
                <img
                  src={"/produtos-vendas.png"}
                  alt="Produtos"
                  className="w-5 h-5"
                />
                <Link
                  to=""
                  className="font-semibold text-base md:text-lg text-cinza transition duration-300"
                >
                  Produtos
                </Link>
              </div>
            </li>

            {/* Lista de Ordens Link */}
            <li>
              <div
                className={`flex items-center space-x-3 w-full md:w-56 lg:w-48 rounded-tr-lg rounded-br-lg h-12 md:h-14 p-4 md:p-5 ${
                  activeItem === "Lista de ordens" ? "bg-zinc-400" : "bg-white"
                } hover:bg-zinc-500 transition duration-300`}
                onClick={() => handleItemClick("Lista de ordens")}
              >
                <img
                  src={"/lista-vendas3.png"}
                  alt="Lista de ordens"
                  className="w-7 h-7 -ml-1"
                />
                <Link
                  to=""
                  className="font-semibold text-base md:text-lg text-cinza transition duration-300"
                >
                  Lista de ordens
                </Link>
              </div>
            </li>

            {/* Estoque Link */}
            <li>
              <div
                className={`flex items-center space-x-3 w-full md:w-56 lg:w-48 rounded-tr-lg rounded-br-lg h-12 md:h-14 p-4 md:p-5 ${
                  activeItem === "Estoque" ? "bg-zinc-400" : "bg-white"
                } hover:bg-zinc-500 transition duration-300`}
                onClick={() => handleItemClick("Estoque")}
              >
                <img
                  src={"/estoque-vendas.png"}
                  alt="Estoque"
                  className="w-5 h-5"
                />
                <Link
                  to=""
                  className="font-semibold text-base md:text-lg text-cinza transition duration-300"
                >
                  Estoque
                </Link>
              </div>

            </li>
          </ul>
        </nav>
          <div className={`flex items-center space-x-3 w-full md:w-56 lg:w-48 mt-96 rounded-tr-lg rounded-br-lg h-12 md:h-14 p-4 md:p-5 ${
                  activeItem === "Logout" ? "bg-red-500" : "bg-white"
                } hover:bg-red-500 transition duration-300`}>
              <img
                  src={"/logout-vendas.png"}
                  alt="Estoque"
                  className="w-5 h-5"
                />
              <div className="flex flex-col justify-end">
                    <Link
                        to={''}
                        className="font-semibold text-base md:text-lg text-cinza transition duration-300"
                    >
                        Log Out
                    </Link>
              </div>
              </div>
      </aside>
    </>
  );
}
