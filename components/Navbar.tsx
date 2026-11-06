"use client";
import { useEffect, useState } from "react";

const links = [["About", "/#about"], ["What we do", "/#what-we-do"], ["Process", "/#process"], ["Tunk", "/#tunk"], ["FAQ", "/#faq"]];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(scrollY > 40);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid ? "bg-base/80 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
      <a href="/" className="flex items-center gap-2 font-display text-[1.05rem] font-bold" aria-label="LogicNimbus home">
        <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="16" fill="rgb(var(--volt))" /><path d="M18 42a9 9 0 0 1 2-17.7A12 12 0 0 1 43 27a8 8 0 0 1 1 15z" fill="#fff" /></svg>
        LogicNimbus
      </a>
      <nav className="flex items-center gap-5 text-[.92rem] font-medium" aria-label="Main">
        {links.map(([l, h]) => <a key={h} href={h} className="hidden text-muted transition hover:text-fg md:block">{l}</a>)}
        <a href="/#contact" className="btn !px-4 !py-1.5 !text-sm">Contact us</a>
      </nav>
      </div>
    </header>
  );
}
