"use client"

import Image from "next/image"
import Link from "next/link"
import {
    ArrowRight,
    CalendarDays,
    ChevronDown,
    Clock,
    MapPin,
    Sparkles,
} from "lucide-react"

import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const eventDetails = [
    {
        icon: CalendarDays,
        label: "26 de Junho",
        detail: "Sexta-feira",
    },
    {
        icon: Clock,
        label: "17h",
        detail: "Início do evento",
    },
    {
        icon: MapPin,
        label: "MAC Niterói",
        detail: "Rio de Janeiro — RJ",
    },
]

const goldParticles = [
    { left: "12%", top: "24%", size: 2, opacity: 0.45, duration: 7 },
    { left: "18%", top: "72%", size: 3, opacity: 0.35, duration: 9 },
    { left: "28%", top: "18%", size: 2, opacity: 0.4, duration: 8 },
    { left: "37%", top: "66%", size: 2, opacity: 0.3, duration: 10 },
    { left: "46%", top: "32%", size: 3, opacity: 0.45, duration: 6 },
    { left: "52%", top: "78%", size: 2, opacity: 0.38, duration: 11 },
    { left: "61%", top: "22%", size: 2, opacity: 0.42, duration: 8 },
    { left: "69%", top: "58%", size: 3, opacity: 0.5, duration: 7 },
    { left: "76%", top: "36%", size: 2, opacity: 0.38, duration: 10 },
    { left: "83%", top: "18%", size: 3, opacity: 0.5, duration: 6 },
    { left: "88%", top: "70%", size: 2, opacity: 0.42, duration: 9 },
    { left: "94%", top: "44%", size: 3, opacity: 0.5, duration: 8 },
]

