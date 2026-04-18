"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GitBranch, Layers3 } from "lucide-react";

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

interface StackCard {
  id: number;
  projectIndex: number;
}

const positionStyles = [
  { scale: 1, y: 20 },
  { scale: 0.95, y: -12 },
  { scale: 0.9, y: -42 },
];

const exitAnimation = {
  y: 380,
  scale: 1,
  opacity: 0.96,
};

const enterAnimation = {
  y: -18,
  scale: 0.9,
  opacity: 0.9,
};

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

function AnimatedCard({
  card,
  index,
  project,
  isAnimating,
}: {
  card: StackCard;
  index: number;
  project: AnimatedProjectCardItem;
  isAnimating: boolean;
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2];
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index;
  const exitAnim = index === 0 ? exitAnimation : undefined;
  const initialAnim = index === 2 ? enterAnimation : undefined;

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale, opacity: 1 }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 0.75,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[620px] w-full max-w-[920px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/75 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl will-change-transform"
    >
      <div className="h-full w-full rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4 sm:p-5">
        <ProjectCardContent project={project} />
      </div>
    </motion.div>
  );
}

export default function AnimatedCardStack({
  projects,
}: AnimatedCardStackProps) {
  const visibleProjects = useMemo(() => projects.slice(0, 3), [projects]);
  const [cards, setCards] = useState<StackCard[]>(
    visibleProjects.map((_, index) => ({
      id: index + 1,
      projectIndex: index,
    }))
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(4);

  if (visibleProjects.length < 3) {
    return null;
  }

  const handleAnimate = () => {
    if (isAnimating) {
      return;
    }

    setIsAnimating(true);

    const nextProjectIndex =
      (cards[cards.length - 1]?.projectIndex + 1) % visibleProjects.length;

    setCards([
      ...cards.slice(1),
      {
        id: nextId,
        projectIndex: nextProjectIndex,
      },
    ]);
    setNextId((prev) => prev + 1);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 750);
  };

  const activeProject = visibleProjects[cards[0]?.projectIndex ?? 0];

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-[700px] w-full overflow-hidden pt-12">
        <AnimatePresence initial={false}>
          {cards.map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              project={visibleProjects[card.projectIndex]}
              isAnimating={isAnimating}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full max-w-[920px] flex-wrap items-center justify-between gap-4 border-t border-white/10 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Current project
          </p>
          <p className="mt-1 text-sm text-white/72">{activeProject.title}</p>
        </div>

        <button
          onClick={handleAnimate}
          disabled={isAnimating}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-5 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Next Project
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
