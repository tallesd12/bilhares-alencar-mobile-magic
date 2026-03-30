import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import InstagramSection from "@/components/InstagramSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <InstagramSection />
      <MapSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
