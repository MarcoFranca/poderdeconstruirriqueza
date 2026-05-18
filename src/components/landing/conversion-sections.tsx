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
                                src="/assets/Museu1.jpg.jpeg"
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
    const ticketItems = [
        "Acesso a todas as palestras",
        "Sunset Brunch Experience completo",
        "Networking com mulheres empreendedoras",
        "Experiência exclusiva no MAC Niterói",
    ]

    return (
        <section
            id="ingresso"
            className="relative overflow-hidden bg-[#080504] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,198,106,0.14),transparent_34%),radial-gradient(circle_at_20%_85%,rgba(162,113,19,0.1),transparent_34%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C66A]/35 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[920px]">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <SectionLabel>Ingresso</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.05rem,3.4vw,3.85rem)] leading-[1.05] tracking-[-0.045em]">
                        Garanta sua presença no{" "}
                        <span className="block bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text italic text-transparent">
              1º lote.
            </span>
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="relative mx-auto mt-14 max-w-[560px]">
                        <div className="absolute -inset-8 bg-[#E8C66A]/10 blur-3xl" />

                        <div className="relative border border-[#E8C66A]/35 bg-gradient-to-b from-[#211607]/95 via-[#120B07]/95 to-[#080504]/95 p-[1px] shadow-[0_60px_180px_-95px_rgba(232,198,106,.75)]">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFF0B7]/70 to-transparent" />
                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E8C66A]/10 blur-3xl" />
                            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#A27113]/14 blur-3xl" />

                            <div className="relative px-7 py-9 text-center md:px-10 md:py-10">
                <span className="inline-flex border border-[#E8C66A]/45 bg-[#050302]/50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#E8C66A]">
                  Vagas limitadas · 1º lote
                </span>

                                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.32em] text-[#FFF6DF]/54">
                                    Ingresso individual
                                </p>

                                <div className="mt-7 overflow-visible">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#FFF6DF]/42">
                                        Por apenas
                                    </p>

                                    <p className="mt-3 font-serif text-lg text-[#FFF6DF]/42 line-through decoration-[#E8C66A]/50">
                                        de R$ 397,00
                                    </p>

                                    <div className="mt-2 flex items-center justify-center gap-2 overflow-visible py-3">
                    <span className="font-serif text-2xl leading-none text-[#E8C66A]">
                      R$
                    </span>

                                        <span className="inline-block overflow-visible bg-gradient-to-b from-[#FFF6C8] via-[#E8C66A] to-[#A27113] bg-clip-text px-2 py-2 font-serif text-[clamp(4.4rem,7.5vw,5.9rem)] leading-[1.12] tracking-[-0.035em] text-transparent">
                      197
                    </span>

                                        <span className="font-serif text-2xl leading-none text-[#FFF6DF]/70">
                      ,00
                    </span>
                                    </div>

                                    <p className="mt-1 font-serif text-base italic text-[#FFF6DF]/62">
                                        Pagamento único — garanta agora o melhor valor.
                                    </p>
                                </div>

                                <div className="relative my-8 h-px bg-[linear-gradient(90deg,transparent,rgba(232,198,106,.35),transparent)]">
                                    <span className="absolute left-[-2.75rem] top-1/2 size-7 -translate-y-1/2 rounded-full border border-[#E8C66A]/25 bg-[#080504]" />
                                    <span className="absolute right-[-2.75rem] top-1/2 size-7 -translate-y-1/2 rounded-full border border-[#E8C66A]/25 bg-[#080504]" />
                                </div>

                                <ul className="mx-auto max-w-[400px] space-y-3.5 text-left">
                                    {ticketItems.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-4 text-[0.92rem] leading-7 text-[#FFF6DF]/76"
                                        >
                      <span className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#E8C66A]/45 bg-[#E8C66A]/10">
                        <Check className="size-3 text-[#E8C66A]" />
                      </span>

                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    className="mt-9 h-14 w-full rounded-none bg-gradient-to-r from-[#FFE58F] via-[#E8C66A] to-[#A27113] px-8 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#120B07] shadow-[0_28px_90px_-34px_rgba(232,198,106,.95)] hover:brightness-110 md:max-w-[460px]"
                                >
                                    <Link href="https://pay.hotmart.com/E105886330V">
                                        Quero garantir essa experiência
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>

                                <p className="mt-5 text-[0.75rem] text-[#FFF6DF]/48">
                                    ⚠️ Vagas limitadas — encontro intimista e exclusivo.
                                </p>
                            </div>
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