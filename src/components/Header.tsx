import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo_header.jpg";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Quem Somos", path: "/quem-somos" },
  { label: "Localização", path: "/localizacao" },
  { label: "Reformas", path: "/reformas" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between py-2 md:py-3">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Bilhares Alencar"
            className="h-14 md:h-16 w-auto rounded-lg"
            style={{ backgroundColor: 'hsl(30, 10%, 8%)' }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-5 py-2.5 rounded-lg font-body font-semibold text-base md:text-lg transition-colors",
                pathname === item.path
                  ? "bg-primary/20 text-primary"
                  : "text-white hover:text-primary hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-white"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block px-6 py-4 font-body font-semibold text-lg border-b border-border/50 transition-colors",
                pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-white hover:text-primary hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
