import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

export const WHATSAPP_URL = "https://wa.me/message/ZNJ7F5HFZYYTD1";

interface Props {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WhatsAppButton({ children = "Garantir minha vaga no WhatsApp", className = "", size = "md" }: Props) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-5 text-lg",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold shadow-glow transition-all hover:scale-[1.03] hover:brightness-110 active:scale-95 ${sizes[size]} ${className}`}
    >
      <MessageCircle className="h-5 w-5 fill-current" />
      {children}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-4 font-semibold shadow-glow animate-pulse-glow hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
