"use client";
import { useEffect, useRef, useState } from "react";

const phrases = [
  "Schedule the review with the Nashik team for Thursday at eleven.",
  "Draft a reply thanking them and confirm the new timeline.",
  "Add a note: ship the voice update before the weekend.",
];

export default function Tunk() {
  const bars = useRef<(HTMLElement | null)[]>([]);
  const raf = useRef(0);
  const running = useRef(false);
  const k = useRef(0);
  const [text, setText] = useState("Press the microphone and say something.");
  const [live, setLive] = useState(false);

  const wave = (on: boolean) => {
    cancelAnimationFrame(raf.current);
    const step = (t: number) => {
      bars.current.forEach((b, i) => { if (b) b.style.height = on ? `${10 + Math.abs(Math.sin(t / 160 + i * 0.7) * Math.sin(t / 430 + i)) * 60}px` : "8px"; });
      if (on) raf.current = requestAnimationFrame(step);
    };
    step(performance.now());
  };
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const speak = async () => {
    if (running.current) return;
    running.current = true; setLive(true); wave(true); setText("");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const words = phrases[k.current++ % phrases.length].split(" ");
    let out = "";
    for (const w of words) { out += (out ? " " : "") + w; setText(out); await new Promise((r) => setTimeout(r, reduce ? 20 : 230)); }
    setLive(false); wave(false); running.current = false;
  };

  return (
    <section id="tunk" className="sec">
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2.5 text-sm font-semibold text-dawn">Product by LogicNimbus</p>
          <h2 className="h2">Tunk turns your voice into text.</h2>
          <p className="mb-4 text-muted">Speak naturally and get clean, written words. Tunk is our AI voice to text app, built so you spend less time typing and more time on the work that matters.</p>
          <ul className="mb-6 grid gap-2 text-[.96rem]">
            {["Dictate emails, notes and messages", "Faster than typing, at the pace you think", "Built by the LogicNimbus AI team"].map((t) => (
              <li key={t} className="relative pl-6 before:absolute before:left-0.5 before:top-[.45em] before:h-1.5 before:w-2.5 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-dawn">{t}</li>
            ))}
          </ul>
          <a className="btn" href="https://tunk.ai/" target="_blank" rel="noopener noreferrer">Visit tunk.ai</a>
        </div>
        <div className="rounded-3xl border border-line/20 bg-gradient-to-br from-base2 to-base p-7 text-center shadow-2xl shadow-black/20">
          <div className="flex h-20 items-center justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 28 }, (_, i) => <i key={i} ref={(el) => { bars.current[i] = el; }} className="h-2 w-[5px] rounded-sm bg-gradient-to-b from-volt to-dawn" />)}
          </div>
          <p className="mx-auto my-4 min-h-[70px] font-display text-[1.1rem] font-medium leading-snug" aria-live="polite">{text}</p>
          <button onClick={speak} aria-label="Try the voice to text demo" className={`mx-auto grid h-[58px] w-[58px] place-items-center rounded-full bg-volt transition hover:scale-105 ${live ? "animate-pulse2" : ""}`}>
            <svg viewBox="0 0 24 24" className="w-6 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
          </button>
          <small className="mt-3.5 block text-xs text-muted">Demo animation. No audio is recorded.</small>
        </div>
      </div>
    </section>
  );
}
