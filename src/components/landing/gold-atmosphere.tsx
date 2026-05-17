"use client"

import { motion } from "motion/react"

export function GoldAtmosphere() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#080504]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(214,162,55,0.16),transparent_32%),radial-gradient(circle_at_88%_58%,rgba(232,198,106,0.18),transparent_28%),radial-gradient(circle_at_18%_85%,rgba(162,113,19,0.12),transparent_34%)]" />

            <motion.div
                aria-hidden
                className="absolute -right-32 top-28 h-[780px] w-[520px] rotate-12 rounded-[100%] bg-[linear-gradient(115deg,transparent_0%,rgba(255,231,151,0.03)_22%,rgba(232,198,106,0.34)_48%,rgba(162,113,19,0.08)_62%,transparent_78%)] blur-xl"
                animate={{
                    x: [0, -28, 0],
                    y: [0, 18, 0],
                    rotate: [12, 17, 12],
                    opacity: [0.42, 0.76, 0.42],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                aria-hidden
                className="absolute bottom-[-220px] right-[-80px] h-[520px] w-[900px] -rotate-12 rounded-[100%] bg-[linear-gradient(90deg,transparent,rgba(232,198,106,0.2),rgba(255,246,223,0.05),transparent)] blur-2xl"
                animate={{
                    x: [0, 36, 0],
                    y: [0, -22, 0],
                    opacity: [0.22, 0.52, 0.22],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,5,4,0.35),rgba(8,5,4,0.05)_38%,#080504_100%)]" />
            <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,246,223,0.5)_1px,transparent_1px)] [background-size:3px_3px]" />
        </div>
    )
}