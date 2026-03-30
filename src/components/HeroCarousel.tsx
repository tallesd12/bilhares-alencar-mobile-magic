import { useState, useEffect, useCallback } from "react";
import mesa1 from "@/assets/mesa1.webp";
import mesa2 from "@/assets/mesa2.webp";
import mesa3 from "@/assets/mesa3.webp";
import mesa4 from "@/assets/mesa4.webp";
import mesa5 from "@/assets/mesa5.webp";

const images = [mesa1, mesa2, mesa3, mesa4, mesa5];
const captions = [
  "Mesa de sinuca clássica em madeira",
  "Mesa de sinuca moderna",
  "Mesa com iluminação noturna",
  "Mesa profissional com bolas",
  "Duas mesas prontas para entrega",
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="container py-8">
      <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden border border-border">
        <div className="relative aspect-[4/3]">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={captions[i]}
              width={800}
              height={600}
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-foreground/80 font-body text-sm">
              {captions[current]}
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-foreground/30"
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
