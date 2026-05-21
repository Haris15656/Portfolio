import hackathonImg from "@/assets/Hackathon.jpg";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto">
        <p className="section-label mb-3">{t('experience.label')}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">{t('experience.title')}</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 font-sans">
              {t('experience.expLabel')}
            </h4>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">{t('experience.research.date')}</p>
                <h3 className="text-lg font-bold font-serif">{t('experience.research.role')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('experience.research.company')}
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground border-l-2 border-border pl-4">
                  <li>{t('experience.research.p1')}</li>
                  <li>{t('experience.research.p2')}</li>
                  <li>{t('experience.research.p3')}</li>
                  <li>{t('experience.research.p4')}</li>
                  <li>{t('experience.research.p5')}</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">{t('experience.internship.date')}</p>
                <h3 className="text-lg font-bold font-serif">{t('experience.internship.role')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('experience.internship.company')}
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground border-l-2 border-border pl-4">
                  <li>{t('experience.internship.p1')}</li>
                  <li>{t('experience.internship.p2')}</li>
                  <li>{t('experience.internship.p3')}</li>
                  <li>{t('experience.internship.p4')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 font-sans">
              {t('experience.eduLabel')}
            </h4>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">{t('experience.masters.date')}</p>
                <h3 className="text-lg font-bold font-serif">{t('experience.masters.degree')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('experience.masters.school')}
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-xs text-muted-foreground mb-1">{t('experience.bachelors.date')}</p>
                <h3 className="text-lg font-bold font-serif">{t('experience.bachelors.degree')}</h3>
                <p className="text-sm text-muted-foreground">{t('experience.bachelors.school')}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('experience.bachelors.grades')}
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-4 font-sans">
                {t('experience.awardsLabel')}
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
                <li>{t('experience.awards.a1')}</li>
                <li>{t('experience.awards.a2')}</li>
                <li>{t('experience.awards.a3')}</li>
                <li>{t('experience.awards.a4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
