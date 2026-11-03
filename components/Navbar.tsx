"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [["About", "#about"], ["What we do", "#what-we-do"], ["Process", "#process"], ["Tunk", "#tunk"], ["FAQ", "#faq"]];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
    const on = () => setSolid(scrollY > 40);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  const dark = resolvedTheme !== "light";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-3 transition ${solid ? "bg-base/80 backdrop-blur-md" : ""}`}>
      <a href="#top" className="flex items-center gap-2 font-display text-[1.05rem] font-bold" aria-label="LogicNimbus home">
        <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="rgb(var(--volt))" /><path d="M18 42a9 9 0 0 1 2-17.7A12 12 0 0 1 43 27a8 8 0 0 1 1 15z" fill="#fff" /></svg>
        LogicNimbus
      </a>
      <nav className="flex items-center gap-5 text-[.92rem] font-medium" aria-label="Main">
        {links.map(([l, h]) => <a key={h} href={h} className="hidden text-muted transition hover:text-fg md:block">{l}</a>)}
        <button onClick={() => setTheme(dark ? "light" : "dark")} aria-label="Toggle light and dark theme" className="grid h-9 w-9 place-items-center rounded-full border border-line/25 text-fg transition hover:border-volt">
          {mounted && (dark
            ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z" /></svg>)}
        </button>
        <a href="#contact" className="btn !px-4 !py-1.5 !text-sm">Contact us</a>
      </nav>
    </header>
  );
}
