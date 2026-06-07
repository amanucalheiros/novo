import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton, FloatingWhatsApp, WHATSAPP_URL } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { Countdown } from "@/components/Countdown";
import {
  Plane, Hotel, Bus, MapPin, Globe2, Camera, Check, X, Calendar,
  Users, ShieldCheck, Sparkles, ChevronDown, Clock, Heart, Quote,
  CreditCard, BadgeCheck, Star, Flame, ArrowRight, MessageCircle,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero-cataratas.jpg";
import parqueAvesImg from "@/assets/parque-aves.jpg";
import ciudadImg from "@/assets/ciudad-del-este.jpg";
import dutyFreeImg from "@/assets/duty-free.jpg";
import feirinhaImg from "@/assets/feirinha-argentina.jpg";
import marcoImg from "@/assets/marco-fronteiras.jpg";
import cityTourImg from "@/assets/city-tour-foz.jpg";
import guiaImg from "@/assets/guia-marcia.jpg";
import aeroportoImg from "@/assets/aeroporto-retorno.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foz do Iguaçu — Black Friday no Paraguai | Vem Viver Turismo" },
      { name: "description", content: "Expedição de 25 a 29 de novembro de 2026: 5 dias em Brasil, Paraguai e Argentina com guia, hotel e transfers inclusos. Vagas promocionais limitadas." },
      { property: "og:title", content: "Foz do Iguaçu — Black Friday no Paraguai | Vem Viver Turismo" },
      { property: "og:description", content: "5 dias, 3 países, Black Friday no Paraguai. 12x de R$295 ou R$3.099 à vista. Vagas promocionais limitadas." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ============================== DATA ============================== */

const roteiro = [
  {
    n: 1,
    data: "25/11",
    img: dutyFreeImg,
    titulo: "Chegada + Argentina",
    pts: [
      "Recepção no aeroporto e transfer para o hotel.",
      "Já no primeiro dia cruzaremos a fronteira para a Argentina.",
      "Visita ao Duty Free Shop e à tradicional Feirinha de Puerto Iguazú.",
      "Encerramento com boas-vindas especiais ao grupo.",
    ],
  },
  {
    n: 2,
    data: "26/11",
    img: ciudadImg,
    titulo: "Black Friday em Ciudad del Este",
    pts: [
      "Atravessando a fronteira para o maior dia de compras do ano.",
      "Rota guiada pelos principais shoppings e lojas selecionadas do Paraguai.",
      "Acompanhamento da equipe durante todo o dia.",
    ],
  },
  {
    n: 3,
    data: "27/11",
    img: parqueAvesImg,
    titulo: "Cataratas + Parque das Aves",
    pts: [
      "Manhã nas Cataratas do Iguaçu.",
      "Tempo para fotos e visita à Garganta do Diabo.",
      "À tarde, experiência sensorial no Parque das Aves.",
    ],
  },
  {
    n: 4,
    data: "28/11",
    img: marcoImg,
    titulo: "Dia Livre",
    pts: [
      "Dia para aproveitar no seu ritmo.",
      "Opcionais com Márcia: Marco das Três Fronteiras ao pôr do sol.",
      "City Tour pelos principais pontos de Foz do Iguaçu.",
    ],
  },
  {
    n: 5,
    data: "29/11",
    img: aeroportoImg,
    titulo: "Manhã Livre + Retorno",
    pts: [
      "Últimas compras, café tranquilo ou descanso.",
      "Transferência para o aeroporto.",
      "Voo de retorno com a bagagem cheia de histórias e ótimas compras.",
    ],
  },
];

const places = [
  { name: "Cataratas do Iguaçu", img: heroImg, desc: "Uma das 7 Maravilhas Naturais do Mundo. Mais de 275 quedas, mata atlântica e arco-íris na neblina.", tag: "Patrimônio Mundial", highlights: ["Trilhas suspensas", "Garganta do Diabo", "Mirantes panorâmicos"] },
  { name: "Parque das Aves", img: parqueAvesImg, desc: "Viveiros abertos com tucanos, araras e flamingos. Mais de 1.400 aves em Mata Atlântica preservada.", tag: "Imersão na natureza", highlights: ["Viveiros abertos", "Tucanos e araras", "Borboletário"] },
  { name: "Ciudad del Este", img: ciudadImg, desc: "O paraíso das compras da Black Friday paraguaia. Eletrônicos, perfumes e marcas com preços imbatíveis.", tag: "Black Friday", highlights: ["Shoppings selecionados", "Roteiro guiado", "Câmbio orientado"] },
  { name: "Duty Free Argentina", img: dutyFreeImg, desc: "Cosméticos, perfumes, bebidas premium e chocolates importados a preços que valem o cruzar da fronteira.", tag: "Compras sem imposto", highlights: ["Quota internacional", "Perfumaria e bebidas", "Atendimento bilíngue"] },
  { name: "Feirinha na Argentina", img: feirinhaImg, desc: "Couro artesanal, alfajores, vinhos e doces típicos em Puerto Iguazú — sabor da Argentina em um passeio gostoso.", tag: "Cultura argentina", highlights: ["Artesanato local", "Alfajores e vinhos", "Vibe portenha"] },
  { name: "Marco das Três Fronteiras", img: marcoImg, desc: "Brasil, Argentina e Paraguai num só horizonte. Pôr do sol cinematográfico e a foto mais icônica da viagem.", tag: "Pôr do sol icônico", highlights: ["Show de luzes", "Mirante exclusivo", "Pôr do sol"] },
  { name: "City Tour em Foz", img: cityTourImg, desc: "Passeio guiado pelos principais pontos de Foz: mirantes, marcos históricos e bairros típicos.", tag: "Novo no roteiro", highlights: ["Pontos icônicos", "Guiado pela Márcia", "Visão completa"] },
];

const incluso = [
  { icon: Plane, title: "Passagem aérea", desc: "Voo ida e volta incluso, com despacho de bagagem orientado." },
  { icon: Hotel, title: "Hotel com café da manhã", desc: "Acomodação confortável, bem localizada e selecionada com cuidado." },
  { icon: Bus, title: "Todos os transfers", desc: "Aeroporto, hotel, passeios e fronteiras — sem se preocupar com nada." },
  { icon: Users, title: "Guia em toda viagem", desc: "Márcia Calheiros acompanhando o grupo do embarque ao retorno." },
  { icon: Globe2, title: "Experiência em 3 países", desc: "Brasil, Paraguai e Argentina em um único roteiro." },
  { icon: MapPin, title: "Roteiro completo organizado", desc: "Passeios, horários e logística pensados nos mínimos detalhes." },
];

const depoimentos = [
  { nome: "Patrícia Pereira", print: "/depoimentos/print-patricia.png" },
  { nome: "Bernardo Carvalho", print: "/depoimentos/print-bernardo.png" },
  { nome: "Fernanda Souza", print: "/depoimentos/print-fernanda.png" },
];

const faqs = [
  { q: "Preciso de passaporte?", a: "Não. Para esta viagem você só precisa do RG original em bom estado (emitido há menos de 10 anos). Brasileiros entram em Paraguai e Argentina apenas com identidade." },
  { q: "Os ingressos dos passeios estão inclusos?", a: "Não. Os ingressos das atrações (Cataratas, Parque das Aves e Marco das Três Fronteiras) são pagos à parte. Te enviamos os valores atualizados antes da viagem." },
  { q: "Como funciona o parcelamento?", a: "Você pode parcelar em até 12x de R$295 no cartão de crédito, ou pagar à vista por R$3.099 com desconto." },
  { q: "Quantas vagas estão disponíveis?", a: "O grupo é exclusivo e limitado. As vagas promocionais para os primeiros 10 clientes se esgotam rapidamente." },
  { q: "Vou ter tempo para fazer compras?", a: "Sim. O roteiro foi montado equilibrando passeios e compras, com dia dedicado à Black Friday no Paraguai e ao Duty Free Argentina." },
  { q: "E se eu viajar sozinho(a)?", a: "Boa parte do nosso grupo viaja sozinho. Você vai conhecer pessoas incríveis e voltar com amizades para a vida toda." },
];

/* ============================== PAGE ============================== */

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Destinos />
      <Roteiro />
      <Guia />
      <TudoIncluso />
      <Investimento />
      <Depoimentos />
      <Seguranca />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ============================== HERO ============================== */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-onyx pt-20">
      <img
        src={heroImg}
        alt="Cataratas do Iguaçu ao amanhecer"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/55 via-onyx/15 to-onyx/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_oklch(0.1_0.02_250/0.45)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center text-primary-foreground">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-onyx/40 backdrop-blur-md px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-accent-gold">
            <Sparkles className="h-3.5 w-3.5" /> Experiência Personalizada
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-destructive/50 bg-destructive/15 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-destructive-foreground">
            <Flame className="h-3.5 w-3.5" /> Promoção de lançamento
          </span>
        </div>

        <h1 className="font-display text-balance leading-[0.92] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="block text-[3.5rem] sm:text-7xl md:text-[8.5rem] tracking-[0.02em]">
            Foz do Iguaçu
          </span>
          <span className="block font-script text-accent-gold text-[3rem] sm:text-5xl md:text-[6rem] leading-none mt-3">
            Black Friday
          </span>
          <span className="block font-sans font-light tracking-[0.35em] uppercase text-sm sm:text-base md:text-lg mt-5 text-primary-foreground/85">
            no Paraguai
          </span>
        </h1>

        <p className="mt-10 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-primary-foreground/90 text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
          5 dias em 3 países: <span className="text-accent-gold font-medium">Brasil, Paraguai e Argentina</span>. Cataratas, Parque das Aves, compras e o pôr do sol no Marco das Três Fronteiras — tudo organizado, com guia especialista do começo ao fim.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-onyx/40 backdrop-blur-md px-4 py-2.5 text-sm font-medium">
            <Calendar className="h-4 w-4 text-accent-gold" /> 25 a 29 de Novembro de 2026
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-onyx/40 backdrop-blur-md px-4 py-2.5 text-sm font-medium">
            <Users className="h-4 w-4 text-accent-gold" /> Grupo exclusivo
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-onyx/40 backdrop-blur-md px-4 py-2.5 text-sm font-medium">
            <Globe2 className="h-4 w-4 text-accent-gold" /> 3 países
          </div>
        </div>

        <a href="#roteiro" className="mt-14 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.35em] text-primary-foreground/70 hover:text-accent-gold transition-colors animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Descubra o roteiro
          <ChevronDown className="h-5 w-5 animate-float" />
        </a>
      </div>
    </section>
  );
}

