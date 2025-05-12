"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ThreeDivs = () => {
     // Criando estados individuais para cada div
     const [isRed1, setIsRed1] = useState(false);
     const [isRed2, setIsRed2] = useState(false);
     const [isRed3, setIsRed3] = useState(false);
 
     // Referências para cada div
     const divRef1 = useRef(null);
     const divRef2 = useRef(null);
     const divRef3 = useRef(null);
 
     // Estado para verificar se estamos no mobile
     const [isMobile, setIsMobile] = useState(false);
 
     // Detectar se estamos no mobile
     useEffect(() => {
         const checkMobile = () => {
             setIsMobile(window.innerWidth <= 768); // A largura de 768px é um bom ponto de corte para mobile
         };
 
         checkMobile();
         window.addEventListener("resize", checkMobile);
 
         // Limpeza do event listener
         return () => {
             window.removeEventListener("resize", checkMobile);
         };
     }, []);
 
     // Função para configurar o IntersectionObserver
     useEffect(() => {
         if (!isMobile) return; // Só ativa o observer em dispositivos móveis
 
         const observer1 = new IntersectionObserver(
             ([entry]) => {
                 if (entry.isIntersecting) {
                     setIsRed1(true); // Muda para vermelho quando entra
                 } else {
                     setIsRed1(false); // Retorna ao laranja quando sai
                 }
             },
             { threshold: 0.5 }
         );
         const observer2 = new IntersectionObserver(
             ([entry]) => {
                 if (entry.isIntersecting) {
                     setIsRed2(true); // Muda para vermelho quando entra
                 } else {
                     setIsRed2(false); // Retorna ao laranja quando sai
                 }
             },
             { threshold: 0.5 }
         );
         const observer3 = new IntersectionObserver(
             ([entry]) => {
                 if (entry.isIntersecting) {
                     setIsRed3(true); // Muda para vermelho quando entra
                 } else {
                     setIsRed3(false); // Retorna ao laranja quando sai
                 }
             },
             { threshold: 0.5 }
         );
 
         // Inicia a observação
         if (divRef1.current) observer1.observe(divRef1.current);
         if (divRef2.current) observer2.observe(divRef2.current);
         if (divRef3.current) observer3.observe(divRef3.current);
 
         // Limpeza
         return () => {
             if (divRef1.current) observer1.unobserve(divRef1.current);
             if (divRef2.current) observer2.unobserve(divRef2.current);
             if (divRef3.current) observer3.unobserve(divRef3.current);
         };
     }, [isMobile]);

    return (
        <div className="w-screen flex justify-center items-center flex-col space-y-10 md:flex-row md:space-x-10 
            md:mb-32 md:space-y-0 xl:space-x-[100px]">
            
            {/** Div 1 - Experiência */}
            <motion.div
                ref={divRef1}
                className={`w-[80%] h-[300px] bg-lafraco text-white font-barlow hover:bg-veforte
                    flex flex-col justify-center items-center md:w-[200px] lg:w-[300px] xl:w-[343px] xl:h-[343px]
                    transition-colors duration-300 ease-in-out ${isRed1 ? 'bg-veforte' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // Só anima uma vez quando 20% da div estiver visível
            >
                <div className="w-[62px] h-[62px]">
                    <Image alt="" src={"/images/step-1.png"} width={800} height={800} className="w-full h-full object-cover" />
                </div>
                <h6 className="text-2xl font-bold mt-9 mb-[22px] uppercase">Experiência</h6>
                <p className="font-medium text-center px-4 lg:px-10">
                    Há 40 anos, a Dona Clemes transforma ingredientes simples em sabores inesquecíveis.
                </p>
            </motion.div>

            {/** Div 2 - Qualidade */}
            <motion.div
                ref={divRef2}
                className={`w-[80%] h-[300px] bg-lafraco text-white font-barlow hover:bg-veforte
                    flex flex-col justify-center items-center md:w-[200px] lg:w-[300px] xl:w-[343px] xl:h-[343px]
                    transition-colors duration-300 ease-in-out ${isRed2 ? 'bg-veforte' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // Só anima uma vez quando 20% da div estiver visível
            >
                <div className="w-[62px] h-[62px]">
                    <Image alt="" src={"/images/step-2.png"} width={800} height={800} className="w-full h-full object-cover" />
                </div>
                <h6 className="text-2xl font-bold mt-9 mb-[22px] uppercase">QUALIDADE</h6>
                <p className="font-medium text-center px-4 lg:px-10">
                    Na Dona Clemes, cada salgado é feito com ingredientes selecionados e qualidade incomparável.
                </p>
            </motion.div>

            {/** Div 3 - Entrega */}
            <motion.div
                ref={divRef3}
                className={`w-[80%] h-[300px] bg-lafraco text-white font-barlow hover:bg-veforte
                    flex flex-col justify-center items-center md:w-[200px] lg:w-[300px] xl:w-[343px] xl:h-[343px]
                    transition-colors duration-300 ease-in-out ${isRed3 ? 'bg-veforte' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // Só anima uma vez quando 20% da div estiver visíveis
            >
                <div className="w-[62px] h-[62px]">
                    <Image alt="" src={"/images/step-3.png"} width={800} height={800} className="w-full h-full object-cover" />
                </div>
                <h6 className="text-2xl font-bold mt-9 mb-[22px] uppercase">ENTREGA</h6>
                <p className="font-medium text-center px-4 lg:px-10">
                    Seu pedido chega fresquinho ou quentinho, com entrega pontual ou retirada facilitada.
                </p>
            </motion.div>
        </div>
    );
};
