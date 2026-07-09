"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GitBranch, Layers3, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedProjectCardItem {
  id: number;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  impact: string[];
  stack: string[];
  github: string;
  image: string;
}

interface AnimatedCardStackProps {
  projects: AnimatedProjectCardItem[];
}

function ProjectCardContent({ project }: { project: AnimatedProjectCardItem }) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="relative h-[220px] w-full overflow-hidden rounded-[1.25rem] border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 920px"
          className="select-none object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="grid gap-4 px-1 pb-1 sm:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="text-sm leading-7 text-white/72">{project.summary}</p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Problem
              </p>
              <p className="mt-2 text-sm leading-7 text-white/68">
                {project.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Solution
              </p>
              <p className="mt-2 text-sm leading-7 text-white/68">
                {project.solution}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Role
              </p>
              <p className="mt-2 text-sm leading-7 text-white/68">
                {project.role}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
          <div>
            <div className="flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-3 py-1 text-xs font-medium text-cyan-50/85"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-white/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              <GitBranch className="h-4 w-4" />
              Source Code
            </a>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-medium text-white/65">
              <Layers3 className="h-4 w-4" />
              Interactive stack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stackOffsets = [
  "z-30 hover:-translate-y-6",
  "translate-x-12 translate-y-10 z-20 grayscale-[60%] hover:-translate-y-2 hover:grayscale-0",
  "translate-x-24 translate-y-20 z-10 grayscale-[60%] hover:translate-y-9 hover:grayscale-0",
];

function PreviewCard({
  project,
  index,
  onOpen,
}: {
  project: AnimatedProjectCardItem;
  index: number;
  onOpen: (
    project: AnimatedProjectCardItem,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(project, event)}
      className={cn(
        "[grid-area:stack] relative flex h-48 w-full max-w-[26rem] -skew-y-[8deg] flex-col justify-between rounded-xl border-2 border-white/10 bg-black/70 px-6 py-5 text-left backdrop-blur-sm transition-all duration-500 ease-out hover:z-40 hover:skew-y-0 hover:border-cyan-300/40 hover:bg-black/85",
        stackOffsets[index]
      )}
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-cyan-500/20 p-2">
          <Layers3 className="h-4 w-4 text-cyan-300" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200/80">
          {project.category}
        </p>
      </div>
      <p className="text-2xl font-semibold text-white">{project.title}</p>
      <p className="line-clamp-2 text-sm text-white/55">{project.summary}</p>
    </button>
  );
}

export default function AnimatedCardStack({
  projects,
}: AnimatedCardStackProps) {
  const [openProject, setOpenProject] =
    useState<AnimatedProjectCardItem | null>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);
  const visibleProjects = projects.slice(0, 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!openProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [openProject]);

  const handleOpen = (
    project: AnimatedProjectCardItem,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({
      x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
      y: ((rect.top + rect.height / 2) / window.innerHeight) * 100,
    });
    setOpenProject(project);
  };

  const smoothEase = [0.16, 1, 0.3, 1] as const;

  const modal = (
    <AnimatePresence>
      {openProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: smoothEase }}
          onClick={() => setOpenProject(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.35 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-[920px] overflow-y-auto rounded-[2rem] border border-white/10 bg-black/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5"
          >
            <button
              type="button"
              onClick={() => setOpenProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/50 p-2 text-white/70 transition hover:bg-black/80 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <ProjectCardContent project={openProject} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="grid [grid-template-areas:'stack'] place-items-center py-16">
        {visibleProjects.map((project, index) => (
          <PreviewCard
            key={project.id}
            project={project}
            index={index}
            onOpen={handleOpen}
          />
        ))}
      </div>

      {mounted ? createPortal(modal, document.body) : null}
    </>
  );
}