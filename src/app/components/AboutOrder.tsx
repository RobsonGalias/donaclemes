"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const AboutOrder = () => {
    const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Criando um movimento suave e sutil
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  console.log({smoothX, smoothY});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Ajusta a posição com um pequeno atraso e distância reduzida
      mouseX.set(event.clientX * 0.05); // Reduz o deslocamento
      mouseY.set(event.clientY * 0.05);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

    return (
        <section id="about" className="w-screen flex justify-center items-center flex-col py-[90px] relative
             bg-lafraco md:py-[130px]">
                <h2 className="text-white font-bold font-barlow text-center text-xl z-20 md:text-3xl lg:text-5xl">
                    Qualidade que surpreende a cada mordida</h2>
                <p className="font-barlow text-base font-semibold mt-10 mb-[60px] text-center w-[90%] z-20 md:mb-[137px]
                md:mt-16 md:text-xl lg:text-3xl">
                    Nossos salgados passam por um rigoroso processo de aperfeiçoamento para garantir sempre o melhor sabor. Com uma receita familiar refinada ao longo dos anos e aprovada por especialistas, criamos uma massa exclusiva, um tempero equilibrado e uma experiência inesquecível em cada pedaço.</p>
                <span className="border-[#FFDF00] border-4 text-veforte font-bold text-xl z-20 py-2 px-4 md:text-2xl lg:text-4xl
                hover:text-white hover:border-veforte cursor-pointer transition-colors duration-300 ease-in-out">
                    Faça já o seu pedido</span>

            <div className="w-full h-full bg-transparente bg-cover bg-center absolute z-10 opacity-50"></div>
        </section>
    );
};
