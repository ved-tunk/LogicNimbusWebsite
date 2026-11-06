import Navbar from "./Navbar";
import Footer from "./Footer";

export type LegalSection = { h?: string; ps: string[] };

function Text({ x }: { x: string }) {
  return (
    <>
      {x.split(/([\w.-]+@[\w.-]+\.\w+)/).map((part, i) =>
        i % 2 ? <a key={i} href={`mailto:${part}`} className="font-semibold text-volt underline underline-offset-2">{part}</a> : part
      )}
    </>
  );
}

export default function LegalPage({ title, status, sections }: { title: string; status?: string; sections: LegalSection[] }) {
  return (
    <>
      <Navbar />
      <main className="pb-20 pt-28">
        <div className="wrap max-w-3xl">
          <p className="mb-2 text-sm font-semibold text-dawn">Legal</p>
          <h1 className="mb-3 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">{title}</h1>
          {status && <p className="mb-10 text-sm text-muted">{status}</p>}
          {sections.map((s, i) => (
            <section key={i} className="mb-9">
              {s.h && <h2 className="mb-3 font-display text-xl font-bold leading-snug">{s.h}</h2>}
              {s.ps.map((p, j) => <p key={j} className="mb-4 max-w-none text-muted"><Text x={p} /></p>)}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
