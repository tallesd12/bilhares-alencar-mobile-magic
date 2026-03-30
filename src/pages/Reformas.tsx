import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Wrench, CheckCircle } from "lucide-react";

const servicos = [
  "Troca de pano (tecido) da mesa",
  "Reforma completa de mesas de sinuca",
  "Nivelamento e ajuste de pedras",
  "Troca de borrachas das tabelas",
  "Restauração de madeira e acabamento",
  "Desmontagem e montagem para mudança",
];

const Reformas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-white">
          Reformas
        </h1>
        <p className="text-center text-white font-body text-lg mb-10">
          Reformamos sua mesa de sinuca com qualidade e garantia.
        </p>

        <div className="max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Wrench className="text-primary" size={24} />
              </div>
              <h2 className="text-xl font-display font-bold text-white">Nossos Serviços</h2>
            </div>
            <ul className="space-y-4">
              {servicos.map((s) => (
                <li key={s} className="flex items-start gap-3 font-body">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                  <span className="text-white text-base md:text-lg">{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <a
                href="https://abrir.link/XodXT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-3 rounded-full font-body font-semibold text-lg hover:bg-whatsapp/80 transition-all active:scale-95"
              >
                💬 Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Reformas;
