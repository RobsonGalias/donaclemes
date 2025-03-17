"use client"

import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { FirstHomeCarrosel } from "./FirstHomeCarrosel";
import { NavBar } from "./NavBar";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { LuMapPinned } from "react-icons/lu";
import { TiSocialInstagram } from "react-icons/ti";

export function Header() {
    const scrollToSection = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="relative w-screen flex justify-center font-inter">
            <div className="w-screen h-12 bg-[#D9D9D9] flex justify-around items-center">
                <div className="flex justify-end w-[80%] h-full space-x-2 text-[10px] md:text-sm md:space-x-20">
                    <div className="flex justify-center items-center text-veforte font-bold cursor-pointer">
                        <span className="w-4 h-4 md:w-5 md:h-5 bg-green-400 rounded-full">
                        <FaWhatsapp className="w-full h-full text-black"/></span>:
                        <div className="text-white">{"(17)99178-8780"}</div>
                    </div>

                    <div className="flex justify-center items-center text-veforte font-bold cursor-pointer">
                        <span className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full">
                        <MdOutlinePhoneCallback className="w-full h-full text-black"/></span>:
                        <div className="text-white">{"(17)99178-8780"}</div>
                    </div>

                    <div className="h-full flex justify-around items-center border-x border-black space-x-3 px-3">
                        <div className="w-5 h-5 cursor-pointer">
                        <LuMapPinned className="w-full h-full text-black"/>
                        </div>
                        <div className="w-5 h-5 cursor-pointer">
                        <TiSocialInstagram className="w-full h-full text-black"/>
                        </div>
                        <div className="w-5 h-5 cursor-pointer">
                        <FaFacebookSquare className="w-full h-full text-black"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[80%] h-[100px] flex absolute z-10 top-12 md:h-[200px]">
                <div className="w-[100px] h-[100px] bg-logo bg-center bg-cover cursor-pointer md:w-[200px] md:h-[200px]"
                    title="Dona Clemes"></div>

                <NavBar />

                <div className="hidden w-full uppercase h-full md:flex justify-end items-center font-bold text-sm text-white">
                    <ul className="flex space-x-10 lg:space-x-28">
                        <li className="cursor-pointer hover:text-black"
                            onClick={() => scrollToSection("/")}>Início</li>
                        <div className="cursor-pointer relative flex justify-center group hover:text-black">
                            <li onClick={() => scrollToSection("products")}>Produtos</li>
                            <span className="w-[200px] hidden absolute top-4  flex-col items-center text-white
                                border-x border-b border-[#676565]/40 group-hover:flex">
                                <li className="w-full h-[10px] text-center"></li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black">
                                    Assados</li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black">
                                    Fritos</li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black">
                                    Para Festas</li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black">
                                    Especiais</li>
                            </span>
                        </div>
                        <li className="cursor-pointer hover:text-black"
                            onClick={() => scrollToSection("about")}>Sobre</li>
                        <li className="cursor-pointer hover:text-black"
                            onClick={() => scrollToSection("contact")}>Contato</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}