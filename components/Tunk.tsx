"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { tunkFeatures, tunkSteps } from "@/lib/content";

const PROMPT = "Answer inbound calls for a dental clinic, book appointments and update the CRM.";
const CHECKS = ["Voice and tone set", "Clinic knowledge connected", "Calendar and CRM tools added", "Agent ready to go live"];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Tunk() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(0);
  const [busy, setBusy] = useState(false);
  const run = useRef(0);
  useEffect(() => () => { run.current++; }, []);

  const build = async () => {
    if (busy) return;
    const id = ++run.current;
    const fast = matchMedia("(prefers-reduced-motion: reduce)").matches;
    setBusy(true); setTyped(""); setDone(0);
    for (let i = 1; i <= PROMPT.length; i++) { if (run.current !== id) return; setTyped(PROMPT.slice(0, i)); await sleep(fast ? 0 : 22); }
    for (let i = 1; i <= CHECKS.length; i++) { await sleep(fast ? 0 : 550); if (run.current !== id) return; setDone(i); }
    setBusy(false);
  };

  return (
    <section id="tunk" className="sec">
      <div className="wrap">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2.5 text-sm font-semibold text-dawn">Our product</p>
            <h2 className="h2">Tunk: voice AI agents that answer, call and act.</h2>
            <p className="mb-5 text-muted">Tunk gives businesses voice AI agents for inbound customer support and outbound sales calling, backed by real-time speech to text. Describe an agent in plain English and ANCHOR, Tunk&apos;s agent builder, sets up the voice, prompts, knowledge and call flow for you.</p>
            <ol className="mb-6 grid gap-2 text-[.96rem]">
              {tunkSteps.map((t, i) => (
                <li key={t} className="flex items-center gap-3"><b className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-volt font-display text-xs text-white">{i + 1}</b>{t}</li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-3">
              <a className="btn" href="https://tunk.ai/book-demo" target="_blank" rel="noopener noreferrer">Book a demo</a>
              <a className="btn btn-ghost" href="https://tunk.ai/" target="_blank" rel="noopener noreferrer">Visit tunk.ai</a>
            </div>
          </div>

          <div className="rounded-3xl border border-line/20 bg-gradient-to-br from-base2 to-base p-6 shadow-2xl shadow-black/20">
            <div className="mb-4 flex items-center justify-between text-sm text-muted">
              <span className="font-display font-semibold text-fg">ANCHOR · Agent builder</span>
              <span className="flex items-center gap-1.5"><i className={`h-2 w-2 rounded-full ${done === CHECKS.length ? "bg-dawn" : "bg-muted/50"}`} />{done === CHECKS.length ? "Agent active" : "Draft"}</span>
            </div>
            <div className="min-h-[88px] rounded-xl border border-line/20 bg-base p-3.5 text-[.96rem]" aria-live="polite">
              {typed ? <>{typed}{busy && <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-fg align-middle" />}</> : <span className="text-muted">Describe your next agent…</span>}
            </div>
            <ul className="my-4 grid gap-2.5">
              {CHECKS.map((c, i) => (
                <li key={c} className={`flex items-center gap-2.5 text-[.95rem] transition duration-500 ${done > i ? "opacity-100" : "opacity-30"}`}>
                  <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" className={done > i ? "fill-volt stroke-volt" : "stroke-muted"} />
                    {done > i && <path d="M6 10.5l2.7 2.7L14 7.5" stroke="#fff" />}
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <button onClick={build} disabled={busy} className="btn w-full text-center disabled:opacity-60">{busy ? "Building…" : done ? "Build another agent" : "Build an agent"}</button>
            <small className="mt-3 block text-center text-xs text-muted">Illustrative demo of the Tunk workflow.</small>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tunkFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <article className="h-full rounded-2xl border border-line/20 bg-base2 p-6 transition duration-300 hover:-translate-y-1 hover:border-volt">
                <h3 className="h3">{f.title}</h3>
                <p className="text-[.96rem] text-muted">{f.text}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <article className="h-full rounded-2xl border border-volt/40 p-6">
              <h3 className="h3">Built on trusted tech</h3>
              <p className="text-[.96rem] text-muted">Works with OpenAI, Deepgram, Azure and ElevenLabs. Supported by NVIDIA Inception, the Speechmatics Startup Program and Startup India.</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
