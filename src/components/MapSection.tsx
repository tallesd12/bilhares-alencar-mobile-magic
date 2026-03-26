import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="container py-10">
      <div className="flex items-center gap-3 justify-center mb-4">
        <MapPin className="text-accent" size={24} />
        <h2 className="text-xl font-display font-bold">Nossa Localização</h2>
      </div>
      <p className="text-center text-muted-foreground text-sm mb-6 font-body">
        Vicente Pires – DF, Rua 3 Chácara 46A
      </p>
      <div className="w-full rounded-xl overflow-hidden border border-border aspect-video md:aspect-[21/9]">
        <iframe
          title="Localização Bilhares Alencar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15350.0!2d-48.0!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3!2sVicente+Pires!5e0!3m2!1spt-BR!2sbr!4v1"
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
