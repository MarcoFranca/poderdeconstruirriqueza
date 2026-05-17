"use client"

import Link from "next/link"
import {
    ArrowRight,
    BadgeDollarSign,
    BarChart3,
    Brain,
    Check,
    CircleDollarSign,
    Gem,
    MessageCircle,
    Network,
    Sparkles,
    TrendingUp,
    X,
} from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const forYou = [
    "É empreendedora ou deseja empreender e sente que pode ir muito além do que vive hoje.",
    "Ganha dinheiro, mas sente falta de controle, estratégia e direção financeira.",
    "Quer aprender a construir patrimônio com inteligência e clareza.",
    "Sente que sua imagem e posicionamento ainda não traduzem o seu valor real.",
    "Busca um círculo de mulheres ambiciosas, com networking de verdade.",
]

const notForYou = [
    "Acredita que prosperidade é questão de sorte, e não de decisão.",
    "Procura uma fórmula mágica e não está disposta a aplicar estratégia.",
    "Não quer rever sua relação com dinheiro.",
    "Prefere continuar exatamente onde está.",
]

const eventTopics = [
    "Educação financeira",
    "Posicionamento no empreendedorismo",
    "Mentalidade de crescimento",
    "Construção de patrimônio",
    "Networking estratégico",
]

const experienceItems = [
    "Sunset Brunch Experience no MAC Niterói",
    "Vista deslumbrante da Baía de Guanabara",
    "Ambiente sofisticado e inspirador",
    "Conexões de alto valor",
]

