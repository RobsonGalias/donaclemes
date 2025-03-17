import Image from "next/image";
import { AboutOrder } from "./components/AboutOrder";
import FeedbackCarousel from "./components/FeedbackCarousel";
import { FirstHomeCarrosel } from "./components/FirstHomeCarrosel";
import { MakeOrder } from "./components/MakeOrder";

export default function Home() {
  return (
    <>
      <div className="w-screen h-[calc(100dvh-48px)] bg-orange-600 relative">
        <h1 className="w-full font-barlow font-bold text-4xl text-white absolute text-center bottom-[20%] z-10 md:text-5xl
                lg:w-auto lg:text-left lg:text-5xl lg:top-auto lg:bottom-10 lg:left-[5%] lg:text-[64px]">Tradição, Qualidade<br />
          e Felicidade!</h1>
        <FirstHomeCarrosel />
      </div>

      <section className="w-screen flex justify-center flex-col items-center py-16 bg-white">
        <h2 className="pb-8 font-barlow text-4xl text-lafraco md:text-5xl">
          Experiência <span className="text-vefraco font-semibold">Culinária</span></h2>
        <p className="text-branfraco w-full text-base text-center font-barlow font-bold mb-32 px-4
          md:text-xl md:w-[700px]">
          A Dona Clemes é sinônimo de qualidade e leva até você salgados irresistíveis, perfeitos para transformar sua festa em um momento especial ou contribuir com o sucesso do seu negócio. Cada receita é feita com carinho, ingredientes selecionados e aquele toque caseiro que faz toda a diferença. Experimente e surpreenda-se!</p>

        <div className="w-screen flex justify-center items-center flex-col space-y-10 md:flex-row md:space-x-10 
          md:mb-32 md:space-y-0 xl:space-x-[100px]">
          <div className="w-[80%] h-[300px] bg-lafraco hover:bg-veforte text-white font-barlow
            flex flex-col justify-center items-center md:w-[200px] lg:w-[300px] xl:w-[343px] xl:h-[343px]
            transition-colors duration-300 ease-in-out">
            <div className="w-[62px] h-[62px]">
              <Image alt="" src={"/images/step-1.png"} width={800} height={800}
                className="w-full h-full object-cover" />
            </div>
            <h6 className="text-2xl font-bold mt-9 mb-[22px] uppercase">Experiência</h6>
            <p className="font-medium text-center px-4 lg:px-10">Há 40 anos, a Dona Clemes transforma ingredientes simples em sabores inesquecíveis.</p>
          </div>

          <div className="w-[80%] h-[300px] bg-lafraco hover:bg-veforte text-white font-barlow
            flex flex-col justify-center items-center md:w-[200px] lg:w-[300px] xl:w-[343px] xl:h-[343px]
            transition-colors duration-300 ease-in-out">
            <div className="w-[62px] h-[62px]">
              <Image alt="" src={"/images/step-2.png"} width={800} height={800}
                className="w-full h-full object-cover" />
            </div>
            <h6 className="text-2xl font-bold mt-9 mb-[22px] uppercase">Qualidade</h6>
            <p className="font-medium text-center px-4 lg:px-10">Na Dona Clemes, cada salgado é feito com ingredientes selecionados e qualidade incomparável.</p>
          </div>

          <div className="w-[80%] h-[300px] bg-lafraco hover:bg-veforte text-white font-barlow
            flex flex-col justify-center items-center md:w-[200px] lg:w-[300px] xl:w-[343px] xl:h-[343px]">
            <div className="w-[62px] h-[62px]">
              <Image alt="" src={"/images/step-3.png"} width={800} height={800}
                className="w-full h-full object-cover" />
            </div>
            <h6 className="text-2xl font-bold mt-9 mb-[22px] uppercase">Entregua</h6>
            <p className="font-medium text-center px-4 lg:px-10">Seu pedido chega fresquinho ou quentinho, com entrega pontual ou retirada facilitada.</p>
          </div>
        </div>
      </section>

      <div className="w-screen h-[570px] bg-[#640208] flex justify-center items-center flex-col md:flex-row">
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-center w-[80%] font-semibold text-base text-white font-barlow md:text-xl lg:text-2xl">
            Seja você dono de lanchonete, loja de conviencia, buffet ou revendedor, a Dona Clemes tem a linha de salgados perfeita para o seu negócio. Qualidade, sabor e praticidade para encantar seus clientes e aumentar suas vendas. E se você é cliente direto, aproveite para garantir os melhores salgados para suas festas e momentos especiais.</p>
        </div>

        <div className="w-full h-full bg-plate bg-contain bg-no-repeat bg-[-30px] md:bg-right"></div>
      </div>

      <MakeOrder />

      <AboutOrder />

      <FeedbackCarousel />
    </>
  );
}
