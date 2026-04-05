import { DesktopShowcaseLayout } from "@/components/showcase/DesktopShowcaseLayout";

const imageModules = import.meta.glob<string>("../assets/playright_UI_automation/*.{jpeg,jpg,png,webp}", {
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

const PlaywrightShowcase = () => (
  <DesktopShowcaseLayout
    title="Playwright UI Automation"
    description="Automated browser tests — login flows and todo management across real sites using Page Object Model. Screenshots from runs and reports (desktop view)."
    urlBar="playwright-report.local / index.html"
    screenshots={screenshots}
    emptyFolderHint="src/assets/playright_UI_automation"
    cardGlowClass="card-glow-blue"
    githubUrl="https://github.com/Haris15656/playwright-ui-automation"
  />
);

export default PlaywrightShowcase;
