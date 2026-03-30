import logo from "@/assets/logo.webp";

const AboutSection = () => {
  return (
    <section className="container py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="shrink-0">
          <img
            src={logo}
            alt="Bilhares Alencar"
            className="w-48 md:w-64 h-auto"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gradient">
            Quem Somos
          </h2>
          <div className="space-y-4 text-white font-body text-base md:text-lg leading-relaxed">
            <p>
              Fundada em 2019, a Bilhares Alencar nasceu com o propósito de unir tradição e qualidade no universo da sinuca. Localizada em Vicente Pires – DF, a empresa se consolidou como referência na venda de mesas de sinuca novas e seminovas, além de oferecer serviços especializados de reforma e manutenção, garantindo que cada mesa mantenha sua beleza e desempenho por muitos anos.
            </p>
            <p>
              Aqui você também encontra uma linha completa de acessórios – tacos, bolas, capas e muito mais – tudo pensado para proporcionar a melhor experiência aos apaixonados pelo jogo.
            </p>
            <p>
              A Bilhares Alencar é um espaço aberto à visitação, onde clientes podem conhecer de perto os produtos, sentir a qualidade dos materiais e receber atendimento personalizado. Mais do que vender mesas, nosso objetivo é criar momentos de lazer e convivência, transformando cada partida em uma experiência única.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
