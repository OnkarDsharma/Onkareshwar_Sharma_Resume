"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WorldlineEvent {
  label: string;
  title: string;
  organization: string;
  period: string;
  details: string;
}

const smoothEase = [0.16, 1, 0.3, 1] as const;

function accentFor(label: string) {
  return label.toLowerCase() === "leadership" ? "secondary" : "primary";
}

function WorldlineNode({
  item,
  index,
  isLast,
}: {
  item: WorldlineEvent;
  index: number;
  isLast: boolean;
}) {
  const accent = accentFor(item.label);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: smoothEase }}
      className="relative pl-10"
    >
      {!isLast && (
        <span
          className={cn(
            "absolute left-[5px] top-4 bottom-[-2rem] w-px",
            accent === "secondary" ? "bg-secondary/15" : "bg-primary/15"
          )}
        />
      )}
      <span
        className={cn(
          "crt-glow absolute left-0 top-1.5 h-3 w-3 rounded-full border",
          accent === "secondary"
            ? "border-secondary bg-secondary"
            : "border-primary bg-primary"
        )}
      />

      <div
        className={cn(
          "rounded-[1.8rem] border p-6 backdrop-blur-md",
          accent === "secondary"
            ? "border-secondary/15 bg-secondary/[0.03]"
            : "border-primary/15 bg-primary/[0.03]"
        )}
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p
              className={cn(
                "font-terminal text-xs uppercase tracking-[0.18em]",
                accent === "secondary" ? "text-secondary/80" : "text-primary/80"
              )}
            >
              {item.label}
            </p>
            <h3 className="mt-2 font-terminal text-xl font-normal text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-foreground/75">
              {item.organization}
            </p>
          </div>
          <p className="font-terminal text-sm text-foreground/78">
            {item.period}
          </p>
        </div>
        <p className="mt-4 max-w-4xl text-base leading-8 text-foreground/82">
          {item.details}
        </p>
      </div>
    </motion.div>
  );
}

export default function WorldlineChart({
  events,
}: {
  events: WorldlineEvent[];
}) {
  return (
    <div className="space-y-8">
      {events.map((item, index) => (
        <WorldlineNode
          key={`${item.title}-${item.period}`}
          item={item}
          index={index}
          isLast={index === events.length - 1}
        />
      ))}
    </div>
  );
}