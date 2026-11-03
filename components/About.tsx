import Reveal from "./Reveal";

const items = [
  ["Who we are", "A team of seasoned experts and passionate innovators. Our backgrounds differ, and that is the point: technical depth, creative thinking and business sense meet in one room to build and deploy AI that makes a real difference."],
  ["Our mission", "Build unique, innovative technology products that help businesses focus on productivity. We use AI and machine learning to close the gap between what a business does today and what it can reach."],
  ["Our promise", "Useful AI, explained plainly. We tell you what a system can and cannot do, how it was built, and how we will keep it fair and accountable over time."],
];

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <h2 className="mb-11 max-w-[28em] font-display text-[clamp(1.4rem,2.7vw,2.1rem)] font-medium leading-[1.2] tracking-tight">
          We envision a future where AI lifts every part of life, from simplifying complex processes to opening new room for creativity.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(([t, p], i) => (
            <Reveal key={t} delay={i * 90}><h3 className="h3">{t}</h3><p className="text-[.96rem] text-muted">{p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
