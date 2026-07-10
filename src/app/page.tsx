import Image from "next/image";
import AnimatedCardStack, {
  type AnimatedProjectCardItem,
} from "@/components/ui/animate-card-animation";
import DivergenceMeter from "@/components/ui/divergence-meter";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const projectCards: AnimatedProjectCardItem[] = [
  {
    id: 1,
    title: "CSC Sarthi",
    category: "AI-Powered Pre-Submission Assistant",
    stack: ["Python", "Django", "Scikit-learn", "OCR", "Render"],
    summary:
      "Built an AI-assisted validation platform for 30+ government services that checks forms in real time, verifies documents with OCR, and helps reduce rejection errors before submission.",
    problem:
      "Government service applications often fail because of incomplete fields, mismatched documents, and limited pre-submission guidance.",
    solution:
      "I designed the risk prediction workflow, OCR mismatch detection, WhatsApp pre-check flow, and a Django dashboard backed by a cloud-hosted ML API.",
    role:
      "End-to-end builder across ML validation, document verification, chatbot workflow, analytics dashboard, and deployment.",
    impact: ["87% validation accuracy", "30+ services", "~40% fewer rejection errors"],
    github: "https://github.com/GAURAV-1313/csc",
    image:
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1400&q=80",
  },
  
  {
    id: 2,
    title: "LiteLLM",
    category: "AI Access SaaS Platform",
    stack: ["React", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Stripe"],
    summary:
      "Created a micro-subscription SaaS product for short-term premium LLM access, balancing user experience, payments, storage, and API cost control.",
    problem:
      "Premium LLM subscriptions can be too expensive for short-term or lightweight usage patterns.",
    solution:
      "I built hybrid rate limiting, a three-tier storage architecture, Stripe webhook provisioning, prompt caching, and SSE streaming for responsive chat delivery.",
    role:
      "Built the product architecture, billing flow, storage design, cost-control logic, and real-time chat pipeline.",
    impact: ["100K token ceiling", "3-tier storage design", "SSE streaming responses"],
    github: "https://github.com/OnkarDsharma/LiteLLM",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },

  {
    id: 3,
    title: "Cross-Age Face Verification System",
    category: "Computer Vision + Full Stack Delivery",
    stack: ["Python", "TensorFlow", "DeepFace", "Flask"],
    summary:
      "Engineered a dual-purpose computer vision system for cross-age identity verification and age regression, delivered through a usable web app with real-time uploads.",
    problem:
      "Identity verification becomes more difficult when facial appearance changes significantly across age ranges.",
    solution:
      "I fine-tuned ResNet50 for age prediction, implemented Facenet512 for verification, optimized the cosine threshold, and shipped the models through a full-stack Flask interface.",
    role:
      "Owned model selection, training, evaluation, threshold tuning, and the web experience for real-time analysis.",
    impact: ["93.6% ROC-AUC", "85.3% accuracy", "~2.4 age MAE"],
    github: "https://github.com/OnkarDsharma/Cross-Age-Face-Verification",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
];

const openSourceCards: AnimatedProjectCardItem[] = [
  {
    id: 101,
    title: "Onyx",
    category: "Open Source Contributor — Jul 2026",
    stack: ["React", "TypeScript", "Python", "GitLab API"],
    summary:
      "Engineered a GitLab connector branch override, extending configuration interfaces and threading target references through the API retrieval layer.",
    problem:
      "The GitLab connector had no support for branch overrides, limiting flexibility when pulling target references from repositories.",
    solution:
      "Extended React/TypeScript configuration interfaces and threaded target references through python-gitlab API retrieval methods, implemented robust GitlabGetError exception handling, and authored unit tests validating Git blob URL construction.",
    role:
      "Remote open source contributor: designed the override mechanism, handled error cases, and covered the change with unit tests.",
    impact: ["React/TypeScript", "python-gitlab API", "Unit tested"],
    github: "https://github.com/onyx-dot-app/onyx",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 102,
    title: "tt-metal",
    category: "Tenstorrent — Open Source Contributor — Jun 2026",
    stack: ["C++", "C", "Kernel Development"],
    summary:
      "Merged a contribution modernizing kernel-level C/C++ type declarations across Quasar and Wormhole hardware components.",
    problem:
      "Legacy kernel-level C/C++ type declarations across hardware components needed modernizing for long-term maintainability.",
    solution:
      "Updated type declarations across Quasar and Wormhole components, collaborating directly with maintainers through issue discussion and code review before the change was merged.",
    role:
      "Remote open source contributor: proposed and implemented the type modernization, iterated based on maintainer review.",
    impact: ["Kernel-level C/C++", "Cross-component", "Maintainer reviewed"],
    github: "https://github.com/tenstorrent/tt-metal",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
    value: 82.4061,
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "Django", "REST APIs"],
    value: 88.1725,
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    value: 79.9538,
  },
  {
    title: "AI / ML",
    items: [
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    value: 91.0480,
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Linux", "VS Code", "Render", "AWS", "Postman", "Stripe"],
    value: 85.6237,
  },
];

const experienceItems = [
  {
    label: "Achievement",
    title: "Winner, E-Summit 2026 Hackathon",
    organization: "E-Cell, IIIT Naya Raipur",
    period: "March 2026",
    details:
      "Developed and pitched CSC Sarthi, demonstrating real-time form validation and document verification to the judging panel.",
  },
  {
    label: "Achievement",
    title: "Winner, Xcelarate 2026 Case Study Competition",
    organization: "Money Matters, IIIT Naya Raipur",
    period: "February 2026",
    details:
      'Proposed a strategic "three pillars solution" for a Central India Manufacturing Hub and defended it successfully during evaluation.',
  },
  {
    label: "Leadership",
    title: "Head of Art Society (Indradhanush)",
    organization: "IIIT Naya Raipur",
    period: "August 2025 - May 2026",
    details:
      "Lead a team of 50 students while organizing campus-wide cultural events and workshops.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "onkareshwarsharma7om@gmail.com",
    href: "mailto:onkareshwarsharma7om@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/onkareshwar-sharma-b1a40132a",
    href: "https://www.linkedin.com/in/onkareshwar-sharma-b1a40132a/",
  },
  {
    label: "GitHub",
    value: "github.com/OnkarDsharma",
    href: "https://github.com/OnkarDsharma",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_18%,rgba(57,255,136,0.10),transparent_24%),radial-gradient(circle_at_78%_85%,rgba(255,176,32,0.10),transparent_24%),linear-gradient(180deg,#050705_0%,#070907_35%,#030402_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <WebGLShader />
      </div>
      <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.36),rgba(0,0,0,0.12)_22%,rgba(0,0,0,0.22)_60%,rgba(0,0,0,0.42)_100%)]" />

      <header className="sticky top-0 z-40 border-b border-primary/20 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="font-terminal text-xs tracking-[0.28em] text-primary sm:text-sm"
          >
            LAB.MEM_004{" "}
            <span className="text-foreground/60">
              // ONKARESHWAR SHARMA
            </span>
          </a>
          <nav className="hidden items-center gap-6 font-terminal text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex">
            <a href="#projects" className="transition hover:text-primary">
              [ Experiments ]
            </a>
            <a href="#skills" className="transition hover:text-primary">
              [ Divergence ]
            </a>
            <a href="#about" className="transition hover:text-primary">
              [ Dossier ]
            </a>
            <a href="#experience" className="transition hover:text-primary">
              [ Worldline ]
            </a>
            <a href="#contact" className="transition hover:text-primary">
              [ D-Mail ]
            </a>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative z-20">
        <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center justify-center px-6 py-20">
          <div className="max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 font-terminal text-xs uppercase tracking-[0.24em] text-primary">
              <span className="crt-glow h-2 w-2 rounded-full bg-primary" />
              Status: Online — Available for Experiments
            </div>

            <p className="font-terminal text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {"> "}Accessing Lab Member File
              <span className="cursor-blink" />
            </p>

            <h1 className="glitch-text mt-4 font-terminal text-5xl font-normal leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Onkareshwar Sharma
            </h1>

            <p className="mt-6 font-terminal text-xs uppercase tracking-[0.25em] text-secondary sm:text-sm">
              Full Stack Developer &amp; AI/ML Researcher — Future Gadget Lab
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
              Worldline Observed: 1.048596%
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 font-terminal text-xs uppercase tracking-[0.15em]">
              <a
                href="#projects"
                className="rounded-sm border border-primary/50 bg-primary/10 px-6 py-3 text-primary transition hover:bg-primary/20"
              >
                [ View Experiments ]
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-border px-6 py-3 text-foreground/80 transition hover:border-primary/50 hover:text-primary"
              >
                [ Send a D-Mail ]
              </a>
              <a
                href="/Onkareshwar_Sharma_Resume.pdf"
                download
                className="crt-glow rounded-sm border border-secondary/50 bg-secondary/10 px-6 py-3 text-secondary transition hover:bg-secondary/20"
              >
                [ Download Dossier ]
              </a>
            </div>
          </div>
        </div>
      </section>



      <section id="projects" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12 max-w-3xl">
              <p className="font-terminal text-sm uppercase tracking-[0.22em] text-primary/60">
                {"> "}Experiment Log
              </p>
              <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Logged Experiments
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/60">
                AI systems, production software, and products designed for
                impact, not tutorials or clones. Each entry below is a
                documented experiment — hypothesis, method, and observed
                results.
              </p>
            </div>

            <AnimatedCardStack projects={projectCards} logPrefix="EXP" />
          </div>

          <div id="open-source">
            <div className="mb-12 max-w-3xl">
              <p className="font-terminal text-sm uppercase tracking-[0.22em] text-secondary/60">
                {"> "}Transmission Log
              </p>
              <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                D-Mails to Other Worldlines
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/60">
                Small changes sent into codebases that weren&apos;t mine to
                begin with — contributing to real-world projects,
                collaborating with maintainers, and shipping reviewed changes.
              </p>
            </div>

            <AnimatedCardStack projects={openSourceCards} logPrefix="D-MAIL" />
          </div>
        </div>
      </section>


      <section id="skills" className="relative z-20 border-y border-primary/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="font-terminal text-sm uppercase tracking-[0.22em] text-primary/60">
              {"> "}Divergence Meter
            </p>
            <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Skills
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/60">
              Reading levels across each domain — the tools and stacks that
              hold steady no matter which worldline I&apos;m building in.
            </p>
          </div>

          <DivergenceMeter groups={skillGroups} />
        </div>
      </section>

      <section id="about" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Background</h3>
              <p className="mt-4 text-base leading-8 text-white/68">
                I build practical systems at the intersection of software
                engineering and AI. My portfolio leans into useful products:
                experiences that reduce friction, improve outcomes, and stay
                production-minded.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <p className="mt-4 text-base leading-8 text-white/68">
                I&apos;m pursuing B.Tech in Computer Science and Engineering at
                IIIT Naya Raipur, with a strong focus on full stack
                development, AI/ML applications, and production-oriented
                software systems.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Approach</h3>
              <p className="mt-4 text-base leading-8 text-white/68">
                I care about clean architecture, user clarity, and solving the
                real problem instead of just shipping features. Whether I&apos;m
                working on OCR validation, SaaS billing flows, or model-backed
                interfaces, I aim for systems that are understandable,
                maintainable, and production-minded.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white">Beyond Tech</h3>
              <p className="mt-4 text-base leading-8 text-white/68">
                I also lead the Art Society at my institute. That creative side
                shows up in how I think about visual communication, design
                polish, and presenting technical work in a memorable way.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-black/35 p-8 backdrop-blur-md">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-white/15 bg-white/5">
              <Image
                src="/Screenshot 2026-04-06 020330.png"
                alt="Onkareshwar Sharma"
                fill
                sizes="160px"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Currently
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  Open to software engineering internships and project
                  collaborations.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Strengths
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  Product thinking, system design instincts, technical
                  storytelling, and rapid iteration.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Personal note
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  Art, leadership, and visual design all influence how I build
                  software experiences.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="relative z-20 border-y border-white/10 bg-black/12">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Highlights
            </p>
          </div>

          <div className="space-y-5">
            {experienceItems.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                className="rounded-[1.8rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/55">
                      {item.organization}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-white/60">{item.period}</p>
                </div>
                <p className="mt-4 max-w-4xl text-base leading-8 text-white/68">
                  {item.details}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/Onkareshwar_Sharma_Resume.pdf"
              download
              className="inline-flex rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Download One-Page Resume
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl">
            Contact
          </p>
          <p className="mt-4 text-base leading-8 text-white/60">
            If you&apos;re hiring for a software engineering, full stack, or
            product-focused development role, I&apos;d love to connect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white">Start the conversation</h3>
            <p className="mt-4 text-base leading-8 text-white/68">
              The fastest path is LinkedIn. If you want to review my
              work first, you can also open my GitHub profile or download my
              resume directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Onkareshwar_Sharma_Resume.pdf"
                download
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {contact.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}