"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const feedbacks = [
  {
    id: 1,
    name: "Ana Julia",
    image: "/images/ana.webp",
    comment: "Os salgados da Dona Clemes são simplesmente incríveis! Encomendei para a festa do meu filho e todos os convidados elogiaram o sabor e a qualidade. Massa leve, recheio farto e tudo muito bem preparado. Com certeza virei cliente fiel!",
  },
  {
    id: 2,
    name: "Cleonice Honorio",
    image: "/images/cleonice.webp",
    comment: "Experimentei os salgados da Dona Clemes e fiquei impressionado! São deliciosos, bem temperados e com uma qualidade impecável. Desde a primeira mordida, dá para sentir o carinho e capricho no preparo. Recomendo para qualquer ocasião!",
  },
  {
    id: 3,
    name: "Wilson Santos",
    image: "/images/wilson.webp",
    comment: "Os salgados da Dona Clemes foram o grande destaque do nosso evento! Todos amaram o sabor e a textura perfeita. Além disso, o atendimento foi excelente e a entrega super pontual. Não vejo a hora de fazer um novo pedido!",
  },
];

export default function FeedbackCarousel() {
  const [index, setIndex] = useState(0);

  const prevFeedback = () => {
    setIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const nextFeedback = () => {
    setIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-screen text-center bg-white py-[130px]">
      {/* Feedback Ativo */}
      <div className="flex flex-col items-center">
        <motion.h2
          className="font-barlow text-4xl text-lafraco font-bold md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Feedback dos Clientes
        </motion.h2>
        {/* Imagem redonda */}
        <div className="w-[230px] h-[230px] rounded-full overflow-hidden border-2 border-gray-300 mt-[84px]">
          <Image
            src={feedbacks[index].image}
            alt={feedbacks[index].name}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Nome */}
        <h3 className="text-2xl font-serif font-semibold my-8 text-black md:text-4xl">{feedbacks[index].name}</h3>
        {/* Comentário */}
        <p className="text-black max-w-sm text-lg mb-[74px] md:text-2xl md:max-w-xl">&quot;{feedbacks[index].comment}&quot;</p>
      </div>

      {/* Setas de Navegação */}
      <div className="flex justify-center items-center gap-6 mb-11 text-black">
        <button onClick={prevFeedback} className="p-2 hover:text-veforte cursor-pointer">
          <HiChevronLeft size={45} />
        </button>
        <button onClick={nextFeedback} className="p-2 hover:text-veforte cursor-pointer">
          <HiChevronRight size={45} />
        </button>
      </div>

      {/* Indicadores de Posição */}
      <div className="flex justify-center mt-4 space-x-10">
        {feedbacks.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 md:w-5 md:h-5 rounded-full ${index === i ? "bg-lafraco" : "bg-[rgba(209,213,219,1)]"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
