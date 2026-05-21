import profileImg from "@/assets/tkphoto.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex gap-3 mb-8">
            <span className="px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground">
              {t('hero.location')}
            </span>
            <span className="px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground">
              {t('hero.status')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">{t('hero.firstName')}</span>
            <br />
            <span className="text-gradient-accent italic">{t('hero.middleName')}</span>{" "}
            <span className="text-foreground">{t('hero.lastName')}</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="https://github.com/Haris15656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-border rounded-full font-medium text-sm text-foreground hover:bg-secondary transition-colors"
            >
              {t('hero.github')}
            </a>
          </div>

          <div className="flex gap-12">
            <div>
              <span className="text-3xl font-bold text-gradient-accent">10+</span>
              <p className="text-sm text-muted-foreground mt-1">{t('hero.statProjects')}</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-foreground">1</span>
              <p className="text-sm text-muted-foreground mt-1">{t('hero.statInternship')}</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-foreground">2</span>
              <p className="text-sm text-muted-foreground mt-1">{t('hero.statHackathons')}</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-foreground"></span>
              <p className="text-sm text-muted-foreground mt-1"></p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg" style={{ boxShadow: "var(--glow-accent)" }}>
            <img
              src={profileImg}
              alt="Muhammad Haris Noonari"
              className="w-full h-full object-cover"
              width={512}
              height={640}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
