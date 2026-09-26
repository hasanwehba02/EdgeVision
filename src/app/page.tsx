"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eraser,
  ImagePlus,
  SunMedium,
  Crop,
  FileDown,
  Maximize,
  Sparkles,
} from "lucide-react";
import { ToolCard } from "@/components/ToolCard";
import { ThemeToggle } from "@/components/ThemeToggle";

const tools = [
  {
    href: "/remove-background",
    icon: Eraser,
    title: "Remove Background",
    description: "Erase the background from a photo and export it with transparency.",
    gradient: "from-sky-300 via-cyan-400 to-blue-500",
  },
  {
    href: "/replace-background",
    icon: ImagePlus,
    title: "Replace Background",
    description: "Swap the background for a solid color or one of your own images.",
    gradient: "from-fuchsia-400 via-pink-400 to-orange-300",
  },
  {
    href: "/enhance",
    icon: SunMedium,
    title: "Auto Enhance",
    description: "Fix brightness, contrast, and color in one click, with sliders for fine-tuning.",
    gradient: "from-amber-200 via-yellow-400 to-orange-500",
  },
  {
    href: "/smart-crop",
    icon: Crop,
    title: "Smart Crop",
    description: "Crop to preset ratios for Instagram, YouTube, and Stories — or draw your own.",
    gradient: "from-lime-300 via-emerald-400 to-teal-500",
  },
  {
    href: "/compress",
    icon: FileDown,
    title: "Compress",
    description: "Shrink file size with quality, format, and dimension controls.",
    gradient: "from-violet-300 via-purple-500 to-indigo-500",
  },
  {
    href: "/upscale",
    icon: Maximize,
    title: "Upscale",
    description: "Enlarge images 2x–4x with sharpening.",
    gradient: "from-cyan-200 via-indigo-400 to-fuchsia-500",
  },
  {
    href: "/denoise",
    icon: Sparkles,
    title: "Denoise",
    description: "Remove grain and noise from photos.",
    gradient: "from-rose-300 via-red-400 to-orange-400",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="w-full border-b border-ev-border/60 bg-ev-black/35 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-ev-border bg-white/[0.04]">
              <span className="h-2.5 w-2.5 rounded-full bg-ev-accent" />
            </span>
            <span className="font-sora text-lg font-semibold tracking-tight text-ev-text-bright">
              EdgeVision
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-14 md:py-20">
        <section className="max-w-[680px]">
          <h1 className="font-sora text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-ev-text-bright">
            Edit images right in your browser.
          </h1>
          <p className="mt-4 max-w-[52ch] text-base leading-7 text-ev-text-muted md:text-lg md:leading-8">
            Cut out backgrounds, fix color, crop, compress, upscale, and
            denoise — without uploading your files anywhere.
          </p>
        </section>

        <motion.ul
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 lg:gap-5"
        >
          {tools.map((tool, i) => (
            <ToolCard
              key={tool.href}
              {...tool}
              className={i === tools.length - 1 ? "md:col-span-3 md:min-h-[10rem]" : ""}
            />
          ))}
        </motion.ul>
      </main>
    </div>
  );
}
