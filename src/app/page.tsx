import { AboutOrder } from "./components/AboutOrder";
import FeedbackCarousel from "./components/FeedbackCarousel";
import { FirstHomeCarrosel } from "./components/FirstHomeCarrosel";
import { MakeOrder } from "./components/MakeOrder";
import { FloatingDiv } from "./components/FloatingDiv";
import { ThreeDivs } from "./components/ThreeDivs";

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
        <ThreeDivs />
      </section>

      <FloatingDiv />

      <MakeOrder />

      <AboutOrder />

      <FeedbackCarousel />
    </>
  );
}
