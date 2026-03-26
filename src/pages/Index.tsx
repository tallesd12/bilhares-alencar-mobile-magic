import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import SocialLinks from "@/components/SocialLinks";
import FreightCalculator from "@/components/FreightCalculator";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <SocialLinks />
      <FreightCalculator />
      <MapSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
