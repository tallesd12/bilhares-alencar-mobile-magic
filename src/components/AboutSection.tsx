import logo from "@/assets/logo.webp";

const AboutSection = () => {
  return (
    <section className="container py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="shrink-0">
          <img
            src={logo}
            alt="Bilhares Alencar"
            className="w-48 md:w-64 h-auto rounded-lg"
            style={{ backgroundColor: 'hsl(30, 10%, 8%)' }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
