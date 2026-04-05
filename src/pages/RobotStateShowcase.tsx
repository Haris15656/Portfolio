import { DesktopShowcaseLayout } from "@/components/showcase/DesktopShowcaseLayout";

const imageModules = import.meta.glob<string>("../assets/robotstatetesting/*.{jpeg,jpg,png,webp}", {
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

const RobotStateShowcase = () => (
  <DesktopShowcaseLayout
    title="Robot State Testing"
    description="Autonomous robot state machine tests — fault handling, recovery, and the live dashboard. Screenshots from the test suite and UI."
    urlBar="robot-qa.local / state-dashboard"
    screenshots={screenshots}
    emptyFolderHint="src/assets/robotstatetesting"
    cardGlowClass="card-glow-orange"
    githubUrl="https://github.com/Haris15656/robot-state-testing"
  />
);

export default RobotStateShowcase;
