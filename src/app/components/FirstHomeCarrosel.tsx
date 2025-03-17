"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FirstHomeCarrosel = () => {
    const [changeBanner, setChangeBanner] = useState(0);
    const totalBanners = 3;

    const banners = ["/images/banner-1.jpeg", "/images/especiais.jpeg", "/images/banner-3.jpg"];

    useEffect(() => {
        const timer = setTimeout(() => {
            setChangeBanner((prevBanner) => (prevBanner + 1) % totalBanners);
        }, 7000);

        // Limpa o timeout quando o componente for desmontado ou quando o changeBanner mudar
        return () => clearTimeout(timer);
    }, [changeBanner]);

    return (
        <div className='w-full h-full bg-laranja flex justify-center relative z-0 2xl:bg-gradient-to-r from-[#9a140f] to-[#e30a16]'>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full h-full flex justify-end flex-col items-center relative">
                    <div className="relative w-full h-full overflow-hidden">
                        {/* Aplicando motion.div com efeito de zoom contínuo */}
                        <motion.div
                            key={changeBanner} // Usando o key para garantir que a animação ocorra toda vez que a imagem mudar
                            initial={{ scale: 1 }}  // Começa com a imagem no tamanho normal
                            animate={{ scale: 1.15 }} // Dá o zoom suave
                            transition={{ duration: 7, ease: "easeInOut" }} // Animação suave e controlada
                            className="w-full h-[100vh] flex justify-center items-center" 
                        >
                            <Image
                                src={banners[changeBanner]}
                                alt="Banner"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover object-top"  // Ajusta a imagem para cobrir completamente a área
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Controles de navegação para mudar o banner */}
                    <div className='w-[300px] h-[30px] pb-4 md:h-[10px] lg:h-[10px] absolute bottom-10 lg:right-[5%]'>
                        <div className="w-full h-full flex justify-between items-center cursor-pointer">
                            {/* Indicadores de navegação */}
                            <div
                                className={`w-[20px] h-[10px] lg:w-[40px] lg:h-[20px] ${changeBanner === 0 ? 'border-white' : ''} rounded-full
                                hover:bg-laranja border-[4px] border-[#F6E88D]`}
                                onClick={() => setChangeBanner(0)}
                            ></div>

                            <div
                                className={`w-[20px] h-[10px] lg:w-[40px] lg:h-[20px] ${changeBanner === 1 ? 'border-white' : ''} rounded-full
                                hover:bg-laranja border-[4px] border-[#F6E88D]`}
                                onClick={() => setChangeBanner(1)}
                            ></div>

                            <div
                                className={`w-[20px] h-[10px] lg:w-[40px] lg:h-[20px] ${changeBanner === 2 ? 'border-white' : ''} rounded-full
                                hover:bg-laranja border-[4px] border-[#F6E88D]`}
                                onClick={() => setChangeBanner(2)}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
