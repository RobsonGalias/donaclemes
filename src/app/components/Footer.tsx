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
                    <div className="mb-32 flex flex-col">
                        <h6 className="font-barlow font-bold text-2xl text-black mb-10">CONTATO</h6>
                        <a href="https://www.google.com/maps/place/Dona+Clemes+Salgados/@-20.4150773,-49.9706262,17z/data=!3m1!4b1!4m6!3m5!1s0x94bd59dd02de972b:0x969450d3d822b5cd!8m2!3d-20.4150773!4d-49.9680513!16s%2Fg%2F11h45vkncs?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                           target="_blank" title="Ir para o Google Maps" className="list-none text-veforte font-bold text-base mb-3">
                            Endereço: <span className="text-white">Rua Paraná, 4192</span></a>
                        <li className="list-none text-veforte font-bold text-base mb-3">
                            E-mail:</li>
                        <a href="tel:+5517991788780" title="Ligue agora"
                            className="list-none text-veforte font-bold text-base mb-3">
                            Telefone: <span className="text-white cursor-pointer">{"(17)"}99178-8780</span></a>

                        <a href="https://wa.me/5517991788780" title="Ir para o WhatsApp" target="_blank"
                            className="list-none text-veforte font-bold text-base">
                            WhatsApp: <span className="text-white cursor-pointer">{"(17)"}99178-8780</span></a>
                    </div>

                    <span className="font-bold text-sm text-black absolute text-center bottom-10 lg:pr-4">
                        Copyright © 2025 Dona Clemes. Todos os direitos reservados. 
                        <a href="https://galias.com.br/novo/" target="_blank" className="hover:border-b border-white"
                            > Galiás Comunicação /</a> 
                        <a href="https://weulersilva.com.br" target="_blank" title="Desenvolvedor de sites" 
                            className="hover:border-b border-white">  Weuler Silva.</a>
                    </span>

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
