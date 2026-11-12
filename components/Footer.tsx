import Image from "next/image";

const links = [
  ["Privacy Policy", "/privacy-policy"],
  ["Cookies Policy", "/cookies-policy"],
  ["Terms of Service", "/terms-of-use"],
  ["LinkedIn", "https://www.linkedin.com/showcase/logicnimbuspvtltd/home/"],
];

export default function Footer() {
  return (
    <footer className="border-t border-line/20 py-6 text-sm text-muted">
      <div className="wrap flex flex-wrap justify-between gap-3.5">
        <div className="flex flex-col gap-3">
          <Image src="/logo.png" alt="LogicNimbus" width={1389} height={162} className="h-6 w-auto self-start" />
          <p>&copy; {new Date().getFullYear()} LogicNimbus Private Limited</p>
        </div>
        <nav aria-label="Legal" className="flex flex-wrap gap-[18px]">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-fg" {...(h.startsWith("/") || h.includes("logicnimbus.com/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>{l}</a>)}
        </nav>
      </div>
    </footer>
  );
}
