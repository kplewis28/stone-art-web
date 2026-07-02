import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Group93 from "../imports/Group93";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.design, id: "design" },
    { label: t.nav.workflow, id: "workflow" },
    { label: t.nav.gallery, id: "gallery" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#071E20] shadow-md" : "bg-[#071E20]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-80 transition-opacity"
          >
            <div className="w-[160px] h-[35px] overflow-hidden relative">
              <div className="absolute scale-[0.17] origin-top-left">
                <Group93 />
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/90 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-white/70" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'en' ? 'text-amber-400' : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1 rounded transition-colors ${
                  language === 'de' ? 'text-amber-400' : 'text-white/70 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/90 hover:text-amber-400 transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-3 w-fit">
                <Globe className="w-4 h-4 text-white/70" />
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded transition-colors ${
                    language === 'en' ? 'text-amber-400' : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <span className="text-white/30">|</span>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-2 py-1 rounded transition-colors ${
                    language === 'de' ? 'text-amber-400' : 'text-white/70 hover:text-white'
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}