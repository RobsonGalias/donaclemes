"use client"

import Image from "next/image";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const jsonData = {
    "websites": [
        {
            "name": "SALGADOS ASSADOS",
            "images": "/images/recipies/salgados-assados/esfirra-de-calabresa.webp",
            "description": "Leves, saborosos e feitos com ingredientes selecionados, nossos salgados assados são a escolha perfeita para qualquer ocasião. Uma combinação irresistível de massa macia e recheios bem temperados!",
            "recipies": [
                {
                    "name": "ESFIRRA DE CARNE",
                    "image": "/images/recipies/salgados-assados/esfirra-de-carne.webp",
                    "desc": "Massa tradicional, carne  moída bovina selecionada  e temperos especiais."
                },
                {
                    "name": "ESFIRRA DE FRANGO",
                    "image": "/images/recipies/salgados-assados/esfirra-de-frango.webp",
                    "desc": "Massa tradicional, peito de  frango desfiado e temperado  com requeijão."
                },
                {
                    "name": "ESFIRRA DE CALABRESA",
                    "image": "/images/recipies/salgados-assados/esfirra-de-calabresa.webp",
                    "desc": "ESFIRRA DE CALABRESA Massa tradicional, calabresa  defumada fatiada e temperada com requeijão."
                },
                {
                    "name": "ESFIRRA DE QUEIJO CAIPIRA",
                    "image": "/images/recipies/salgados-assados/esfirra-de-queijo-caipira.webp",
                    "desc": "Massa tradicional, queijo muçarela, queijo caipira temperado com orégano e Catupiry."
                },
                {
                    "name": "CACHORRO QUENTE DE CARNE",
                    "image": "/images/recipies/salgados-assados/cachorro-quente-de-carne.webp",
                    "desc": "Massa tradicional, carne moída bovina temperada, salsicha de frango, finalizado com um toque de orégano."
                },
                {
                    "name": "CACHORRO QUENTE DE FRANGO",
                    "image": "/images/recipies/salgados-assados/cachorro-quente-de-frango.webp",
                    "desc": "Massa tradicional, peito de frango temperado, requeijão, salsicha de frango, finalizado com um toque de gergelim."
                },
                {
                    "name": "CORINTIANO ASSADO",
                    "image": "/images/recipies/salgados-assados/corintiano-assado.webp",
                    "desc": "Massa tradicional, muçarela, presunto, requeijão e salada de tomate."
                },
                {
                    "name": "EMPADA",
                    "image": "/images/recipies/salgados-assados/empada.webp",
                    "desc": "Massa especial Dona Clemes, recheio cremoso de frango com palmito e requeijão."
                }
            ]
        },
        {
            "name": "SALGADOS FRITOS",
            "images": "/images/recipies/salgados-fritos/kibe.webp",
            "description": "Crocantes por fora, macios por dentro e recheados com muito sabor! Nossos salgados fritos são feitos com ingredientes selecionados e uma receita especial que garante qualidade e irresistibilidade em cada mordida.",
            "recipies": [
                {
                    "name": "CORINTIANO FRITO",
                    "image": "/images/recipies/salgados-fritos/corintiano-frito.webp",
                    "desc": "Massa especial cozida, recheio de muçarela, presunto e orégano."
                },
                {
                    "name": "COXINHA DE CARNE",
                    "image": "/images/recipies/salgados-fritos/coxinha-de-carne.webp",
                    "desc": "Massa especial cozida, recheada com carne moída bovina e requeijão."
                },
                {
                    "name": " COXINHA DE FRANGO",
                    "image": "/images/recipies/salgados-fritos/coxinha-de-frango.webp",
                    "desc": "Massa especial cozida, recheada com frango temperado e requeijão."
                },
                {
                    "name": "BOLINHA DE QUEIJO",
                    "image": "/images/recipies/salgados-fritos/bolinho-de-queijo.webp",
                    "desc": "Massa especial cozida com muçarela, recheado com muita muçarela e toque de orégano."
                },
                {
                    "name": "MINI BOLINHA DE CARNE",
                    "image": "/images/recipies/salgados-fritos/mini-bolinho-de-carne.webp",
                    "desc": "Carne moída bovina com tempero especial."
                },
                {
                    "name": "KIBE",
                    "image": "/images/recipies/salgados-fritos/kibe.webp",
                    "desc": "Tradicional kibe, receita Dona Clemes, recheado com Mussarela."
                },
                {
                    "name": "CHURROS",
                    "image": "/images/recipies/salgados-fritos/churros.webp",
                    "desc": "Massa especial, recheado com doce de leite, finalizado com açúcar refinado e canela."
                }
            ]
        },
        {
            "name": "SALGADOS GRANDES ASSADOS",
            "images": "/images/recipies/grandes-assados/esfirra-de-carne.webp",
            "description": "Sabores irresistíveis para tornar sua festa ainda mais especial! Nossos salgados assados são preparados com ingredientes selecionados e receitas tradicionais que garantem qualidade e muito sabor.",
            "recipies": [
                {
                    "name": "ESFIRRA DE CARNE",
                    "image": "/images/recipies/grandes-assados/esfirra-de-carne.webp",
                    "desc": "Massa tradicional, carne moída bovina selecionada e temperos especiais."
                },
                {
                    "name": "ESFIRRA DE CARNE COM LIMÃO",
                    "image": "/images/recipies/grandes-assados/esfirra-de-carne-com-limao.webp",
                    "desc": "Massa tradicional, carne bovina selecionada, temperos especiais e um toque de limão."
                },
                {
                    "name": "ESFIRRA DE FRANGO",
                    "image": "/images/recipies/grandes-assados/esfirra-de-frango.webp",
                    "desc": "Massa tradicional, peito de frango desfiado e temperado com requeijão."
                },
                {
                    "name": "ESFIRRA DE CALABRESA",
                    "image": "/images/recipies/grandes-assados/esfirra-de-calabresa.webp",
                    "desc": "Massa tradicional, calabresa defumada fatiada e temperada com requeijão."
                },
                {
                    "name": "ESFIRRA DE QUEIJO CAIPIRA",
                    "image": "/images/recipies/grandes-assados/esfirra-de-queijo-caipira.webp",
                    "desc": "Massa tradicional, queijo muçarela, queijo caipira temperado com orégano e Catupiry."
                },
                {
                    "name": "CACHORRO QUENTE DE CARNE",
                    "image": "/images/recipies/grandes-assados/cachorro-quente-carne.webp",
                    "desc": "Massa tradicional, carne moída bovina temperada, salsicha de frango, finalizado com um toque de orégano."
                },
                {
                    "name": "CACHORRO QUENTE DE FRANGO",
                    "image": "/images/recipies/grandes-assados/cachorro-quente-de-frango.webp",
                    "desc": "Massa tradicional, peito de frango temperado, requeijão, salsicha de frango, finalizado com um toque de gergelim."
                },
                {
                    "name": "CORINTIANO ASSADO",
                    "image": "/images/recipies/grandes-assados/corintiano-assado.webp",
                    "desc": "Massa tradicional, muçarela, presunto, requeijão e salada de tomate."
                },
                {
                    "name": "EMPADA",
                    "image": "/images/recipies/grandes-assados/empada.webp",
                    "desc": "Massa especial Dona Clemes, recheio cremoso de frango com palmito e requeijão."
                },
                {
                    "name": "HAMBÚRGUER COM CATUPIRY",
                    "image": "/images/recipies/grandes-assados/hamburguer-com-catupiry.webp",
                    "desc": "Massa tradicional, hambúrguer bovino, salada de tomate, muçarela e Cartupiry."
                },
                {
                    "name": "HAMBÚRGUER COM CHEDDAR",
                    "image": "/images/recipies/grandes-assados/hamburguer-com-cheddar.webp",
                    "desc": "Massa tradicional, hambúrguer bovino, salada de tomate, muçarela e cheddar cremoso."
                }
            ]
        },
        {
            "name": "Salgados grandes fritos",
            "images": "/images/recipies/grandes-fritos/espeto-com-legumes.webp",
            "description": "Crocrância e sabor que fazem a diferença na sua festa! Nossos salgados fritos são feitos com massas especiais e recheios irresistíveis, garantindo qualidade e um toque caseiro.",
            "recipies": [
                {
                    "name": "ESPETO COM LEGUMES",
                    "image": "/images/recipies/grandes-fritos/espeto-com-legumes.webp",
                    "desc": "Peito de frango temperado, cebola, tomate e pimenta de cheiro. Empanado."
                },
                {
                    "name": "BOLINHA DE CARNE",
                    "image": "/images/recipies/grandes-fritos/bolinho-de-carne.webp",
                    "desc": "Carne moída bovina com tempero especial Dona Clemes."
                }
            ]
        }
    ]
};

