import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://abrir.link/XodXT";

const SocialLinks = () => {
  return (
    <section className="container py-8">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full max-w-2xl mx-auto bg-whatsapp text-whatsapp-foreground px-8 py-5 rounded-xl font-body font-bold text-lg md:text-xl hover:bg-whatsapp/85 transition-all active:scale-[0.98] shadow-lg shadow-whatsapp/20"
      >
        <MessageCircle size={26} />
        Faça seu Orçamento
      </a>
    </section>
  );
};

export default SocialLinks;
