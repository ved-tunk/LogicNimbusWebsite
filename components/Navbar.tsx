"use client";
import Image from "next/image";
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
      <a href="/" className="flex items-center" aria-label="LogicNimbus home">
          <Image src="/logo.png" alt="LogicNimbus" width={1389} height={162} priority className="h-6 w-auto sm:h-7" />
        </a>
      <nav className="flex items-center gap-5 text-[.92rem] font-medium" aria-label="Main">
        {links.map(([l, h]) => <a key={h} href={h} className="hidden text-muted transition hover:text-fg md:block">{l}</a>)}
        <a href="https://tunk.ai/contact-us" target="_blank" rel="noopener noreferrer" className="btn !px-4 !py-1.5 !text-sm">Contact us</a>
      </nav>
      </div>
    </header>
  );
}
