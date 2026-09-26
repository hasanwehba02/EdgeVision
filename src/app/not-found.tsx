import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center">
      <p className="font-sora text-sm font-medium text-ev-accent">404</p>
      <h1 className="mt-2 font-sora text-2xl md:text-3xl font-semibold tracking-tight text-ev-text-bright">
        This page doesn’t exist
      </h1>
      <p className="mt-3 max-w-[40ch] text-sm text-ev-text-muted leading-relaxed">
        The tool you’re looking for may have been moved or renamed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-ev-border text-ev-text-bright font-sora text-sm font-medium transition-colors duration-200 hover:border-ev-accent/40 hover:text-ev-accent"
      >
        Back to all tools
      </Link>
    </div>
  );
}
