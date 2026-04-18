import AnimatedCardStack, {
  type AnimatedProjectCardItem,
} from "@/components/ui/animate-card-animation";

const demoProjects: AnimatedProjectCardItem[] = [
  {
    id: 1,
    title: "CSC Sarthi",
    category: "AI-Powered Pre-Submission Assistant",
    summary:
      "An AI-assisted validation platform for government service workflows, focused on reducing rejection errors before final submission.",
    problem:
      "Applicants often submit incomplete forms and mismatched documents without getting guidance early enough.",
    solution:
      "OCR document checks, real-time form risk detection, and a guided pre-check flow before submission.",
    role:
      "Full-stack product build across validation logic, dashboarding, and ML-backed verification.",
    impact: ["87% validation accuracy", "30+ services", "~40% fewer errors"],
    stack: ["Python", "Django", "OCR", "Scikit-learn", "Render"],
    github: "https://github.com/OnkarDsharma",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Cross-Age Face Verification",
    category: "Computer Vision + Full Stack Delivery",
    summary:
      "A computer vision system for identity verification across age gaps, delivered through a web app with live uploads.",
    problem:
      "Traditional identity verification becomes less reliable when faces change significantly over time.",
    solution:
      "ResNet50 age modeling paired with Facenet512 verification and tuned similarity thresholds.",
    role:
      "Model selection, training, threshold tuning, evaluation, and product delivery through Flask.",
    impact: ["93.6% ROC-AUC", "85.3% accuracy", "~2.4 age MAE"],
    stack: ["Python", "TensorFlow", "DeepFace", "Flask"],
    github: "https://github.com/OnkarDsharma",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "LiteLLM",
    category: "AI Access SaaS Platform",
    summary:
      "A micro-subscription SaaS product for short-term premium LLM usage with cost control and responsive chat delivery.",
    problem:
      "Short-term users often need premium AI access without committing to expensive full subscriptions.",
    solution:
      "Hybrid rate limiting, tiered storage, Stripe billing, prompt caching, and SSE chat streaming.",
    role:
      "Product architecture, billing flow, storage design, and real-time chat implementation.",
    impact: ["100K token ceiling", "3-tier storage design", "SSE responses"],
    stack: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
    github: "https://github.com/OnkarDsharma",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function DemoOne() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-black tracking-tight sm:text-5xl">
          Animated Project Stack
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-white/60">
          A reusable stacked-card component driven by your real portfolio
          project data.
        </p>
        <div className="mt-10">
          <AnimatedCardStack projects={demoProjects} />
        </div>
      </div>
    </main>
  );
}