/* ============================== DESTINOS ============================== */
function Destinos() {
  return (
    <section id="destinos" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent-gold-deep">O que você vai viver</span>
          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl text-balance">
            Experiências que ficam <span className="font-script text-accent-gold-deep text-5xl sm:text-6xl md:text-7xl">para sempre</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg font-light max-w-xl mx-auto">
            Cada parada do roteiro foi pensada para ser inesquecível — natureza, cultura e compras em equilíbrio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((p) => (
            <article key={p.name} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-border/60">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-gold-deep bg-gold/15 px-3 py-1 rounded-full">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-3xl font-display tracking-wide">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-foreground/75">
                      <Check className="h-3.5 w-3.5 text-accent-gold-deep shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== ROTEIRO ============================== */
function Roteiro() {
  return (
    <section id="roteiro" className="py-28 bg-gradient-premium text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 80% 10%, oklch(0.82 0.14 85) 0, transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent-gold">Roteiro completo</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-balance">
            5 dias, 5 capítulos <span className="font-script text-accent-gold">marcantes</span>
          </h2>
          <p className="mt-5 text-primary-foreground/70 text-base font-light">
            25 a 29 de novembro de 2026 · Brasil · Paraguai · Argentina
          </p>
        </div>

        <div className="space-y-8">
          {roteiro.map((r, idx) => (
            <article
              key={r.n}
              className={`group relative grid lg:grid-cols-[1.1fr_1fr] gap-0 rounded-3xl overflow-hidden border border-gold/20 shadow-premium hover:border-gold/50 transition-all duration-500 animate-fade-up ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={r.img}
                  alt={r.titulo}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-onyx/70 via-onyx/20 to-transparent" />
                {/* Day number badge */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-gold text-onyx px-4 py-2 shadow-gold">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] leading-none">Dia</span>
                    <span className="block font-display text-4xl sm:text-5xl leading-none mt-0.5">{String(r.n).padStart(2, "0")}</span>
                  </div>
                  <div className="rounded-full glass-dark border border-gold/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
                    {r.data}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-8 sm:p-10 lg:p-12 bg-onyx-soft/70 backdrop-blur-sm flex flex-col justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-gold flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" /> Capítulo {r.n}
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl tracking-wide leading-[0.95]">
                  {r.titulo}
                </h3>
                <ul className="mt-6 space-y-3">
                  {r.pts.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm sm:text-base text-primary-foreground/85 font-light leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== GUIA ============================== */
function Guia() {
  return (
    <section id="guia" className="py-28 bg-background relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.82 0.14 85) 0, transparent 50%)" }} />
      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold rounded-3xl rotate-2 opacity-25 blur-sm" />
          <img
            src={guiaImg}
            alt="Márcia Calheiros, guia da expedição"
            width={896}
            height={1152}
            loading="lazy"
            className="relative rounded-3xl shadow-premium w-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-card rounded-2xl p-4 shadow-premium border border-gold/30 max-w-[240px]">
            <div className="rounded-xl bg-gradient-gold p-2 text-onyx shrink-0">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <p className="text-xs font-medium leading-snug">
              Guia oficial da expedição<br />
              <span className="text-muted-foreground">Vem Viver Turismo</span>
            </p>
          </div>
        </div>

        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent-gold-deep">Sua guia na expedição</span>
          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            Márcia <span className="font-script text-accent-gold-deep text-5xl sm:text-6xl md:text-7xl">Calheiros</span>
          </h2>

          <div className="mt-7 space-y-5 text-base sm:text-lg text-foreground/85 leading-relaxed font-light font-sans">
            <p>
              Conheça a responsável por transformar essa experiência em algo inesquecível: <strong className="font-semibold text-foreground">Márcia Calheiros</strong>. Apaixonada por viagens e por conectar pessoas através de experiências únicas.
            </p>
            <p>
              Com olhar atento aos detalhes e cuidado genuíno com cada participante, ela conduz a expedição de forma leve, organizada e próxima, fazendo todos se sentirem parte de algo maior do que apenas uma viagem.
            </p>
          </div>

          <blockquote className="mt-8 relative rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 to-transparent p-7">
            <Quote className="absolute -top-4 left-6 h-8 w-8 text-accent-gold-deep bg-background px-1" />
            <p className="font-serif italic text-xl sm:text-2xl text-foreground/90 leading-snug">
              "Algumas viagens mudam o destino. Outras mudam a forma como enxergamos o mundo."
            </p>
          </blockquote>

          <div className="mt-8">
            <WhatsAppButton>Tirar dúvidas com a Márcia</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== TUDO INCLUSO ============================== */
function TudoIncluso() {
  return (
    <section id="incluso" className="py-28 bg-gradient-onyx text-primary-foreground relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, oklch(0.82 0.14 85) 0, transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.82 0.14 85) 0, transparent 45%)" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent-gold">Tudo incluso</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-balance">
            Você só precisa <span className="font-script text-accent-gold">fazer as malas</span>
          </h2>
          <p className="mt-5 text-primary-foreground/70 text-lg font-light max-w-2xl mx-auto">
            Cuidamos de cada detalhe para você relaxar e aproveitar cada minuto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {incluso.map((i, idx) => (
            <div
              key={i.title}
              className="group relative flex items-start gap-4 rounded-2xl border border-gold/15 bg-onyx-soft/60 backdrop-blur-sm p-7 hover-lift hover:border-gold/40 hover:bg-onyx-soft/90 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />
              <div className="relative rounded-xl bg-gradient-gold p-3 text-onyx shrink-0 shadow-gold">
                <i.icon className="h-6 w-6" />
              </div>
              <div className="relative">
                <h3 className="font-display text-xl tracking-wide">{i.title}</h3>
                <p className="text-sm text-primary-foreground/70 mt-1.5 leading-relaxed font-light">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-gold/30 bg-onyx-soft/50 backdrop-blur-sm p-6 max-w-3xl mx-auto">
          <div className="rounded-lg bg-gold/15 p-2 shrink-0">
            <X className="h-5 w-5 text-accent-gold" />
          </div>
          <p className="text-sm sm:text-base text-primary-foreground/90 font-light leading-relaxed">
            <strong className="font-semibold text-accent-gold">Importante:</strong> os <strong className="font-medium">ingressos das atrações</strong> (Cataratas, Parque das Aves e Marco das Três Fronteiras) <strong className="font-medium">não estão inclusos</strong>. Te enviamos os valores atualizados antes da viagem.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================== INVESTIMENTO (PROMO) ============================== */
function Investimento() {
  // Countdown: 7 dias a partir de agora para criar urgência
  const target = new Date();
  target.setDate(target.getDate() + 7);
  target.setHours(23, 59, 59, 0);

  return (
    <section
      id="investimento"
      className="relative py-28 overflow-hidden scroll-mt-24"
    >
      {/* Background image + overlays */}
      <img
        src={marcoImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/90 via-onyx/85 to-onyx/95" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.82 0.14 85 / 0.45) 0, transparent 55%)" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-5 text-center text-primary-foreground">
        {/* Selo de destaque */}
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-destructive to-[oklch(0.62_0.22_30)] text-white px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] shadow-[0_10px_30px_-10px_oklch(0.55_0.24_27/0.7)] animate-pulse-glow">
          <Flame className="h-4 w-4 fill-current" />
          Promoção de Lançamento
        </div>

        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl text-balance">
          Valor exclusivo para os <span className="font-script text-accent-gold">primeiros 10 clientes</span>
        </h2>
        <p className="mt-5 text-primary-foreground/80 text-base sm:text-lg font-light max-w-2xl mx-auto">
          Após o preenchimento das vagas promocionais os valores serão reajustados.
        </p>

        {/* COUNTDOWN */}
        <div className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-gold mb-4">
            Promoção encerra em
          </p>
          <Countdown target={target} />
        </div>

        {/* PRICE CARD — Glass */}
        <div className="mt-14 relative">
          {/* Soft glow */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" />

          <div className="relative rounded-[2rem] border border-gold/40 glass-dark shadow-premium overflow-hidden p-8 sm:p-12">
            {/* Valor antigo */}
            <div className="flex items-center justify-center gap-3 text-primary-foreground/65">
              <span className="text-sm sm:text-base font-light">De</span>
              <span className="relative text-2xl sm:text-3xl font-display tracking-tight">
                R$ 3.799,00
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-destructive rotate-[-8deg] rounded-full" />
              </span>
            </div>

            {/* Valor principal — HUGE */}
            <div className="mt-6">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-accent-gold">
                Por apenas
              </p>
              <div className="mt-4 flex items-end justify-center gap-3 sm:gap-5 flex-wrap">
                <span className="font-display text-4xl sm:text-6xl md:text-7xl text-accent-gold leading-none">
                  12x
                </span>
                <span
                  className="font-display leading-[0.85] tracking-tight bg-gradient-to-b from-white via-[oklch(0.95_0.05_90)] to-[oklch(0.82_0.14_82)] bg-clip-text text-transparent drop-shadow-[0_8px_30px_oklch(0.82_0.14_85/0.35)]"
                  style={{ fontSize: "clamp(4rem, 16vw, 11rem)" }}
                >
                  R$ 295
                </span>
              </div>
              <p className="mt-3 text-sm sm:text-base text-primary-foreground/75 font-light">
                no cartão de crédito
              </p>
            </div>

            {/* Divider */}
            <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

            {/* À vista */}
            <p className="mt-8 text-lg sm:text-xl text-primary-foreground/90 font-light">
              ou <span className="font-display text-3xl sm:text-4xl text-white tracking-tight">R$ 3.099,00</span> <span className="text-accent-gold font-medium">à vista</span>
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[oklch(0.62_0.16_150)] to-[oklch(0.55_0.15_155)] text-white font-bold uppercase tracking-[0.15em] text-sm sm:text-base px-8 sm:px-12 py-5 sm:py-6 shadow-glow animate-pulse-glow hover:scale-[1.04] hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Quero garantir minha vaga
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-5 text-xs text-primary-foreground/65 font-light flex items-center justify-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-gold" />
                Pagamento seguro · Atendimento humano no WhatsApp
              </p>
            </div>

            {/* Trust row */}
            <div className="mt-10 pt-8 border-t border-gold/15 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: BadgeCheck, t: "Vagas Limitadas" },
                { icon: CreditCard, t: "Em até 12x" },
                { icon: Star, t: "Experiência premium" },
              ].map((b) => (
                <div key={b.t} className="flex flex-col items-center gap-2">
                  <span className="rounded-xl bg-gold/15 p-2 text-accent-gold">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                    {b.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== DEPOIMENTOS ============================== */
function Depoimentos() {
  return (
    <section className="py-28 bg-secondary/40 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.35em] text-whatsapp">
            <span className="h-1.5 w-1.5 rounded-full bg-whatsapp animate-pulse" />
            Quem já viveu, conta
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-balance">
            Quem viaja com a <span className="font-script text-accent-gold-deep">Vem Viver</span> recomenda
          </h2>
          <p className="mt-5 text-muted-foreground text-base font-light max-w-xl mx-auto">
            Depoimentos reais de clientes que viveram essa experiência com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {depoimentos.map((d, idx) => (
            <div
              key={d.nome}
              className="rounded-3xl overflow-hidden bg-card shadow-card border border-border/60 hover-lift animate-fade-up p-3 sm:p-4"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="rounded-2xl overflow-hidden bg-muted/20">
                <img
                  src={d.print}
                  alt={`Depoimento real de ${d.nome} no WhatsApp`}
                  loading="lazy"
                  className="block w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground font-light">
          * Depoimentos enviados espontaneamente por viajantes ao final da expedição.
        </p>
      </div>
    </section>
  );
}

/* ============================== SEGURANÇA ============================== */
function Seguranca() {
  const items = [
    { icon: ShieldCheck, t: "Agência regulamentada", d: "Vem Viver Turismo, com CNPJ ativo e atendimento humano em cada etapa." },
    { icon: Users, t: "Grupo acompanhado 100% do tempo", d: "Você nunca está sozinho. Márcia e equipe ao seu lado em todos os passeios e fronteiras." },
    { icon: Hotel, t: "Hotel seguro e bem localizado", d: "Acomodação selecionada com atenção, café da manhã e estrutura completa." },
    { icon: Camera, t: "Roteiro testado e refinado", d: "Um mesmo roteiro lapidado a cada expedição para entregar o melhor da experiência." },
  ];
  return (
    <section className="py-24 bg-gradient-premium text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-14">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent-gold">Você viaja seguro</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-balance">
            Tranquilidade do começo <span className="font-script text-accent-gold">ao fim</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl bg-onyx-soft/50 backdrop-blur-sm border border-gold/15 p-6 hover:border-gold/40 transition-colors">
              <i.icon className="h-8 w-8 text-accent-gold mb-4" />
              <h3 className="font-display text-xl tracking-wide">{i.t}</h3>
              <p className="text-sm text-primary-foreground/75 mt-2 font-light leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== FAQ ============================== */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center mb-12">
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent-gold-deep">Perguntas frequentes</span>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-balance">Vamos esclarecer tudo</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl bg-secondary/60 border border-border/60 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-secondary/80 transition"
              >
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-accent-gold-deep transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed font-light">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4 font-light">Ficou alguma dúvida?</p>
          <WhatsAppButton>Falar agora no WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

/* ============================== FINAL CTA (RESERVA) ============================== */
function FinalCTA() {
  return (
    <section id="reserva" className="relative py-28 overflow-hidden scroll-mt-24">
      <img src={parqueAvesImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-br from-onyx/85 via-onyx/75 to-onyx/90" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.82 0.14 85 / 0.35) 0, transparent 50%)" }} />

      <div className="relative mx-auto max-w-3xl px-5 text-center text-primary-foreground">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-gold border border-gold/40 bg-onyx/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
          Reserva · Últimas vagas
        </span>
        <h2 className="mt-6 text-5xl sm:text-6xl md:text-7xl text-balance leading-[0.95]">
          Sua próxima grande viagem começa <span className="font-script text-accent-gold">agora</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-primary-foreground/85 text-balance max-w-xl mx-auto font-light">
          25 a 29 de novembro de 2026 · 12x R$295 ou R$3.099 à vista · Grupo exclusivo.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton size="lg">Quero garantir minha vaga</WhatsAppButton>
        </div>
        <p className="mt-5 text-xs text-primary-foreground/65 font-light">Atendimento humano e rápido pelo WhatsApp</p>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-onyx text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.82 0.14 85) 0, transparent 50%)" }} />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-wide text-accent-gold">Vem Viver Turismo</p>
            <p className="mt-4 text-sm text-primary-foreground/70 font-light leading-relaxed max-w-sm">
              Experiências de viagem cuidadosamente planejadas, com guia especialista e atendimento humano do primeiro contato ao retorno.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium text-accent-gold hover:bg-gold/20 transition"
            >
              <Sparkles className="h-3.5 w-3.5" /> Atendimento pelo WhatsApp
            </a>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-gold mb-4">Expedição</p>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75 font-light">
              <li>Foz do Iguaçu + Black Friday</li>
              <li>25 a 29 de Novembro de 2026</li>
              <li>Brasil · Paraguai · Argentina</li>
              <li>Grupo exclusivo · Vagas limitadas</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-gold mb-4">Contato</p>
            <ul className="space-y-2.5 text-sm text-primary-foreground/75 font-light">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition">
                  WhatsApp oficial
                </a>
              </li>
              <li>Atendimento: Seg a Sáb · 9h às 19h</li>
              <li>Guia: Márcia Calheiros</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/55 font-light">
          <p>© {year} Vem Viver Turismo. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-gold" /> Agência regulamentada · CNPJ ativo
          </p>
        </div>
      </div>
    </footer>
  );
}
