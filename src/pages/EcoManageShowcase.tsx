import { DesktopShowcaseLayout } from "@/components/showcase/DesktopShowcaseLayout";

const imageModules = import.meta.glob<string>("../assets/ecomanage/*.{jpeg,jpg,png,webp}", {
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

const EcoManageShowcase = () => (
  <DesktopShowcaseLayout
    title="EcoManage"
    description="Full-stack environmental compliance — emissions and solid waste for companies and industries, MySQL-backed limits per type, and penalties when readings cross red thresholds. Desktop web app; screenshots in a browser frame."
    urlBar="ecomanage.local / dashboard"
    screenshots={screenshots}
    emptyFolderHint="src/assets/ecomanage"
    cardGlowClass="card-glow-green"
    githubUrl="https://github.com/Haris15656/EcoManage"
  />
);

export default EcoManageShowcase;
