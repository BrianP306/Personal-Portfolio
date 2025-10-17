import React from "react";

// Brian Pham – One‑page Portfolio (React + Tailwind)
// Drop this component into any React app. Tailwind CSS required.
// All content derived from the user's resume.

const RESUME_URL = "sandbox:/mnt/data/BrianPham-InternResume.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/ba-anh-quan-pham-a84208272/";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6 shadow-sm">
    {children}
  </span>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-slate-600 text-base opacity-80">{subtitle}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border bg-white/60 backdrop-blur p-6 shadow-sm">
    {children}
  </div>
);

const TimelineItem = ({ role, org, when, bullets = [] }) => (
  <div className="relative pl-8">
    <div className="absolute left-1 top-2 h-full w-px bg-gray-200" />
    <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-gray-900" />
    <h3 className="text-lg font-semibold">{role}</h3>
    <p className="text-sm opacity-75">{org} · {when}</p>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

export default function PortfolioBrianPham() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-extrabold tracking-tight">Brian Pham</a>
          <nav className="hidden gap-6 md:flex">
            <a className="hover:opacity-80" href="#about">About</a>
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#achievements">Achievements</a>
            <a className="hover:opacity-80" href="#skills">Skills</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="rounded-xl border px-3 py-2 text-sm shadow-sm hover:shadow"
              href={RESUME_URL}
              target="_blank" rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a
              className="rounded-xl border px-3 py-2 text-sm shadow-sm hover:shadow"
              href={LINKEDIN_URL}
              target="_blank" rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_45%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              Cybersecurity Graduate & Aspiring Penetration Tester
            </h1>
            <p className="mt-4 text-base leading-relaxed opacity-80">
              Recent Cybersecurity graduate (UTS, 2025) with hands‑on foundations in network intrusion detection, web security, privacy, and applied cryptography. Comfortable with Python, data analysis (pandas), Linux tooling, and clear documentation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge>Pen Testing (junior)</Badge>
              <Badge>NIDS / Traffic Analysis</Badge>
              <Badge>Python & Pandas</Badge>
              <Badge>Web Security (OWASP)</Badge>
              <Badge>Blockchain (Ethereum/Geth)</Badge>
              <Badge>IoT Security (Raspberry Pi)</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-black px-5 py-3 text-white shadow hover:opacity-90">
                Get in touch
              </a>
              <a href="#projects" className="rounded-xl border px-5 py-3 shadow-sm hover:shadow">
                See projects
              </a>
            </div>
          </div>
          <Card>
            <h3 className="text-base font-semibold">Security Focus</h3>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed space-y-1">
              <li>Threat modeling and attack surface review</li>
              <li>Network monitoring with Suricata & Wireshark</li>
              <li>Web vuln labs (XSS, auth/session, logging/monitoring failures)</li>
              <li>Crypto fundamentals: RSA, Diffie‑Hellman; privacy: k‑anonymity</li>
              <li>AWS architecture basics, IAM hygiene, least privilege</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About" subtitle="Cybersecurity mindset with real‑world leadership">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-base font-semibold">Summary</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-80">
              I’m developing as a security analyst/penetration tester through university labs and self‑driven projects: network defense with Suricata, packet analysis in Wireshark, web security exercises, and applied cryptography. My hospitality leadership background means I stay calm under pressure, document clearly, and care about people and process—useful during incidents and red‑team engagements.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Education</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <div className="font-medium">Bachelor of Cybersecurity</div>
                <div className="opacity-75">University of Technology Sydney · Graduated 2025</div>
              </li>
              <li>
                <div className="font-medium">Diploma of Information Technology</div>
                <div className="opacity-75">UTS Insearch · 2022–2023</div>
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="hover:underline" href="mailto:brian.ba.p1022@gmail.com">brian.ba.p1022@gmail.com</a></li>
              <li><a className="hover:underline" href="tel:+61481760399">+61 481 760 399</a></li>
              <li><a className="hover:underline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
              <li>Riverwood, NSW 2210</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Security Projects" subtitle="Hands‑on labs and coursework">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold">Private Ethereum Blockchain (Geth on Linux)</h3>
            <p className="mt-2 text-sm opacity-80">Designed and deployed a private chain: custom genesis (chain ID, low difficulty), managed EOAs, configured etherbase, processed transactions, and mined blocks to demonstrate PoW, account management, and secure transaction processing.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge>Blockchain</Badge><Badge>Ethereum</Badge><Badge>Geth</Badge><Badge>Linux</Badge>
            </div>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Cyberscope – IoT Tamper/Integrity Detection</h3>
            <p className="mt-2 text-sm opacity-80">Raspberry Pi prototype to detect physical/software tampering; Python scripts using GPIO, <code>hashlib</code>, and <code>requests</code> to send real‑time alerts via ThingSpeak; aligned with integrity‑verification concepts for a UTS capstone.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge>IoT Security</Badge><Badge>Raspberry Pi</Badge><Badge>Python</Badge><Badge>ThingSpeak</Badge>
            </div>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Network Intrusion Detection (Data Engineering)</h3>
            <p className="mt-2 text-sm opacity-80">Processed large packet datasets with pandas; engineered flow‑based features (packet counts, avg lengths, SYN flags) to support ML‑based intrusion detection and traffic analysis.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge>Pandas</Badge><Badge>Data Engineering</Badge><Badge>NIDS</Badge>
            </div>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">OWASP A09 Logging & Monitoring</h3>
            <p className="mt-2 text-sm opacity-80">WebGoat scenarios covering log injection/spoofing and credential leakage; implemented and validated secure logging practices and monitoring strategies.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge>OWASP</Badge><Badge>WebGoat</Badge><Badge>Monitoring</Badge><Badge>Secure Logging</Badge>
            </div>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Highlights from 2018 to present">
        <div className="space-y-8">
          <TimelineItem
            role="Branch Manager"
            org="Mr Max Dessert Group – Riverwood Branch"
            when="Nov 2023 – Present"
            bullets={[
              "Lead and motivate a 16‑person team; delegate, coach, and inspire toward targets.",
              "Own budgeting, forecasting, and cost control to optimise profitability.",
              "Streamline processes, scheduling, and food safety/hygiene compliance.",
              "Maintain exceptional customer satisfaction through calm, proactive service.",
            ]}
          />
          <TimelineItem
            role="Supervisor"
            org="Kürtősh (Café)"
            when="Oct 2022 – Dec 2023"
            bullets={[
              "Ran daily operations; upheld food safety and positive guest experiences.",
              "Trained teams; handled rostering, inventory, and staff development.",
              "Increased sales via upselling and seasonal menu promotions; managed POS and cash‑ups.",
            ]}
          />
          <TimelineItem
            role="CEO Secretary (Family Business)"
            org="Thang Long LMT"
            when="2018 – 2022"
            bullets={[
              "Managed calendars, travel, and executive logistics with discretion.",
              "Prepared reports/presentations; organised and safeguarded sensitive documents.",
              "Provided comprehensive guest and executive support in a fast‑moving environment.",
            ]}
          />
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Selected Achievements" subtitle="Impact and outcomes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Graduated UTS Cybersecurity (2025) with High Distinctions across key projects.</li>
              <li>Engineered flow‑based features to support NIDS analytics in pandas.</li>
              <li>Delivered a working IoT integrity prototype with real‑time alerts.</li>
            </ul>
          </Card>
          <Card>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Deployed a private Ethereum chain (Geth) and demonstrated secure transaction flows.</li>
              <li>Completed OWASP A09 logging/monitoring labs (WebGoat) including log injection.</li>
            </ul>
          </Card>
          <Card>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Reduced operating costs by 5.3% and increased sales by 7% in prior roles—transferable process optimisation.</li>
              <li>Supported team culture and reduced turnover by ~10% through coaching.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Security, tools, and engineering foundations">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold">Security & Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Badge>NIDS / Wireshark</Badge>
              <Badge>OWASP Top 10</Badge>
              <Badge>Secure Logging</Badge>
              <Badge>Threat Modeling</Badge>
              <Badge>Linux</Badge>
              <Badge>Raspberry Pi</Badge>
              <Badge>Blockchain (Geth)</Badge>
            </div>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Programming & Data</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Badge>Python</Badge>
              <Badge>Pandas</Badge>
              <Badge>Feature Engineering</Badge>
              <Badge>APIs / Requests</Badge>
              <Badge>Git</Badge>
              <Badge>Docker</Badge>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s work together">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-base font-semibold">Email</h3>
            <a className="mt-2 block text-sm hover:underline" href="mailto:brian.ba.p1022@gmail.com">brian.ba.p1022@gmail.com</a>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Phone</h3>
            <a className="mt-2 block text-sm hover:underline" href="tel:+61481760399">+61 481 760 399</a>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">Location</h3>
            <p className="mt-2 text-sm">Riverwood, NSW 2210</p>
          </Card>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <a
            className="rounded-xl bg-black px-5 py-3 text-white shadow hover:opacity-90"
            href="mailto:brian.ba.p1022@gmail.com?subject=Enquiry%20from%20your%20portfolio"
          >
            Email me
          </a>
          <a
            className="rounded-xl border px-5 py-3 shadow-sm hover:shadow"
            href={RESUME_URL}
            target="_blank" rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm opacity-70">
          © {new Date().getFullYear()} Brian Pham. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
