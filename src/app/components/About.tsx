import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gem } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import craftsmanshipImage from "figma:asset/65354b91389dd44f78acb28890476634a11e7cb2.png";

export function About() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block mb-6">
              <h2 className="text-black px-4 py-2 border border-[#071E20]/20 rounded-full inline-block text-sm tracking-wide">{t.footer.companyLinks.about}</h2>
            </div>
            <h1 className="mb-8 text-black text-2xl sm:text-3xl md:text-4xl">{t.about.title}</h1>
            <div className="space-y-6 text-gray-700">
              <p className="text-base sm:text-lg md:text-[20px]">{t.about.description}</p>
            </div>

            {/* Credentials */}
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <Gem className="w-6 h-6 text-[#D9A441] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-black mb-1">{t.about.certified}</h3>
                  <p className="text-gray-600">Advanced Stone Setting Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] lg:h-[700px]">
            <ImageWithFallback
              src={craftsmanshipImage}
              alt="Precision jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}