export function PremiumBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#090604]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(232,198,106,0.14),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(162,113,19,0.16),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,6,4,0.18),#090604_92%)]" />
            <div className="absolute inset-0 opacity-[0.045] mix-blend-overlay [background-image:url('/noise.svg')]" />
            <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#E8C66A]/[0.06] blur-3xl" />
        </div>
    )
}