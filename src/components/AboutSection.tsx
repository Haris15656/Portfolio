import kolnImg from "@/assets/kolndom.jpg";
import luxembourgImg from "@/assets/luxembourg.jpeg";
import hackathonImg from "@/assets/Hackathon.jpg";
import hackathon2Img from "@/assets/hacakathon2.jpg";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: ["REACTJS", "REACT NATIVE", "TYPESCRIPT", "TAILWIND", "BOOTSTRAP", "HTML/CSS"],
  },
  {
    title: "BACKEND",
    skills: ["NODEJS", "EXPRESSJS", "DJANGO", "DJANGO NINJA", "RESTFUL API"],
  },
  {
    title: "AI & DATA",
    skills: ["PYTHON", "SCIKIT-LEARN", "OPENCV", "MEDIAPIPE", "LANGCHAIN", "LLAMA 3.1"],
  },
  {
    title: "DATABASES",
    skills: ["MYSQL", "MONGODB", "SQLITE", "SQL"],
  },
  {
    title: "QA & AUTOMATION",
    skills: ["PLAYWRIGHT", "PYTEST", "PAGE OBJECT MODEL", "API TESTING", "STATE MACHINE TESTING", "PYTEST-HTML"],
  },
  {
    title: "TOOLS",
    skills: ["GIT", "GITHUB", "FIGMA", "POSTMAN", "JIRA", "CONFLUENCE"],
  },
];

const photos = [
  { src: kolnImg, label: "KÖLN DOM" },
  { src: luxembourgImg, label: "LUXEMBOURG" },
  { src: hackathonImg, label: "HACKATHON" },
  { src: hackathon2Img, label: "HACKATHON 2" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto">
        <p className="section-label mb-3">ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Background</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a full-stack developer with a passion for building AI-powered
              products. From healthcare platforms to blockchain apps, I love
              tackling problems that require both technical depth and clean design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently deepening my expertise in Web & Data Science at
              Universität Koblenz, while exploring opportunities in
              QA automation and engineering roles across Germany.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Recently exploring QA automation as I believe that
              complex systems are only as good as their reliability.
            </p>

            <div className="flex gap-3 mb-8">
              <span className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
                C1 ENGLISH
              </span>
              <span className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
                A2 DEUTSCH
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
