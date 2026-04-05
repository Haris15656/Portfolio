import { DesktopShowcaseLayout } from "@/components/showcase/DesktopShowcaseLayout";

const imageModules = import.meta.glob<string>("../assets/apitestingframework/*.{jpeg,jpg,png,webp}", {
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

const ApiTestingShowcase = () => (
  <DesktopShowcaseLayout
    title="API Testing Framework"
    description="REST API validation — response times, schema checks, status codes, and error handling across test cases. Screenshots from pytest and terminal output."
    urlBar="pytest.local / api-tests"
    screenshots={screenshots}
    emptyFolderHint="src/assets/apitestingframework"
    cardGlowClass="card-glow-blue"
    githubUrl="https://github.com/Haris15656/api-testing-framework"
  />
);

export default ApiTestingShowcase;
