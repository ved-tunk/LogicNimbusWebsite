import { Fragment } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy – LogicNimbus",
  description: "How LogicNimbus collects, stores, uses, discloses and transfers personal data.",
};

type Block =
  | { t: "p"; x: string }
  | { t: "h3"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "dl"; x: [string, string][] }
  | { t: "table"; v: "GDPR" | "UK GDPR" }
  | { t: "links"; k: "eea" | "uk" };

const sections: { h: string; blocks: Block[] }[] = [
  {
    h: "Data Privacy",
    blocks: [
      { t: "p", x: "We (meaning the specific company that has provided or referred you to this privacy notice or that is identified on this page as being the operator of this website) believe that protecting the security and privacy of your personal data is important. This Privacy Notice explains how we collect, store, use, disclose and transfer (hereinafter \"process\") your personal data. The personal data that we collect about you depends on the context of your interactions with us, the products, services and features that you use, your location, and applicable law." },
    ],
  },
  {
    h: "1. Processing of personal data related to your use of our websites, applications and online services",
    blocks: [
      { t: "h3", x: "Categories of personal data processed, and purpose of the processing" },
      { t: "p", x: "When visiting our external and internal websites or using our applications or online services (each an \"Online Offering\"), we may process the following categories of personal data:" },
      { t: "ul", x: [
        "Your contact information, such as full name, work address, work telephone number, work mobile phone number and work email address;",
        "Organizational information, including job position and company name;",
        "Information submitted as part of a support request, survey or comment or forum post;",
        "Further personal data that you provide by filling in forms in our Online Offerings; and",
        "Information on your interaction with the Online Offering, including your device and user identifier, information on your operating system, sites and services accessed during your visit, the date and time of each visitor request.",
      ] },
      { t: "p", x: "We process your personal data for the following purposes:" },
      { t: "ul", x: [
        "To provide the Online Offering's services and functions which includes creating and administering your online account, updating, securing, and troubleshooting, providing support, as well as improving and developing our Online Offerings;",
        "To bill your use of the Online Offering;",
        "To verify your identity;",
        "To answer and fulfill your requests or instructions;",
        "To process your order or to provide you with access to specific information or offers;",
        "As reasonably necessary to enforce the Online Offering's terms, to establish or preserve a legal claim or defense, to prevent fraud or other illegal activities, including attacks on our information technology systems.",
      ] },
      { t: "h3", x: "Online Offerings provided by your organization" },
      { t: "p", x: "Our Online Offerings may be provided to you for your use by the organization to which you belong, such as our enterprise customers. If your organization provides you with access to an Online Offering, our processing of personal data provided by or collected from you or your organization in connection with the Online Offering's content is performed under the direction of your organization and is subject to a data processing agreement between your organization and us. In such instance, your organization is responsible for any personal data contained in such content and you should direct any questions about how personal data contained in such content is used to your organization." },
    ],
  },
  {
    h: "2. Processing of personal data related to your use of our marketplaces",
    blocks: [
      { t: "h3", x: "Categories of personal data processed, and purpose of the processing" },
      { t: "p", x: "When visiting our online stores and marketplaces (each a \"Marketplace\"), we may process the following categories of personal data:" },
      { t: "ul", x: [
        "Your contact information, such as full name, work address, work telephone number, work mobile phone number and work email address;",
        "Organizational information, including job position and company name;",
        "Payment data, such as data necessary for processing payments and fraud prevention, including credit/debit card numbers, security code numbers and other related billing information;",
        "Information submitted as part of a support request, survey or comment or forum post;",
        "Further personal data that you provide by filling in forms in our Marketplace;",
        "Information that are legally required compliance screenings or export control checks; such as date of birth, nationality, place of residence, ID numbers, identity cards and information about relevant and significant litigation or other legal proceedings; and",
        "Information on your interaction with the Marketplace, including your device and user identifier, information on your operating system, sites and services accessed during your visit, the date and time of each visitor request.",
      ] },
      { t: "p", x: "We process your personal data for the following purposes:" },
      { t: "ul", x: [
        "Communicating with you about our products, services and projects, e.g. by responding to inquiries or requests or providing you with information about purchased products;",
        "Planning, performing and managing the (contractual) relationship with customers, e.g. by performing transactions and orders of products or services, processing payments, performing accounting, auditing, billing and collection activities, arranging shipments and deliveries, facilitating repairs and providing support services;",
        "Maintaining and protecting the security of our products, services and websites, preventing and detecting security threats, fraud or other criminal or malicious activities;",
        "Ensuring compliance with legal obligations (such as record keeping obligations), export control and customs, customer compliance screening obligations (to prevent white-collar or money laundering crimes), and our policies or industry standards; and",
        "Solving disputes, enforce our contractual agreements and to establish, exercise or defend legal claims.",
      ] },
    ],
  },
  {
    h: "3. Processing of personal data related to your business relationship with us",
    blocks: [
      { t: "h3", x: "Categories of personal data processed, and purpose of the processing" },
      { t: "p", x: "In the context of the business relationship with us, we may process the following categories of personal data of consumers and contact persons at (prospective) customers, suppliers, vendors and partners (each a \"Business Partner\"):" },
      { t: "ul", x: [
        "Contact information, such as full name, work address, work telephone number, work mobile phone number and work email address;",
        "Organizational information, including job position and company name;",
        "Payment data, such as data necessary for processing payments and fraud prevention, including credit/debit card numbers, security code numbers and other related billing information;",
        "Further information necessarily processed in a project or contractual relationship with us or voluntarily provided by the Business Partner, such as personal data relating to orders placed, payments made, requests, and project milestones;",
        "Personal data collected from publicly available resources (including business and employment oriented social networks and websites), integrity data bases and credit agencies; and",
        "Information that are legally required for Business Partner compliance screenings or export control checks, such as date of birth, nationality, place of residence, ID numbers, identity cards and information about relevant and significant litigation or other legal proceedings against Business Partners.",
      ] },
      { t: "p", x: "We may process the personal data for the following purposes:" },
      { t: "ul", x: [
        "Communicating with Business Partners about our products, services and projects, e.g. by responding to inquiries or requests or providing you with information about purchased products;",
        "Planning, performing and managing the (contractual) relationship with Business Partners; e.g. by performing transactions and orders of products or services, processing payments, performing accounting, auditing, billing and collection activities, arranging shipments and deliveries, facilitating repairs and providing support services;",
        "To create a personal profile containing business-related information on interactions between you and us with the aim of being able to offer you and the company you work for relevant information and suitable offers for our services and products and to improve our personal communication with you;",
        "Administrating and performing market analysis, sweepstakes, contests, or other customer activities or events;",
        "Maintaining and protecting the security of our products, services and websites, preventing and detecting security threats, fraud or other criminal or malicious activities;",
        "Ensuring compliance with legal obligations (such as record keeping obligations), export control and customs, Business Partner compliance screening obligations (to prevent white-collar or money laundering crimes), and our policies or industry standards; and",
        "Solving disputes, enforce our contractual agreements and to establish, exercise or defend legal claims.",
      ] },
    ],
  },
  {
    h: "4. Processing of personal data for customer satisfaction surveys and for direct marketing",
    blocks: [
      { t: "p", x: "Where and as permitted under applicable law, we may process your contact information for direct marketing purposes (e.g. trade show invitations, newsletters with further information and offers concerning our products and services) and to carry out customer satisfactions surveys, in each case also by e-mail." },
      { t: "p", x: "You may object to the processing of your contact data for these purposes at any time by writing to contact@logicnimbus.com or by using the opt-out mechanism provided in the respective communication you received." },
    ],
  },
  {
    h: "5. Transfer and disclosure of personal data",
    blocks: [
      { t: "p", x: "We only transfer your personal data as described below:" },
      { t: "dl", x: [
        ["Affiliated Companies and sales partners", "For the purpose of and to the extent necessary to conduct our business relationship with you, we may share your personal data with affiliates and other third parties (e.g., sales partners and agents). We, for example, sell certain products and services only via local business relationships and in this case, we may transfer your personal data to our respective local affiliates or other sales partners conducting the business relationship with you."],
        ["Transactions on our Marketplaces", "Via our Marketplaces we make available products, services and offerings of affiliates and other third parties. We share customers' personal data related to those transactions with that affiliate and/or third party."],
        ["Service Providers", "We employ affiliates and other companies to perform functions on our behalf, such as IT-services or payment processing services. These affiliates and other companies process personal data only for the purpose of such services."],
        ["Other third parties", "We may transfer personal data to other third parties in connection with complying with legal obligations or establishing, exercising or defending rights or claims (e.g., for court and arbitration proceedings, to regulators, law enforcement and government authorities, to attorneys and consultants)."],
      ] },
      { t: "p", x: "The recipients of your personal data may be located outside of the country in which you reside. Personal data published by you on Online Offerings (such as chat rooms or forums) may be globally accessible to other registered users of the respective Online Offering." },
    ],
  },
  {
    h: "6. Retention periods",
    blocks: [
      { t: "p", x: "Unless indicated otherwise at the time of the collection of your personal data (e.g. within a form completed by you), we erase your personal data if the retention of that personal data is no longer necessary for the purposes for which they were collected or otherwise processed, or to comply with legal obligations (such as retention obligations under tax or commercial laws)." },
    ],
  },
  {
    h: "7. Your rights",
    blocks: [
      { t: "p", x: "The data protection laws in the jurisdiction in which you reside may entitle you to specific rights in relation to your personal data." },
      { t: "p", x: "In particular, and subject to the legal requirements, you may be entitled to" },
      { t: "ul", x: [
        "Obtain from us confirmation as to whether or not personal data concerning you are being processed, and where that is the case, access to the personal data;",
        "Obtain from us the correction of inaccurate personal data concerning you;",
        "Obtain from us the erasure of your personal data;",
        "Obtain from us restriction of processing regarding your personal data;",
        "Data portability concerning personal data, which you actively provided;",
        "Object, on grounds relating to your particular situation, to further processing of personal data concerning you; and",
        "Withdraw your consent to our processing of your personal data.",
      ] },
    ],
  },
  {
    h: "8. Security",
    blocks: [
      { t: "p", x: "To protect your personal data against accidental or unlawful destruction, loss, use, or alteration and against unauthorized disclosure or access, we use adequate physical, technical and organizational security measures." },
    ],
  },
  {
    h: "9. Processing under the EU's General Data Protection Regulation",
    blocks: [
      { t: "p", x: "This section applies and provides you with further information if your personal data is processed by one of our companies located in the European Economic Area." },
      { t: "h3", x: "Data Controller" },
      { t: "h3", x: "Online Offerings" },
      { t: "p", x: "The specific company identified in the Online Offering as being the operator of the Online Offering is the data controller in the meaning of the General Data Protection Regulation for the processing activities described in this Privacy Notice." },
      { t: "h3", x: "Marketplaces" },
      { t: "p", x: "The specific company identified on the Market Place as being the operator of the Marketplace is the data controller." },
      { t: "h3", x: "Business Partner personal data in Customer Relationship Systems" },
      { t: "p", x: "In the course of our business relationship with you, we may share Business Partner contact information with affiliated companies. We and these affiliated companies are jointly responsible for the proper protection of your personal data (Art. 26 General Data Protection Regulation)." },
      { t: "h3", x: "Legal basis of the processing" },
      { t: "p", x: "The General Data Protection Regulation requires us to provide you with information on the legal basis of the processing of your personal data." },
      { t: "p", x: "The legal basis for our processing data about you is that such processing is necessary for the purposes of" },
      { t: "ul", x: [
        "exercising our rights and performing our obligations under any contract we make with you (Article 6 (1) (b) General Data Protection Regulation) (\"Contract Performance\");",
        "Compliance with our legal obligations (Article 6 (1) (c) General Data Protection Regulation) (\"Compliance with Legal Obligations\"); and/or",
        "Legitimate interests pursued by us (Article 6 (1) (f) General Data Protection Regulation) (\"Legitimate Interest\"). Generally, the legitimate interest pursued by us in relation to our use of your personal data is the efficient performance or management of (i) your use of the Online Offerings, and/or (ii) our business relationship with you. Where the below table states that we rely on our legitimate interests for a given purpose, we are of the opinion that our legitimate interest is not overridden by your interests and rights or freedoms, given (i) the regular reviews and related documentation of the processing activities described herein, (ii) the protection of your personal data by our data privacy processes, including our Binding Corporate Rules on the Protection of Personal Data, (iii) the transparency we provide on the processing activity, and (iv) the rights you have in relation to the processing activity.",
      ] },
      { t: "p", x: "In some cases, we may ask if you consent to the relevant use of your personal data. In such cases, the legal basis for us processing that data about you may (in addition or instead) be that you have consented (Article 6 (1) (a) General Data Protection Regulation) (\"Consent\")." },
      { t: "table", v: "GDPR" },
      { t: "h3", x: "International data transfers" },
      { t: "links", k: "eea" },
      { t: "h3", x: "Usage by Children" },
      { t: "p", x: "This Online Offering is not directed to children under the age of fourteen (14). We will not knowingly collect personal data from children under the age of fourteen (14) without prior parental consent if required by applicable law. We will only use or disclose personal data about a child to the extent permitted by law, to seek parental consent, pursuant to local law and regulations or to protect a child." },
    ],
  },
  {
    h: "10. Processing under the United Kingdom's Data Protection Act 2018 and the UK GDPR",
    blocks: [
      { t: "p", x: "This section applies and provides you with further information if your personal data is processed by one of our companies located in the United Kingdom under the Data Protection Act 2018 and/or the UK GDPR (meaning Regulation (EU) 2016/679 of the European Parliament and of the Council of 27th April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (General Data Protection Regulation) as it forms part of the law of England and Wales, Scotland and Northern Ireland by virtue of Section 3 of the European Union (Withdrawal) Act 2018)." },
      { t: "h3", x: "Data Controller" },
      { t: "p", x: "The specific company identified on this page as being the operator of this website is the data controller in the meaning of the UK GDPR for the processing activities described in this Privacy Notice." },
      { t: "h3", x: "Legal basis of the processing" },
      { t: "p", x: "The UK GDPR requires us to provide you with information on the legal basis of the processing of your personal data." },
      { t: "p", x: "The legal basis for our processing data about you is that such processing is necessary for the purposes of" },
      { t: "ul", x: [
        "exercising our rights and performing our obligations under any contract we make with you (Article 6 (1) (b) UK GDPR) (\"Contract Performance\");",
        "Compliance with our legal obligations (Article 6 (1) (c) UK GDPR) (\"Compliance with Legal Obligations\"); and/or",
        "Legitimate interests pursued by us (Article 6 (1) (f) UK GDPR) (\"Legitimate Interest\"). Generally, the legitimate interest pursued by us in relation to our use of your personal data is the efficient performance or management of (i) your use of the Online Offerings, and/or (ii) our business relationship with you. Where the below table states that we rely on our legitimate interests for a given purpose, we are of the opinion that our legitimate interest is not overridden by your interests and rights or freedoms, given (i) the regular reviews and related documentation of the processing activities described herein, (ii) the protection of your personal data by our data privacy processes, (iii) the transparency we provide on the processing activity, and (iv) the rights you have in relation to the processing activity.",
      ] },
      { t: "p", x: "In some cases, we may ask if you consent to the relevant use of your personal data. In such cases, the legal basis for us processing that data about you may (in addition or instead) be that you have consented (Article 6 (1) (a) UK GDPR) (\"Consent\")." },
      { t: "table", v: "UK GDPR" },
      { t: "h3", x: "International data transfers" },
      { t: "links", k: "uk" },
    ],
  },
  {
    h: "11. Further information for US residents",
    blocks: [
      { t: "p", x: "If you are a U.S. resident, then please take note of the following:" },
      { t: "h3", x: "Do Not Track" },
      { t: "p", x: "At this time our Online Offerings do not recognize or respond to \"Do Not Track\" browser signals. For more information on \"Do Not Track\", please visit your browser's support page." },
      { t: "h3", x: "Usage by Children" },
      { t: "p", x: "This Online Offering is not directed to children under the age of thirteen. We will not knowingly collect personal data from children under the age of thirteen without insisting that they seek prior parental consent if required by applicable law. We will only use or disclose personal data about a child to the extent permitted by law, to seek parental consent, pursuant to local law and regulations or to protect a child." },
    ],
  },
];

