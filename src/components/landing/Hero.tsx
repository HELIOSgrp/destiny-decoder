import heroCosmos from "@/assets/hero-cosmos.jpg";
import { CtaButton } from "./CtaButton";

const highlights = ["100% Personalized", "Instant Guidance", "Numerology + Name Vibrations", "Practical Remedies"];

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <img
        src={heroCosmos}
        alt="Golden sacred geometry and numerology numbers glowing over a purple cosmic nebula"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="bg-hero-glow absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.22em] text-accent uppercase backdrop-blur">
          Vedic Numerology · Since 2011
        </span>

        <h1
          id="hero-heading"
          className="animate-fade-up mt-6 text-3xl leading-[1.15] font-bold text-balance sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Unlock Your Destiny with a <span className="text-gold">FREE</span> Personalised Numerology Report
        </h1>

        <p
          className="animate-fade-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Understand your Career, Money, Relationships &amp; Life Path — using your Name and Birth Date.
        </p>

        <ul
          className="animate-fade-up mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
          style={{ animationDelay: "240ms" }}
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-medium text-foreground/90 backdrop-blur sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="animate-fade-up mt-10 flex flex-col items-center gap-3" style={{ animationDelay: "320ms" }}>
          <CtaButton size="lg" />
          <p className="text-xs text-muted-foreground">No payment. No spam. Delivered within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
