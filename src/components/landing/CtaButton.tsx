import { Sparkles } from "lucide-react";
import { useLead } from "./LeadContext";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

export function CtaButton({ children = "Get My Free Numerology Report", size = "md", className }: Props) {
  const { openForm } = useLead();

  return (
    <button
      type="button"
      onClick={openForm}
      className={cn(
        "btn-hero inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide",
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3.5 text-sm sm:text-base",
        className,
      )}
    >
      <Sparkles className="size-4 shrink-0" aria-hidden="true" />
      {children}
    </button>
  );
}
