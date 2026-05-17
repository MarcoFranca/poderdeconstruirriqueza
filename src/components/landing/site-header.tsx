import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
    { label: "O Evento", href: "#evento" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Palestrantes", href: "#palestrantes" },
    { label: "Local", href: "#local" },
    { label: "Ingresso", href: "#ingresso" },
    { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8C66A]/10 bg-[#050302]/55 px-6 py-5 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between">
                <Link href="#hero">
                    <Image
                        src="/assets/logo.png"
                        alt="Karla Costa"
                        width={76}
                        height={76}
                        className="h-14 w-auto"
                        priority
                    />
                </Link>

                <nav className="hidden items-center gap-12 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#FFF6DF]/78 transition hover:text-[#E8C66A]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Button
                    asChild
                    variant="outline"
                    className="hidden h-14 rounded-none border-[#E8C66A]/35 bg-[#090604]/40 px-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#E8C66A] hover:bg-[#E8C66A] hover:text-[#120B07] md:inline-flex"
                >
                    <Link href="#ingresso">
                        Quero garantir meu lugar
                        <Sparkles className="size-3 fill-current" />
                    </Link>
                </Button>
            </div>
        </header>
    )
}