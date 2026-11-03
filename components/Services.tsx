import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="what-we-do" className="sec bg-base2">
      <div className="wrap">
        <h2 className="h2">What we do</h2>
        <p className="sub">From a single idea to a working product, we cover the full path of building with AI.</p>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="h-full rounded-2xl border border-line/20 bg-base p-6 transition duration-300 hover:-translate-y-1 hover:border-volt">
                <svg viewBox="0 0 48 48" className="mb-3.5 h-[34px] w-[34px] fill-none stroke-volt" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {s.icon.map((d) => <path key={d} d={d} />)}
                </svg>
                <h3 className="h3">{s.title}</h3>
                <p className="text-[.96rem] text-muted">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
