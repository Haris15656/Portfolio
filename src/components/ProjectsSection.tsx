import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      tag: t('projects.items.optifit.tag'),
      tagColor: "text-cat-green border-cat-green/40",
      glowClass: "card-glow-green",
      title: "OptiFit.ai",
      description: t('projects.items.optifit.desc'),
      tech: ["REACT NATIVE", "DJANGO NINJA", "LLAMA 3.1", "MEDIAPIPE", "OPENCV"],
      link: "/showcase/optifit",
      github: "https://github.com/Haris15656/Optifit.ai",
    },
    {
      tag: t('projects.items.ecomanage.tag'),
      tagColor: "text-cat-green border-cat-green/40",
      glowClass: "card-glow-green",
      title: "EcoManage",
      description: t('projects.items.ecomanage.desc'),
      tech: ["REACT", "TAILWIND CSS", "NODE.JS", "EXPRESS", "MYSQL", "PHPMYADMIN"],
      link: "/showcase/ecomanage",
      github: "https://github.com/Haris15656/EcoManage",
    },
    {
      tag: t('projects.items.learnable.tag'),
      tagColor: "text-cat-purple border-cat-purple/40",
      glowClass: "card-glow-blue",
      title: "Learnable.ai",
      description: t('projects.items.learnable.desc'),
      tech: ["REACT TYPESCRIPT", "DJANGO NINJA", "LANGCHAIN", "GEMINI AI"],
    },
    {
      tag: t('projects.items.decentra.tag'),
      tagColor: "text-cat-green border-cat-green/40",
      glowClass: "card-glow-green",
      title: "DecentraDomain",
      description: t('projects.items.decentra.desc'),
      tech: ["REACT", "FLASK", "MULTICHAIN", "JSON-RPC"],
      link: "/showcase/decentradomain",
      github: "https://github.com/Haris15656/DecentraDomain",
    },
    {
      tag: t('projects.items.playwright.tag'),
      tagColor: "text-cat-purple border-cat-purple/40",
      glowClass: "card-glow-blue",
      title: "Playwright UI Automation",
      description: t('projects.items.playwright.desc'),
      tech: ["PLAYWRIGHT", "PYTHON", "PYTEST", "POM"],
      link: "/showcase/playwright-ui-automation",
      github: "https://github.com/Haris15656/playwright-ui-automation",
    },
    {
      tag: t('projects.items.api.tag'),
      tagColor: "text-cat-purple border-cat-purple/40",
      glowClass: "card-glow-blue",
      title: "API Testing Framework",
      description: t('projects.items.api.desc'),
      tech: ["PYTHON", "PYTEST", "REQUESTS"],
      link: "/showcase/api-testing-framework",
      github: "https://github.com/Haris15656/api-testing-framework",
    },
    {
      tag: t('projects.items.robot.tag'),
      tagColor: "text-cat-orange border-cat-orange/40",
      glowClass: "card-glow-orange",
      title: "Robot State Testing",
      description: t('projects.items.robot.desc'),
      tech: ["PYTHON", "PYTEST", "STATE MACHINE TESTING"],
      link: "/showcase/robot-state-testing",
      github: "https://github.com/Haris15656/robot-state-testing",
    },
    {
      tag: t('projects.items.movie.tag'),
      tagColor: "text-cat-orange border-cat-orange/40",
      glowClass: "card-glow-orange",
      title: "Movie Recommendation System",
      description: t('projects.items.movie.desc'),
      tech: ["PYTHON", "SCIKIT-LEARN", "PANDAS", "NUMPY", "MATPLOTLIB"],
      github: "https://github.com/Haris15656/Movie-Recommender-System-",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto">
        <p className="section-label mb-3">{t('projects.label')}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('projects.title')}</h2>

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
                        {t('projects.viewApp')}
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {t('projects.viewApp')}
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
                      {t('projects.githubBtn')}
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
