import { useState } from "react";
import { useTranslation } from "react-i18next";

const navLinks = [
  { labelKey: "nav.home", href: "#home" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.projects", href: "#projects" },
  { labelKey: "nav.experience", href: "#experience" },
  { labelKey: "nav.contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("nav.home");
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-serif text-xl font-bold text-foreground">
          MH.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              onClick={() => setActive(link.labelKey)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                active === link.labelKey
                  ? "text-foreground underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1 rounded-full border border-border overflow-hidden">
          <button 
            onClick={() => i18n.changeLanguage('en')}
            className={`px-3 py-1 text-xs font-semibold ${i18n.language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
          >
            EN
          </button>
          <button 
            onClick={() => i18n.changeLanguage('de')}
            className={`px-3 py-1 text-xs font-semibold ${i18n.language === 'de' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
          >
            DE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
