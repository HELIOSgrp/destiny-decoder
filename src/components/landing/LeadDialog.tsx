import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Sparkles, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLead } from "./LeadContext";

export const WHY_OPTIONS = [
  "I want clarity about my career",
  "I am confused about my life direction",
  "I want to improve my relationship",
  "I want financial growth insight",
  "I want to check my name vibration score",
  "I want my life path number analysis",
  "Just curious about my numerology",
];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone can contain only digits and + - ( )"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  why: z.string().refine((v) => WHY_OPTIONS.includes(v), "Please select a reason"),
  colorCode: z.string().regex(/^#[0-9a-fA-F]{6}$/, "Pick a valid color"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

const fieldClass =
  "h-12 rounded-xl border-border bg-input/70 text-foreground placeholder:text-muted-foreground focus-visible:ring-ring";

export function LeadDialog() {
  const { open, closeForm } = useLead();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [color, setColor] = useState("#4B2E83");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = leadSchema.safeParse({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      why: String(data.get("why") ?? ""),
      colorCode: String(data.get("colorCode") ?? ""),
    });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setColor("#4B2E83");
      closeForm();
      toast.success("Your free report request is confirmed", {
        description: `Thank you ${parsed.data.name.split(" ")[0]} — your personalised numerology report will reach you within 24 hours.`,
      });
    }, 700);
  }

  return (
    <Dialog open={open} onOpenChange={(next) => (next ? null : closeForm())}>
      <DialogContent className="max-h-[92dvh] w-[calc(100vw-1.5rem)] overflow-y-auto rounded-2xl border-border bg-popover p-0 sm:max-w-lg">
        <div className="bg-hero-glow animate-pop-in px-5 py-6 sm:px-8 sm:py-8">
          <DialogHeader className="space-y-2 text-left">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary/70 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-accent uppercase">
              Free Report
            </span>
            <DialogTitle className="text-2xl leading-snug sm:text-3xl">
              Claim Your Free Numerology Report
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Fill in your details — your personalised insights are prepared manually and delivered within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lead-name">Name</Label>
              <Input id="lead-name" name="name" autoComplete="name" maxLength={80} placeholder="Your full name" className={fieldClass} />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="lead-phone">Phone No.</Label>
                <Input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} placeholder="+91 98765 43210" className={fieldClass} />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lead-email">Email</Label>
                <Input id="lead-email" name="email" type="email" autoComplete="email" maxLength={255} placeholder="you@email.com" className={fieldClass} />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-why">Why do you want this report?</Label>
              <select
                id="lead-why"
                name="why"
                defaultValue=""
                className="h-12 w-full rounded-xl border border-border bg-input/70 px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Select a reason
                </option>
                {WHY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.why && <p className="text-xs text-destructive">{errors.why}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lead-color">Select Color Code</Label>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-input/70 p-2.5">
                <input
                  id="lead-color"
                  name="colorCode"
                  type="color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                  aria-label="Select your preferred color code"
                  className="size-10 cursor-pointer rounded-lg border border-border bg-transparent"
                />
                <span className="font-mono text-sm text-muted-foreground uppercase">{color}</span>
              </div>
              {errors.colorCode && <p className="text-xs text-destructive">{errors.colorCode}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-hero inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold disabled:opacity-70"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              {submitting ? "Sending your request…" : "Get My Free Numerology Report"}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-accent" aria-hidden="true" />
              100% private. No spam, ever.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
