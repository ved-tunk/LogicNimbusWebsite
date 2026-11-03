"use client";
import { useState, type FormEvent } from "react";

const field = "rounded-xl border border-line/25 bg-base px-3.5 py-3 text-fg transition focus:border-volt focus:outline-none";

export default function Contact() {
  const [note, setNote] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(`${f.get("msg")}\n\n${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:contact@logicnimbus.com?subject=${encodeURIComponent("Website enquiry from " + f.get("name"))}&body=${body}`;
    setNote("Opening your email app. If nothing opens, write to contact@logicnimbus.com.");
  };
  return (
    <section id="contact" className="sec bg-base2">
      <div className="wrap grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="h2">Let&apos;s talk.</h2>
          <p className="mb-4 text-muted">Whether you are a business ready to bring AI into your work, or a talented person who wants to make a mark in AI, we would like to hear from you.</p>
          <a href="mailto:contact@logicnimbus.com" className="mb-7 inline-block border-b-2 border-dawn font-display text-xl font-semibold text-dawn">contact@logicnimbus.com</a>
          <h3 className="h3">Our location</h3>
          <address className="text-[.96rem] not-italic text-muted">LogicNimbus Private Limited<br />Plot 50, Bajarang Society,<br />Behind Rajsarathi Soc. Vadala Pathardi Road,<br />Indira Nagar, Nashik, Maharashtra 422009, India</address>
        </div>
        <form onSubmit={submit} className="grid content-start gap-3.5">
          <label className="grid gap-1.5 text-sm text-muted">Name<input name="name" required autoComplete="name" className={field} /></label>
          <label className="grid gap-1.5 text-sm text-muted">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
          <label className="grid gap-1.5 text-sm text-muted">How can we help?<textarea name="msg" rows={4} required className={field} /></label>
          <button type="submit" className="btn justify-self-start">Send message</button>
          <p role="status" className="text-sm text-dawn">{note}</p>
        </form>
      </div>
    </section>
  );
}
