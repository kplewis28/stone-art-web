import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import Group93 from "../imports/Group93";
import { SwissFlag } from "./SwissFlag";

export function ContactCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="py-12 bg-[#071E20] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 mb-10">
          {/* Left: Logo + Contact Info */}
          <div className="space-y-6">
            <div className="w-[160px] h-[35px] overflow-hidden relative">
              <div className="absolute scale-[0.17] origin-top-left">
                <Group93 />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              {t.footer.description}
            </p>
            
            {/* Contact Info Inline */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              <a href="mailto:info@stoneartprecision.com" className="flex items-center gap-2 text-gray-400 hover:text-[#D9A441] transition-colors text-sm group">
                <Mail className="w-4 h-4 text-[#D9A441]" />
                <span>info@stoneartprecision.com</span>
              </a>
              <a href="tel:+41788397323" className="flex items-center gap-2 text-gray-400 hover:text-[#D9A441] transition-colors text-sm group">
                <Phone className="w-4 h-4 text-[#D9A441]" />
                <span>+41 78 839 7323</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D9A441]" />
                <span>{t.contact.info.locationValue}</span>
              </div>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col justify-start">
            <h4 className="text-white mb-4 text-sm uppercase tracking-[2px]">{t.footer.followUs}</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D9A441] hover:bg-[#D9A441]/10 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#D9A441] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-gray-500 text-xs">
            <p>{t.footer.copyright}</p>
            <p className="flex items-center gap-2">
              {t.footer.craftedSimple}
              <span className="inline-flex items-center justify-center w-4 h-4">
                <SwissFlag />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}