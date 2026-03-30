import { Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://abrir.link/XodXT";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-8">
      <div className="container py-8">
        <h2 className="text-xl font-display font-bold text-center mb-6">Contato</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-body">
          <a href="tel:+5561999999999" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone size={18} className="text-primary" />
            (61) 99999-9999
          </a>
          <a href="mailto:contato@bilharesalencar.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} className="text-primary" />
            contato@bilharesalencar.com
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-accent" />
            Vicente Pires – DF
          </span>
        </div>
        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-3 rounded-full font-body font-semibold text-lg hover:bg-whatsapp/80 transition-all active:scale-95"
          >
            💬 Fale pelo WhatsApp
          </a>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-8 font-body">
          © {new Date().getFullYear()} Bilhares Alencar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
