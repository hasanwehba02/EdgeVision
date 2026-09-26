import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Upscale",
  description: "Enlarge images 2x to 4x with interpolation and sharpening.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
