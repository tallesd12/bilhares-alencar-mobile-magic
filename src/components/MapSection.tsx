import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="container py-10">
      <div className="flex items-center gap-3 justify-center mb-4">
        <MapPin className="text-accent" size={28} />
        <h2 className="text-2xl font-display font-bold text-white">Nossa Localização</h2>
      </div>
      <p className="text-center text-white text-base mb-6 font-body">
        Vicente Pires – DF, Rua 3 Chácara 46A
      </p>
      <div className="w-full rounded-xl overflow-hidden border border-border aspect-video md:aspect-[21/9]">
        <iframe
          title="Localização Bilhares Alencar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0206!3d-15.7917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a7c12345678%3A0x1234567890abcdef!2sRua%203%2C%20Ch%C3%A1cara%2046A%20-%20Vicente%20Pires%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default MapSection;
