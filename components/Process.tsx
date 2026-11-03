import Reveal from "./Reveal";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="sec">
      <div className="wrap">
        <h2 className="h2">How we work</h2>
        <p className="sub">A simple four step path, with a working result at every stage.</p>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative border-t border-line/20 pt-6">
              <b className="absolute -top-3.5 left-0 grid h-7 w-7 place-items-center rounded-full bg-volt font-display text-sm text-white">{i + 1}</b>
              <Reveal delay={i * 90}><h3 className="h3">{s.title}</h3><p className="text-[.96rem] text-muted">{s.text}</p></Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
