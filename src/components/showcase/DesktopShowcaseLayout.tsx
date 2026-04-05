import { useState } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrowserFrame } from "./BrowserFrame";

export type ShowcaseScreenshot = { src: string; alt: string };

type DesktopShowcaseLayoutProps = {
  title: string;
  description: string;
  urlBar: string;
  screenshots: ShowcaseScreenshot[];
  emptyFolderHint: string;
  cardGlowClass?: string;
  githubUrl?: string;
};

export function DesktopShowcaseLayout({
  title,
  description,
  urlBar,
  screenshots,
  emptyFolderHint,
  cardGlowClass = "card-glow-green",
  githubUrl,
}: DesktopShowcaseLayoutProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label mb-2">SHOWCASE</p>
              <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-end">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" aria-hidden />
                  View on GitHub
                </a>
              )}
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
              No screenshots found. Add images to <code className="text-foreground">{emptyFolderHint}</code>.
            </div>
          ) : (
            <ul className="mx-auto flex max-w-4xl flex-col gap-10">
              {screenshots.map(({ src }, index) => (
                <li key={src}>
                  <button
                    type="button"
                    onClick={() => setLightbox(src)}
                    className="group w-full text-left"
                    aria-label={`Open screenshot ${index + 1}`}
                  >
                    <div className="transition-transform duration-200 group-hover:translate-y-[-4px]">
                      <div className={`rounded-2xl bg-card/40 p-4 ring-1 ring-border/60 md:p-6 ${cardGlowClass}`}>
                        <BrowserFrame src={src} alt={`${title} screenshot ${index + 1}`} urlBar={urlBar} />
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
          <div className="max-h-[92vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <BrowserFrame
              src={lightbox}
              alt={`${title} screenshot`}
              urlBar={urlBar}
              loading="eager"
              imageClassName="max-h-[min(88vh,860px)] w-full rounded-md object-contain object-top"
            />
          </div>
        </button>
      )}

      <Footer />
    </div>
  );
}
