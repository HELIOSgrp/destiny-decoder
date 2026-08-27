import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type LeadContextValue = {
  open: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openForm = useCallback(() => setOpen(true), []);
  const closeForm = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, openForm, closeForm }), [open, openForm, closeForm]);

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLead() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used inside LeadProvider");
  return ctx;
}
