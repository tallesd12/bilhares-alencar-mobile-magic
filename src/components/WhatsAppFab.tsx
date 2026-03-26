import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/5561999999999"
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
