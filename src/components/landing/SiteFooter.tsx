import { Mail, Phone, Instagram, Youtube, Facebook } from "lucide-react";

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 px-5 py-14" aria-labelledby="footer-heading">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h2 id="footer-heading" className="font-display text-lg">
            Vivek Mishra Numerology
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Free personalised numerology reports, name correction and life path guidance for career, money and
            relationships — rooted in Vedic numerology and name vibration analysis.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 hover:text-accent">
                <Phone className="size-4" aria-hidden="true" /> +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:hello@vivekmishranumerology.com" className="inline-flex items-center gap-2 hover:text-accent">
                <Mail className="size-4" aria-hidden="true" /> hello@vivekmishranumerology.com
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-ring hover:text-accent"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#free-report" className="hover:text-accent">
                Free Numerology Report
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-accent">
                How Numerology Works
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Premium Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-accent">
                Client Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
        <p>
          <strong className="text-foreground/80">Disclaimer:</strong> Numerology guidance is intended for self-reflection
          and personal growth. It is not a substitute for medical, legal or financial advice. Results vary from person to
          person.
        </p>
        <p className="mt-3">Terms of Service · Privacy Policy · Refund Policy</p>
        <p className="mt-3">© {new Date().getFullYear()} Vivek Mishra Numerology. All rights reserved.</p>
      </div>
    </footer>
  );
}
