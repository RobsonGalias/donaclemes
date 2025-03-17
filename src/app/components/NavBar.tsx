"use client"

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi"; // Importação dos ícones do react-icons

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
};

  return (
    <div className="w-screen h-full relative flex justify-end items-centers font-bold text-sm text-white px-4 z-30 md:hidden">
      {/* Ícone do menu hambúrguer - visível no mobile */}
      <button
        className="lg:hidden p-2 text-white z-10 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu principal */}
      <ul
        className={`absolute text-xl top-0 left-0 w-screen flex flex-col items-center space-y-6 pt-20  transition-transform duration-300 ${
          isOpen ? "translate-x-0 bg-amber-600" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <li className="cursor-pointer hover:text-black">Início</li>

        {/* Menu suspenso com clique */}
        <div className="relative flex flex-col lg:flex-row items-center z-30 ">
          <button
            className="flex items-center space-x-2 cursor-pointer hover:text-black"
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            <span>Produtos</span>
            {isSubMenuOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </button>

          {isSubMenuOpen && (
            <span
              className="absolute w-[200px] lg:static top-10 flex flex-col items-center text-white
                border-x border-b border-[#676565]/40 bg-amber-600 text-[14px] shadow-lg"
            >
              <li className="w-full text-center py-2 hover:text-black"
                onClick={() => scrollToSection("products")}>Assados</li>
              <li className="w-full text-center py-2 border-t border-[#676565]/40 hover:text-black"
                onClick={() => scrollToSection("products")}>
                Fritos
              </li>
              <li className="w-full text-center py-2 border-t border-[#676565]/40 hover:text-black"
                onClick={() => scrollToSection("products")}>
                Para Festas
              </li>
              <li className="w-full text-center py-2 border-t border-[#676565]/40 hover:text-black"
                onClick={() => scrollToSection("products")}>
                Especiais
              </li>  
            </span>
          )}
        </div>

        <li className="cursor-pointer hover:text-black"
          onClick={() => scrollToSection("about")}>Sobre</li>
        <li className="cursor-pointer hover:text-black"
          onClick={() => scrollToSection("contact")}>Contato</li>
      </ul>
    </div>
  );
};
