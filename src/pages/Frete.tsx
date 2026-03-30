import Header from "@/components/Header";
import FreightCalculator from "@/components/FreightCalculator";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Frete = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-gradient">
          Calcule o Frete
        </h1>
        <p className="text-center text-muted-foreground font-body mb-8">
          Saiba o custo de entrega para a sua região.
        </p>
      </div>
      <FreightCalculator />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Frete;
