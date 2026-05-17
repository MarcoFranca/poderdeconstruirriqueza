"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Quote, Sparkles } from "lucide-react"
import { motion } from "motion/react"

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

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E8C66A]" />
            <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#E8C66A]">
        {children}
      </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#E8C66A] to-transparent" />
        </div>
    )
}

const claroItems = [
    ["C", "Consciência"],
    ["L", "Liberdade"],
    ["A", "Ação"],
    ["R", "Resultado"],
    ["O", "Organização"],
]

const speakers = [
    {
        name: "Patrícia Pimentell",
        image: "/assets/Patrícia.JPEG",
        role: "Empresária, escritora e estrategista de comunicação e posicionamento.",
        bio: "Presidente mundial das empresas do ecossistema de Pablo Marçal e líder da plataforma global de Israel. Autora de “Do Sertão para o Mundo”, leva ao palco uma história de superação e estratégias sobre comunicação, autoridade e mentalidade de expansão.",
        topic:
            "Como destravar seu potencial e gerar riqueza através de posicionamento e comunicação estratégica.",
    },
    {
        name: "Daniele Rocha",
        image: "/assets/Daniele.JPG.jpeg",
        role: "Empresária, mentora e estrategista de posicionamento e imagem.",
        bio: "Com mais de 10 anos no mercado comercial e atuação no imobiliário de alto padrão, é especialista em autoridade feminina nos negócios.",
        topic:
            "Como sua imagem comunica valor antes da fala — posicionamento e presença para atrair mais e melhores oportunidades.",
    },
]

export function HostSection() {
    return (
        <section
            id="anfitria"
            className="relative overflow-hidden bg-[#050302] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(232,198,106,0.12),transparent_30%),radial-gradient(circle_at_86%_76%,rgba(162,113,19,0.16),transparent_34%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C66A]/30 to-transparent" />

            <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                    <div className="relative mx-auto max-w-[440px] lg:mx-0">
                        <div className="absolute -inset-8 bg-[#E8C66A]/12 blur-3xl" />

                        <div className="relative border border-[#E8C66A]/35 bg-[#090604]/50 p-3 shadow-[0_45px_140px_-75px_rgba(232,198,106,.6)]">
                            <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#E8C66A]/70" />
                            <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-[#E8C66A]/70" />

                            <div className="relative aspect-[4/5] overflow-hidden bg-[#1C1008]">
                                <Image
                                    src="/assets/Karla.JPEG"
                                    alt="Karla Costa"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050302] to-transparent" />
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div>
                    <Reveal>
                        <SectionLabel>A anfitriã</SectionLabel>

                        <h2 className="font-serif text-[clamp(2.4rem,4.4vw,4.6rem)] leading-[1.02] tracking-[-0.045em]">
                            Karla Costa
                        </h2>

                        <p className="mt-3 font-serif text-2xl italic text-[#E8C66A]">
                            Assessora de investimentos, palestrante, mentora e empresária.
                        </p>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="mt-8 max-w-3xl space-y-5 text-[1rem] leading-8 text-[#FFF6DF]/72">
                            <p>
                                Com mais de <strong className="text-[#FFF6DF]">25 anos de experiência</strong> no mercado financeiro, Karla é especialista em construção de patrimônio, planejamento financeiro e estratégias de investimentos.
                            </p>

                            <p>
                                Atua ao lado de empresários e empreendedores na organização da vida financeira e na multiplicação de resultados. Também é empresária no segmento pet e desenvolveu o Método CLARO.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.14}>
                        <div className="mt-8 grid grid-cols-5 gap-2">
                            {claroItems.map(([letter, word]) => (
                                <div
                                    key={letter}
                                    className="border border-[#E8C66A]/22 bg-[#0B0705]/70 px-3 py-5 text-center"
                                >
                                    <p className="font-serif text-4xl font-semibold bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text text-transparent">
                                        {letter}
                                    </p>
                                    <p className="mt-2 text-[0.68rem] text-[#FFF6DF]/58">
                                        {word}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.18}>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Assessora CVM", "Palestrante", "Mentora", "Empresária"].map(
                                (item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center gap-2 border border-[#E8C66A]/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFF6DF]/65"
                                    >
                    <BadgeCheck className="size-3 text-[#E8C66A]" />
                                        {item}
                  </span>
                                )
                            )}
                        </div>
                    </Reveal>

                    <Reveal delay={0.22}>
                        <blockquote className="mt-10 border-l border-[#E8C66A]/70 pl-7">
                            <Quote className="mb-5 size-8 text-[#E8C66A]/70" />
                            <p className="font-serif text-[clamp(1.25rem,2vw,1.7rem)] italic leading-relaxed text-[#FFF6DF]">
                                Prosperidade não acontece por acaso — ela é construída através
                                de conhecimento, posicionamento e decisões inteligentes.
                            </p>
                        </blockquote>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export function SpeakersSection() {
    return (
        <section
            id="palestrantes"
            className="relative overflow-hidden bg-[#080504] px-6 py-28 text-[#FFF6DF] md:px-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,198,106,0.11),transparent_34%)]" />

            <div className="relative z-10 mx-auto max-w-[1180px]">
                <Reveal className="max-w-3xl">
                    <SectionLabel>Mulheres no palco</SectionLabel>

                    <h2 className="font-serif text-[clamp(2.25rem,4.2vw,4.3rem)] leading-[1.04] tracking-[-0.045em]">
                        Mulheres que vão{" "}
                        <span className="bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text italic text-transparent">
              dividir o palco
            </span>{" "}
                        e o conhecimento com você.
                    </h2>
                </Reveal>

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {speakers.map((speaker, index) => (
                        <Reveal key={speaker.name} delay={index * 0.1}>
                            <article className="group h-full border border-[#E8C66A]/24 bg-[#0B0705]/70 p-4 backdrop-blur-xl transition duration-500 hover:border-[#E8C66A]/45">
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#1C1008]">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050302] to-transparent" />

                                    <span className="absolute left-5 top-5 border border-[#E8C66A]/55 bg-[#050302]/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#E8C66A]">
                    Palestrante
                  </span>
                                </div>

                                <div className="px-2 pb-3 pt-8">
                                    <h3 className="font-serif text-4xl leading-tight">
                                        {speaker.name}
                                    </h3>

                                    <p className="mt-3 font-serif text-lg italic leading-relaxed text-[#E8C66A]">
                                        {speaker.role}
                                    </p>

                                    <p className="mt-5 text-[0.98rem] leading-8 text-[#FFF6DF]/68">
                                        {speaker.bio}
                                    </p>

                                    <div className="mt-7 border border-dashed border-[#E8C66A]/25 bg-[#E8C66A]/[0.035] p-5">
                                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E8C66A]">
                                            No palco
                                        </p>

                                        <p className="mt-3 font-serif text-xl italic leading-relaxed text-[#FFF6DF]">
                                            {speaker.topic}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-14 text-center">
                    <Button
                        asChild
                        className="h-14 rounded-none bg-gradient-to-r from-[#FFE58F] via-[#E8C66A] to-[#A27113] px-8 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#120B07] hover:brightness-110"
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