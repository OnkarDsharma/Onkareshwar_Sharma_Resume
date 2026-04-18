import Image from "next/image";
import AnimatedCardStack, {
  type AnimatedProjectCardItem,
} from "@/components/ui/animate-card-animation";
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
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
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
  {
    id: 3,
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
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "Django", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
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
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Linux", "VS Code", "Render", "AWS", "Postman", "Stripe"],
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
    period: "August 2025 - Present",
    details:
      "Lead a team of 50 students while organizing campus-wide cultural events and workshops.",
  },
  {
    label: "Volunteer",
    title: "Sponsorship Team Member",
    organization: "Media Matrix 2024",
    period: "September 2024 - November 2024",
    details:
      "Worked with corporate sponsors to secure funding and partnerships for the college fest.",
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
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_78%_85%,rgba(255,190,120,0.12),transparent_24%),linear-gradient(180deg,#060606_0%,#090909_35%,#040404_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-95">
        <WebGLShader />
      </div>
      <div className="pointer-events-none fixed inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.36),rgba(0,0,0,0.12)_22%,rgba(0,0,0,0.22)_60%,rgba(0,0,0,0.42)_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-sm font-semibold tracking-[0.24em] text-white/90">
            ONKARESHWAR SHARMA
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative z-20">
        <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center justify-center px-6 py-20">
          <div className="max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
              Available for projects and internships
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/55">
              Hello, I&apos;m
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Onkareshwar Sharma
            </h1>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-white/60 sm:text-base">
              Full Stack Developer and AIML Enthusiast
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get in Touch
              </a>
              <a
                href="/Onkareshwar_Sharma_Resume.pdf"
                download
                className="rounded-full border border-cyan-300/60 bg-gradient-to-r from-cyan-400/35 to-emerald-400/30 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(34,211,238,0.35)] transition hover:from-cyan-300/45 hover:to-emerald-300/40"
              >
                Download Resume
              </a>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">3</p>
                <p className="mt-2 text-sm text-white/55">Core portfolio projects</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">2</p>
                <p className="mt-2 text-sm text-white/55">Major competition wins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Strong builds over filler projects
          </h2>
          <p className="mt-4 text-base leading-8 text-white/60">
            These are the projects that best represent how I think: solving a
            real problem, choosing the right stack, and shipping something with
            clear technical depth and measurable outcomes.
          </p>
        </div>

        <AnimatedCardStack projects={projectCards} />
      </section>

      <section id="skills" className="relative z-20 border-y border-white/10 bg-black/12">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.05] px-3 py-2 text-sm text-white/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              Experience timeline
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
