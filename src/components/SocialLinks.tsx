import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/bilharesalencar",
    className: "bg-secondary hover:bg-accent hover:text-accent-foreground",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/bilharesalencar",
    className: "bg-secondary hover:bg-accent hover:text-accent-foreground",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://abrir.link/XodXT",
    className: "bg-whatsapp hover:bg-whatsapp/80 text-whatsapp-foreground",
  },
];

const SocialLinks = () => {
  return (
    <section className="container py-8">
      <h2 className="text-xl font-display font-bold text-center mb-4">
        Siga-nos nas redes
      </h2>
      <div className="flex justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-body font-medium transition-all ${s.className}`}
          >
            <s.icon size={20} />
            <span className="hidden sm:inline">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