export function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden bg-[#050302] px-6 pt-28 pb-16 text-[#FFF6DF] md:px-8 lg:pt-32"
        >
            {/* BACKGROUND */}
            <Image
                src="/assets/gold-luxury-bg.png"
                alt=""
                fill
                priority
                className="pointer-events-none select-none object-cover object-center opacity-75"
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_42%,rgba(5,3,2,0.18),rgba(5,3,2,0.72)_48%,rgba(5,3,2,0.92)_100%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,3,2,0.32),rgba(5,3,2,0.04)_48%,rgba(5,3,2,0.2))]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,3,2,0.45),transparent_28%,rgba(5,3,2,0.72)_100%)]" />

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,246,223,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,246,223,.18)_1px,transparent_1px)] [background-size:32px_32px]" />

            {/* PARTICLES */}
            <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
                {goldParticles.map((particle, index) => (
                    <motion.span
                        key={index}
                        className="absolute rounded-full bg-[#E8C66A] shadow-[0_0_18px_rgba(232,198,106,0.85)]"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -18, 0],
                            x: [0, 6, 0],
                            opacity: [
                                particle.opacity * 0.5,
                                particle.opacity,
                                particle.opacity * 0.5,
                            ],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* GOLD GLOW */}
            <motion.div
                className="pointer-events-none absolute bottom-[-12%] right-[-6%] z-[1] h-[520px] w-[760px] rounded-full bg-[#E8C66A]/10 blur-3xl"
                animate={{
                    opacity: [0.12, 0.2, 0.12],
                    scale: [1, 1.06, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="pointer-events-none absolute right-[4%] top-[18%] z-[1] h-[460px] w-[300px] rotate-12 rounded-full bg-[linear-gradient(115deg,transparent,rgba(232,198,106,0.24),transparent)] blur-2xl"
                animate={{
                    x: [0, 18, 0],
                    y: [0, -12, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* SIDE LINE */}
            <div className="absolute left-16 top-[30%] z-[2] hidden h-[420px] w-px bg-gradient-to-b from-transparent via-[#E8C66A]/40 to-transparent xl:block" />

            {/* SIDE TEXT */}
            <div className="absolute left-16 top-[55%] z-[2] hidden origin-left -rotate-90 items-center gap-6 xl:flex">
                <span className="h-px w-14 bg-[#E8C66A]/50" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-[#E8C66A]">
          26 de Junho · MAC Niterói
        </span>

                <span className="h-px w-14 bg-[#E8C66A]/50" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[1fr_.95fr]">
                {/* LEFT */}
                <div className="flex min-h-[720px] max-w-[700px] flex-col justify-center pt-8 lg:pt-0">
                    {/* LABEL */}
                    <div className="mb-7 flex items-center gap-4">
                        <Sparkles className="size-3.5 fill-[#E8C66A] text-[#E8C66A]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#E8C66A]">
              O Poder de Construir Riqueza · MAC Niterói
            </span>

                        <span className="hidden h-px flex-1 bg-gradient-to-r from-[#E8C66A]/70 to-transparent md:block" />
                    </div>

                    {/* TITLE */}
                    <h1 className="font-serif text-[clamp(2.65rem,4.05vw,4.85rem)] font-medium leading-[0.99] tracking-[-0.052em] text-[#FFF8E8]">
                        Construa riqueza,
                        <br />
                        posicione seu valor e{" "}
                        <span className="block bg-gradient-to-r from-[#FFF0B7] via-[#E8C66A] to-[#A27113] bg-clip-text font-normal italic text-transparent">
              viva o próximo nível
              <br />
              da sua história.
            </span>
                    </h1>

                    {/* DIVIDER */}
                    <div className="mt-7 flex items-center gap-5">
                        <span className="h-px w-12 bg-[#E8C66A]/70" />
                        <Sparkles className="size-3 fill-[#E8C66A] text-[#E8C66A]" />
                    </div>

                    {/* TEXT */}
                    <div className="mt-7 max-w-[620px] space-y-4 text-[0.98rem] leading-7 text-[#FFF6DF]/74">
                        <p>
                            Uma tarde transformadora com conteúdo, networking,
                            posicionamento e educação financeira em um dos cenários mais
                            deslumbrantes do Rio de Janeiro.
                        </p>

                        <p>
                            Você viverá uma experiência sofisticada, cercada de mulheres
                            empreendedoras, negócios, conexões e estratégias para crescimento
                            pessoal e financeiro.
                        </p>
                    </div>

                    {/* INFO */}
                    <div className="mt-8 grid max-w-2xl border border-[#E8C66A]/25 bg-[#050302]/45 backdrop-blur-md md:grid-cols-3">
                        {eventDetails.map((item) => {
                            const Icon = item.icon

                            return (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-4 border-[#E8C66A]/18 px-5 py-4 md:border-l md:first:border-l-0"
                                >
                                    <Icon className="size-5 text-[#E8C66A]" />

                                    <div>
                                        <p className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#FFF6DF]">
                                            {item.label}
                                        </p>

                                        <p className="mt-1 text-[0.72rem] text-[#FFF6DF]/55">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                        <Button
                            asChild
                            className="group h-14 rounded-none bg-gradient-to-r from-[#FFE58F] via-[#E8C66A] to-[#A27113] px-8 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#120B07] shadow-[0_24px_80px_-30px_rgba(232,198,106,.95)] hover:brightness-110"
                        >
                            <Link href="#ingresso">
                                Quero estar nessa experiência

                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <div className="flex items-start gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#E8C66A]">
                            <Sparkles className="mt-0.5 size-3 fill-[#E8C66A]" />

                            <span>
                Vagas limitadas

                <span className="mt-1 block normal-case tracking-normal text-[#FFF6DF]/58">
                  Experiência exclusiva e intimista
                </span>
              </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-8">
                    <div className="absolute -inset-10 bg-[#E8C66A]/14 blur-3xl" />

                    <div className="relative border border-[#E8C66A]/42 bg-[#090604]/45 p-4 shadow-[0_45px_160px_-70px_rgba(232,198,106,.55)]">
                        {/* CORNERS */}
                        <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#E8C66A]/80" />

                        <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-[#E8C66A]/80" />

                        {/* IMAGE */}
                        <div className="relative aspect-[0.82] overflow-hidden bg-[#1C1008]">
                            <Image
                                src="/assets/Karla.JPEG"
                                alt="Karla Costa"
                                fill
                                priority
                                className="object-cover object-center"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_38%,rgba(5,3,2,0.16)_68%,rgba(5,3,2,0.62)_100%)]" />

                            {/* BOTTOM FADE */}
                            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050302] to-transparent" />
                        </div>

                        {/* NAME */}
                        <div className="absolute -bottom-7 left-8 border border-[#E8C66A]/35 bg-[#050302]/82 px-7 py-4 backdrop-blur-xl">
                            <p className="text-[9px] font-black uppercase tracking-[0.34em] text-[#E8C66A]/80">
                                Anfitriã
                            </p>

                            <p className="mt-1 font-serif text-2xl italic text-[#FFF6DF]">
                                Karla Costa
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLL */}
            <Link
                href="#evento"
                className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.34em] text-[#FFF6DF]/70 lg:flex"
            >
                <ChevronDown className="size-5 text-[#E8C66A]" />

                <span>Descubra mais</span>

                <span className="h-10 w-px bg-gradient-to-b from-[#E8C66A] to-transparent" />
            </Link>
        </section>
    )
}