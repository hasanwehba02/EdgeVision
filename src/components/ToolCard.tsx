"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ToolCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ToolCard({
  href,
  icon: Icon,
  title,
  description,
  gradient,
  className,
}: ToolCardProps) {
  return (
    <motion.li
      variants={fadeUp}
      className={`group min-h-[13rem] list-none ${className ?? ""}`}
    >
      <Link href={href} className="block h-full focus-visible:rounded-[1.75rem]">
        <div className="relative h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-premium group-hover:-translate-y-1 md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[1.25rem] border border-white/10 bg-ev-surface/72 p-6 shadow-sm backdrop-blur md:p-6">
            <div
              className={`absolute -right-12 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-2xl transition-opacity duration-300 group-hover:opacity-55`}
            />

            <div className={`w-fit rounded-2xl border border-white/10 bg-gradient-to-br ${gradient} p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)]`}>
              <Icon className="h-4 w-4 text-white" strokeWidth={1.7} />
            </div>

            <div className="relative space-y-2.5">
              <h3 className="font-sora text-2xl font-semibold leading-[1.85rem] tracking-[-0.055em] text-ev-text-bright md:text-[1.7rem] md:leading-[2rem]">
                {title}
              </h3>
              <p className="max-w-[30ch] text-sm leading-6 text-ev-text-muted md:text-[0.95rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