export const MakeOrder = () => {
    const [openDiv, setOpenDiv] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCategoryClick = (index: number) => {
        setCurrentIndex(index);
        setOpenDiv(true);
        document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
    };

    const item = jsonData.websites[currentIndex];
    console.log(jsonData)

    return (
        <>
            <section className="w-screen flex justify-center items-center flex-col bg-white">
                <h2 className="py-24 font-barlow text-4xl text-lafraco font-semibold md:text-5xl uppercase text-center">
                    Faça já o seu <span className="text-vefraco font-semibold">Pedido</span>
                </h2>

                <div id="products" className="w-full place-items-center pb-[40px] md:pb-[200px]">
                    <div className="w-full flex justify-center items-center flex-col md:flex-row md:space-x-[42px]
                        space-y-10 mb-10 md:space-y-0">

                        {/** Categoria - Assados */}
                        <motion.div
                            className="w-[300px] h-[300px] xl:w-[435px] xl:h-[435px] bg-[#C24011] hover:bg-veforte p-4 text-white 
                                text-center flex items-center justify-center flex-col space-y-8 cursor-pointer 
                                transition-colors duration-300 ease-in-out"
                            onClick={() => handleCategoryClick(2)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="w-[100px] h-[100px] lg:w-[192px] lg:h-[192px]">
                                <Image alt="" src={"/images/p-assados.png"} width={800} height={800}
                                    className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-[40px] text-white">ASSADOS</span>
                        </motion.div>

                        {/** Categoria - Fritos */}
                        <motion.div
                            className="w-[300px] h-[300px] xl:w-[435px] xl:h-[435px] bg-[#F0B143] hover:bg-veforte p-4 
                            text-white text-center flex items-center justify-center flex-col space-y-8 cursor-pointer 
                            transition-colors duration-300 ease-in-out"
                            onClick={() => handleCategoryClick(1)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="w-[100px] h-[100px] lg:w-[192px] lg:h-[192px]">
                                <Image alt="" src={"/images/p-fritos.png"} width={800} height={800}
                                    className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-[40px] text-white">FRITOS</span>
                        </motion.div>

                    </div>

                    <div className="w-full flex justify-center items-center flex-col md:flex-row md:space-x-[42px]
                        space-y-10 mb-10 md:mb-0 md:space-y-0">

                        {/** Categoria - Para Festas */}
                        <motion.div
                            className="w-[300px] h-[300px] xl:w-[435px] xl:h-[435px] bg-[#F05F06] hover:bg-veforte p-4 
                            text-white text-center flex items-center justify-center flex-col space-y-8 cursor-pointer 
                            transition-colors duration-300 ease-in-out"
                            onClick={() => handleCategoryClick(0)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="w-[100px] h-[100px] lg:w-[192px] lg:h-[192px]">
                                <Image alt="" src={"/images/p-festas.png"} width={800} height={800}
                                    className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-[40px] text-white">PARA FESTAS</span>
                        </motion.div>

                        {/** Categoria - Especiais */}
                        <motion.div
                            className="w-[300px] h-[300px] xl:w-[435px] xl:h-[435px] bg-[#F58142] hover:bg-veforte p-4 
                            text-white text-center flex items-center justify-center flex-col space-y-8 cursor-pointer 
                            transition-colors duration-300 ease-in-out"
                            onClick={() => handleCategoryClick(3)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="w-[100px] h-[100px] lg:w-[192px] lg:h-[192px]">
                                <Image alt="" src={"/images/p-especiais.png"} width={800} height={800}
                                    className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-[40px] text-white">ESPECIAIS</span>
                        </motion.div>

                    </div>
                </div>
            </section>

            <div id="order" className="w-screen"></div>

            <section className={`w-screen flex justify-center items-center flex-col bg-white ${openDiv ? "flex" : "hidden"}`}>
                <div className="w-[80%] flex justify-center items-center flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="w-full h-[300px] flex justify-center items-center relative md:h-[400px] xl:h-[600px]">
                        <span className="w-8 h-full bg-white absolute md:w-4 xl:w-10"></span>
                        <Image alt="" src={item.images} width={1000} height={700} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full space-y-7 pt-10 md:h-full">
                        <h4 className="font-barlow uppercase text-2xl font-bold text-veforte w-full xl:text-5xl xl:w-[80%]">
                            {item.name}
                        </h4>
                        <p className="text-base text-[#ABA3A3] w-full xl:text-xl xl:w-[80%]">
                            {item.description}</p>
                        <span className="text-lg text-black font-barlow font-bold xl:text-2xl xl:w-[300px]">
                            Fresquinhos e deliciosos, ideais para lanchonetes, eventos e festas.<br /> Peça agora e experimente!</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 xl:gap-14 mt-[123px] mb-[100px]">
                    {item.recipies.map((recipe, index) => (
                        <motion.div
                            key={index}
                            className="w-[170px] flex flex-col justify-[flex-start] items-center border-solid border 
                            border-[rgb(217,217,217)] bg-[#F7F7F7] mb-10 lg:mb-[20px] md:w-[245px]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Image
                                src={recipe.image}
                                alt={recipe.name}
                                width={245}
                                height={170}
                                className="w-full h-[170px] object-cover bg-green-400"
                            />
                            <h4 className="text-black font-bold text-[13px] mt-5 mb-4 text-center md:text-base">
                                {recipe.name}</h4>
                            <p className="text-[#ABA3A3] px-2 font-bold text-[12px] text-center mb-9 md:text-sm">
                                {recipe.desc}</p>
                            <a href="https://wa.me/5517991788780" title="Ir para o WhatsApp" target="_blank"
                                className="w-[54px] h-[43px] mb-5 cursor-pointer">
                                <IoCartOutline width={245} height={170} className="text-black w-full h-full" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};
