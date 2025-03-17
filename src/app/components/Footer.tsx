"use client"

import { FaArrowUp } from "react-icons/fa";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer id="contact" className="w-screen h-full bg-[#F0B143] flex justify-[flex-start] items-center relative flex-col lg:h-[500px]">
            <div
                className="w-[71px] h-[102px] bg-veforte absolute right-0 flex items-center justify-center cursor-pointer"
                onClick={scrollToTop}
                title="Voltar para o Início"
            >
                <FaArrowUp className="text-black text-2xl" />
            </div>
            <div className="w-[90%] flex justify-between items-center">
                <div className="w-[134px] h-[127px] bg-logo bg-center bg-cover"></div>
                <h3 className="font-bold font-barlow text-xl text-center text-white uppercase md:text-3xl lg:text-5xl">Dona Clemes Salgados</h3>
                <div className="w-[71px] h-[102px] bg-[#F0B143]"></div>
            </div>

            <div className="w-[90%] h-full flex justify-between items-start flex-col-reverse mt-10 lg:flex-row">
                <div className="w-full h-full flex justify-between relative">
                    <div className="mb-32">
                        <h6 className="font-barlow font-bold text-2xl text-black mb-10">CONTATO</h6>
                        <li className="list-none text-veforte font-bold text-base mb-3">
                            Endereço: <span className="text-white">Rua Paraná, 4192</span></li>
                        <li className="list-none text-veforte font-bold text-base mb-3">
                            E-mail:</li>
                        <li className="list-none text-veforte font-bold text-base mb-3">
                            Telefone: <span className="text-white cursor-pointer">{"(17)"}99178-8780</span></li>
                        <li className="list-none text-veforte font-bold text-base">
                            WhatsApp: <span className="text-white cursor-pointer">{"(17)"}99178-8780</span></li>
                    </div>

                    <a href="" className="font-bold text-sm text-black absolute text-center bottom-10 lg:pr-4">
                        Copyright © 2025 Dona Clemes. Todos os direitos reservados. Galiás Comunicação
                    </a>

                    <div className="ml-[10%] md:ml-[0%] md:mr-[20%]">
                        <h6 className="font-barlow font-bold text-2xl text-black mb-10">MENU</h6>
                        <li className="list-none text-veforte font-bold text-base mb-3 cursor-pointer"
                            onClick={scrollToTop}>Início</li>
                        <li className="list-none text-veforte font-bold text-base mb-3 cursor-pointer"
                            onClick={() => scrollToSection("products")}>Produtos</li>
                        <li className="list-none text-veforte font-bold text-base mb-3 cursor-pointer"
                            onClick={() => scrollToSection("about")}>Sobre</li>
                    </div>
                </div>
                <div className="w-full h-full">
                    <ContactForm />
                </div>
            </div>
        </footer>
    );
};
