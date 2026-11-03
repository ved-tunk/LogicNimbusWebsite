import Reveal from "./Reveal";
import { pillars } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="sec bg-base2">
      <div className="wrap">
        <h2 className="h2 mb-9">What sets us apart</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="border-t-2 border-volt pt-4">
              <h3 className="h3">{p.title}</h3><p className="text-[.96rem] text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
