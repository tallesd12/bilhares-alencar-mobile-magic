import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="container py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        {/* Smartphone mockup with video */}
        <div className="shrink-0 relative mx-auto md:mx-0">
          <div className="relative w-[260px] h-[520px] bg-black rounded-[3rem] border-[6px] border-white/20 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
            {/* Video */}
            <video
              src="/videos/instagram-preview.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Text + CTA */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
            Siga a <span className="text-primary">Bilhares Alencar</span> no Instagram
          </h2>
          <p className="text-white/80 font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Acompanhe todas as novidades: mesas de sinuca novas e seminovas disponíveis, reformas, acessórios e muito mais. Fique por dentro das nossas vendas e serviços e venha nos visitar em Vicente Pires – DF!
          </p>
          <a
            href="https://www.instagram.com/bilhares_alencar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-display font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            <Instagram size={24} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
