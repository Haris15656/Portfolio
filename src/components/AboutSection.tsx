import kolnImg from "@/assets/kolndom.jpg";
import luxembourgImg from "@/assets/luxembourg.jpeg";
import hackathonImg from "@/assets/Hackathon.jpg";
import hackathon2Img from "@/assets/hacakathon2.jpg";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('about.categories.frontend'),
      skills: ["REACTJS", "REACT NATIVE", "TYPESCRIPT", "TAILWIND", "BOOTSTRAP", "HTML/CSS"],
    },
    {
      title: t('about.categories.backend'),
      skills: ["NODEJS", "EXPRESSJS", "DJANGO", "DJANGO NINJA", "RESTFUL API"],
    },
    {
      title: t('about.categories.ai'),
      skills: ["PYTHON", "SCIKIT-LEARN", "OPENCV", "MEDIAPIPE", "LANGCHAIN", "LLAMA 3.1"],
    },
    {
      title: t('about.categories.db'),
      skills: ["MYSQL", "MONGODB", "SQLITE", "SQL"],
    },
    {
      title: t('about.categories.qa'),
      skills: ["PLAYWRIGHT", "PYTEST", "PAGE OBJECT MODEL", "API TESTING", "STATE MACHINE TESTING", "PYTEST-HTML"],
    },
    {
      title: t('about.categories.tools'),
      skills: ["GIT", "GITHUB", "FIGMA", "POSTMAN", "JIRA", "CONFLUENCE"],
    },
  ];

  const photos = [
    { src: kolnImg, label: t('about.photos.koln') },
    { src: luxembourgImg, label: t('about.photos.luxembourg') },
    { src: hackathonImg, label: t('about.photos.hackathon') },
    { src: hackathon2Img, label: t('about.photos.hackathon2') },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto">
        <p className="section-label mb-3">{t('about.label')}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('about.title')}</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('about.p2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('about.p3')}
            </p>

            <div className="flex gap-3 mb-8">
              <span className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
                {t('about.c1')}
              </span>
              <span className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
                {t('about.a2')}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {photos.map((photo) => (
                <div key={photo.label} className="relative rounded-lg overflow-hidden aspect-square group">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-2">
                    <span className="text-xs font-semibold text-foreground">{photo.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="border-b border-border pb-4">
                <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-3 font-sans">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
