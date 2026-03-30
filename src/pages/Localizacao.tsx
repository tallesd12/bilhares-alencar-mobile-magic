import Header from "@/components/Header";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Localizacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-white">
          Localização
        </h1>
        <p className="text-center text-white font-body text-lg mb-8">
          Venha nos visitar! Estamos em Vicente Pires – DF.
        </p>
      </div>
      <MapSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Localizacao;
