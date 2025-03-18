import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Footer } from "./components/Footer";
import Head from "next/head";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Escolha os pesos que deseja usar
  variable: "--font-barlow", // Nome personalizado para a variável CSS
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Escolha os pesos que deseja usar
  variable: "--font-inter", // Nome personalizado para a variável CSS
});


export const metadata: Metadata = {
  title: "Dona Clemes | O melhor salgado de Votuporanga e região!",
  description: "A Dona Clemes é sinônimo de sabor e qualidade, oferecendo salgados irresistíveis que são perfeitos tanto para festas especiais quanto para o sucesso do seu negócio. Cada receita é cuidadosamente preparada com ingredientes selecionados e aquele toque caseiro que faz toda a diferença. Se você é proprietário de lanchonete, loja de conveniência, buffet ou revendedor, nossa linha de salgados proporciona qualidade, sabor e praticidade para encantar seus clientes e aumentar suas vendas. E para quem busca os melhores salgados para festas, a Dona Clemes garante o sucesso do seu evento com opções deliciosas que conquistam todos os paladares. Experimente e surpreenda-se com o sabor caseiro e a excelência em cada mordida!",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="keywords" content="salgados Dona Clemes, salgados para festas, salgados gourmet, salgados assados e fritos, salgados caseiros, esfirra de carne, esfirra de frango, esfirra de calabresa, esfirra de queijo caipira, cachorro quente de carne, cachorro quente de frango, corintiano assado, empada Dona Clemes, coxinha de carne, coxinha de frango, bolinha de queijo, kibe Dona Clemes, churros, salgados para negócios, salgados para lanchonetes, salgados para buffets, salgados para revenda, salgados para conveniência, salgados para eventos, salgados fresquinhos, salgados irresistíveis, receitas de salgados caseiros, salgados de qualidade" />
        <meta name="google-site-verification" content="verificacao_do_seu_site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        {/*<!-- Open Graph -->*/}
        <meta property="og:title" content="O melhor salgado de Votuporanga e região! | Dona Clemes"/>
        <meta property="og:description" content="A Dona Clemes oferece salgados irresistíveis e de qualidade, perfeitos para festas e negócios. Com receitas caseiras e ingredientes selecionados, nossos produtos garantem sabor e praticidade para encantar seus clientes. Ideal para lanchonetes, buffets e eventos, Dona Clemes transforma qualquer ocasião com opções deliciosas e inesquecíveis!"/>
        <meta property="og:image" content="link depois que o site estiver no ar"/>
        <meta property="og:url" content="https://www.donaclemes.com"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="O melhor salgado de Votuporanga e região! | Dona Clemes"/>
        <meta name="twitter:description" content="A Dona Clemes oferece salgados irresistíveis e de qualidade, perfeitos para festas e negócios. Com receitas caseiras e ingredientes selecionados, nossos produtos garantem sabor e praticidade para encantar seus clientes. Ideal para lanchonetes, buffets e eventos, Dona Clemes transforma qualquer ocasião com opções deliciosas e inesquecíveis!"/>
        <meta name="twitter:image" content="link depois que o site estiver no ar"/>
        <meta name="twitter:url" content="https://www.donaclemes.com"></meta>
        
        {/* Schema Markup for Products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Coxinha de Frango Gourmet",
              "image": "https://www.instagram.com/p/DAGKMLOJNcm/",
              "description": "Os melhores salgados da região, feitos com ingredientes selecionados.",
              "sku": "COX20230315",
              "offers": {
                "@type": "Offer",
                "url": "https://www.donaclemes.com/#products",
                "priceCurrency": "BRL",
                "price": "5.00",
                "priceValidUntil": "2025-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        </Head>
                <body
                  className={`${inter.variable} ${barlow.variable} overflow-x-hidden antialiased`}
                >
                  <Header />
                  {children}
                  <Footer />
                </body>
              </html>
              );
}
