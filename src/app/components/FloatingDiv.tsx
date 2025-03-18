"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const FloatingDiv = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;

        // Suavizando o deslocamento
        const offsetX = (clientX - window.innerWidth / 2) * 0.05;
        const offsetY = (clientY - window.innerHeight / 2) * 0.05;

        setPosition({ x: offsetX, y: offsetY });
    };

    return (
        <div className="w-screen h-[570px] bg-[#640208] flex justify-center items-center flex-col md:flex-row">
            <div className="w-full h-full flex justify-center items-center">
                <p className="text-center w-[80%] font-semibold text-base text-white font-barlow md:text-xl lg:text-2xl">
                    Seja você dono de lanchonete, loja de conveniência, buffet ou revendedor, a Dona Clemes tem a linha de salgados perfeita para o seu negócio. Qualidade, sabor e praticidade para encantar seus clientes e aumentar suas vendas. E se você é cliente direto, aproveite para garantir os melhores salgados para suas festas e momentos especiais.
                </p>
            </div>

            <motion.div
                className="w-full h-full bg-plate bg-contain bg-no-repeat bg-[-30px] md:bg-right"
                onMouseMove={handleMouseMove} // Ativa o efeito ao passar o mouse
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />
        </div>
    );
};
