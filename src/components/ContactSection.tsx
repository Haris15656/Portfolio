import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("m.haris1557@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto text-center">
        <p className="section-label mb-3">{t('contact.label')}</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-2">
          {t('contact.title1')}
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gradient-accent italic">{t('contact.title2Focus')}</span>{t('contact.title2End')}
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          {t('contact.description')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {copied ? t('contact.copied') : "m.haris1557@gmail.com"} 📋
          </button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border rounded-full font-medium text-sm text-foreground hover:bg-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border rounded-full font-medium text-sm text-foreground hover:bg-secondary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
