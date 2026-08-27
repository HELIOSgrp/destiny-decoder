import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { LeadProvider } from "@/components/landing/LeadContext";
import { LeadDialog } from "@/components/landing/LeadDialog";
import { CtaButton } from "@/components/landing/CtaButton";
import { Hero } from "@/components/landing/Hero";
import {
  PainSection,
  ReportSection,
  HowItWorksSection,
  AboutSection,
  TestimonialsSection,
  ServicesSection,
  FinalCtaSection,
} from "@/components/landing/Sections";
import { SiteFooter } from "@/components/landing/SiteFooter";

const title = "Free Numerology Report — Life Path, Career & Money Insights";
const description =
  "Get a free personalised numerology report from expert Vivek Mishra. Decode your Life Path, Destiny and Soul Urge numbers for career, money and relationship clarity.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Vivek Mishra Numerology",
          description,
          serviceType: "Numerology consultation",
          areaServed: "Worldwide",
          provider: {
            "@type": "Person",
            name: "Vivek Mishra",
            jobTitle: "Numerology Expert",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1240",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LeadProvider>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
            <a href="#hero-heading" className="font-display text-sm font-semibold sm:text-base">
              Vivek Mishra <span className="text-accent">Numerology</span>
            </a>
            <nav aria-label="Primary" className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a href="#free-report" className="hover:text-foreground">
                Free Report
              </a>
              <a href="#how-it-works" className="hover:text-foreground">
                How It Works
              </a>
              <a href="#about" className="hover:text-foreground">
                About
              </a>
              <a href="#services" className="hover:text-foreground">
                Services
              </a>
            </nav>
            <CtaButton className="hidden sm:inline-flex">Free Report</CtaButton>
          </div>
        </header>

        <main>
          <Hero />
          <PainSection />
          <ReportSection />
          <HowItWorksSection />
          <AboutSection />
          <TestimonialsSection />
          <ServicesSection />
          <FinalCtaSection />
        </main>

        <SiteFooter />

        <div className="sticky bottom-0 z-40 border-t border-border bg-background/90 px-4 py-3 backdrop-blur sm:hidden">
          <CtaButton className="w-full" />
        </div>

        <LeadDialog />
        <Toaster />
      </div>
    </LeadProvider>
  );
}
