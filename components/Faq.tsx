import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="sec">
      <div className="wrap max-w-3xl">
        <h2 className="h2 mb-6">Questions, answered</h2>
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-b border-line/20">
            <summary className="relative cursor-pointer list-none py-[18px] pr-9 font-display text-[1.05rem] font-medium [&::-webkit-details-marker]:hidden">
              {q}
              <span className="absolute right-1 top-3.5 text-2xl text-volt transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="pb-[18px] text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
