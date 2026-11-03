import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="sec bg-base2">
      <div className="wrap">
        <h2 className="h2">Where AI helps most</h2>
        <p className="sub">Our products and custom work fit any team that deals with language, data or repeated tasks.</p>
        <div className="flex flex-wrap gap-2.5">
          {industries.map((i) => <span key={i} className="rounded-full border border-line/20 bg-base px-[18px] py-2 transition duration-200 hover:-translate-y-0.5 hover:bg-volt hover:text-white">{i}</span>)}
        </div>
      </div>
    </section>
  );
}
