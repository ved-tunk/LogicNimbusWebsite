const links = [
  ["Privacy Policy", "https://logicnimbus.com/privacy-policy"],
  ["Cookies Policy", "https://logicnimbus.com/cookies-policy"],
  ["Terms of Service", "https://logicnimbus.com/terms-of-use"],
  ["Twitter", "https://twitter.com/logicnimbus"],
  ["LinkedIn", "https://www.linkedin.com/company/logicnimbus"],
];

export default function Footer() {
  return (
    <footer className="border-t border-line/20 py-6 text-sm text-muted">
      <div className="wrap flex flex-wrap justify-between gap-3.5">
        <p>&copy; {new Date().getFullYear()} LogicNimbus Private Limited</p>
        <nav aria-label="Legal" className="flex flex-wrap gap-[18px]">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-fg" {...(h.includes("logicnimbus.com/") && !h.includes("linkedin") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>{l}</a>)}
        </nav>
      </div>
    </footer>
  );
}
