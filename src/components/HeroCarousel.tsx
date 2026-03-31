import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import mesa1 from "@/assets/mesa1.webp";
import mesa3 from "@/assets/mesa3.webp";
import mesa4 from "@/assets/mesa4.webp";
import mesa5 from "@/assets/mesa5.webp";
import mesa6 from "@/assets/mesa6.png";
import mesa7 from "@/assets/mesa7.png";

const images = [mesa6, mesa7, mesa1, mesa3, mesa4, mesa5];
const captions = [
  "Mesa de sinuca branca ao ar livre",
  "Mesa de sinuca com pano vermelho",
  "Mesa de sinuca clássica em madeira",
  "Mesa com iluminação noturna",
  "Mesa profissional com bolas",
  "Duas mesas prontas para entrega",
];

const topics = [
  { title: "Mesas de Sinuca Novas e Seminovas", desc: "Escolha entre modelos modernos ou clássicos, sempre com qualidade garantida." },
  { title: "Reforma e Manutenção Especializada", desc: "Devolvemos vida à sua mesa, deixando-a como nova." },
  { title: "Mais de 700 Mesas Vendidas", desc: "Centenas de clientes satisfeitos já escolheram a Bilhares Alencar." },, desc: "Centenas de clientes satisfeitos já escolheram a Bilhares Alencar." },
  { title: "Entrega Rápida em Todo DF e Entorno", desc: "Receba sua mesa com segurança e praticidade onde estiver." },
];

const WHATSAPP_URL = "https://abrir.link/XodXT";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Carousel - aligned left */}
        <div className="relative w-full lg:w-3/5 rounded-xl overflow-hidden border border-border">
          <div className="relative aspect-[4/3]">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={captions[i]}
                width={1200}
                height={900}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white font-body text-sm md:text-base font-medium">
                {captions[current]}
              </p>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 text-white p-2 rounded-full transition-all active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 text-white p-2 rounded-full transition-all active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-white/40"
                }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Topics - right side */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center gap-5">
          <ul className="space-y-6">
            {topics.map((topic) => (
              <li key={topic.title}>
                <p className="flex items-center gap-3 text-white font-body font-bold text-lg md:text-xl lg:text-2xl">
                  <span className="text-primary text-2xl">•</span>
                  {topic.title}
                </p>
                <p className="text-white/60 font-body text-sm md:text-base ml-8 mt-1 italic">
                  {topic.desc}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-whatsapp text-whatsapp-foreground px-8 py-5 rounded-xl font-body font-bold text-lg md:text-xl hover:bg-whatsapp/85 transition-all active:scale-[0.98] shadow-lg shadow-whatsapp/20 mt-2"
          >
            <MessageCircle size={26} />
            Faça seu Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
