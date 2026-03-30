import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-gradient">
          Contato
        </h1>
        <p className="text-center text-muted-foreground font-body mb-10">
          Entre em contato conosco por qualquer um dos canais abaixo.
        </p>

        <div className="max-w-lg mx-auto space-y-6">
          <a
            href="tel:+5561999999999"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <div className="p-3 bg-primary/20 rounded-lg">
              <Phone className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-display font-bold">Telefone</p>
              <p className="text-muted-foreground font-body text-sm">(61) 99999-9999</p>
            </div>
          </a>

          <a
            href="mailto:contato@bilharesalencar.com"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
          >
            <div className="p-3 bg-primary/20 rounded-lg">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-display font-bold">E-mail</p>
              <p className="text-muted-foreground font-body text-sm">contato@bilharesalencar.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/5561999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-whatsapp/50 transition-colors"
          >
            <div className="p-3 bg-whatsapp/20 rounded-lg">
              <MessageCircle className="text-whatsapp" size={24} />
            </div>
            <div>
              <p className="font-display font-bold">WhatsApp</p>
              <p className="text-muted-foreground font-body text-sm">Fale conosco agora</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
            <div className="p-3 bg-accent/20 rounded-lg">
              <MapPin className="text-accent" size={24} />
            </div>
            <div>
              <p className="font-display font-bold">Endereço</p>
              <p className="text-muted-foreground font-body text-sm">Vicente Pires – DF, Rua 3 Chácara 46A</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Contato;
