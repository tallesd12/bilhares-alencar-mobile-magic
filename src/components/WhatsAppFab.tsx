import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://abrir.link/XodXT";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform active:scale-95"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFab;
