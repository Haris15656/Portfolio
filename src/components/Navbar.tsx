import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-serif text-xl font-bold text-foreground">
          MH.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                active === link.label
                  ? "text-foreground underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1 rounded-full border border-border overflow-hidden">
          <button className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
            EN
          </button>
          <button className="px-3 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground">
            DE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