const basis = (code: string, g: string) =>
  ({
    CP: `Contract Performance (Article 6 (1) (b) ${g})`,
    CL: `Compliance with Legal Obligations (Article 6 (1) (c) ${g})`,
    LI: `Legitimate Interest (Article 6 (1) (f) ${g})`,
    CO: `Consent, if voluntarily provided (Article 6 (1) (a) ${g})`,
  })[code] as string;

type Row = { p: string; b: string[]; gdprOnly?: boolean };
const groups = (uk: boolean): { title: string; rows: Row[] }[] => [
  { title: "Processing of personal data in the context of Online Offerings", rows: [
    { p: "To provide the Online Offering's services and functions which includes creating and administering your online account, updating, securing, and troubleshooting, providing support, as well as improving and developing our Online Offerings", b: ["CP", "LI"] },
    { p: "To bill your use of the Online Offering", b: ["CP", "LI"] },
    { p: "To verify your identity", b: ["CP", "LI"] },
    { p: "To answer and fulfill your requests or instructions", b: ["CP", "LI"] },
    { p: "To process your order or to provide you with access to specific information or offers", b: ["CP", "LI"] },
    { p: "To send you marketing information or to contact you in the context of customer satisfaction surveys", b: ["CO", "LI"], gdprOnly: true },
    { p: "As reasonably necessary to enforce the Online Offering's terms, to establish or preserve a legal claim or defense, to prevent fraud or other illegal activities, including attacks on our information technology systems", b: ["CL", "LI"] },
  ] },
  { title: uk ? "Processing of personal data related to your use of LogicNimbus and/or business relationship with us" : "Processing of personal data related to your use of marketplaces and/or business relationship with us", rows: [
    { p: "Communicating about our products, services and projects, e.g. by responding to inquiries or requests or providing you with technical information about purchased products", b: ["CP", "LI"] },
    { p: "Planning, performing and managing the (contractual) relationship; e.g. by performing transactions and orders of products or services, processing payments, performing accounting, auditing, billing and collection activities, arranging shipments and deliveries, facilitating repairs and providing support services", b: ["CP", "CL"] },
    { p: "To create a personal profile containing business-related information on interactions between you and us with the aim of being able to offer you and the company you work for relevant information and suitable offers for our services and products and to improve our personal communication with you", b: ["LI"] },
    { p: "Administrating and performing market analysis, sweepstakes, contests, or other customer activities or events", b: ["CO", "LI"] },
    { p: "Conducting customer satisfaction surveys and direct marketing activities", b: ["CO", "LI"], gdprOnly: true },
    { p: "Maintaining and protecting the security of our products, services and websites, preventing and detecting security threats, fraud or other criminal or malicious activities", b: ["LI"] },
    { p: "Ensuring compliance with legal obligations (such as record keeping obligations), export control and customs, business partner compliance screening obligations (to prevent white-collar or money laundering crimes), and our policies or industry standards", b: ["CL", "LI"] },
    { p: "Solving disputes, enforce our contractual agreements and to establish, exercise or defend legal claims", b: ["CL", "LI"] },
  ] },
  { title: "Processing of personal data for customer satisfaction surveys and for direct marketing", rows: [
    { p: "Processing of your contact information for direct marketing purposes (e.g. trade show invitations, newsletters with further information and offers concerning our products and services) and to carry out customer satisfactions surveys", b: ["CO", "LI"] },
  ] },
];

