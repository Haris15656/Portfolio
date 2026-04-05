import { Link } from "react-router-dom";
import { Github } from "lucide-react";

type Project = {
  tag: string;
  tagColor: string;
  glowClass: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    tag: "FINAL YEAR PROJECT",
    tagColor: "text-cat-green border-cat-green/40",
    glowClass: "card-glow-green",
    title: "OptiFit.ai",
    description:
      "AI-powered fitness app with real-time exercise recognition, rep counting via MediaPipe & OpenCV, and personalized workout/diet plans using LLaMA 3.1.",
    tech: ["REACT NATIVE", "DJANGO NINJA", "LLAMA 3.1", "MEDIAPIPE", "OPENCV"],
    link: "/showcase/optifit",
    github: "https://github.com/Haris15656/Optifit.ai",
  },
  {
    tag: "FULL STACK",
    tagColor: "text-cat-green border-cat-green/40",
    glowClass: "card-glow-green",
    title: "EcoManage",
    description:
      "Environmental compliance dashboard for companies and industries: track emissions and solid waste, store limits per emission type in MySQL, and automatically flag breaches and apply penalties when readings exceed configurable red limits.",
    tech: ["REACT", "TAILWIND CSS", "NODE.JS", "EXPRESS", "MYSQL", "PHPMYADMIN"],
    link: "/showcase/ecomanage",
    github: "https://github.com/Haris15656/EcoManage",
  },
  {
    tag: "HACKATHON",
    tagColor: "text-cat-purple border-cat-purple/40",
    glowClass: "card-glow-blue",
    title: "Learnable.ai",
    description:
      "Transforms videos, audio & documents into summaries, mind maps, flashcards, and quizzes using Google Gemini AI and LangChain workflows.",
    tech: ["REACT TYPESCRIPT", "DJANGO NINJA", "LANGCHAIN", "GEMINI AI"],
  },
  {
    tag: "WEB3",
    tagColor: "text-cat-green border-cat-green/40",
    glowClass: "card-glow-green",
    title: "DecentraDomain",
    description:
      "Blockchain-based decentralized domain name system with secure registration, ownership transfer, and real-time dashboard using MultiChain.",
    tech: ["REACT", "FLASK", "MULTICHAIN", "JSON-RPC"],
    link: "/showcase/decentradomain",
    github: "https://github.com/Haris15656/DecentraDomain",
  },
  {
    tag: "QA AUTOMATION",
    tagColor: "text-cat-purple border-cat-purple/40",
    glowClass: "card-glow-blue",
    title: "Playwright UI Automation",
    description:
      "Automated browser test suite testing login flows and todo management across 2 real websites using Page Object Model architecture. 8 tests, 0 failures.",
    tech: ["PLAYWRIGHT", "PYTHON", "PYTEST", "POM"],
    link: "/showcase/playwright-ui-automation",
    github: "https://github.com/Haris15656/playwright-ui-automation",
  },
  {
    tag: "QA AUTOMATION",
    tagColor: "text-cat-purple border-cat-purple/40",
    glowClass: "card-glow-blue",
    title: "API Testing Framework",
    description:
      "REST API validation suite with response time benchmarking and schema validation. Tests status codes, error handling, and JSON structure across 8 test cases.",
    tech: ["PYTHON", "PYTEST", "REQUESTS"],
    link: "/showcase/api-testing-framework",
    github: "https://github.com/Haris15656/api-testing-framework",
  },
  {
    tag: "QA / ROBOTICS",
    tagColor: "text-cat-orange border-cat-orange/40",
    glowClass: "card-glow-orange",
    title: "Robot State Testing",
    description:
      "Autonomous robot state machine testing suite simulating real-world fault handling and recovery. 7 states, 15 test cases, live futuristic dark dashboard.",
    tech: ["PYTHON", "PYTEST", "STATE MACHINE TESTING"],
    link: "/showcase/robot-state-testing",
    github: "https://github.com/Haris15656/robot-state-testing",
  },
  {
    tag: "DATA SCIENCE",
    tagColor: "text-cat-orange border-cat-orange/40",
    glowClass: "card-glow-orange",
    title: "Movie Recommendation System",
    description:
      "ML recommendation engine using TF-IDF, CountVectorizer, and cosine similarity on the TMDB 5000 dataset with rich data visualizations.",
    tech: ["PYTHON", "SCIKIT-LEARN", "PANDAS", "NUMPY", "MATPLOTLIB"],
    github: "https://github.com/Haris15656/Movie-Recommender-System-",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto">
        <p className="section-label mb-3">WORK</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Selected Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl p-8 ${project.glowClass} hover:translate-y-[-2px] transition-transform duration-200`}
            >
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold border rounded-full mb-4 ${project.tagColor}`}
              >
                {project.tag}
              </span>
              <h3 className="text-xl font-bold font-serif mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(project.link || project.github) && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {project.link &&
                    (project.link.startsWith("/") ? (
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        📱 VIEW APP SHOWCASE →
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        📱 VIEW APP SHOWCASE →
                      </a>
                    ))}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github className="h-4 w-4 shrink-0" aria-hidden />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
