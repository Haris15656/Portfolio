import { DesktopShowcaseLayout } from "@/components/showcase/DesktopShowcaseLayout";

const imageModules = import.meta.glob<string>("../assets/decentradomain/*.{jpeg,jpg,png,webp}", {
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

const DecentraDomainShowcase = () => (
  <DesktopShowcaseLayout
    title="DecentraDomain"
    description="Web3 decentralized domain system — registration, ownership transfer, and a real-time dashboard. Shots are framed as a desktop browser (web app, not mobile)."
    urlBar="decentradomain.local / dashboard"
    screenshots={screenshots}
    emptyFolderHint="src/assets/decentradomain"
    cardGlowClass="card-glow-green"
    githubUrl="https://github.com/Haris15656/DecentraDomain"
  />
);

export default DecentraDomainShowcase;