const liveCards = [
    {
        number: "01",
        title: "Método CLARO",
        text: "Educação financeira na prática para sair do improviso e operar com direção.",
        icon: BarChart3,
    },
    {
        number: "02",
        title: "Educação financeira",
        text: "Estratégias para mulheres empreendedoras organizarem, multiplicarem e protegerem dinheiro.",
        icon: CircleDollarSign,
    },
    {
        number: "03",
        title: "Construção de patrimônio",
        text: "Como transformar renda em estrutura, segurança e liberdade financeira.",
        icon: TrendingUp,
    },
    {
        number: "04",
        title: "Erros que drenam dinheiro",
        text: "Os vazamentos invisíveis que sabotam crescimento, lucro e clareza financeira.",
        icon: BadgeDollarSign,
    },
    {
        number: "05",
        title: "Mentalidade de crescimento",
        text: "A virada de percepção necessária para prosperar com mais consciência e decisão.",
        icon: Brain,
    },
    {
        number: "06",
        title: "Posicionamento",
        text: "Como comunicar valor antes mesmo de falar, vender ou se apresentar.",
        icon: Gem,
    },
    {
        number: "07",
        title: "Riqueza pela comunicação",
        text: "Comunicação como ativo de autoridade, influência e oportunidades melhores.",
        icon: MessageCircle,
    },
    {
        number: "08",
        title: "Networking estratégico",
        text: "Conexões reais com mulheres que pensam crescimento, negócios e expansão.",
        icon: Network,
    },
    {
        number: "09",
        title: "Estratégias para prosperar",
        text: "Clareza, direção e posicionamento aplicados à vida financeira e profissional.",
        icon: Sparkles,
    },
]

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
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function AudienceSection() {
    return (
        <section
            id="evento"
            className="relative overflow-hidden bg-[#050302] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,198,106,0.12),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(162,113,19,0.12),transparent_34%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C66A]/30 to-transparent" />

            <div className="relative z-10 mx-auto max-w-[1180px]">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <SectionLabel>Divisor de águas</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.2rem,4.4vw,4.4rem)] leading-[1.02] tracking-[-0.045em]">
                        Este encontro não é para todas.{" "}
                        <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text italic text-transparent">
              É para quem decidiu crescer.
            </span>
                    </h2>
                </Reveal>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                        <div className="relative h-full border border-[#E8C66A]/35 bg-[#0B0705]/70 p-8 shadow-[0_40px_120px_-80px_rgba(232,198,106,.6)] backdrop-blur-xl">
                            <div className="mb-8 flex items-center gap-4 border-b border-[#E8C66A]/18 pb-6">
                                <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#FFF0B7] via-[#E8C66A] to-[#A27113] text-[#120B07]">
                                    <Check className="size-5" />
                                </div>

                                <h3 className="text-[12px] font-black uppercase tracking-[0.28em] text-[#E8C66A]">
                                    É para você que…
                                </h3>
                            </div>

                            <ul className="space-y-5">
                                {forYou.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-4 text-[0.98rem] leading-7 text-[#FFF6DF]/76"
                                    >
                                        <span className="mt-2 size-2 shrink-0 rotate-45 bg-[#E8C66A]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="relative h-full border border-[#E8C66A]/18 bg-[#080504]/55 p-8 backdrop-blur-xl">
                            <div className="mb-8 flex items-center gap-4 border-b border-[#E8C66A]/12 pb-6">
                                <div className="grid size-11 place-items-center rounded-full border border-[#E8C66A]/25 text-[#E8C66A]">
                                    <X className="size-5" />
                                </div>

                                <h3 className="text-[12px] font-black uppercase tracking-[0.28em] text-[#FFF6DF]/74">
                                    Não é o seu momento se…
                                </h3>
                            </div>

                            <ul className="space-y-5">
                                {notForYou.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-4 text-[0.98rem] leading-7 text-[#FFF6DF]/58"
                                    >
                                        <span className="mt-2 size-2 shrink-0 rotate-45 border border-[#E8C66A]/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl text-center">
                    <p className="font-serif text-[clamp(1.25rem,2vw,1.7rem)] italic leading-relaxed text-[#FFF6DF]/88">
                        Se você se reconheceu na primeira coluna,{" "}
                        <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text text-transparent">
              sua vaga está esperando por você.
            </span>
                    </p>
                </Reveal>
            </div>
        </section>
    )
}

export function EventOverviewSection() {
    return (
        <section
            id="experiencia"
            className="relative overflow-hidden bg-[#080504] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,198,106,0.1),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(232,198,106,0.08),transparent_34%)]" />

            <div className="relative z-10 mx-auto max-w-[1180px]">
                <Reveal className="mx-auto max-w-4xl text-center">
                    <SectionLabel>Sobre o evento</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.15rem,4vw,4.1rem)] leading-[1.04] tracking-[-0.045em]">
                        Não é apenas um evento. É uma{" "}
                        <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text italic text-transparent">
              experiência
            </span>{" "}
                        que transforma sua relação com dinheiro, negócios e crescimento.
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-[1rem] leading-8 text-[#FFF6DF]/72">
                        O Poder de Construir Riqueza foi criado para mulheres que desejam
                        sair do automático e aprender a construir patrimônio com clareza,
                        inteligência e direcionamento.
                    </p>
                </Reveal>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                        <div className="border border-[#E8C66A]/25 bg-[#0B0705]/70 p-8 backdrop-blur-xl">
                            <p className="mb-7 border-b border-[#E8C66A]/15 pb-5 font-serif text-2xl italic text-[#E8C66A]">
                                Teremos palestras impactantes sobre:
                            </p>

                            <ul className="space-y-4">
                                {eventTopics.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-4 text-[#FFF6DF]/78"
                                    >
                                        <span className="size-2 rotate-45 bg-[#E8C66A]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="border border-[#E8C66A]/25 bg-[#0B0705]/70 p-8 backdrop-blur-xl">
                            <p className="mb-7 border-b border-[#E8C66A]/15 pb-5 font-serif text-2xl italic text-[#E8C66A]">
                                Tudo acompanhado de uma experiência exclusiva:
                            </p>

                            <ul className="space-y-4">
                                {experienceItems.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-4 text-[#FFF6DF]/78"
                                    >
                                        <Sparkles className="size-4 fill-[#E8C66A] text-[#E8C66A]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.15}>
                    <div className="mt-16 grid border border-[#E8C66A]/22 bg-[#050302]/70 md:grid-cols-4">
                        {[
                            ["25+", "Anos de mercado"],
                            ["3", "Mulheres no palco"],
                            ["1", "Experiência memorável"],
                            ["∞", "Conexões reais"],
                        ].map(([number, label]) => (
                            <div
                                key={label}
                                className="border-[#E8C66A]/15 px-6 py-8 text-center md:border-l md:first:border-l-0"
                            >
                                <p className="font-serif text-5xl italic text-[#E8C66A]">
                                    {number}
                                </p>
                                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFF6DF]/52">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export function WhatYouWillLiveSection() {
    return (
        <section
            id="palestrantes"
            className="relative overflow-hidden bg-[#050302] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,198,106,0.1),transparent_32%)]" />

            <div className="relative z-10 mx-auto max-w-[1180px]">
                <Reveal className="max-w-3xl">
                    <SectionLabel>O que você vai viver</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.15rem,4vw,4.1rem)] leading-[1.04] tracking-[-0.045em]">
                        O que{" "}
                        <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text italic text-transparent">
              espera por você
            </span>{" "}
                        nesta tarde.
                    </h2>

                    <p className="mt-7 max-w-2xl text-[1rem] leading-8 text-[#FFF6DF]/72">
                        Palestras transformadoras com temas práticos e estratégicos para
                        mulheres que desejam crescer financeiramente, fortalecer seu
                        posicionamento e construir riqueza de forma inteligente.
                    </p>
                </Reveal>

                <div className="mt-14 grid border border-[#E8C66A]/20 md:grid-cols-2 lg:grid-cols-3">
                    {liveCards.map((card, index) => {
                        const Icon = card.icon

                        return (
                            <Reveal key={card.title} delay={index * 0.035}>
                                <div className="group min-h-[260px] border-[#E8C66A]/15 bg-[#080504]/80 p-7 transition duration-500 hover:bg-[#120B07]/90 md:border-l md:border-t">
                                    <p className="font-serif text-sm italic text-[#E8C66A]/55">
                                        {card.number}
                                    </p>

                                    <Icon className="mt-5 size-9 text-[#E8C66A]" />

                                    <h3 className="mt-6 font-serif text-2xl leading-tight text-[#FFF6DF]">
                                        {card.title}
                                    </h3>

                                    <p className="mt-4 text-[0.95rem] leading-7 text-[#FFF6DF]/62">
                                        {card.text}
                                    </p>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>

                <Reveal className="mx-auto mt-14 max-w-3xl text-center">
                    <p className="font-serif text-[clamp(1.25rem,2vw,1.65rem)] italic leading-relaxed text-[#FFF6DF]/86">
                        Uma experiência criada para mulheres que desejam viver um{" "}
                        <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text text-transparent">
              novo nível financeiro, emocional e profissional.
            </span>
                    </p>

                    <Button
                        asChild
                        className="mt-9 h-14 rounded-none bg-gradient-to-r from-[#FFE58F] via-[#E8C66A] to-[#A27113] px-8 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#120B07] hover:brightness-110"
                    >
                        <Link href="#ingresso">
                            Quero estar nessa experiência
                            <ArrowRight className="size-4" />
                        </Link>
                    </Button>
                </Reveal>
            </div>
        </section>
    )
}