function LegalTable({ v }: { v: "GDPR" | "UK GDPR" }) {
  const uk = v === "UK GDPR";
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-line/20">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
        <thead className="bg-base2 font-display"><tr><th className="p-3">Purpose</th><th className="p-3">Legal Basis</th></tr></thead>
        <tbody>
          {groups(uk).map((g) => (
            <Fragment key={g.title}>
              <tr className="bg-base2/60"><td colSpan={2} className="p-3 font-semibold italic">{g.title}</td></tr>
              {g.rows.filter((r) => !(uk && r.gdprOnly)).map((r) => (
                <tr key={g.title + r.p} className="border-t border-line/20 align-top">
                  <td className="p-3 text-muted">{r.p}</td>
                  <td className="p-3">{r.b.map((c) => <div key={c}>{basis(c, v)}</div>)}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-volt underline underline-offset-2">{children}</a>
);

function Links({ k }: { k: "eea" | "uk" }) {
  return k === "eea" ? (
    <>
      <p className="mb-3 text-muted">In the event that we transfer your personal data outside the European Economic Area, we ensure that your data is protected in a manner which is consistent with the General Data Protection Regulation. Therefore, and if required by applicable law, we take the following measures:</p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted">
        <li>We share your personal data with affiliated companies outside the European Economic Area only if they have implemented our Binding Corporate Rules (&quot;BCR&quot;) for the protection of personal data.</li>
        <li>We transfer personal data to external recipients outside the European Economic Area only if the recipient has (i) entered into <A href="http://ec.europa.eu/justice/data-protection/international-transfers/transfer/index_en.html">EU Standard Contractual Clauses</A> with us, or (ii) implemented Binding Corporate Rules in its organization.</li>
      </ul>
    </>
  ) : (
    <p className="mb-4 text-muted">In the event that we transfer your personal data outside the United Kingdom, we ensure that your data is protected in a manner which is consistent with the UK GDPR. Therefore, and if required by applicable law, we take the following measures: we transfer personal data to recipients outside the United Kingdom only if the recipient has (i) entered into UK <A href="http://ec.europa.eu/justice/data-protection/international-transfers/transfer/index_en.html">Standard Contractual Clauses</A> with us, or (ii) implemented <A href="http://ec.europa.eu/justice/data-protection/international-transfers/binding-corporate-rules/index_en.htm">Binding Corporate Rules</A> in its organization.</p>
  );
}

function Text({ x }: { x: string }) {
  const m = "contact@logicnimbus.com";
  if (!x.includes(m)) return <>{x}</>;
  const [a, b] = x.split(m);
  return <>{a}<a href={`mailto:${m}`} className="font-semibold text-volt underline underline-offset-2">{m}</a>{b}</>;
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pb-20 pt-28">
        <div className="wrap max-w-3xl">
          <p className="mb-2 text-sm font-semibold text-dawn">Legal</p>
          <h1 className="mb-10 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">Privacy Policy</h1>
          {sections.map((s) => (
            <section key={s.h} className="mb-10">
              <h2 className="mb-4 font-display text-xl font-bold leading-snug">{s.h}</h2>
              {s.blocks.map((b, i) => {
                switch (b.t) {
                  case "p": return <p key={i} className="mb-4 max-w-none text-muted"><Text x={b.x} /></p>;
                  case "h3": return <h3 key={i} className="mb-2 mt-6 font-display text-base font-bold">{b.x}</h3>;
                  case "ul": return <ul key={i} className="mb-4 list-disc space-y-2 pl-6 text-muted">{b.x.map((li) => <li key={li}>{li}</li>)}</ul>;
                  case "dl": return <dl key={i} className="mb-4 space-y-4">{b.x.map(([t, d]) => <div key={t}><dt className="font-semibold">{t}</dt><dd className="mt-1 text-muted">{d}</dd></div>)}</dl>;
                  case "table": return <LegalTable key={i} v={b.v} />;
                  case "links": return <Links key={i} k={b.k} />;
                }
              })}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
