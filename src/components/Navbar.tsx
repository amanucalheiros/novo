import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logoImg from "@/assets/vem-viver-logo.png";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

const items = [
  { id: "roteiro", label: "Roteiro" },
  { id: "guia", label: "Guia" },
  { id: "incluso", label: "Incluso" },
  { id: "investimento", label: "Investimento" },
  { id: "reserva", label: "Reserva" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-12px_oklch(0.18_0.04_250/0.18)] border-b border-border/60"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 h-20 flex items-center justify-between gap-6">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "top")}
          className="flex items-center shrink-0"
          aria-label="Vem Viver Turismo"
        >
          <img
            src={logoImg}
            alt="Vem Viver Turismo"
            width={180}
            height={180}
            className="h-14 sm:h-16 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              onClick={(e) => handleClick(e, it.id)}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
            >
              {it.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.62_0.16_150)] to-[oklch(0.55_0.15_155)] text-white font-semibold px-5 py-2.5 text-sm shadow-glow hover:scale-[1.04] hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            Garanta a sua vaga
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-full p-2.5 bg-secondary/80 hover:bg-secondary transition"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-white/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                className="px-3 py-3 text-sm font-medium text-foreground/85 border-b border-border/40 last:border-0 hover:text-accent-gold-deep transition"
              >
                {it.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.62_0.16_150)] text-white font-semibold px-5 py-3 text-sm shadow-glow"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              Garanta a sua vaga
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
