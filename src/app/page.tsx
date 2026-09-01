import Image from "next/image";
import AnimatedCardStack, {
  type AnimatedProjectCardItem,
} from "@/components/ui/animate-card-animation";
import DivergenceMeter from "@/components/ui/divergence-meter";
import DivergenceReadout from "@/components/ui/divergence-readout";
import PixelClock from "@/components/ui/pixel-clock";
import TextureBackdrop from "@/components/ui/texture-backdrop";
import WorldlineChart from "@/components/ui/worldline-chart";

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
    <main className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <section id="hero" className="relative overflow-hidden">
        <TextureBackdrop />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* faint centered giant, sits at the very back for depth behind the text */}
          <PixelClock
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
            size={860}
            rotate={6}
            hourDuration={90}
            minuteDuration={22}
          />

          {/* top-left cluster: two large ones stacked, a third overlapping both */}
          <PixelClock
            className="absolute -left-28 -top-24"
            size={650}
            rotate={-16}
            hourDuration={72}
            minuteDuration={18}
          />
          <PixelClock
            className="absolute left-[4%] -top-6"
            size={320}
            rotate={12}
            hourDuration={44}
            minuteDuration={11}
          />
          <PixelClock
            className="absolute -left-4 top-[2%]"
            size={590}
            rotate={22}
            hourDuration={58}
            minuteDuration={15}
          />

          {/* top-right cluster */}
          <PixelClock
            className="absolute -right-32 -top-20"
            size={700}
            rotate={18}
            hourDuration={60}
            minuteDuration={15}
          />
          <PixelClock
            className="absolute right-[2%] top-[8%]"
            size={340}
            rotate={-16}
            hourDuration={50}
            minuteDuration={12}
          />
          <PixelClock
            className="absolute right-[26%] -top-8"
            size={260}
            rotate={-9}
            hourDuration={40}
            minuteDuration={10}
          />

          {/* scattered mid-frame fillers */}
          <PixelClock
            className="absolute left-[16%] top-[38%]"
            size={230}
            rotate={-26}
            hourDuration={38}
            minuteDuration={9}
          />
          <PixelClock
            className="absolute right-[6%] top-[32%]"
            size={380}
            rotate={9}
            hourDuration={54}
            minuteDuration={13}
          />
          <PixelClock
            className="absolute left-[38%] top-[10%]"
            size={300}
            rotate={-11}
            hourDuration={48}
            minuteDuration={12}
          />
          <PixelClock
            className="absolute right-[32%] bottom-[12%]"
            size={340}
            rotate={19}
            hourDuration={52}
            minuteDuration={13}
          />

          {/* bottom-left cluster */}
          <PixelClock
            className="absolute -left-24 -bottom-28"
            size={680}
            rotate={13}
            hourDuration={66}
            minuteDuration={16}
          />
          <PixelClock
            className="absolute left-[7%] -bottom-6"
            size={340}
            rotate={-20}
            hourDuration={46}
            minuteDuration={11}
          />
          <PixelClock
            className="absolute left-[27%] bottom-[6%]"
            size={260}
            rotate={17}
            hourDuration={42}
            minuteDuration={10}
          />

          {/* bottom-right cluster */}
          <PixelClock
            className="absolute -right-28 -bottom-32"
            size={620}
            rotate={-24}
            hourDuration={56}
            minuteDuration={14}
          />
          <PixelClock
            className="absolute right-[8%] -bottom-4"
            size={360}
            rotate={24}
            hourDuration={48}
            minuteDuration={11}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(3,4,3,0.55)_0%,rgba(3,4,3,0.15)_45%,rgba(3,4,3,0)_70%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="font-terminal text-5xl font-normal leading-[0.95] tracking-tight text-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] sm:text-6xl lg:text-7xl">
            Onkareshwar Sharma
          </h1>
          <p className="mt-4 font-terminal text-xs uppercase tracking-[0.25em] text-secondary sm:text-sm">
            Full Stack Developer &amp; AI/ML Enthusiast
          </p>

          <div className="mt-10 w-full max-w-xl rounded-2xl bg-black/70 p-6 text-left backdrop-blur-md">
            <p className="font-terminal text-xs uppercase tracking-[0.18em] text-primary/70">
              tl;dr
            </p>
            <p className="mt-3 text-base leading-7 text-foreground/88">
              I build practical software at the intersection of engineering
              and AI — currently pursuing a B.Tech in CSE at IIIT Naya Raipur.
              I care about clean architecture and shipping things that
              actually work. Outside of code, I lead the Art Society on
              campus.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 font-terminal text-xs uppercase tracking-[0.15em]">
            <a
              href="#projects"
              className="rounded-sm border border-primary/50 bg-primary/10 px-6 py-3 text-primary transition hover:bg-primary/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-border px-6 py-3 text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              Get in Touch
            </a>
            <a
              href="/Onkareshwar_Sharma_Resume.pdf"
              download
              className="crt-glow rounded-sm border border-secondary/50 bg-secondary/10 px-6 py-3 text-secondary transition hover:bg-secondary/20"
            >
              Download Resume
            </a>
            </div>
          </div>
      </section>



      <section id="projects" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-12 max-w-3xl">
              <p className="font-terminal text-xs uppercase tracking-[0.22em] text-primary/50">
                Projects
              </p>
              <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Strong builds over filler projects
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/85">
                AI systems, production software, and products designed for
                impact, not tutorials or clones.
              </p>
            </div>

            <AnimatedCardStack projects={projectCards} logPrefix="EXP" />
          </div>

          <div id="open-source">
            <div className="mb-12 max-w-3xl">
              <p className="font-terminal text-xs uppercase tracking-[0.22em] text-secondary/50">
                Open Source
              </p>
              <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                Code shipped to production
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/85">
                Contributing to real-world codebases, collaborating with
                maintainers, and shipping reviewed changes.
              </p>
            </div>

            <AnimatedCardStack projects={openSourceCards} logPrefix="D-MAIL" />
          </div>
        </div>
      </section>


      <section id="skills" className="relative z-20 border-y border-primary/10 bg-black/35">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="font-terminal text-xs uppercase tracking-[0.22em] text-primary/50">
              Skills
            </p>
            <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Tools I work with
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/85">
              Core languages, frameworks, and tools across the stack.
            </p>
          </div>

          <DivergenceMeter groups={skillGroups} />
        </div>
      </section>

      <section id="about" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="font-terminal text-xs uppercase tracking-[0.22em] text-primary/50">
            About
          </p>
          <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-primary/15 bg-black/60 p-6 backdrop-blur-md">
              <h3 className="font-terminal text-xl font-normal text-foreground">
                Background
              </h3>
              <p className="mt-4 text-base leading-8 text-foreground/82">
                I build practical systems at the intersection of software
                engineering and AI. My portfolio leans into useful products:
                experiences that reduce friction, improve outcomes, and stay
                production-minded.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-primary/15 bg-black/60 p-6 backdrop-blur-md">
              <h3 className="font-terminal text-xl font-normal text-foreground">
                Education
              </h3>
              <p className="mt-4 text-base leading-8 text-foreground/82">
                I&apos;m pursuing B.Tech in Computer Science and Engineering at
                IIIT Naya Raipur, with a strong focus on full stack
                development, AI/ML applications, and production-oriented
                software systems.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-primary/15 bg-black/60 p-6 backdrop-blur-md">
              <h3 className="font-terminal text-xl font-normal text-foreground">
                Approach
              </h3>
              <p className="mt-4 text-base leading-8 text-foreground/82">
                I care about clean architecture, user clarity, and solving the
                real problem instead of just shipping features. Whether I&apos;m
                working on OCR validation, SaaS billing flows, or model-backed
                interfaces, I aim for systems that are understandable,
                maintainable, and production-minded.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-secondary/15 bg-black/60 p-6 backdrop-blur-md">
              <h3 className="font-terminal text-xl font-normal text-foreground">
                Beyond Tech
              </h3>
              <p className="mt-4 text-base leading-8 text-foreground/82">
                I also lead the Art Society at my institute. That creative side
                shows up in how I think about visual communication, design
                polish, and presenting technical work in a memorable way.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-primary/15 bg-black/60 p-8 backdrop-blur-md">
            <div className="crt-glow relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-primary/40 bg-black/40">
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
              <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-4">
                <p className="font-terminal text-xs uppercase tracking-[0.18em] text-primary/55">
                  Currently
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/85">
                  Open to software engineering internships and project
                  collaborations.
                </p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-4">
                <p className="font-terminal text-xs uppercase tracking-[0.18em] text-primary/55">
                  Strengths
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/85">
                  Product thinking, system design instincts, technical
                  storytelling, and rapid iteration.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary/10 bg-secondary/[0.03] p-4">
                <p className="font-terminal text-xs uppercase tracking-[0.18em] text-secondary/60">
                  Personal Note
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground/85">
                  Art, leadership, and visual design all influence how I build
                  software experiences.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" className="relative z-20 border-y border-primary/10 bg-black/35">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="font-terminal text-xs uppercase tracking-[0.22em] text-primary/50">
              Experience
            </p>
            <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Highlights
            </h2>
          </div>

          <WorldlineChart events={experienceItems} />

          <div className="mt-10">
            <a
              href="/Onkareshwar_Sharma_Resume.pdf"
              download
              className="inline-flex rounded-sm border border-primary/40 bg-primary/10 px-6 py-3 font-terminal text-xs uppercase tracking-[0.15em] text-primary transition hover:bg-primary/20"
            >
              Download One-Page Resume
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="font-terminal text-xs uppercase tracking-[0.22em] text-primary/50">
            Contact
          </p>
          <h2 className="mt-4 font-terminal text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/85">
            If you&apos;re hiring for a software engineering, full stack, or
            product-focused development role, I&apos;d love to connect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-primary/15 bg-black/60 p-6 backdrop-blur-md">
            <h3 className="font-terminal text-xl font-normal text-foreground">
              Start the conversation
            </h3>
            <p className="mt-4 text-base leading-8 text-foreground/82">
              The fastest path is LinkedIn. If you want to review my work
              first, you can also open my GitHub profile or download my
              resume directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-terminal text-xs uppercase tracking-[0.14em]">
              <a
                href="/Onkareshwar_Sharma_Resume.pdf"
                download
                className="rounded-sm border border-primary/40 bg-primary/10 px-5 py-2.5 text-primary transition hover:bg-primary/20"
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
                className="rounded-[1.6rem] border border-primary/15 bg-black/60 p-5 backdrop-blur-md transition hover:border-primary/40 hover:bg-primary/[0.05]"
              >
                <p className="font-terminal text-xs uppercase tracking-[0.18em] text-primary/60">
                  {contact.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/85">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <DivergenceReadout />
    </main>
  );
}