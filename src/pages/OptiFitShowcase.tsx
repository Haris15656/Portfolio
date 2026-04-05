import { useState } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OPTIFIT_GITHUB = "https://github.com/Haris15656/Optifit.ai";

const imageModules = import.meta.glob<string>("../assets/optifit/*.{jpeg,jpg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const screenshots = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const base = path.replace(/^.*\//, "").replace(/\.[^.]+$/, "");
    return { src, alt: base.replace(/[-_]/g, " ") };
  });

function PhoneFrame({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] select-none ${className}`}>
      <div className="relative rounded-[2.75rem] bg-gradient-to-b from-zinc-700/90 to-zinc-950 p-[10px] shadow-2xl ring-1 ring-white/10">
        <div className="pointer-events-none absolute -left-[3px] top-[22%] h-10 w-[3px] rounded-l-md bg-zinc-600/80" />
        <div className="pointer-events-none absolute -right-[3px] top-[28%] h-14 w-[3px] rounded-r-md bg-zinc-600/80" />
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <img
            src={src}
            alt={alt}
            loading={loading}
            className={`aspect-[9/19.5] w-full object-cover object-top ${imgClassName}`}
          />
        </div>
        <div className="mx-auto mt-2.5 h-1 w-[88px] rounded-full bg-zinc-600/70" />
      </div>
    </div>
  );
}

const OptiFitShowcase = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label mb-2">SHOWCASE</p>
              <h1 className="text-4xl font-bold md:text-5xl">OptiFit.ai</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                AI-powered fitness app — exercise recognition, rep counting, and personalized plans. Screenshots shown in a
                mobile frame to match the phone experience.
              </p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-end">
              <a
                href={OPTIFIT_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden />
                View on GitHub
              </a>
              <Link
                to="/#projects"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                ← Back to portfolio
              </Link>
            </div>
          </div>

          {screenshots.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-card/50 p-12 text-center text-muted-foreground">
              No screenshots found. Add images to <code className="text-foreground">src/assets/optifit</code>.
            </div>
          ) : (
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map(({ src }, index) => (
                <li key={src}>
                  <button
                    type="button"
                    onClick={() => setLightbox(src)}
                    className="group w-full text-left"
                    aria-label={`Open OptiFit screenshot ${index + 1}`}
                  >
                    <div className="transition-transform duration-200 group-hover:translate-y-[-4px]">
                      <div className="rounded-2xl bg-card/40 p-6 card-glow-green ring-1 ring-border/60">
                        <PhoneFrame src={src} alt={`OptiFit.ai screenshot ${index + 1}`} />
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          aria-label="Close fullscreen"
        >
          <span className="absolute right-4 top-20 text-sm text-muted-foreground md:top-24">Click outside to close</span>
          <div className="max-h-[90vh] max-w-[min(100%,420px)]" onClick={(e) => e.stopPropagation()}>
            <PhoneFrame
              src={lightbox}
              alt="OptiFit screenshot"
              className="max-w-[min(100%,380px)]"
              loading="eager"
            />
          </div>
        </button>
      )}

      <Footer />
    </div>
  );
};

export default OptiFitShowcase;
