"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { docsUrl, specs, useCases } from "@/lib/content";

const TABS = ["Custom Agent Builder", "Anchor", "Live Web Call", "Run Batches", "Call Analytics", "Integrations"];
const PROMPT = "Answer inbound calls for a dental clinic, book appointments and update the CRM.";
const CHECKS = ["Voice and tone set", "Clinic knowledge connected", "Calendar and CRM tools added", "Agent ready to go live"];
const STEPS = [
  ["Describe", "Explain the agent in plain English. No scripts to write."],
  ["Configure", "ANCHOR sets the voice, prompts, knowledge and call flow."],
  ["Test", "Talk to the agent, listen back, and refine until it sounds right."],
  ["Deploy", "Go live on phone or web with your tools and CRM connected."],
];
const CALL: ["a" | "c", string][] = [
  ["a", "Hello, thanks for calling Sunrise Dental. How can I help?"],
  ["c", "Hi, I would like to book a cleaning for Friday."],
  ["a", "Of course. I have 11:30 or 4:00. Which works better?"],
  ["c", "11:30 please."],
  ["a", "Booked. You will get a confirmation text shortly."],
];
const BATCH: [string, number, string, string][] = [
  ["Appointment reminders", 82, "Running", "bg-soft text-dawn"],
  ["Lead follow-up", 46, "Running", "bg-soft text-dawn"],
  ["Feedback survey", 100, "Done", "bg-emerald-100 text-emerald-800"],
  ["Payment reminders", 6, "Queued", "bg-base2 text-muted"],
];
const SENT: [string, number][] = [["Positive", 68], ["Neutral", 24], ["Negative", 8]];
const OUT: [string, number][] = [["Booked", 55], ["Resolved", 30], ["Callback", 15]];
const INTG: [string, string[]][] = [["Telephony", ["Twilio", "Plivo", "Vonage"]], ["CRM", ["Salesforce", "HubSpot", "Zoho"]], ["AI and voice", ["OpenAI", "Deepgram", "Azure", "ElevenLabs"]]];

const box = "rounded-2xl border border-line/15 bg-base p-4";
const lbl = "mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted";

