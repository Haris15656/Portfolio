import hackathonImg from "@/assets/hackathon.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto">
        <p className="section-label mb-3">JOURNEY</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 font-sans">
              EXPERIENCE
            </h4>
            <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
              <p className="text-xs text-muted-foreground mb-1">JUN 2024 — SEP 2024</p>
              <h3 className="text-lg font-bold font-serif">Software Development Intern</h3>
              <p className="text-sm text-muted-foreground mb-4">
                People's Primary Healthcare Initiative Sindh · Karachi
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground border-l-2 border-border pl-4">
                <li>
                  Collaborated in an Agile/Scrum team with daily standups, sprint
                  planning, and iterative delivery cycles
                </li>
                <li>
                  Built React.js frontend prototypes for the Health Informatics &
                  Management System (HIMS)
                </li>
                <li>
                  Enhanced UI responsiveness and visual appeal for a large-scale
                  healthcare data platform
                </li>
                <li>
                  Maintained and optimized database systems in a .NET backend
                  environment
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 font-sans">
              EDUCATION
            </h4>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">OCT 2025 — EXPECTED 2027</p>
                <h3 className="text-lg font-bold font-serif">M.S. Web and Data Science</h3>
                <p className="text-sm text-muted-foreground">
                  Universität Koblenz · Koblenz, Germany
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">AUG 2021 — JUN 2025</p>
                <h3 className="text-lg font-bold font-serif">B.S. Computer Science</h3>
                <p className="text-sm text-muted-foreground">FAST NUCES · Karachi, Pakistan</p>
                <p className="text-xs text-muted-foreground mt-1">
                  CGPA: 3.26 / 4.0 · German Grade: 2.1 · Dean's List Fall 2024, Spring 2025
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-4 font-sans">
                AWARDS
              </h4>
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={hackathonImg}
                  alt="Hackathon event"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width={1024}
                  height={576}
                />
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                <li>UrbanCircular Hackathon 2025 — Frankfurt University of Applied Sciences - Pitched an Environment Sustainability Platform to a diverse 100+ competitors and jury</li>
                <li>Dean's List of Honours — FAST NUCES, Fall 2024 & Spring 2025</li>
                <li>MLH Hackbattle 2024 Participant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
