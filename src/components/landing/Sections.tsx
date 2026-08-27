import {
  Briefcase,
  Compass,
  HeartHandshake,
  Coins,
  Brain,
  Hash,
  Sparkle,
  Star,
  Quote,
} from "lucide-react";
import expertPhoto from "@/assets/expert-vivek.jpg";
import { CtaButton } from "./CtaButton";

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-accent uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-2xl leading-tight font-bold text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</p>}
    </div>
  );
}

const painPoints = [
  { icon: Briefcase, title: "Career confusion", text: "Wrong job, wrong timing, stuck growth — your numbers show where you naturally win." },
  { icon: Compass, title: "No life direction", text: "Your Life Path number explains the road you were built to walk on." },
  { icon: HeartHandshake, title: "Relationship friction", text: "Compatibility of numbers explains repeated patterns in love and family." },
  { icon: Coins, title: "Blocked money flow", text: "Destiny and name vibrations often leak wealth silently. It can be corrected." },
  { icon: Brain, title: "Mental unrest", text: "Soul Urge reveals the inner need you keep ignoring — the root of restlessness." },
  { icon: Hash, title: "Bad decisions", text: "Personal year cycles tell you when to act and when to wait." },
];

export function PainSection() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-20 sm:py-24" aria-labelledby="why-heading">
      <SectionHeading eyebrow="Why you need this" title="Clarity Chahiye? Answers Chahiye? Your Numbers Can Guide You.">
        People struggle with confusion in career, relationships, money flow, mental peace, decisions and life direction.
        Your personal numbers — Life Path, Destiny and Soul Urge — reveal your blueprint and give you real clarity.
      </SectionHeading>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {painPoints.map(({ icon: Icon, title, text }) => (
          <li key={title} className="card-mystic rounded-2xl p-6">
            <Icon className="size-6 text-primary-glow" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <CtaButton>Show Me My Numbers</CtaButton>
      </div>
    </section>
  );
}

const reportItems = [
  "Life Path Number",
  "Destiny Number",
  "Personality Number",
  "Soul Urge Number",
  "Lucky Numbers & Colors",
  "Strengths & Weaknesses",
  "Career & Money Guidance",
  "Relationship Insights",
  "12-Month Prediction",
  "Personalized Remedies",
];

export function ReportSection() {
  return (
    <section
      id="free-report"
      className="border-y border-border bg-card/30 px-5 py-20 sm:py-24"
      aria-labelledby="report-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Inside the report" title="Your Free Report Includes 10 Powerful Insights">
          Hand-prepared from your name and date of birth — not a template, not an auto-generated PDF.
        </SectionHeading>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {reportItems.map((item, index) => (
            <li key={item} className="card-mystic flex items-center gap-4 rounded-xl px-5 py-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border font-display text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold sm:text-base">{item}</h3>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Every letter carries a vibration", text: "Each alphabet maps to a number. Your name is therefore a repeating frequency that people, luck and money respond to." },
  { title: "Your birth date fixes your blueprint", text: "The date you arrived gives your Life Path — your core temperament, lessons and natural strengths." },
  { title: "Numbers move in cycles", text: "Personal years and months repeat in a 9-year rhythm, which is why some phases feel effortless and others feel heavy." },
  { title: "Alignment changes outcomes", text: "When your name vibration supports your blueprint, decisions get easier, delays reduce and opportunities repeat." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-20 sm:py-24" aria-labelledby="how-heading">
      <SectionHeading eyebrow="The science of vibration" title="How Numerology Actually Works" />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="card-mystic rounded-2xl p-6">
            <span className="font-display text-3xl text-primary-glow">{index + 1}</span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const trustPoints = [
  "14+ years of practice in Vedic numerology & name vibration analysis",
  "12,000+ personal charts read for clients across India, UAE and the US",
  "Specialised in name correction, business naming and compatibility",
  "Practical, remedy-first guidance — no fear, no superstition",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-border bg-card/30 px-5 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="bg-hero-glow absolute -inset-6 rounded-[2rem]" aria-hidden="true" />
          <img
            src={expertPhoto}
            alt="Vivek Mishra, numerology expert, seated with a numerology chart"
            width={912}
            height={1104}
            loading="lazy"
            className="relative w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div>
          <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-accent uppercase">Your guide</span>
          <h2 id="about-heading" className="mt-3 text-2xl leading-tight font-bold sm:text-4xl">
            Meet Your Numerology Expert — Vivek Mishra
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            I read numbers the practical way. For over fourteen years I have helped professionals, founders and families
            decode their Life Path, correct weak name vibrations and time their big decisions. Every report you receive
            from me is calculated by hand and explained in plain language — what your numbers say, and exactly what to do
            about it.
          </p>
          <ul className="mt-6 space-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-foreground/90">
                <Sparkle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton>Get My Reading From Vivek</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Ananya Sharma", role: "Marketing Manager, Pune", text: "My Life Path number explained exactly why corporate roles drained me. I shifted to a client-facing role and my income grew 40% in a year.", help: "Career clarity" },
  { name: "Rahul Verma", role: "Founder, Bengaluru", text: "Vivek corrected the spelling of my business name. Within four months the enquiries stopped feeling random and started converting.", help: "Business name correction" },
  { name: "Sneha & Karan", role: "Married couple, Delhi", text: "The compatibility section put words to the same fight we had for years. The remedies were simple and they genuinely calmed things down.", help: "Relationship insight" },
  { name: "Meera Iyer", role: "Doctor, Chennai", text: "The 12-month prediction told me to wait before switching cities. Three months later a much better offer arrived, exactly as indicated.", help: "Timing decisions" },
  { name: "Aditya Nair", role: "CA, Mumbai", text: "I was sceptical. The free report was surprisingly specific about my strengths and my money leaks. I upgraded to the detailed report the same week.", help: "Financial insight" },
  { name: "Pooja Gupta", role: "Designer, Indore", text: "The lucky colours and numbers sound small, but using them in daily choices made me feel steady and more confident.", help: "Practical remedies" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 sm:py-24" aria-labelledby="testimonials-heading">
      <SectionHeading eyebrow="Real results" title="What People Say After Their Report" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="card-mystic flex h-full flex-col rounded-2xl p-6">
            <Quote className="size-5 text-primary-glow" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">“{item.text}”</blockquote>
            <div className="mt-5 flex items-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-3.5 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <figcaption className="mt-3 border-t border-border pt-3">
              <span className="block text-sm font-semibold">{item.name}</span>
              <span className="block text-xs text-muted-foreground">{item.role}</span>
              <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 text-[0.68rem] text-accent">
                {item.help}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const services = [
  { title: "Name Correction", text: "Fine-tune your spelling so your name vibration supports your Life Path.", price: "From ₹4,999" },
  { title: "Business Name Analysis", text: "Name, brand and launch-date alignment for founders and new ventures.", price: "From ₹7,999" },
  { title: "Compatibility Report", text: "Marriage and partnership compatibility with remedies for friction points.", price: "From ₹5,499" },
  { title: "Detailed Life Report", text: "40+ page blueprint with a 3-year forecast and month-wise action plan.", price: "From ₹9,999" },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-border bg-card/30 px-5 py-20 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Go deeper" title="Premium Services After Your Free Report">
          Start free. If the insights land, these are the deeper consultations clients usually take next.
        </SectionHeading>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="card-mystic flex h-full flex-col rounded-2xl p-6">
              <h3 className="text-base font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              <span className="mt-4 font-display text-sm text-accent">{service.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24 text-center sm:py-32" aria-labelledby="final-cta-heading">
      <div className="bg-hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <h2 id="final-cta-heading" className="text-2xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl">
          Take the First Step Toward a Better, Clearer &amp; Happier Life.
        </h2>
        <p className="mt-5 text-sm text-muted-foreground sm:text-base">
          One form. Zero cost. Your personalised numerology report reaches you within 24 hours.
        </p>
        <div className="mt-9">
          <CtaButton size="lg" />
        </div>
      </div>
    </section>
  );
}
