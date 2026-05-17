import { HeroSection } from "@/components/landing/hero-section"
import { SiteHeader } from "@/components/landing/site-header"
import {
    AudienceSection,
    EventOverviewSection,
    WhatYouWillLiveSection,
} from "@/components/landing/next-sections"

import {
    HostSection,
    SpeakersSection,
} from "@/components/landing/authority-sections"

import {
    FaqSection,
    FinalCtaSection,
    LocationSection,
    PricingSection,
    SiteFooter,
} from "@/components/landing/conversion-sections"

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#050302]">
            <SiteHeader />
            <HeroSection />
            <AudienceSection />
            <EventOverviewSection />
            <WhatYouWillLiveSection />
            <HostSection />
            <SpeakersSection />
            <LocationSection />
            <PricingSection />
            <FaqSection />
            <FinalCtaSection />
            <SiteFooter />
        </main>
    )
}