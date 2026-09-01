"use client";

import { motion } from "framer-motion";

export interface DivergenceGroup {
  title: string;
  items: string[];
}

const smoothEase = [0.16, 1, 0.3, 1] as const;

function SkillCard({ group, index }: { group: DivergenceGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: smoothEase }}
      className="rounded-[1.4rem] border border-primary/15 bg-black/40 p-5 backdrop-blur-md"
    >
      <h3 className="font-terminal text-sm uppercase tracking-[0.15em] text-foreground">
        {group.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-primary/10 bg-primary/[0.04] px-3 py-1.5 text-xs font-medium text-foreground/82"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function DivergenceMeter({
  groups,
}: {
  groups: DivergenceGroup[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {groups.map((group, index) => (
        <SkillCard key={group.title} group={group} index={index} />
      ))}
    </div>
  );
}