"use client"

import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
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
                    <a href="https://wa.me/5517991788780" title="Ir para o WhatsApp" target="_blank"
                        className="flex justify-center items-center text-veforte font-bold cursor-pointer">
                        <span className="w-4 h-4 md:w-5 md:h-5 bg-green-400 rounded-full">
                            <FaWhatsapp className="w-full h-full text-black" /></span>:
                        <div className="text-white">{"(17)99178-8780"}</div>
                    </a>

                    <a href="tel:+5517991788780" title="Ligue agora"
                        className="flex justify-center items-center text-veforte font-bold cursor-pointer">
                        <span className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full">
                            <MdOutlinePhoneCallback className="w-full h-full text-black" /></span>:
                        <div className="text-white">{"(17)99178-8780"}</div>
                    </a>

                    <div className="h-full flex justify-around items-center border-x border-black space-x-3 px-3">
                        <a href="https://www.google.com/maps/place/Dona+Clemes+Salgados/@-20.4150773,-49.9706262,17z/data=!3m1!4b1!4m6!3m5!1s0x94bd59dd02de972b:0x969450d3d822b5cd!8m2!3d-20.4150773!4d-49.9680513!16s%2Fg%2F11h45vkncs?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                           target="_blank" title="Ir para o Google Maps" className="w-5 h-5 cursor-pointer">
                            <LuMapPinned className="w-full h-full text-black" />
                        </a>
                        <a href="https://www.instagram.com/donaclemessalgados/" title="Instagram" target="_blank"
                         className="w-5 h-5 cursor-pointer">
                            <TiSocialInstagram className="w-full h-full text-black" />
                        </a>
                        <a href="https://www.facebook.com/donaclemessalgados/" title="Facebook" target="_blank"
                            className="w-5 h-5 cursor-pointer">
                            <FaFacebookSquare className="w-full h-full text-black" />
                        </a>
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
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black"
                                    onClick={() => scrollToSection("products")}>
                                    Assados</li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black"
                                    onClick={() => scrollToSection("products")}>
                                    Fritos</li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black"
                                    onClick={() => scrollToSection("products")}>
                                    Para Festas</li>
                                <li className="border-[#676565]/40 border-t w-full text-center py-1 bg-[#DFD5D5] hover:text-black"
                                    onClick={() => scrollToSection("products")}>
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