function Track({ w, on }: { w: number; on: boolean }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-base2">
      <i className="block h-full rounded-full bg-gradient-to-r from-volt to-[#6FD79A] transition-[width] duration-[1600ms] ease-out" style={{ width: on ? `${w}%` : 0 }} />
    </div>
  );
}
function Tick({ on }: { on: boolean }) {
  return (
    <b className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${on ? "border-volt bg-volt" : "border-line/25"}`}>
      {on && <span className="-mt-px block h-1 w-2 -rotate-45 border-b-2 border-l-2 border-white" />}
    </b>
  );
}

export default function Tunk() {
  const [tab, setTab] = useState(2);
  const [auto, setAuto] = useState(true);
  const [typed, setTyped] = useState("");
  const [checks, setChecks] = useState(0);
  const [steps, setSteps] = useState(0);
  const [msgs, setMsgs] = useState(0);
  const [secs, setSecs] = useState(0);
  const [filled, setFilled] = useState(false);
  const reduce = useRef(false);
  const bars = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => { reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches; }, []);

  // run the animation for the active tab
  useEffect(() => {
    let live = true;
    let tick: ReturnType<typeof setInterval> | undefined;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, reduce.current ? 0 : ms));
    setTyped(""); setChecks(0); setSteps(0); setMsgs(0); setSecs(0); setFilled(false);
    (async () => {
      if (tab === 0) {
        for (let i = 1; i <= PROMPT.length; i++) { if (!live) return; setTyped(PROMPT.slice(0, i)); await wait(24); }
        for (let i = 1; i <= CHECKS.length; i++) { await wait(550); if (!live) return; setChecks(i); }
      } else if (tab === 1) {
        for (let i = 1; i <= STEPS.length; i++) { await wait(700); if (!live) return; setSteps(i); }
      } else if (tab === 2) {
        tick = setInterval(() => setSecs((s) => s + 1), 1000);
        for (let i = 1; i <= CALL.length; i++) { await wait(1100); if (!live) return; setMsgs(i); }
        clearInterval(tick);
      } else if (tab === 3 || tab === 4) {
        await wait(300); if (live) setFilled(true);
      }
    })();
    return () => { live = false; clearInterval(tick); };
  }, [tab]);

  // waveform
  useEffect(() => {
    if (tab !== 2) return;
    let raf = 0;
    const f = (t: number) => {
      bars.current.forEach((b, i) => { if (b) b.style.height = `${8 + Math.abs(Math.sin(t / 170 + i * 0.7) * Math.sin(t / 430 + i)) * 70}px`; });
      if (!reduce.current) raf = requestAnimationFrame(f);
    };
    raf = requestAnimationFrame(f);
    return () => cancelAnimationFrame(raf);
  }, [tab]);

  // auto rotate until the visitor takes over
  useEffect(() => {
    if (!auto || reduce.current) return;
    const t = setInterval(() => setTab((x) => (x + 1) % TABS.length), 8500);
    return () => clearInterval(t);
  }, [auto, tab]);

  const panel = (n: number) => `absolute inset-0 p-5 transition duration-500 ${tab === n ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`;

  return (
    <section id="tunk" className="sec bg-base2">
      <div className="wrap">
        <p className="mb-2 text-sm font-semibold text-dawn">Our product</p>
        <h2 className="h2">See Tunk in action.</h2>
        <p className="sub">Pick a feature and watch it work. The preview rotates on its own, or tap a tab to take over.</p>

        <div onPointerEnter={() => setAuto(false)} className="rounded-[28px] bg-base p-[18px] shadow-[0_30px_70px_-30px_rgba(17,24,39,.3)] ring-1 ring-line/10">
          <div className="flex flex-wrap items-center gap-4 px-1.5 pb-3.5">
            <Image
src="/tunk-logo.png"alt="Tunk"width={464}height={128}className="h-8 w-auto"
/>
            <div role="tablist" className="order-3 flex basis-full gap-2 overflow-x-auto p-0.5 [scrollbar-width:none] md:order-none md:flex-1 md:basis-auto">
              {TABS.map((t, i) => (
                <button key={t} role="tab" aria-selected={tab === i} onClick={() => { setAuto(false); setTab(i); }}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${tab === i ? "border-volt bg-volt text-white" : "border-line/15 bg-base hover:border-volt"}`}>{t}</button>
              ))}
            </div>
            <div className="order-2 ml-auto flex items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-sm font-semibold text-red-600 md:order-none md:ml-0">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" /><span className="relative h-2 w-2 rounded-full bg-red-500" /></span>Live Now
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[20px] border border-line/10 bg-base2 md:h-[330px] md:min-h-0">
            {/* 0 builder */}
            <div className={panel(0)} aria-hidden={tab !== 0}>
              <div className="grid h-full gap-4 md:grid-cols-2">
                <div className={box}><div className={lbl}>Describe your agent</div><div className="min-h-[90px]">{typed}{typed && typed.length < PROMPT.length && <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-fg align-text-bottom" />}</div></div>
                <div className={box}><div className={lbl}>Setting up</div>
                  <ul className="grid gap-3">{CHECKS.map((c, i) => <li key={c} className={`flex items-center gap-2.5 transition-opacity duration-500 ${checks > i ? "opacity-100" : "opacity-30"}`}><Tick on={checks > i} />{c}</li>)}</ul></div>
              </div>
            </div>
            {/* 1 anchor */}
            <div className={panel(1)} aria-hidden={tab !== 1}>
              <div className="grid h-full grid-cols-2 content-center gap-3.5 lg:grid-cols-4">
                {STEPS.map(([h, p], i) => (
                  <div key={h} className={`rounded-2xl border-[1.5px] bg-base p-4 transition duration-300 ${steps > i ? "-translate-y-1.5 border-volt shadow-[0_18px_30px_-18px_rgb(var(--volt))]" : "border-line/15"}`}>
                    <b className={`mb-2.5 grid h-7 w-7 place-items-center rounded-full font-display text-sm ${steps > i ? "bg-volt text-white" : "bg-soft text-dawn"}`}>{i + 1}</b>
                    <h4 className="font-display font-bold">{h}</h4><p className="text-[.82rem] leading-snug text-muted">{p}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* 2 call */}
            <div className={panel(2)} aria-hidden={tab !== 2}>
              <div className="grid h-full gap-4 md:grid-cols-[200px_1fr]">
                <div className="flex items-center justify-start gap-3 md:flex-col md:justify-center">
                  <div className="flex h-[90px] items-center gap-[3px]" aria-hidden="true">
                    {Array.from({ length: 22 }, (_, i) => <i key={i} ref={(el) => { bars.current[i] = el; }} className="h-1.5 w-1 rounded-sm bg-gradient-to-b from-volt to-[#6FD79A]" />)}
                  </div>
                  <div className="font-display text-xl font-bold tabular-nums">00:{String(secs).padStart(2, "0")}</div>
                </div>
                <div className="flex flex-col justify-end gap-2.5 overflow-hidden" aria-live="polite">
                  {CALL.slice(0, msgs).map(([k, t], i) => (
                    <div key={i} className={`max-w-[86%] animate-pop rounded-2xl px-3.5 py-2.5 text-[.92rem] ${k === "a" ? "self-start rounded-bl border border-line/10 bg-base" : "self-end rounded-br bg-volt text-white"}`}>
                      <small className="mb-0.5 block text-[.7rem] font-semibold uppercase tracking-wider opacity-70">{k === "a" ? "Agent" : "Caller"}</small>{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* 3 batches */}
            <div className={panel(3)} aria-hidden={tab !== 3}>
              <div className="grid h-full content-center gap-3">
                {BATCH.map(([n, w, s, cls]) => (
                  <div key={n} className="grid grid-cols-[1fr_72px] items-center gap-3.5 rounded-2xl border border-line/15 bg-base px-4 py-3.5 text-[.92rem] md:grid-cols-[170px_1fr_80px]">
                    <span>{n}</span><div className="order-3 col-span-2 md:order-none md:col-span-1"><Track w={w} on={filled && tab === 3} /></div>
                    <span className={`rounded-full px-2.5 py-0.5 text-center text-xs font-semibold ${cls}`}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* 4 analytics */}
            <div className={panel(4)} aria-hidden={tab !== 4}>
              <div className="grid h-full gap-4 md:grid-cols-2">
                {[["Sentiment", SENT], ["Call outcome", OUT]].map(([title, rows]) => (
                  <div key={title as string} className={box}><div className={lbl}>{title as string}</div>
                    {(rows as [string, number][]).map(([n, w]) => (
                      <div key={n} className="mb-3 grid grid-cols-[90px_1fr_36px] items-center gap-2.5 text-sm"><span>{n}</span><Track w={w} on={filled && tab === 4} /><span>{w}%</span></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* 5 integrations */}
            <div className={panel(5)} aria-hidden={tab !== 5}>
              <div className="grid h-full content-center gap-3.5">
                {INTG.map(([g, items]) => (
                  <div key={g} className="flex flex-wrap items-center gap-3">
                    <span className="w-24 text-xs font-semibold uppercase tracking-wider text-muted">{g}</span>
                    {items.map((p, i) => <span key={p} style={{ animationDelay: `${i * 90}ms` }} className={`scale-90 rounded-full border border-line/15 bg-base px-4 py-2 text-[.92rem] font-medium ${tab === 5 ? "animate-pillin" : "opacity-0"}`}>{p}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-end gap-5 px-1.5 pb-2.5 pt-5 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="mb-2 max-w-[20ch] font-display text-xl font-bold leading-tight">Tunk: voice AI agents that answer, call and act.</h3>
              <p className="max-w-[70ch] text-[.96rem] text-muted">Tunk gives businesses voice AI agents for inbound customer support and outbound sales calling, backed by real-time speech to text. Describe an agent in plain English and ANCHOR, Tunk&apos;s agent builder, sets up the voice, prompts, knowledge and call flow for you.</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a className="btn" href="https://tunk.ai/book-demo" target="_blank" rel="noopener noreferrer">Book a demo</a>
              <a className="btn btn-ghost" href={docsUrl} target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>

          <div className="mx-1.5 mt-3.5 grid grid-cols-2 overflow-hidden rounded-2xl border border-line/15 md:grid-cols-5">
            {specs.map(([h, v], i) => (
              <div key={h} className={`border-b border-r border-line/15 p-4 text-center last:border-r-0 md:border-b-0 ${i === specs.length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
                <b className="mb-1 block font-display text-[.9rem]">{h}</b><span className="text-sm text-muted">{v}</span>
              </div>
            ))}
          </div>

          <div className="px-1.5 pb-1.5 pt-5">
            <h4 className="mb-2.5 font-display font-bold">Use cases</h4>
            <div className="flex flex-wrap gap-2">
              {useCases.map((u) => <span key={u} className="rounded-full bg-soft px-4 py-1.5 text-[.9rem] font-medium text-dawn transition hover:bg-volt hover:text-white">{u}</span>)}
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-muted">Interactive preview with sample data, for illustration only.</p>
      </div>
    </section>
  );
}
