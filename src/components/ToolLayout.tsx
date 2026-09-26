"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-ev-border/60">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-ev-border bg-white/[0.04]">
              <span className="h-2.5 w-2.5 rounded-full bg-ev-accent" />
            </span>
            <span className="font-sora text-lg font-semibold tracking-tight text-ev-text-bright">
              EdgeVision
            </span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-[720px] mx-auto px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Back + title */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-ev-text-muted hover:text-ev-accent transition-colors duration-200"
            >
              <ArrowLeft className="w-3 h-3" strokeWidth={2} />
              All tools
            </Link>
            <h1 className="font-sora text-2xl md:text-3xl font-semibold tracking-tight text-ev-text-bright">
              {title}
            </h1>
            <p className="text-sm text-ev-text-muted leading-relaxed max-w-[50ch]">
              {description}
            </p>
          </div>

          {/* Tool content */}
          {children}
        </motion.div>
      </main>
    </div>
  );
}
