import { Lock } from "lucide-react";

type BrowserFrameProps = {
  src: string;
  alt: string;
  urlBar: string;
  className?: string;
  loading?: "lazy" | "eager";
  imageClassName?: string;
};

export function BrowserFrame({
  src,
  alt,
  urlBar,
  className = "",
  loading = "lazy",
  imageClassName = "max-h-[min(70vh,520px)] w-full rounded-md object-contain object-top",
}: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-zinc-950 shadow-2xl ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-3 border-b border-border/80 bg-muted/30 px-3 py-2.5">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" aria-hidden />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-border/60 bg-background/70 px-2.5 py-1 text-muted-foreground">
          <Lock className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
          <span className="truncate font-mono text-xs text-foreground/80">{urlBar}</span>
        </div>
      </div>
      <div className="bg-black/30 p-1.5">
        <img src={src} alt={alt} loading={loading} className={imageClassName} />
      </div>
    </div>
  );
}
