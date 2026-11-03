import { keywords } from "@/lib/content";

export default function Marquee() {
  const list = [...keywords, ...keywords];
  return (
    <div className="overflow-hidden border-y border-line/20 bg-base2 py-3.5" aria-hidden="true">
      <div className="flex w-max animate-slide gap-11">
        {list.map((k, i) => (
          <span key={i} className="flex items-center gap-11 whitespace-nowrap font-display text-[1.05rem] font-medium text-muted">
            {k}<i className="h-1.5 w-1.5 rounded-full bg-volt" />
          </span>
        ))}
      </div>
    </div>
  );
}
