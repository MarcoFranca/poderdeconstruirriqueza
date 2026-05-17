"use client"

import Image from "next/image"
import Link from "next/link"
import {
    ArrowRight,
    CalendarDays,
    Check,
    ChevronRight,
    Clock3,
    MapPin,
    ShieldCheck,
    Sparkles,
} from "lucide-react"

import { motion } from "motion/react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"

function Reveal({
                    children,
                    delay = 0,
                    className,
                }: {
    children: React.ReactNode
    delay?: number
    className?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E8C66A]" />
            <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#E8C66A]">
        {children}
      </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#E8C66A] to-transparent" />
        </div>
    )
}

const includedItems = [
    "Sunset Brunch Experience",
    "Networking estratégico",
    "Experiência premium no MAC",
    "Conteúdo transformador",
    "Conexões de alto valor",
    "Ambiente sofisticado e intimista",
]

const faqItems = [
    {
        question: "Preciso ser empresária para participar?",
        answer:
            "Não. O evento é para mulheres que desejam crescer financeiramente, desenvolver posicionamento e viver um novo nível de consciência sobre dinheiro e prosperidade.",
    },
    {
        question: "O evento será apenas sobre investimentos?",
        answer:
            "Não. Você viverá uma experiência completa envolvendo educação financeira, posicionamento, comunicação, mentalidade e networking estratégico.",
    },
    {
        question: "Posso ir sozinha?",
        answer:
            "Sim. Muitas mulheres irão sozinhas justamente para se conectar com novas pessoas, ambientes e oportunidades.",
    },
    {
        question: "O ingresso inclui alimentação?",
        answer:
            "Sim. O Sunset Brunch Experience foi pensado para entregar uma experiência sofisticada e memorável.",
    },
]

export function LocationSection() {
    return (
        <section
            id="local"
            className="relative overflow-hidden bg-[#050302] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,198,106,0.12),transparent_28%)]" />

            <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_1fr]">
                {/* LEFT */}
                <Reveal>
                    <div className="relative overflow-hidden border border-[#E8C66A]/25 bg-[#0B0705]/70 p-3 shadow-[0_50px_140px_-80px_rgba(232,198,106,.5)]">
                        <div className="relative aspect-[1.05] overflow-hidden">
                            <Image
                                src="/assets/mac-niteroi.jpg"
                                alt="MAC Niterói"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,3,2,0.82),rgba(5,3,2,0.15))]" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E8C66A]">
                                    Local do evento
                                </p>

                                <h3 className="mt-3 font-serif text-4xl leading-none">
                                    MAC Niterói
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-7 text-[#FFF6DF]/72">
                                    Um dos cenários mais sofisticados e deslumbrantes do Rio de
                                    Janeiro.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT */}
                <div>
                    <Reveal>
                        <SectionLabel>O cenário</SectionLabel>

                        <h2 className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.04] tracking-[-0.045em]">
                            Um cenário à altura da{" "}
                            <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text italic text-transparent">
                mulher
              </span>{" "}
                            que você está se tornando.
                        </h2>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="mt-8 space-y-5 text-[1rem] leading-8 text-[#FFF6DF]/72">
                            <p>
                                O Museu de Arte Contemporânea de Niterói foi escolhido para
                                proporcionar mais do que um evento:
                                <strong className="text-[#FFF6DF]">
                                    {" "}
                                    uma experiência memorável.
                                </strong>
                            </p>

                            <p>
                                Arquitetura icônica, atmosfera sofisticada, vista privilegiada
                                e um ambiente pensado para conexões reais, expansão e
                                crescimento.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {includedItems.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 border border-[#E8C66A]/16 bg-[#0B0705]/70 px-5 py-4"
                                >
                                    <Check className="size-4 text-[#E8C66A]" />

                                    <span className="text-sm text-[#FFF6DF]/74">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export function PricingSection() {
    return (
        <section
            id="ingresso"
            className="relative overflow-hidden bg-[#080504] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,198,106,0.12),transparent_30%)]" />

            <div className="relative z-10 mx-auto max-w-[820px]">
                <Reveal className="text-center">
                    <SectionLabel>Garanta sua presença</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.4rem,4vw,4.6rem)] leading-[1.02] tracking-[-0.045em]">
                        O próximo nível da sua vida financeira começa com uma decisão.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-[1rem] leading-8 text-[#FFF6DF]/72">
                        Você pode continuar vivendo da mesma forma ou escolher entrar em um
                        ambiente que expande sua visão, posicionamento e prosperidade.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="relative mt-14 overflow-hidden border border-[#E8C66A]/28 bg-[#0B0705]/80 p-10 text-center shadow-[0_60px_160px_-90px_rgba(232,198,106,.55)] backdrop-blur-xl">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C66A]/50 to-transparent" />

                        <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#E8C66A]">
                            Ingresso individual
                        </p>

                        <div className="mt-7">
              <span className="font-serif text-7xl italic text-[#FFF6DF]">
                R$ 497
              </span>
                        </div>

                        <p className="mt-5 text-sm text-[#FFF6DF]/58">
                            Experiência presencial + brunch + networking + conteúdo
                        </p>

                        <div className="mt-10 grid gap-4 border-y border-[#E8C66A]/12 py-8 text-left md:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <CalendarDays className="size-5 text-[#E8C66A]" />
                                <span className="text-sm text-[#FFF6DF]/72">
                  26 de Junho
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock3 className="size-5 text-[#E8C66A]" />
                                <span className="text-sm text-[#FFF6DF]/72">17h</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin className="size-5 text-[#E8C66A]" />
                                <span className="text-sm text-[#FFF6DF]/72">
                  MAC Niterói
                </span>
                            </div>
                        </div>

                        <Button
                            asChild
                            className="mt-10 h-16 rounded-none bg-gradient-to-r from-[#FFE58F] via-[#E8C66A] to-[#A27113] px-10 text-[0.72rem] font-black uppercase tracking-[0.24em] text-[#120B07] hover:brightness-110"
                        >
                            <Link href="#">
                                Quero garantir minha vaga
                                <ArrowRight className="size-4" />
                            </Link>
                        </Button>

                        <div className="mt-8 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#FFF6DF]/52">
                            <ShieldCheck className="size-4 text-[#E8C66A]" />
                            Vagas limitadas
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export function FaqSection() {
    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-[#050302] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="relative z-10 mx-auto max-w-[920px]">
                <Reveal className="text-center">
                    <SectionLabel>FAQ</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] leading-[1.04] tracking-[-0.045em]">
                        Ainda com dúvidas?
                    </h2>
                </Reveal>

                <Reveal delay={0.08}>
                    <Accordion
                        type="single"
                        collapsible
                        className="mt-14 border-t border-[#E8C66A]/15"
                    >
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-[#E8C66A]/15"
                            >
                                <AccordionTrigger className="py-7 text-left font-serif text-[1.2rem] text-[#FFF6DF] hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>

                                <AccordionContent className="pb-7 text-[0.98rem] leading-8 text-[#FFF6DF]/68">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>
            </div>
        </section>
    )
}

export function FinalCtaSection() {
    return (
        <section className="relative overflow-hidden bg-[#080504] px-6 py-32 text-[#FFF6DF] md:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,198,106,0.12),transparent_36%)]" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <Reveal>
                    <SectionLabel>A decisão</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[1] tracking-[-0.05em]">
                        A decisão que muda sua relação com dinheiro começa agora.
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-[1.05rem] leading-9 text-[#FFF6DF]/72">
                        Você não precisa esperar um novo ano, um novo ciclo ou um cenário
                        perfeito para começar a construir riqueza, posicionamento e
                        prosperidade.
                    </p>

                    <p className="mx-auto mt-5 max-w-3xl font-serif text-2xl italic leading-relaxed text-[#E8C66A]">
                        Seu próximo nível começa com o ambiente que você escolhe viver.
                    </p>
                </Reveal>

                <Reveal delay={0.12}>
                    <Button
                        asChild
                        className="mt-12 h-16 rounded-none bg-gradient-to-r from-[#FFE58F] via-[#E8C66A] to-[#A27113] px-10 text-[0.72rem] font-black uppercase tracking-[0.24em] text-[#120B07] hover:brightness-110"
                    >
                        <Link href="#">
                            Quero viver essa experiência
                            <ChevronRight className="size-4" />
                        </Link>
                    </Button>
                </Reveal>
            </div>
        </section>
    )
}

export function SiteFooter() {
    return (
        <footer className="border-t border-[#E8C66A]/10 bg-[#050302] px-6 py-10 text-[#FFF6DF]/52 md:px-8">
            <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                <div>
                    <p className="font-serif text-2xl italic text-[#E8C66A]">
                        O Poder de Construir Riqueza
                    </p>

                    <p className="mt-2 text-sm">
                        Uma experiência para mulheres que decidiram crescer.
                    </p>
                </div>

                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em]">
                    <Sparkles className="size-3 text-[#E8C66A]" />
                    MAC Niterói · 26 de Junho
                </div>
            </div>
        </footer>
    )
}